package com.hrms.hrms_security_system.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {

    @GetMapping("/api/employees")
    public String getEmployees() {

        return "Protected Employee Data Accessed Successfully";
    }
}