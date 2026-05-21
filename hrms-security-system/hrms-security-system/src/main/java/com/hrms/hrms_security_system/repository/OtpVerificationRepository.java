package com.hrms.hrms_security_system.repository;

import com.hrms.hrms_security_system.entity.OtpVerification;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface OtpVerificationRepository

        extends JpaRepository<
        OtpVerification,
        Long
        > {

    Optional<OtpVerification>

    findByEmail(String email);
}