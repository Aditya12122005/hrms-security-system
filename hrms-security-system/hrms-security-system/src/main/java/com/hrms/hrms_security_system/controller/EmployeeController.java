package com.hrms.hrms_security_system.controller;

import com.hrms.hrms_security_system.dto.DashboardStatsDTO;
import com.hrms.hrms_security_system.entity.Employee;
import com.hrms.hrms_security_system.service.EmployeeService;
import com.hrms.hrms_security_system.dto.DepartmentStatsDTO;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor

@CrossOrigin(origins = "http://localhost:5173")

public class EmployeeController {

    private final EmployeeService employeeService;

    // CREATE EMPLOYEE

    @PostMapping

    public Employee createEmployee(

            @RequestBody Employee employee
    ) {

        return employeeService.createEmployee(employee);
    }

    // GET ALL EMPLOYEES

    @GetMapping

    public List<Employee> getAllEmployees() {

        return employeeService.getAllEmployees();
    }

    // DELETE EMPLOYEE

    @DeleteMapping("/{id}")

    public void deleteEmployee(

            @PathVariable Long id
    ) {

        employeeService.deleteEmployee(id);
    }

    // UPDATE EMPLOYEE

    @PutMapping("/{id}")

    public ResponseEntity<Employee> updateEmployee(

            @PathVariable Long id,

            @RequestBody Employee employee
    ) {

        return ResponseEntity.ok(

                employeeService.updateEmployee(
                        id,
                        employee
                )
        );
    }

    // DASHBOARD STATS

    @GetMapping("/dashboard-stats")

    public ResponseEntity<DashboardStatsDTO>
    getDashboardStats() {

        return ResponseEntity.ok(

                employeeService.getDashboardStats()
        );
    }
    @GetMapping("/department-stats")

    public ResponseEntity<List<DepartmentStatsDTO>>
    getDepartmentStats() {

        return ResponseEntity.ok(

                employeeService.getDepartmentStats()
        );
    }
}