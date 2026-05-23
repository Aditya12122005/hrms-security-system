import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { FaEnvelope, FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { sendOtp } from "../services/otpService"

function ForgotPasswordPage() {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleSendOtp = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        setError("")
        setMessage("")

        try {
            const response = await sendOtp(email)
            setMessage(response || "OTP sent successfully")
            localStorage.setItem("resetEmail", email)

            // Give user time to read the success message
            setTimeout(() => {
                navigate("/verify-otp")
            }, 1500)
        } catch (err) {
            setError("Failed to send OTP. Please check your email and try again.")
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#0B1120] text-white flex items-center justify-center overflow-hidden relative selection:bg-indigo-500/30">
            {/* AMBIENT GLOWS */}
            <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

            <div className="w-full max-w-md p-6 relative z-10 animate-fade-in-up">

                {/* LOGO */}
                <div className="text-center mb-10">
                    <Link to="/" className="inline-block">
                        <h1 className="text-4xl font-bold tracking-tight hover:scale-105 transition-transform duration-300">
                            <span className="text-white">HRMS</span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                                Pro
                            </span>
                        </h1>
                    </Link>
                </div>

                {/* CARD */}
                <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-2xl shadow-indigo-500/5">

                    {/* HEADER */}
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold tracking-tight text-white mb-2">
                            Forgot Password?
                        </h2>
                        <p className="text-[#94A3B8] text-sm font-medium">
                            Enter your email to receive a secure OTP.
                        </p>
                    </div>

                    {/* ALERTS */}
                    {error && (
                        <div className="mb-6 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-400 flex items-center justify-center gap-3 animate-fade-in">
                            {error}
                        </div>
                    )}
                    {message && (
                        <div className="mb-6 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-400 flex items-center justify-center gap-3 animate-fade-in">
                            {message}
                        </div>
                    )}

                    {/* FORM */}
                    <form onSubmit={handleSendOtp} className="space-y-6">

                        {/* EMAIL */}
                        <div>
                            <label className="block text-sm font-bold text-[#E2E8F0] mb-2">
                                Email Address
                            </label>
                            <div className="relative group">
                                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within:text-indigo-400 transition-colors" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email"
                                    required
                                    className="w-full h-12 bg-[#0F172A] border border-[#334155] rounded-xl pl-11 pr-4 text-sm text-white placeholder:text-[#64748B] outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:bg-[#1E293B]/50 transition-all duration-300"
                                />
                            </div>
                        </div>

                        {/* BUTTON */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full h-12 mt-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                        >
                            {isLoading ? (
                                <span className="animate-pulse">Sending OTP...</span>
                            ) : (
                                <>
                                    Send Verification Code
                                    <FaArrowRight className="text-xs" />
                                </>
                            )}
                        </button>

                    </form>

                    {/* BACK LINK */}
                    <div className="mt-8 text-center">
                        <Link
                            to="/login"
                            className="inline-flex items-center gap-2 text-sm font-bold text-[#64748B] hover:text-indigo-400 transition-colors"
                        >
                            <FaArrowLeft className="text-xs" />
                            Back to Login
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage