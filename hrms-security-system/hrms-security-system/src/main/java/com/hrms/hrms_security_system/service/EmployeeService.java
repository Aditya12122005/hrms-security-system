package com.hrms.hrms_security_system.service;

import com.hrms.hrms_security_system.dto.DashboardStatsDTO;
import com.hrms.hrms_security_system.entity.Employee;
import com.hrms.hrms_security_system.repository.EmployeeRepository;
import com.hrms.hrms_security_system.dto.DepartmentStatsDTO;
import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    // CREATE EMPLOYEE

    public Employee createEmployee(Employee employee) {

        return employeeRepository.save(employee);
    }

    // GET ALL EMPLOYEES

    public List<Employee> getAllEmployees() {

        return employeeRepository.findAll();
    }

    // DELETE EMPLOYEE

    public void deleteEmployee(Long id) {

        employeeRepository.deleteById(id);
    }

    // UPDATE EMPLOYEE

    public Employee updateEmployee(

            Long id,

            Employee updatedEmployee
    ) {

        Employee employee = employeeRepository
                .findById(id)
                .orElseThrow(() ->

                        new RuntimeException(
                                "Employee not found"
                        )
                );

        employee.setFirstName(
                updatedEmployee.getFirstName()
        );

        employee.setLastName(
                updatedEmployee.getLastName()
        );

        employee.setEmail(
                updatedEmployee.getEmail()
        );

        employee.setDepartment(
                updatedEmployee.getDepartment()
        );

        employee.setRole(
                updatedEmployee.getRole()
        );

        employee.setSalary(
                updatedEmployee.getSalary()
        );

        return employeeRepository.save(employee);
    }

    // DASHBOARD ANALYTICS

    public DashboardStatsDTO getDashboardStats() {

        Long totalEmployees =
                employeeRepository.count();

        Long totalDepartments =
                employeeRepository
                        .countDistinctByDepartmentIsNotNull();

        Double totalPayroll =
                employeeRepository.getTotalPayroll();

        Double averageSalary =
                employeeRepository.getAverageSalary();

        return new DashboardStatsDTO(

                totalEmployees,

                totalDepartments,

                totalPayroll,

                averageSalary
        );
    }
    public List<DepartmentStatsDTO>
    getDepartmentStats() {

        return employeeRepository
                .getDepartmentStats();
    }
}