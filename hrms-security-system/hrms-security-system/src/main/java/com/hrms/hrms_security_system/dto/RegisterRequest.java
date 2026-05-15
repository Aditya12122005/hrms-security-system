package com.hrms.hrms_security_system.dto;

import com.hrms.hrms_security_system.entity.Role;
import lombok.Data;

@Data
public class RegisterRequest {

    private String firstName;

    private String lastName;

    private String email;

    private String username;

    private String password;

    private Role role;
}