package com.hrms.hrms_security_system.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HealthController {

    @GetMapping("/")
    public String healthCheck() {
        return "HRMS Security System Running Successfully 🚀";
    }
}