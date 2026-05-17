package com.hrms.hrms_security_system.entity;

import jakarta.persistence.*;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "attendance")

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Attendance {

    @Id
    @GeneratedValue(strategy =
            GenerationType.IDENTITY)

    private Long id;

    // EMPLOYEE RELATIONSHIP

    @ManyToOne

    @JoinColumn(name = "employee_id")

    private Employee employee;

    // CHECK-IN TIME

    private LocalDateTime checkIn;

    // CHECK-OUT TIME

    private LocalDateTime checkOut;

    // ATTENDANCE DATE

    private LocalDate date;

    // STATUS

    private String status;
}