package com.hrms.hrms_security_system.dto;

import lombok.Data;

@Data

public class VerifyOtpRequest {

    private String email;

    private String otp;
}