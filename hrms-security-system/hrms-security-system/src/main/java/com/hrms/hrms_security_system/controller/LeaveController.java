package com.hrms.hrms_security_system.controller;

import com.hrms.hrms_security_system.entity.LeaveRequest;

import com.hrms.hrms_security_system.service.LeaveService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leaves")
@RequiredArgsConstructor

@CrossOrigin(origins =
        "http://localhost:5173")

public class LeaveController {

    private final LeaveService
            leaveService;

    // APPLY LEAVE

    @PostMapping("/apply/{employeeId}")

    public LeaveRequest applyLeave(

            @PathVariable Long employeeId,

            @RequestBody LeaveRequest leaveRequest
    ) {

        return leaveService
                .applyLeave(
                        employeeId,
                        leaveRequest
                );
    }

    // APPROVE LEAVE

    @PutMapping("/approve/{leaveId}")

    public LeaveRequest approveLeave(

            @PathVariable Long leaveId
    ) {

        return leaveService
                .approveLeave(leaveId);
    }

    // REJECT LEAVE

    @PutMapping("/reject/{leaveId}")

    public LeaveRequest rejectLeave(

            @PathVariable Long leaveId
    ) {

        return leaveService
                .rejectLeave(leaveId);
    }

    // GET ALL LEAVES

    @GetMapping

    public List<LeaveRequest>
    getAllLeaves() {

        return leaveService
                .getAllLeaves();
    }

    // GET EMPLOYEE LEAVES

    @GetMapping("/employee/{employeeId}")

    public List<LeaveRequest>
    getEmployeeLeaves(

            @PathVariable Long employeeId
    ) {

        return leaveService
                .getEmployeeLeaves(
                        employeeId
                );
    }
}