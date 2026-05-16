import { Outlet } from "react-router-dom"

import Sidebar from "../components/Sidebar"
import Topbar from "../components/Topbar"

function DashboardLayout() {

    return (

        <div
            className="
                flex
                min-h-screen

                bg-[#0F172A]
                text-white
            "
        >

            {/* SIDEBAR */}

            <Sidebar />

            {/* MAIN SECTION */}

            <div
                className="
                    flex-1
                    flex
                    flex-col

                    min-w-0
                "
            >

                {/* TOPBAR */}

                <Topbar />

                {/* PAGE CONTENT */}

                <main
                    className="
                        flex-1

                        p-8

                        overflow-y-auto

                        bg-[#0F172A]
                    "
                >

                    <Outlet />

                </main>

            </div>

        </div>
    )
}

export default DashboardLayout