import { Link } from "react-router-dom"

function Navbar() {

    return (

        <nav
            className="
                sticky
                top-0
                z-50

                bg-[#0F172A]/90
                backdrop-blur-md

                border-b
                border-[#1E293B]
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto

                    px-6
                    h-20

                    flex
                    items-center
                    justify-between
                "
            >

                {/* LOGO */}

                <Link
                    to="/"
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

                </Link>

                {/* NAV LINKS */}

                <div
                    className="
                        hidden
                        md:flex

                        items-center
                        gap-10
                    "
                >

                    <a
                        href="#features"
                        className="
                            text-[#94A3B8]
                            text-sm
                            font-medium

                            hover:text-white

                            transition-all
                            duration-200
                        "
                    >
                        Features
                    </a>

                    <a
                        href="#about"
                        className="
                            text-[#94A3B8]
                            text-sm
                            font-medium

                            hover:text-white

                            transition-all
                            duration-200
                        "
                    >
                        About
                    </a>

                    <a
                        href="#contact"
                        className="
                            text-[#94A3B8]
                            text-sm
                            font-medium

                            hover:text-white

                            transition-all
                            duration-200
                        "
                    >
                        Contact
                    </a>

                </div>

                {/* ACTIONS */}

                <div
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >

                    <Link
                        to="/login"

                        className="
                            h-11

                            px-5

                            flex
                            items-center
                            justify-center

                            rounded-xl

                            border
                            border-[#334155]

                            text-sm
                            font-medium

                            text-[#E2E8F0]

                            hover:bg-[#1E293B]

                            transition-all
                            duration-200
                        "
                    >
                        Login
                    </Link>

                    <button
                        className="
                            h-11

                            px-5

                            rounded-xl

                            bg-[#6366F1]
                            hover:bg-[#4F46E5]

                            text-sm
                            font-medium
                            text-white

                            transition-all
                            duration-200
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