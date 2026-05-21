package com.hrms.hrms_security_system.controller;

import com.hrms.hrms_security_system.dto.SendOtpRequest;

import com.hrms.hrms_security_system.dto.VerifyOtpRequest;

import com.hrms.hrms_security_system.service.OtpService;
import com.hrms.hrms_security_system.dto.ResetPasswordRequest;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController

@RequestMapping("/api/otp")

@RequiredArgsConstructor

@CrossOrigin(origins =
        "http://localhost:5173")

public class OtpController {

    private final OtpService
            otpService;

    // SEND OTP

    @PostMapping("/send")

    public String sendOtp(

            @RequestBody
            SendOtpRequest request
    ) {

        return otpService.sendOtp(
                request.getEmail()
        );
    }

    // VERIFY OTP

    @PostMapping("/verify")

    public String verifyOtp(

            @RequestBody
            VerifyOtpRequest request
    ) {

        boolean isValid =

                otpService.verifyOtp(

                        request.getEmail(),

                        request.getOtp()
                );

        if (isValid) {

            return "OTP verified successfully";
        }

        return "Invalid or expired OTP";
    }
    @PostMapping("/reset-password")

    public String resetPassword(

            @RequestBody
            ResetPasswordRequest request
    ) {

        return otpService.resetPassword(

                request.getEmail(),

                request.getNewPassword()
        );
    }
}