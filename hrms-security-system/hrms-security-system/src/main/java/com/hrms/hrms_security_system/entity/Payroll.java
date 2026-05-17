package com.hrms.hrms_security_system.entity;

import jakarta.persistence.*;

import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "payroll")

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder

public class Payroll {

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

    // SALARY DETAILS

    private Double baseSalary;

    private Double bonus;

    private Double deduction;

    private Double netSalary;

    // PAY DATE

    private LocalDate payDate;

    // STATUS

    private String status;
}