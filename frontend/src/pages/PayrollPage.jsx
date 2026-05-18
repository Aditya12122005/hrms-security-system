import {

    useEffect,
    useState

} from "react"

import {

    getPayrolls,
    generatePayroll

} from "../services/payrollService"

import generatePayrollPDF
from "../utils/generatePayrollPDF"

function PayrollPage() {

    const [payrolls,
        setPayrolls] = useState([])

    useEffect(() => {

        fetchPayrolls()

    }, [])

    const fetchPayrolls = async () => {

        try {

            const data =
                await getPayrolls()

            setPayrolls(data)

        } catch (error) {

            console.log(error)
        }
    }

    const handleGeneratePayroll =
        async () => {

            try {

                await generatePayroll(
                    4,
                    5000,
                    1000
                )

                fetchPayrolls()

            } catch (error) {

                console.log(error)
            }
        }

    return (

        <div className="p-10 text-white">

            {/* HEADER */}

            <div
                className="
                    flex
                    items-center
                    justify-between

                    mb-10
                "
            >

                <div>

                    <h1
                        className="
                            text-5xl
                            font-bold
                        "
                    >
                        Payroll
                    </h1>

                    <p
                        className="
                            text-slate-400
                            mt-3
                            text-lg
                        "
                    >
                        Manage payroll and salary
                        records.
                    </p>

                </div>

                <button

                    onClick={
                        handleGeneratePayroll
                    }

                    className="
                        px-6
                        h-12

                        rounded-2xl

                        bg-gradient-to-r
                        from-indigo-500
                        to-purple-600

                        font-semibold

                        hover:scale-105

                        transition-all
                    "
                >

                    Generate Payroll

                </button>

            </div>

            {/* TABLE */}

            <div
                className="
                    bg-slate-900/60

                    border
                    border-white/10

                    rounded-3xl

                    overflow-hidden
                "
            >

                <table className="w-full">

                    <thead
                        className="
                            bg-white/5
                        "
                    >

                        <tr>

                            <th className="p-6 text-left">
                                Employee
                            </th>

                            <th className="p-6 text-left">
                                Base Salary
                            </th>

                            <th className="p-6 text-left">
                                Bonus
                            </th>

                            <th className="p-6 text-left">
                                Deduction
                            </th>

                            <th className="p-6 text-left">
                                Net Salary
                            </th>

                            {/* PDF HEADER */}

                            <th className="p-6 text-left">
                                PDF
                            </th>


                        </tr>

                    </thead>

                    <tbody>

                        {payrolls.map((payroll) => (

                            <tr

                                key={payroll.id}

                                className="
                                    border-t
                                    border-white/5
                                "
                            >

                                <td className="p-6">

                                    {
                                        payroll.employee
                                            ?.firstName
                                    }

                                </td>

                                <td className="p-6">

                                    ₹{
                                        payroll.baseSalary
                                    }

                                </td>

                                <td
                                    className="
                                        p-6
                                        text-emerald-400
                                    "
                                >

                                    ₹{
                                        payroll.bonus
                                    }

                                </td>

                                <td
                                    className="
                                        p-6
                                        text-red-400
                                    "
                                >

                                    ₹{
                                        payroll.deduction
                                    }

                                </td>

                                <td
                                    className="
                                        p-6

                                        font-bold

                                        text-indigo-400
                                    "
                                >

                                    ₹{
                                        payroll.netSalary
                                    }

                                </td>

                                {/* DOWNLOAD PDF BUTTON */}

                                <td className="p-6">

                                    <button

                                        onClick={() =>
                                            generatePayrollPDF(
                                                payroll
                                            )
                                        }

                                        className="
                                            px-4
                                            py-2

                                            rounded-xl

                                            bg-indigo-500/20

                                            text-indigo-400

                                            hover:bg-indigo-500/30

                                            transition-all
                                        "
                                    >

                                        Download PDF

                                    </button>

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default PayrollPage