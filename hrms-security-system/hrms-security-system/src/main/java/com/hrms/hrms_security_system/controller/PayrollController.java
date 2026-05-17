package com.hrms.hrms_security_system.controller;

import com.hrms.hrms_security_system.entity.Payroll;

import com.hrms.hrms_security_system.service.PayrollService;

import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payroll")
@RequiredArgsConstructor

@CrossOrigin(origins =
        "http://localhost:5173")

public class PayrollController {

    private final PayrollService
            payrollService;

    // GENERATE PAYROLL

    @PostMapping("/generate/{employeeId}")

    public Payroll generatePayroll(

            @PathVariable Long employeeId,

            @RequestParam Double bonus,

            @RequestParam Double deduction
    ) {

        return payrollService
                .generatePayroll(

                        employeeId,

                        bonus,

                        deduction
                );
    }

    // GET ALL PAYROLLS

    @GetMapping

    public List<Payroll>
    getAllPayrolls() {

        return payrollService
                .getAllPayrolls();
    }

    // GET EMPLOYEE PAYROLLS

    @GetMapping("/employee/{employeeId}")

    public List<Payroll>
    getEmployeePayrolls(

            @PathVariable Long employeeId
    ) {

        return payrollService
                .getEmployeePayrolls(
                        employeeId
                );
    }
}