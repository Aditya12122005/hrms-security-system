import { useState } from "react"

import { useNavigate } from "react-router-dom"

import { resetPassword } from "../services/otpService"

function ResetPasswordPage() {

    const navigate = useNavigate()

    const [newPassword, setNewPassword] = useState("")

    const [message, setMessage] = useState("")

    const email = localStorage.getItem("resetEmail")

    const handleResetPassword = async (e) => {

        e.preventDefault()

        try {

            const response = await resetPassword(

                email,

                newPassword
            )

            setMessage(response)

            localStorage.removeItem("resetEmail")

            navigate("/login")

        } catch (error) {

            setMessage("Password reset failed")
        }
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#0B1120] text-white">

            <form

                onSubmit={handleResetPassword}

                className="bg-[#111827] p-8 rounded-2xl w-[400px] border border-white/10"
            >

                <h1 className="text-3xl font-bold mb-6">

                    Reset Password
                </h1>

                <input

                    type="password"

                    placeholder="Enter new password"

                    value={newPassword}

                    onChange={(e) =>
                        setNewPassword(e.target.value)
                    }

                    className="w-full p-3 rounded-xl bg-[#1F2937] mb-4 outline-none"
                />

                <button

                    type="submit"

                    className="w-full bg-indigo-600 hover:bg-indigo-700 p-3 rounded-xl"
                >

                    Reset Password
                </button>

                <p className="mt-4 text-sm text-gray-300">
                    {message}
                </p>

            </form>

        </div>
    )
}

export default ResetPasswordPage