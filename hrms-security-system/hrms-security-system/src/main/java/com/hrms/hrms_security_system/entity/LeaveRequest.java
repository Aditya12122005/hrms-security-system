package com.hrms.hrms_security_system.entity;

import jakarta.persistence.*;

import lombok.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table(name = "leave_requests")

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class LeaveRequest {

    @Id
    @GeneratedValue(
            strategy =
                    GenerationType.IDENTITY
    )

    private Long id;

    // EMPLOYEE RELATIONSHIP

    @ManyToOne

    @JoinColumn(name = "employee_id")

    private Employee employee;

    // LEAVE DATES

    private LocalDate startDate;

    private LocalDate endDate;

    // LEAVE REASON

    @Column(length = 1000)

    private String reason;

    // STATUS

    private String status;

    // APPLIED DATE

    private LocalDateTime appliedAt;
}