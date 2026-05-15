package com.hrms.hrms_security_system.controller;

import com.hrms.hrms_security_system.dto.RegisterRequest;
import com.hrms.hrms_security_system.service.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }
}