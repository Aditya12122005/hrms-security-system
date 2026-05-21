package com.hrms.hrms_security_system.entity;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "otp_verifications")

@Data
@Builder

@NoArgsConstructor
@AllArgsConstructor

public class OtpVerification {

    @Id

    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )

    private Long id;

    private String email;

    private String otp;

    private LocalDateTime expiryTime;
}