package com.hrms.hrms_security_system.repository;

import com.hrms.hrms_security_system.entity.Attendance;

import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;

import java.util.List;

public interface AttendanceRepository
        extends JpaRepository<Attendance, Long> {

    // GET ATTENDANCE BY DATE

    List<Attendance> findByDate(
            LocalDate date
    );

    // GET ATTENDANCE BY EMPLOYEE

    List<Attendance> findByEmployeeId(
            Long employeeId
    );
}