package com.hrms.hrms_security_system.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor

public class DepartmentStatsDTO {

    private String department;

    private Long employees;
}