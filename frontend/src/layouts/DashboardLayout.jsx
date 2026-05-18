import { Outlet } from "react-router-dom"

import Sidebar from "../components/sidebar"
import Topbar from "../components/Topbar"

function DashboardLayout() {

    return (

        <div className="flex h-screen w-full bg-[#0B1120] text-white overflow-hidden selection:bg-indigo-500/30">

            {/* SIDEBAR */}

            <Sidebar />

            {/* MAIN APP AREA */}

            <div

                className="
                    flex-1
                    flex
                    flex-col
                    min-w-0
                    relative
                    bg-[#0F172A]
                    rounded-tl-[40px]
                    shadow-[-20px_0_50px_rgba(0,0,0,0.3)]
                    z-50
                    border-l
                    border-t
                    border-white/5
                    overflow-hidden
                "
            >

                {/* BACKGROUND GLOW */}

                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

                {/* PROFILE IMAGE */}

                <div className="absolute top-6 right-8 z-50">

                    <img

                        src="http://localhost:8080/uploads/1779098980676_IMG-20251011-WA00071.jpg"

                        alt="Profile"

                        className="

                            w-14
                            h-14
                            rounded-full
                            object-cover
                            border-2
                            border-purple-500
                            shadow-lg
                            shadow-purple-500/20
                        "
                    />
                </div>

                {/* TOPBAR */}

                <Topbar />

                {/* PAGE CONTENT */}

                <main className="flex-1 overflow-y-auto overflow-x-hidden relative z-0 scroll-smooth">

                    {/* CONTENT WRAPPER */}

                    <div className="max-w-[1600px] mx-auto w-full p-8 md:p-10 lg:p-12">

                        <Outlet />

                    </div>

                </main>

            </div>

        </div>
    )
}

export default DashboardLayout