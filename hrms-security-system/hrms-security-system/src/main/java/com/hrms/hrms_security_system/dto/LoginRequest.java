package com.hrms.hrms_security_system.dto;

import lombok.Data;

@Data
public class LoginRequest {

    private String username;

    private String password;
}