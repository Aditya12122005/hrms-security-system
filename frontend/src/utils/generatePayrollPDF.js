import jsPDF from "jspdf"

import autoTable
from "jspdf-autotable"

const generatePayrollPDF =
    (payroll) => {

        const doc =
            new jsPDF()

        // TITLE

        doc.setFontSize(22)

        doc.text(
            "HRMS Salary Slip",
            70,
            20
        )

        // EMPLOYEE INFO

        doc.setFontSize(12)

        doc.text(

            `Employee: ${payroll.employee.firstName} ${payroll.employee.lastName}`,

            20,

            40
        )

        doc.text(

            `Department: ${payroll.employee.department}`,

            20,

            50
        )

        doc.text(

            `Role: ${payroll.employee.role}`,

            20,

            60
        )

        doc.text(

            `Pay Date: ${payroll.payDate}`,

            20,

            70
        )

        // TABLE

        autoTable(doc, {

            startY: 90,

            head: [[

                "Base Salary",

                "Bonus",

                "Deduction",

                "Net Salary"
            ]],

            body: [[

                `Rs. ${payroll.baseSalary}`,

                `₹${payroll.bonus}`,

                `₹${payroll.deduction}`,

                `₹${payroll.netSalary}`
            ]]
        })

        // DOWNLOAD PDF

        doc.save(

            `${payroll.employee.firstName}_SalarySlip.pdf`
        )
    }

export default generatePayrollPDF