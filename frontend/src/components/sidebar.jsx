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
                w-[280px]
                min-h-screen
                bg-[#0B1120]
                border-r
                border-[#1E293B]
                flex
                flex-col
                relative
                z-40
            "
        >
            {/* AMBIENT GLOW */}
            <div className="absolute top-0 left-0 w-full h-64 bg-indigo-500/5 blur-[80px] pointer-events-none" />

            {/* LOGO */}
            <div
                className="
                    px-8
                    h-24
                    flex
                    items-center
                    border-b
                    border-[#1E293B]
                    relative
                    z-10
                "
            >
                <Link to="/dashboard" className="flex flex-col group cursor-pointer">
                    <h1 className="text-3xl font-bold tracking-tight flex items-center gap-1">
                        <span className="text-white transition-colors group-hover:text-gray-200">
                            HRMS
                        </span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:from-indigo-300 group-hover:to-purple-300">
                            Pro
                        </span>
                        <div className="w-2 h-2 rounded-full bg-indigo-500 ml-1 animate-pulse" />
                    </h1>
                    <p className="text-[#64748B] text-xs font-medium mt-1 tracking-wider uppercase">
                        Workspace
                    </p>
                </Link>
            </div>

            {/* MENU */}
            <nav className="flex-1 px-4 py-8 space-y-2 relative z-10 overflow-y-auto">
                <div className="px-4 mb-4">
                    <p className="text-xs font-bold tracking-wider text-[#475569] uppercase">Main Menu</p>
                </div>

                {menuItems.map((item, index) => (
                    <Link key={index} to={item.path} className="block">
                        <SidebarItem
                            icon={item.icon}
                            title={item.title}
                            active={location.pathname === item.path || (item.path !== '/dashboard' && location.pathname.startsWith(item.path))}
                        />
                    </Link>
                ))}
            </nav>

            {/* BOTTOM PROFILE / LOGOUT OPTION */}
            <div className="p-4 border-t border-[#1E293B] relative z-10">
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#111827] border border-[#1E293B] hover:border-[#334155] cursor-pointer transition-all duration-300 group">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold shadow-[0_0_10px_rgba(99,102,241,0.3)] group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all">
                        A
                    </div>
                    <div>
                        <p className="text-sm font-medium text-white group-hover:text-indigo-300 transition-colors">Aditya</p>
                        <p className="text-xs text-[#64748B]">Admin Panel</p>
                    </div>
                </div>
            </div>
        </aside>
    )
}

function SidebarItem({ icon, title, active }) {
    return (
        <button
            className={`
                relative
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
                duration-300
                group
                overflow-hidden
                ${active
                    ? `text-white bg-gradient-to-r from-indigo-500/10 to-purple-500/5 shadow-[inset_3px_0_0_0_rgba(99,102,241,1)]`
                    : `text-[#94A3B8] hover:bg-[#111827] hover:text-white hover:translate-x-1`
                }
            `}
        >
            {/* Hover subtle glow */}
            {!active && (
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            )}

            <span
                className={`
                    text-lg
                    transition-all
                    duration-300
                    ${active ? 'text-indigo-400 drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]' : 'group-hover:scale-110 group-hover:text-indigo-400'}
                `}
            >
                {icon}
            </span>

            <span className="relative z-10">
                {title}
            </span>
        </button>
    )
}

export default Sidebar