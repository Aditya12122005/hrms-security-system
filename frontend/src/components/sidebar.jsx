import { Link, useLocation } from "react-router-dom"

import {
    FaUsers,
    FaChartBar,
    FaMoneyBillWave,
    FaCalendarAlt,
    FaCog
} from "react-icons/fa"

function Sidebar() {

    const location = useLocation()

    const menuItems = [

        {
            title: "Dashboard",
            icon: <FaChartBar />,
            path: "/dashboard"
        },

        {
            title: "Employees",
            icon: <FaUsers />,
            path: "/dashboard/employees"
        },

        {
            title: "Payroll",
            icon: <FaMoneyBillWave />,
            path: "/dashboard/payroll"
        },

        {
            title: "Attendance",
            icon: <FaCalendarAlt />,
            path: "/dashboard/attendance"
        },

        {
            title: "Settings",
            icon: <FaCog />,
            path: "/dashboard/settings"
        }

    ]

    return (

        <aside
            className="
                w-[260px]
                min-h-screen

                bg-[#111827]

                border-r
                border-[#1E293B]

                flex
                flex-col
            "
        >

            {/* LOGO */}

            <div
                className="
                    px-7
                    py-7

                    border-b
                    border-[#1E293B]
                "
            >

                <h1
                    className="
                        text-2xl
                        font-bold
                        tracking-tight
                    "
                >

                    <span className="text-white">
                        HRMS
                    </span>

                    <span className="text-[#6366F1]">
                        Pro
                    </span>

                </h1>

                <p
                    className="
                        text-[#94A3B8]
                        text-sm
                        mt-2
                    "
                >
                    Workforce Management Platform
                </p>

            </div>

            {/* MENU */}

            <nav
                className="
                    flex-1

                    px-4
                    py-6

                    space-y-2
                "
            >

                {
                    menuItems.map((item, index) => (

                        <Link
                            key={index}
                            to={item.path}
                        >

                            <SidebarItem
                                icon={item.icon}
                                title={item.title}
                                active={location.pathname === item.path}
                            />

                        </Link>
                    ))
                }

            </nav>

        </aside>
    )
}

function SidebarItem({
    icon,
    title,
    active
}) {

    return (

        <button
            className={`
                w-full

                flex
                items-center
                gap-4

                px-4
                h-12

                rounded-xl

                text-sm
                font-medium

                transition-all
                duration-200

                ${active
                    ? `
                        bg-[#6366F1]/15
                        text-white
                        border
                        border-[#6366F1]/20
                    `
                    : `
                        text-[#94A3B8]
                        hover:bg-[#1E293B]
                        hover:text-white
                    `
                }
            `}
        >

            <span
                className="
                    text-base
                "
            >
                {icon}
            </span>

            <span>
                {title}
            </span>

        </button>
    )
}

export default Sidebar