package com.hrms.hrms_security_system.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "employees")

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String firstName;

    private String lastName;

    @Column(unique = true)
    private String email;

    private String department;

    private String role;

    private Double salary;

    private String profileImage;
}