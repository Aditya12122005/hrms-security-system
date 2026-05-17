package com.hrms.hrms_security_system.service;

import com.hrms.hrms_security_system.dto.AuthResponse;
import com.hrms.hrms_security_system.dto.LoginRequest;
import com.hrms.hrms_security_system.dto.RegisterRequest;

import com.hrms.hrms_security_system.entity.User;

import com.hrms.hrms_security_system.repository.UserRepository;

import com.hrms.hrms_security_system.util.JwtUtil;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class AuthService {

    private final UserRepository userRepository;

    private final BCryptPasswordEncoder passwordEncoder;

    private final JwtUtil jwtUtil;

    // REGISTER USER

    public String register(RegisterRequest request) {

        if (userRepository.existsByEmail(
                request.getEmail()
        )) {

            return "Email already exists";
        }

        if (userRepository.existsByUsername(
                request.getUsername()
        )) {

            return "Username already exists";
        }

        User user = User.builder()

                .firstName(request.getFirstName())

                .lastName(request.getLastName())

                .email(request.getEmail())

                .username(request.getUsername())

                .password(
                        passwordEncoder.encode(
                                request.getPassword()
                        )
                )

                .role(request.getRole())

                .build();

        userRepository.save(user);

        return "User Registered Successfully";
    }

    // LOGIN USER

    public AuthResponse login(
            LoginRequest request
    ) {

        User user = userRepository
                .findByUsername(
                        request.getUsername()
                )
                .orElseThrow(() ->

                        new RuntimeException(
                                "Invalid username or password"
                        )
                );

        if (!passwordEncoder.matches(

                request.getPassword(),

                user.getPassword()
        )) {

            throw new RuntimeException(
                    "Invalid username or password"
            );
        }

        String token = jwtUtil.generateToken(
                user.getUsername()
        );

        return new AuthResponse(

                "Login successful",

                token,

                user.getRole().name()
        );
    }
}