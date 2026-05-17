package com.hrms.hrms_security_system.service;

import com.hrms.hrms_security_system.entity.Attendance;

import com.hrms.hrms_security_system.entity.Employee;

import com.hrms.hrms_security_system.repository.AttendanceRepository;

import com.hrms.hrms_security_system.repository.EmployeeRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;

import java.util.List;

@Service
@RequiredArgsConstructor

public class AttendanceService {

    private final AttendanceRepository
            attendanceRepository;

    private final EmployeeRepository
            employeeRepository;

    // CHECK-IN

    public Attendance checkIn(
            Long employeeId
    ) {

        Employee employee =
                employeeRepository
                        .findById(employeeId)
                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Employee not found"
                                )
                        );

        Attendance attendance =
                Attendance.builder()

                        .employee(employee)

                        .checkIn(
                                LocalDateTime.now()
                        )

                        .date(
                                LocalDate.now()
                        )

                        .status("PRESENT")

                        .build();

        return attendanceRepository
                .save(attendance);
    }

    // CHECK-OUT

    public Attendance checkOut(
            Long attendanceId
    ) {

        Attendance attendance =
                attendanceRepository
                        .findById(attendanceId)
                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Attendance not found"
                                )
                        );

        attendance.setCheckOut(
                LocalDateTime.now()
        );

        return attendanceRepository
                .save(attendance);
    }

    // GET ALL ATTENDANCE

    public List<Attendance>
    getAllAttendance() {

        return attendanceRepository
                .findAll();
    }

    // GET EMPLOYEE ATTENDANCE

    public List<Attendance>
    getEmployeeAttendance(
            Long employeeId
    ) {

        return attendanceRepository
                .findByEmployeeId(
                        employeeId
                );
    }
}