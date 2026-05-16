function Footer() {

    return (

        <footer
            className="
                border-t
                border-[#334155]
                bg-[#111827]
            "
        >

            <div
                className="
                    max-w-7xl
                    mx-auto

                    px-6
                    py-16
                "
            >

                {/* TOP SECTION */}

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-4

                        gap-12
                    "
                >

                    {/* BRAND */}

                    <div>

                        <h2
                            className="
                                text-3xl
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
                        </h2>

                        <p
                            className="
                                text-[#94A3B8]
                                mt-5
                                leading-7
                                text-sm
                            "
                        >
                            Centralized workforce management software
                            designed for modern HR and operations teams.
                        </p>

                    </div>

                    {/* PRODUCT */}

                    <div>

                        <h3
                            className="
                                text-white
                                font-semibold
                                mb-5
                                text-sm
                            "
                        >
                            Product
                        </h3>

                        <div
                            className="
                                flex
                                flex-col
                                gap-4

                                text-[#94A3B8]
                                text-sm
                            "
                        >

                            <a
                                href="#"
                                className="
                                    hover:text-white
                                    transition-all
                                    duration-200
                                "
                            >
                                Features
                            </a>

                            <a
                                href="#"
                                className="
                                    hover:text-white
                                    transition-all
                                    duration-200
                                "
                            >
                                Security
                            </a>

                            <a
                                href="#"
                                className="
                                    hover:text-white
                                    transition-all
                                    duration-200
                                "
                            >
                                Analytics
                            </a>

                        </div>

                    </div>

                    {/* COMPANY */}

                    <div>

                        <h3
                            className="
                                text-white
                                font-semibold
                                mb-5
                                text-sm
                            "
                        >
                            Company
                        </h3>

                        <div
                            className="
                                flex
                                flex-col
                                gap-4

                                text-[#94A3B8]
                                text-sm
                            "
                        >

                            <a
                                href="#"
                                className="
                                    hover:text-white
                                    transition-all
                                    duration-200
                                "
                            >
                                About
                            </a>

                            <a
                                href="#"
                                className="
                                    hover:text-white
                                    transition-all
                                    duration-200
                                "
                            >
                                Careers
                            </a>

                            <a
                                href="#"
                                className="
                                    hover:text-white
                                    transition-all
                                    duration-200
                                "
                            >
                                Contact
                            </a>

                        </div>

                    </div>

                    {/* RESOURCES */}

                    <div>

                        <h3
                            className="
                                text-white
                                font-semibold
                                mb-5
                                text-sm
                            "
                        >
                            Resources
                        </h3>

                        <div
                            className="
                                flex
                                flex-col
                                gap-4

                                text-[#94A3B8]
                                text-sm
                            "
                        >

                            <a
                                href="#"
                                className="
                                    hover:text-white
                                    transition-all
                                    duration-200
                                "
                            >
                                Documentation
                            </a>

                            <a
                                href="#"
                                className="
                                    hover:text-white
                                    transition-all
                                    duration-200
                                "
                            >
                                API Reference
                            </a>

                            <a
                                href="#"
                                className="
                                    hover:text-white
                                    transition-all
                                    duration-200
                                "
                            >
                                Support
                            </a>

                        </div>

                    </div>

                </div>

                {/* BOTTOM */}

                <div
                    className="
                        border-t
                        border-[#334155]

                        mt-16
                        pt-8

                        flex
                        flex-col
                        md:flex-row

                        items-center
                        justify-between

                        gap-5
                    "
                >

                    <p
                        className="
                            text-[#64748B]
                            text-sm
                        "
                    >
                        © 2026 HRMS Pro. All rights reserved.
                    </p>

                    <div
                        className="
                            flex
                            items-center
                            gap-6

                            text-sm
                            text-[#94A3B8]
                        "
                    >

                        <a
                            href="#"
                            className="
                                hover:text-white
                                transition-all
                                duration-200
                            "
                        >
                            Privacy Policy
                        </a>

                        <a
                            href="#"
                            className="
                                hover:text-white
                                transition-all
                                duration-200
                            "
                        >
                            Terms of Service
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    )
}

export default Footer