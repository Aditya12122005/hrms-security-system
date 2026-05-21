package com.hrms.hrms_security_system.service;

import com.hrms.hrms_security_system.dto.DashboardStatsDTO;
import com.hrms.hrms_security_system.dto.DepartmentStatsDTO;
import com.hrms.hrms_security_system.entity.Employee;
import com.hrms.hrms_security_system.repository.EmployeeRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    // GET ALL EMPLOYEES

    public List<Employee> getAllEmployees() {

        return employeeRepository.findAll();
    }

    // GET EMPLOYEE BY ID

    public Employee getEmployeeById(Long id) {

        return employeeRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found")
                );
    }

    // CREATE EMPLOYEE

    public Employee createEmployee(Employee employee) {

        return employeeRepository.save(employee);
    }

    // UPDATE EMPLOYEE

    public Employee updateEmployee(
            Long id,
            Employee updatedEmployee
    ) {

        Employee employee = employeeRepository
                .findById(id)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found")
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

    // DELETE EMPLOYEE

    public void deleteEmployee(Long id) {

        employeeRepository.deleteById(id);
    }

    // CURRENT LOGGED-IN EMPLOYEE

    public Employee getCurrentEmployee() {

        String email = SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getName();

        return employeeRepository
                .findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Employee not found")
                );
    }

    // DASHBOARD STATS

    public DashboardStatsDTO getDashboardStats() {

        List<Employee> employees =
                employeeRepository.findAll();

        Long totalEmployees =
                (long) employees.size();

        Long totalDepartments = employees.stream()

                .map(Employee::getDepartment)

                .filter(Objects::nonNull)

                .distinct()

                .count();

        Double totalSalary = employees.stream()

                .map(Employee::getSalary)

                .filter(Objects::nonNull)

                .mapToDouble(Double::doubleValue)

                .sum();

        Double averageSalary = totalEmployees > 0

                ? totalSalary / totalEmployees

                : 0.0;

        return new DashboardStatsDTO(

                totalEmployees,

                totalDepartments,

                totalSalary,

                averageSalary
        );
    }

    // DEPARTMENT STATS

    public List<DepartmentStatsDTO> getDepartmentStats() {

        List<Employee> employees =
                employeeRepository.findAll();

        Map<String, Long> departmentMap = employees.stream()

                .filter(employee ->
                        employee.getDepartment() != null
                )

                .collect(

                        Collectors.groupingBy(

                                Employee::getDepartment,

                                Collectors.counting()
                        )
                );

        return departmentMap.entrySet()

                .stream()

                .map(entry ->

                        new DepartmentStatsDTO(

                                entry.getKey(),

                                entry.getValue()
                        )
                )

                .toList();
    }
}