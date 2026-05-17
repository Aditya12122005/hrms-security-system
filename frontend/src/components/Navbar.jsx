import { Link } from "react-router-dom"

function Navbar() {
    return (
        <nav
            className="
                fixed
                top-0
                w-full
                z-50
                bg-[#0B1120]/80
                backdrop-blur-xl
                border-b
                border-white/5
                shadow-[0_4px_30px_rgba(0,0,0,0.1)]
                transition-all
                duration-300
            "
        >
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-purple-500/5 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative z-10">
                {/* LOGO */}
                <Link
                    to="/"
                    className="
                        text-2xl
                        font-bold
                        tracking-tight
                        group
                        flex
                        items-center
                        gap-1
                    "
                >
                    <span className="text-white transition-colors group-hover:text-gray-200">
                        HRMS
                    </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:from-indigo-300 group-hover:to-purple-300">
                        Pro
                    </span>
                    <div className="w-2 h-2 rounded-full bg-indigo-500 ml-1 animate-pulse" />
                </Link>

                {/* NAV LINKS */}
                <div className="hidden md:flex items-center gap-10">
                    <a
                        href="#features"
                        className="
                            relative
                            text-[#94A3B8]
                            text-sm
                            font-medium
                            transition-colors
                            duration-300
                            hover:text-white
                            group
                        "
                    >
                        Features
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full rounded-full" />
                    </a>

                    <a
                        href="#about"
                        className="
                            relative
                            text-[#94A3B8]
                            text-sm
                            font-medium
                            transition-colors
                            duration-300
                            hover:text-white
                            group
                        "
                    >
                        About
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full rounded-full" />
                    </a>

                    <a
                        href="#contact"
                        className="
                            relative
                            text-[#94A3B8]
                            text-sm
                            font-medium
                            transition-colors
                            duration-300
                            hover:text-white
                            group
                        "
                    >
                        Contact
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full rounded-full" />
                    </a>
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-4">
                    <Link
                        to="/login"
                        className="
                            h-10
                            px-5
                            flex
                            items-center
                            justify-center
                            rounded-xl
                            bg-white/5
                            border
                            border-white/10
                            text-sm
                            font-medium
                            text-[#E2E8F0]
                            hover:bg-white/10
                            hover:text-white
                            transition-all
                            duration-300
                        "
                    >
                        Login
                    </Link>

                    <button
                        className="
                            h-10
                            px-5
                            rounded-xl
                            bg-gradient-to-r
                            from-indigo-500
                            to-purple-500
                            text-sm
                            font-medium
                            text-white
                            shadow-[0_0_15px_rgba(99,102,241,0.3)]
                            hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
                            hover:-translate-y-0.5
                            transition-all
                            duration-300
                        "
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar