package com.hrms.hrms_security_system.service;

import com.hrms.hrms_security_system.entity.Employee;
import com.hrms.hrms_security_system.entity.Payroll;

import com.hrms.hrms_security_system.repository.EmployeeRepository;
import com.hrms.hrms_security_system.repository.PayrollRepository;

import lombok.RequiredArgsConstructor;

import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@RequiredArgsConstructor

public class PayrollService {

    private final PayrollRepository
            payrollRepository;

    private final EmployeeRepository
            employeeRepository;

    // GENERATE PAYROLL

    public Payroll generatePayroll(

            Long employeeId,

            Double bonus,

            Double deduction
    ) {

        Employee employee =
                employeeRepository
                        .findById(employeeId)
                        .orElseThrow(() ->

                                new RuntimeException(
                                        "Employee not found"
                                )
                        );

        Double baseSalary =
                employee.getSalary();

        Double netSalary =
                baseSalary + bonus - deduction;

        Payroll payroll =
                Payroll.builder()

                        .employee(employee)

                        .baseSalary(baseSalary)

                        .bonus(bonus)

                        .deduction(deduction)

                        .netSalary(netSalary)

                        .payDate(LocalDate.now())

                        .status("PAID")

                        .build();

        return payrollRepository
                .save(payroll);
    }

    // GET ALL PAYROLLS

    public List<Payroll>
    getAllPayrolls() {

        return payrollRepository.findAll();
    }

    // GET EMPLOYEE PAYROLLS

    public List<Payroll>
    getEmployeePayrolls(
            Long employeeId
    ) {

        return payrollRepository
                .findByEmployeeId(
                        employeeId
                );
    }
}