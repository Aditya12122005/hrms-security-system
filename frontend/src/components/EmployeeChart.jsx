import { useEffect, useState } from "react"

import {

    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid

} from "recharts"

import {
    getDepartmentStats
} from "../services/employeeService"

function EmployeeChart() {

    const [data, setData] = useState([])

    useEffect(() => {

        fetchDepartmentStats()

    }, [])

    const fetchDepartmentStats = async () => {

        try {

            const response =
                await getDepartmentStats()

            setData(response)

        } catch (error) {

            console.log(error)
        }
    }

    return (

        <div
            className="
                bg-white

                border
                border-slate-200

                rounded-3xl

                p-8

                shadow-sm
            "
        >

            <div className="mb-6">

                <h2
                    className="
                        text-xl
                        font-bold
                        text-slate-900
                    "
                >
                    Department Analytics
                </h2>

                <p
                    className="
                        text-sm
                        text-slate-500
                        mt-1
                    "
                >
                    Real-time employee distribution
                    by department.
                </p>

            </div>

            <div className="h-[350px]">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <BarChart data={data}>

                        <CartesianGrid
                            strokeDasharray="3 3"
                        />

                        <XAxis dataKey="department" />

                        <YAxis />

                        <Tooltip />

                        <Bar
                            dataKey="employees"
                            radius={[10, 10, 0, 0]}
                        />

                    </BarChart>

                </ResponsiveContainer>

            </div>

        </div>
    )
}

export default EmployeeChart