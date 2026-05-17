import { useEffect, useState } from "react"

import { getDashboardStats }
from "../services/employeeService"

import EmployeeChart
from "../components/EmployeeChart"

function DashboardPage() {

    const [stats, setStats] = useState({

        totalEmployees: 0,

        totalDepartments: 0,

        totalPayroll: 0,

        averageSalary: 0
    })

    useEffect(() => {

        fetchDashboardStats()

    }, [])

    const fetchDashboardStats = async () => {

        try {

            const data =
                await getDashboardStats()

            setStats(data)

        } catch (error) {

            console.log(error)
        }
    }

    const dashboardCards = [

        {
            title: "Total Employees",
            value: stats.totalEmployees,
            change: "+12%"
        },

        {
            title: "Departments",
            value: stats.totalDepartments,
            change: "+2"
        },

        {
            title: "Total Payroll",
            value: `₹${stats.totalPayroll?.toLocaleString()}`,
            change: "+8%"
        },

        {
            title: "Average Salary",
            value: `₹${stats.averageSalary?.toLocaleString()}`,
            change: "+4%"
        }
    ]

    return (

        <div className="pb-12">

            {/* PAGE HEADER */}

            <div className="mb-10 animate-fade-in">

                <h1
                    className="
                        text-3xl
                        font-bold
                        tracking-tight
                        text-slate-900

                        flex
                        items-center
                        gap-3
                    "
                >

                    Dashboard

                    <div
                        className="
                            px-3
                            py-1

                            rounded-full

                            bg-pink-50
                            border
                            border-pink-200

                            text-pink-600
                            text-xs
                            font-bold

                            uppercase
                            tracking-wider

                            shadow-sm
                        "
                    >
                        Live Overview
                    </div>

                </h1>

                <p
                    className="
                        text-slate-500
                        mt-2
                        text-sm
                        max-w-xl
                        font-medium
                    "
                >
                    Monitor workforce insights,
                    real-time employee activity,
                    and core company operations
                    from a single pane of glass.
                </p>

            </div>

            {/* STATS GRID */}

            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-4

                    gap-6
                "
            >

                {dashboardCards.map((item, index) => (

                    <DashboardCard

                        key={index}

                        title={item.title}

                        value={item.value}

                        change={item.change}

                        delay={index * 100}

                    />

                ))}

            </div>

            {/* SECOND SECTION */}

            <div
                className="
                    grid
                    grid-cols-1
                    xl:grid-cols-3

                    gap-6
                    mt-8
                "
            >

                {/* ACTIVITY */}

                <div
                    className="
                        xl:col-span-2

                        bg-white

                        border
                        border-slate-200

                        rounded-3xl
                        p-8

                        hover:border-pink-300

                        transition-all
                        duration-300

                        shadow-sm

                        hover:shadow-lg
                        hover:shadow-pink-500/5

                        group
                    "
                >

                    <div
                        className="
                            flex
                            items-center
                            justify-between

                            mb-8

                            border-b
                            border-slate-100

                            pb-4
                        "
                    >

                        <div>

                            <h2
                                className="
                                    text-xl
                                    font-bold
                                    text-slate-900

                                    group-hover:text-pink-600

                                    transition-colors
                                "
                            >
                                Recent Activity
                            </h2>

                            <p
                                className="
                                    text-slate-500
                                    text-sm
                                    mt-1
                                    font-medium
                                "
                            >
                                Latest workforce updates
                                and HR operations.
                            </p>

                        </div>

                        <button
                            className="
                                text-sm
                                font-bold

                                text-pink-500
                                hover:text-pink-600

                                transition-colors
                            "
                        >
                            View All
                        </button>

                    </div>

                    <div className="space-y-2">

                        <ActivityItem
                            title="New employee onboarding completed"
                            time="2 hours ago"
                        />

                        <ActivityItem
                            title="Payroll processed for May 2026"
                            time="5 hours ago"
                        />

                        <ActivityItem
                            title="Attendance report generated"
                            time="Yesterday"
                        />

                        <ActivityItem
                            title="Q2 Performance Reviews Scheduled"
                            time="2 days ago"
                        />

                    </div>

                </div>

                {/* QUICK INSIGHTS */}

                <div
                    className="
                        bg-white

                        border
                        border-slate-200

                        rounded-3xl
                        p-8

                        hover:border-red-300

                        transition-all
                        duration-300

                        shadow-sm

                        hover:shadow-lg
                        hover:shadow-red-500/5

                        group
                    "
                >

                    <div
                        className="
                            border-b
                            border-slate-100

                            pb-4
                            mb-8
                        "
                    >

                        <h2
                            className="
                                text-xl
                                font-bold
                                text-slate-900

                                group-hover:text-red-500

                                transition-colors
                            "
                        >
                            Quick Insights
                        </h2>

                        <p
                            className="
                                text-slate-500
                                text-sm
                                mt-1
                                font-medium
                            "
                        >
                            Key metrics at a glance.
                        </p>

                    </div>

                    <div className="space-y-4">

                        <InsightItem
                            label="Remote Employees"
                            value="48%"
                        />

                        <InsightItem
                            label="Open Positions"
                            value="14"
                        />

                        <InsightItem
                            label="Pending Leave Requests"
                            value="6"
                            alert
                        />

                        <InsightItem
                            label="Upcoming Birthdays"
                            value="3"
                        />

                    </div>

                </div>

            </div>

            {/* CHART SECTION */}

            <div className="mt-8">

                <EmployeeChart />

            </div>

        </div>
    )
}

