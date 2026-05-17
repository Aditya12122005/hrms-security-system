package com.hrms.hrms_security_system.repository;

import com.hrms.hrms_security_system.dto.DepartmentStatsDTO;
import com.hrms.hrms_security_system.entity.Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface EmployeeRepository
        extends JpaRepository<Employee, Long> {

    long countDistinctByDepartmentIsNotNull();

    @Query("SELECT SUM(e.salary) FROM Employee e")
    Double getTotalPayroll();

    @Query("SELECT AVG(e.salary) FROM Employee e")
    Double getAverageSalary();

    @Query("""

    SELECT new com.hrms.hrms_security_system.dto.DepartmentStatsDTO(

        e.department,

        COUNT(e)

    )

    FROM Employee e

    GROUP BY e.department

    """)

    List<DepartmentStatsDTO> getDepartmentStats();
}