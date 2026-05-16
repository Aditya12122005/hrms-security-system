package com.hrms.hrms_security_system.controller;

import com.hrms.hrms_security_system.entity.Employee;
import com.hrms.hrms_security_system.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor

@CrossOrigin(origins = "http://localhost:5173")

public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping
    public Employee createEmployee(
            @RequestBody Employee employee
    ) {

        return employeeService.createEmployee(employee);
    }

    @GetMapping
    public List<Employee> getAllEmployees() {

        return employeeService.getAllEmployees();
    }
    @DeleteMapping("/{id}")

    public void deleteEmployee(
            @PathVariable Long id
    ) {

        employeeService.deleteEmployee(id);
    }

}