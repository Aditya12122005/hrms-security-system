import { useState } from "react"
import { useNavigate } from "react-router-dom"

import { loginUser } from "../services/authService"

function LoginPage() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState("")

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            const response = await loginUser(formData)

            localStorage.setItem(
                "token",
                response.token
            )

            navigate("/dashboard")

        } catch (err) {

            setError("Invalid username or password")
        }
    }

    return (

        <div
            className="
                min-h-screen

                bg-[#0F172A]

                grid
                grid-cols-1
                lg:grid-cols-2
            "
        >

            {/* LEFT SIDE */}

            <div
                className="
                    hidden
                    lg:flex

                    flex-col
                    justify-between

                    p-12

                    border-r
                    border-[#1E293B]

                    bg-[#111827]
                "
            >

                {/* LOGO */}

                <div>

                    <h1
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

                    </h1>

                </div>

                {/* CONTENT */}

                <div className="max-w-lg">

                    <div
                        className="
                            inline-flex
                            items-center

                            px-4
                            h-10

                            rounded-full

                            bg-[#6366F1]/10

                            border
                            border-[#6366F1]/20

                            text-[#818CF8]
                            text-sm
                            font-medium

                            mb-8
                        "
                    >
                        Enterprise Workforce Platform
                    </div>

                    <h2
                        className="
                            text-5xl

                            font-semibold

                            tracking-tight

                            leading-[1.1]
                        "
                    >
                        Secure workforce management for modern organizations.
                    </h2>

                    <p
                        className="
                            mt-6

                            text-[#94A3B8]
                            text-lg

                            leading-8
                        "
                    >
                        Manage employees, payroll, attendance and workforce
                        operations from one centralized enterprise platform.
                    </p>

                </div>

                {/* FOOTER */}

                <div>

                    <p
                        className="
                            text-sm
                            text-[#64748B]
                        "
                    >
                        © 2026 HRMS Pro. All rights reserved.
                    </p>

                </div>

            </div>

            {/* RIGHT SIDE */}

            <div
                className="
                    flex
                    items-center
                    justify-center

                    px-6
                "
            >

                <div
                    className="
                        w-full
                        max-w-md
                    "
                >

                    {/* MOBILE LOGO */}

                    <div
                        className="
                            lg:hidden

                            text-center

                            mb-10
                        "
                    >

                        <h1
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

                        </h1>

                    </div>

                    {/* LOGIN CARD */}

                    <div
                        className="
                            bg-[#111827]

                            border
                            border-[#334155]

                            rounded-3xl

                            p-8
                        "
                    >

                        {/* HEADER */}

                        <div className="mb-8">

                            <h2
                                className="
                                    text-3xl
                                    font-semibold

                                    tracking-tight
                                "
                            >
                                Sign in
                            </h2>

                            <p
                                className="
                                    text-[#94A3B8]

                                    mt-2
                                    text-sm
                                "
                            >
                                Access your workforce management dashboard.
                            </p>

                        </div>

                        {/* ERROR */}

                        {
                            error && (

                                <div
                                    className="
                                        mb-6

                                        rounded-xl

                                        border
                                        border-red-500/20

                                        bg-red-500/10

                                        px-4
                                        py-3

                                        text-sm
                                        text-red-400
                                    "
                                >
                                    {error}
                                </div>

                            )
                        }

                        {/* FORM */}

                        <form
                            onSubmit={handleSubmit}

                            className="space-y-5"
                        >

                            {/* USERNAME */}

                            <div>

                                <label
                                    className="
                                        block

                                        text-sm
                                        font-medium

                                        text-[#E2E8F0]

                                        mb-2
                                    "
                                >
                                    Username
                                </label>

                                <input
                                    type="text"

                                    name="username"

                                    value={formData.username}

                                    onChange={handleChange}

                                    placeholder="Enter username"

                                    className="
                                        w-full
                                        h-12

                                        bg-[#0F172A]

                                        border
                                        border-[#334155]

                                        rounded-xl

                                        px-4

                                        text-sm
                                        text-white

                                        placeholder:text-[#64748B]

                                        outline-none

                                        focus:border-[#6366F1]
                                        focus:ring-4
                                        focus:ring-indigo-500/10

                                        transition-all
                                        duration-200
                                    "
                                />

                            </div>

                            {/* PASSWORD */}

                            <div>

                                <label
                                    className="
                                        block

                                        text-sm
                                        font-medium

                                        text-[#E2E8F0]

                                        mb-2
                                    "
                                >
                                    Password
                                </label>

                                <input
                                    type="password"

                                    name="password"

                                    value={formData.password}

                                    onChange={handleChange}

                                    placeholder="Enter password"

                                    className="
                                        w-full
                                        h-12

                                        bg-[#0F172A]

                                        border
                                        border-[#334155]

                                        rounded-xl

                                        px-4

                                        text-sm
                                        text-white

                                        placeholder:text-[#64748B]

                                        outline-none

                                        focus:border-[#6366F1]
                                        focus:ring-4
                                        focus:ring-indigo-500/10

                                        transition-all
                                        duration-200
                                    "
                                />

                            </div>

                            {/* BUTTON */}

                            <button
                                type="submit"

                                className="
                                    w-full
                                    h-12

                                    rounded-xl

                                    bg-[#6366F1]
                                    hover:bg-[#4F46E5]

                                    text-white
                                    text-sm
                                    font-medium

                                    transition-all
                                    duration-200
                                "
                            >
                                Sign In
                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default LoginPage