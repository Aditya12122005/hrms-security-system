package com.hrms.hrms_security_system.service;

import com.hrms.hrms_security_system.entity.Employee;
import com.hrms.hrms_security_system.entity.LeaveRequest;

import com.hrms.hrms_security_system.repository.EmployeeRepository;
import com.hrms.hrms_security_system.repository.LeaveRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

import java.util.List;

@Service
@RequiredArgsConstructor

public class LeaveService {

    private final LeaveRepository
            leaveRepository;

    private final EmployeeRepository
            employeeRepository;

    // APPLY LEAVE

    public LeaveRequest applyLeave(

            Long employeeId,

            LeaveRequest leaveRequest
    ) {

        Employee employee =
                employeeRepository
                        .findById(employeeId)
                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Employee not found"
                                )
                        );

        leaveRequest.setEmployee(employee);

        leaveRequest.setStatus(
                "PENDING"
        );

        leaveRequest.setAppliedAt(
                LocalDateTime.now()
        );

        return leaveRepository
                .save(leaveRequest);
    }

    // APPROVE LEAVE

    public LeaveRequest approveLeave(
            Long leaveId
    ) {

        LeaveRequest leave =
                leaveRepository
                        .findById(leaveId)
                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Leave request not found"
                                )
                        );

        leave.setStatus("APPROVED");

        return leaveRepository
                .save(leave);
    }

    // REJECT LEAVE

    public LeaveRequest rejectLeave(
            Long leaveId
    ) {

        LeaveRequest leave =
                leaveRepository
                        .findById(leaveId)
                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Leave request not found"
                                )
                        );

        leave.setStatus("REJECTED");

        return leaveRepository
                .save(leave);
    }

    // GET ALL LEAVES

    public List<LeaveRequest>
    getAllLeaves() {

        return leaveRepository.findAll();
    }

    // GET EMPLOYEE LEAVES

    public List<LeaveRequest>
    getEmployeeLeaves(
            Long employeeId
    ) {

        return leaveRepository
                .findByEmployeeId(
                        employeeId
                );
    }
}