package com.hrms.hrms_security_system.dto;

import lombok.Data;

@Data

public class ResetPasswordRequest {

    private String email;

    private String newPassword;
}