package com.hrms.hrms_security_system.repository;

import com.hrms.hrms_security_system.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository
        extends JpaRepository<Employee, Long> {
}