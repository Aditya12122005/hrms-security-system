package com.hrms.hrms_security_system.service;

import com.hrms.hrms_security_system.entity.OtpVerification;

import com.hrms.hrms_security_system.repository.OtpVerificationRepository;

import com.hrms.hrms_security_system.entity.User;

import com.hrms.hrms_security_system.repository.UserRepository;

import org.springframework.security.crypto.password.PasswordEncoder;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import java.util.Random;

@Service
@RequiredArgsConstructor

public class OtpService {

    private final UserRepository
            userRepository;

    private final PasswordEncoder
            passwordEncoder;

    private final OtpVerificationRepository
            otpRepository;

    private final EmailService
            emailService;

    // GENERATE OTP

    public String generateOtp() {

        Random random = new Random();

        int otp =
                100000 + random.nextInt(900000);

        return String.valueOf(otp);
    }

    // SEND OTP

    public String sendOtp(
            String email
    ) {

        String otp = generateOtp();

        OtpVerification otpVerification =

                otpRepository
                        .findByEmail(email)

                        .orElse(

                                new OtpVerification()
                        );

        otpVerification.setEmail(email);

        otpVerification.setOtp(otp);

        otpVerification.setExpiryTime(

                LocalDateTime.now()
                        .plusMinutes(5)
        );

        otpRepository.save(
                otpVerification
        );

        // SEND EMAIL

        emailService.sendEmail(

                email,

                "Password Reset OTP",

                "Your OTP is: " + otp
        );

        return "OTP sent successfully";
    }

    // VERIFY OTP

    public boolean verifyOtp(

            String email,

            String otp
    ) {

        OtpVerification otpVerification =

                otpRepository
                        .findByEmail(email)

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "OTP not found"
                                )
                        );

        return otpVerification.getOtp()
                .equals(otp)

                &&

                otpVerification
                        .getExpiryTime()
                        .isAfter(
                                LocalDateTime.now()
                        );
    }
    public String resetPassword(

            String email,

            String newPassword
    ) {

        User user =

                userRepository
                        .findByEmail(email)

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "User not found"
                                )
                        );

        user.setPassword(

                passwordEncoder.encode(
                        newPassword
                )
        );

        userRepository.save(user);

        return "Password reset successful";
    }
}