function DashboardCard({
    title,
    value,
    change,
    delay
}) {

    return (

        <div
            className="
                relative
                overflow-hidden

                bg-white

                border
                border-slate-200

                rounded-3xl
                p-6

                hover:border-pink-400

                hover:shadow-xl
                hover:shadow-pink-500/10

                hover:-translate-y-1.5

                transition-all
                duration-500

                group
                cursor-pointer
            "

            style={{
                animationDelay: `${delay}ms`
            }}
        >

            <div
                className="
                    absolute
                    inset-0

                    bg-gradient-to-br
                    from-pink-500/5
                    to-red-500/5

                    opacity-0
                    group-hover:opacity-100

                    transition-opacity
                    duration-500

                    pointer-events-none
                "
            />

            <div
                className="
                    flex
                    items-start
                    justify-between

                    relative
                    z-10
                "
            >

                <div>

                    <p
                        className="
                            text-sm
                            font-bold

                            text-slate-500

                            group-hover:text-pink-600

                            transition-colors
                            duration-300

                            uppercase
                            tracking-wide
                        "
                    >
                        {title}
                    </p>

                    <h2
                        className="
                            text-4xl
                            font-extrabold

                            text-slate-900

                            mt-3

                            group-hover:scale-105

                            origin-left
                            transition-transform
                            duration-500
                        "
                    >
                        {value}
                    </h2>

                </div>

                <div
                    className="
                        px-3
                        py-1.5

                        rounded-xl

                        bg-emerald-50

                        border
                        border-emerald-100

                        text-emerald-600
                        text-xs
                        font-bold

                        flex
                        items-center
                        gap-1

                        shadow-sm

                        group-hover:bg-emerald-100

                        transition-colors
                    "
                >
                    {change}
                </div>

            </div>

        </div>
    )
}

function ActivityItem({ title, time }) {

    return (

        <div
            className="
                flex
                items-center
                justify-between

                p-3

                rounded-xl

                hover:bg-pink-50/50

                transition-all
                duration-300
            "
        >

            <h3
                className="
                    text-sm
                    font-bold
                    text-slate-700
                "
            >
                {title}
            </h3>

            <p
                className="
                    text-xs
                    font-bold

                    text-slate-500

                    bg-slate-100

                    px-2.5
                    py-1

                    rounded-md
                "
            >
                {time}
            </p>

        </div>
    )
}

function InsightItem({
    label,
    value,
    alert
}) {

    return (

        <div
            className="
                flex
                items-center
                justify-between

                p-3

                rounded-xl

                hover:bg-slate-50

                transition-all
                duration-300
            "
        >

            <p
                className="
                    text-sm
                    font-bold
                    text-slate-600
                "
            >
                {label}
            </p>

            <span
                className={`
                    text-sm
                    font-bold

                    px-3
                    py-1

                    rounded-lg

                    shadow-sm

                    ${
                        alert
                            ? "bg-red-50 text-red-600 border border-red-200"
                            : "bg-white text-slate-700 border border-slate-200"
                    }
                `}
            >
                {value}
            </span>

        </div>
    )
}

export default DashboardPage