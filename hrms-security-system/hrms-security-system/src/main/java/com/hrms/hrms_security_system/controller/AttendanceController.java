package com.hrms.hrms_security_system.controller;

import com.hrms.hrms_security_system.entity.Attendance;

import com.hrms.hrms_security_system.service.AttendanceService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/attendance")
@RequiredArgsConstructor

@CrossOrigin(origins = "http://localhost:5173")

public class AttendanceController {

    private final AttendanceService
            attendanceService;

    // CHECK-IN API

    @PostMapping("/check-in/{employeeId}")

    public Attendance checkIn(

            @PathVariable Long employeeId
    ) {

        return attendanceService
                .checkIn(employeeId);
    }

    // CHECK-OUT API

    @PostMapping("/check-out/{attendanceId}")

    public Attendance checkOut(

            @PathVariable Long attendanceId
    ) {

        return attendanceService
                .checkOut(attendanceId);
    }

    // GET ALL ATTENDANCE

    @GetMapping

    public List<Attendance>
    getAllAttendance() {

        return attendanceService
                .getAllAttendance();
    }

    // GET EMPLOYEE ATTENDANCE

    @GetMapping("/employee/{employeeId}")

    public List<Attendance>
    getEmployeeAttendance(

            @PathVariable Long employeeId
    ) {

        return attendanceService
                .getEmployeeAttendance(
                        employeeId
                );
    }
}