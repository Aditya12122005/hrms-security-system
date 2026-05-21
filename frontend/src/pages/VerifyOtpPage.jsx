import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { verifyOtp } from "../services/otpService"

function VerifyOtpPage() {

    const navigate = useNavigate()

    const [otp, setOtp] = useState("")

    const [message, setMessage] = useState("")

    const email = localStorage.getItem("resetEmail")

    const handleVerifyOtp = async (e) => {

        e.preventDefault()

        try {

            const response = await verifyOtp(

                email,

                otp
            )

            setMessage(response)

            navigate("/reset-password")

        } catch (error) {

            setMessage("Invalid OTP")
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#0B1120] text-white">

            <form

                onSubmit={handleVerifyOtp}

                className="bg-[#111827] p-8 rounded-2xl w-[400px] border border-white/10"
            >

                <h1 className="text-3xl font-bold mb-6">

                    Verify OTP
                </h1>

                <input

                    type="text"

                    placeholder="Enter OTP"

                    value={otp}

                    onChange={(e) =>
                        setOtp(e.target.value)
                    }

                    className="w-full p-3 rounded-xl bg-[#1F2937] mb-4 outline-none"
                />

                <button

                    type="submit"

                    className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded-xl"
                >

                    Verify OTP
                </button>

                <p className="mt-4 text-sm text-gray-300">
                    {message}
                </p>

            </form>

        </div>
    )
}

export default VerifyOtpPage