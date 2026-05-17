package com.hrms.hrms_security_system.controller;

import com.hrms.hrms_security_system.dto.AuthResponse;
import com.hrms.hrms_security_system.dto.LoginRequest;
import com.hrms.hrms_security_system.dto.RegisterRequest;

import com.hrms.hrms_security_system.service.AuthService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor

@CrossOrigin(origins = "http://localhost:5173")

public class AuthController {

    private final AuthService authService;

    // REGISTER

    @PostMapping("/register")

    public String register(

            @RequestBody RegisterRequest request
    ) {

        return authService.register(request);
    }

    // LOGIN

    @PostMapping("/login")

    public AuthResponse login(

            @RequestBody LoginRequest request
    ) {

        return authService.login(request);
    }
}