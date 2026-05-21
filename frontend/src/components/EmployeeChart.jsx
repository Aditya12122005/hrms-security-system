import { useEffect, useState } from "react"

import {

    ResponsiveContainer,

    PieChart,

    Pie,

    Cell,

    Tooltip,

    Legend

} from "recharts"

import { getDepartmentStats } from "../services/employeeService"

function EmployeeChart() {

    const [chartData, setChartData] = useState([])

    const [loading, setLoading] = useState(true)

    const [error, setError] = useState("")

    const COLORS = [

        "#6366F1",

        "#8B5CF6",

        "#06B6D4",

        "#10B981",

        "#F59E0B",

        "#EF4444"
    ]

    useEffect(() => {

        fetchDepartmentStats()

    }, [])

    const fetchDepartmentStats = async () => {

        try {

            setLoading(true)

            const data = await getDepartmentStats()

            setChartData(data)

        } catch (err) {

            console.error(err)

            setError("Failed to load chart data")

        } finally {

            setLoading(false)
        }
    }

    if (loading) {

        return (

            <div className="bg-[#111827] border border-white/10 rounded-3xl p-6 h-[450px] flex items-center justify-center">

                <p className="text-gray-400 text-sm animate-pulse">

                    Loading analytics...

                </p>

            </div>
        )
    }

    if (error) {

        return (

            <div className="bg-[#111827] border border-red-500/20 rounded-3xl p-6 h-[450px] flex items-center justify-center">

                <p className="text-red-400 text-sm">

                    {error}

                </p>

            </div>
        )
    }

    return (

        <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-xl">

            {/* HEADER */}

            <div className="flex items-center justify-between mb-8">

                <div>

                    <h2 className="text-2xl font-bold text-white">

                        Department Analytics

                    </h2>

                    <p className="text-sm text-gray-400 mt-1">

                        Employee distribution across departments

                    </p>

                </div>

                <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />

            </div>

            {/* CHART CONTAINER */}

            <div className="w-full h-[400px]">

                <ResponsiveContainer width="100%" height="100%">

                    <PieChart>

                        <Pie

                            data={chartData}

                            dataKey="count"

                            nameKey="department"

                            cx="50%"

                            cy="50%"

                            outerRadius={130}

                            innerRadius={70}

                            paddingAngle={3}

                            label={({ department, percent }) =>

                                `${department} ${(percent * 100).toFixed(0)}%`
                            }
                        >

                            {chartData.map((entry, index) => (

                                <Cell

                                    key={`cell-${index}`}

                                    fill={

                                        COLORS[
                                        index % COLORS.length
                                        ]
                                    }
                                />

                            ))}

                        </Pie>

                        <Tooltip

                            contentStyle={{

                                backgroundColor: "#0F172A",

                                border: "1px solid rgba(255,255,255,0.1)",

                                borderRadius: "16px",

                                color: "#fff"
                            }}
                        />

                        <Legend />

                    </PieChart>

                </ResponsiveContainer>

            </div>

        </div>
    )
}

export default EmployeeChart