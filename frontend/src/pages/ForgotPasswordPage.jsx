import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { sendOtp } from "../services/otpService"

function ForgotPasswordPage() {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")

    const [message, setMessage] = useState("")

    const handleSendOtp = async (e) => {

        e.preventDefault()

        try {

            const response = await sendOtp(email)

            setMessage(response)

            localStorage.setItem("resetEmail", email)

            navigate("/verify-otp")

        } catch (error) {

            setMessage("Failed to send OTP")
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#0B1120] text-white">

            <form

                onSubmit={handleSendOtp}

                className="bg-[#111827] p-8 rounded-2xl w-[400px] border border-white/10"
            >

                <h1 className="text-3xl font-bold mb-6">

                    Forgot Password
                </h1>

                <input

                    type="email"

                    placeholder="Enter your email"

                    value={email}

                    onChange={(e) =>
                        setEmail(e.target.value)
                    }

                    className="w-full p-3 rounded-xl bg-[#1F2937] mb-4 outline-none"
                />

                <button

                    type="submit"

                    className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded-xl"
                >

                    Send OTP
                </button>

                <p className="mt-4 text-sm text-gray-300">
                    {message}
                </p>

            </form>

        </div>
    )
}

export default ForgotPasswordPage