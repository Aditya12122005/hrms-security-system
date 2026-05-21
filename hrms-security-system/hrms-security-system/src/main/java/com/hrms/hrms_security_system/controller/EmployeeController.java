package com.hrms.hrms_security_system.controller;

import com.hrms.hrms_security_system.dto.DashboardStatsDTO;

import com.hrms.hrms_security_system.entity.Employee;

import com.hrms.hrms_security_system.service.EmployeeService;

import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.*;

import java.util.List;

import java.util.Map;

@RestController
@RequestMapping("/api/employees")
@RequiredArgsConstructor

@CrossOrigin(
        origins = "http://localhost:5173"
)

public class EmployeeController {

    private final EmployeeService
            employeeService;

    @PostMapping

    public ResponseEntity<Employee>
    createEmployee(

            @RequestBody Employee employee

    ) {

        return ResponseEntity.ok(

                employeeService
                        .createEmployee(employee)
        );
    }

    @GetMapping

    public ResponseEntity<List<Employee>>
    getAllEmployees() {

        return ResponseEntity.ok(

                employeeService
                        .getAllEmployees()
        );
    }

    @GetMapping("/{id}")

    public ResponseEntity<Employee>
    getEmployeeById(

            @PathVariable Long id

    ) {

        return ResponseEntity.ok(

                employeeService
                        .getEmployeeById(id)
        );
    }

    @PutMapping("/{id}")

    public ResponseEntity<Employee>
    updateEmployee(

            @PathVariable Long id,

            @RequestBody Employee employee

    ) {

        return ResponseEntity.ok(

                employeeService
                        .updateEmployee(
                                id,
                                employee
                        )
        );
    }

    @DeleteMapping("/{id}")

    public ResponseEntity<String>
    deleteEmployee(

            @PathVariable Long id

    ) {

        employeeService
                .deleteEmployee(id);

        return ResponseEntity.ok(
                "Employee deleted successfully"
        );
    }

    @GetMapping("/me")

    public ResponseEntity<Employee>
    getCurrentEmployee() {

        return ResponseEntity.ok(

                employeeService
                        .getCurrentEmployee()
        );
    }

    @GetMapping("/dashboard-stats")

    public ResponseEntity<DashboardStatsDTO>
    getDashboardStats() {

        return ResponseEntity.ok(

                employeeService
                        .getDashboardStats()
        );
    }

    @GetMapping("/department-stats")

    public ResponseEntity<Map<String, Long>>
    getDepartmentStats() {

        return ResponseEntity.ok(

                (Map<String, Long>) employeeService
                        .getDepartmentStats()
        );
    }
}