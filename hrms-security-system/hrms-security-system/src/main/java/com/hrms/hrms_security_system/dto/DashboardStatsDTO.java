package com.hrms.hrms_security_system.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class DashboardStatsDTO {

    private Long totalEmployees;

    private Long totalDepartments;

    private Double totalPayroll;

    private Double averageSalary;
}