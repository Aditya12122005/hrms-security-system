package com.hrms.hrms_security_system.repository;

import com.hrms.hrms_security_system.entity.Document;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DocumentRepository

        extends JpaRepository<
        Document,
        Long
        > {

    List<Document>

    findByEmployeeId(Long employeeId);
}