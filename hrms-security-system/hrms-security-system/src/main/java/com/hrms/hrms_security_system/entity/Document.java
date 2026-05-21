package com.hrms.hrms_security_system.entity;

import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "documents")

@Data
@Builder

@NoArgsConstructor
@AllArgsConstructor

public class Document {

    @Id

    @GeneratedValue(
            strategy = GenerationType.IDENTITY
    )

    private Long id;

    private String fileName;

    private String fileType;

    private String filePath;

    // RELATION WITH EMPLOYEE

    @ManyToOne

    @JoinColumn(name = "employee_id")

    private Employee employee;
}