package com.hrms.hrms_security_system.service;

import com.hrms.hrms_security_system.entity.Employee;
import com.hrms.hrms_security_system.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor

public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public Employee createEmployee(Employee employee) {

        return employeeRepository.save(employee);
    }

    public List<Employee> getAllEmployees() {

        return employeeRepository.findAll();
    }
    public void deleteEmployee(Long id) {

        employeeRepository.deleteById(id);
    }
}