package com.hrms.hrms_security_system.service;

import com.hrms.hrms_security_system.dto.AuthResponse;
import com.hrms.hrms_security_system.dto.LoginRequest;
import com.hrms.hrms_security_system.dto.RegisterRequest;

import com.hrms.hrms_security_system.entity.Role;
import com.hrms.hrms_security_system.entity.User;

import com.hrms.hrms_security_system.repository.UserRepository;

import com.hrms.hrms_security_system.util.JwtUtil;

import lombok.RequiredArgsConstructor;

import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor

public class AuthService {

    private final UserRepository
            userRepository;

    private final PasswordEncoder
            passwordEncoder;

    private final JwtUtil
            jwtUtil;

    // REGISTER USER

    public String register(

            RegisterRequest request

    ) {

        // CHECK EMAIL EXISTS

        if (userRepository.existsByEmail(

                request.getEmail()
        )) {

            return "Email already exists";
        }

        // CHECK USERNAME EXISTS

        if (userRepository.existsByUsername(

                request.getUsername()
        )) {

            return "Username already exists";
        }

        // CREATE USER

        User user =

                User.builder()

                        .username(
                                request.getUsername()
                        )

                        .email(
                                request.getEmail()
                        )

                        .password(

                                passwordEncoder.encode(
                                        request.getPassword()
                                )
                        )

                        .role(
                                Role.EMPLOYEE
                        )

                        .build();

        userRepository.save(user);

        return "User registered successfully";
    }

    // LOGIN USER

    public AuthResponse login(

            LoginRequest request

    ) {

        User user =

                userRepository

                        .findByUsername(
                                request.getUsername()
                        )

                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Invalid username"
                                )
                        );

        // CHECK PASSWORD

        if (!passwordEncoder.matches(

                request.getPassword(),

                user.getPassword()
        )) {

            throw new RuntimeException(
                    "Invalid password"
            );
        }

        // GENERATE JWT TOKEN USING EMAIL

        String token =

                jwtUtil.generateToken(
                        user.getEmail()
                );

        return new AuthResponse(

                "Login successful",

                token,

                user.getRole().name()
        );
    }
}