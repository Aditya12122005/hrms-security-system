import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { FaUser, FaLock, FaArrowRight } from "react-icons/fa"
import { loginUser } from "../services/authService"

function LoginPage() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: "",
        password: ""
    })
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        if (error) setError("") // clear error when typing
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        try {
            const response = await loginUser(formData)
            localStorage.setItem("token", response.token)
            localStorage.setItem("role", response.role)
            navigate("/dashboard")
        } catch (err) {
            setError("Invalid username or password")
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#0B1120] text-white flex overflow-hidden relative selection:bg-indigo-500/30">
            {/* AMBIENT BACKGROUND GLOWS */}
            <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-500/10 blur-[150px] rounded-full pointer-events-none" />

            {/* LEFT SIDE (Branding) */}
            <div className="hidden lg:flex flex-1 flex-col justify-between p-12 relative z-10 border-r border-white/5 bg-[#0F172A]/50 backdrop-blur-sm">
                {/* LOGO */}
                <Link to="/" className="inline-block">
                    <h1 className="text-3xl font-bold tracking-tight hover:scale-105 origin-left transition-transform duration-300">
                        <span className="text-white">HRMS</span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Pro</span>
                    </h1>
                </Link>

                {/* HERO CONTENT */}
                <div className="max-w-xl animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-semibold mb-8">
                        <div className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                        Secure Access Portal
                    </div>

                    <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1]">
                        Welcome back to the{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                            Future of Work
                        </span>
                    </h2>

                    <p className="mt-6 text-[#94A3B8] text-lg leading-relaxed max-w-md">
                        Access your centralized enterprise dashboard to manage workforce operations, analytics, and payroll.
                    </p>
                </div>

                {/* FOOTER TEXT */}
                <div>
                    <p className="text-sm font-medium text-[#64748B]">
                        © 2026 HRMS Pro. All rights reserved. <br />
                        Secured by Antigravity Infrastructure
                    </p>
                </div>
            </div>

            {/* RIGHT SIDE (Login Form) */}
            <div className="flex-1 flex items-center justify-center p-6 relative z-10">
                <div className="w-full max-w-md">
                    {/* MOBILE LOGO */}
                    <div className="lg:hidden text-center mb-10">
                        <Link to="/" className="inline-block">
                            <h1 className="text-4xl font-bold tracking-tight">
                                <span className="text-white">HRMS</span>
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Pro</span>
                            </h1>
                        </Link>
                    </div>

                    {/* LOGIN CARD */}
                    <div className="bg-[#111827]/80 backdrop-blur-xl border border-white/10 rounded-[2rem] p-8 lg:p-10 shadow-2xl shadow-indigo-500/5 animate-fade-in">
                        {/* HEADER */}
                        <div className="mb-8">
                            <h2 className="text-3xl font-bold tracking-tight text-white">Sign In</h2>
                            <p className="text-[#94A3B8] mt-2 text-sm font-medium">
                                Enter your credentials to access the system.
                            </p>
                        </div>

                        {/* ERROR ALERT */}
                        {error && (
                            <div className="mb-6 rounded-xl border border-rose-500/30 bg-rose-500/10 px-4 py-3 text-sm font-medium text-rose-400 flex items-center gap-3 animate-fade-in">
                                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {error}
                            </div>
                        )}

                        {/* FORM */}
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* USERNAME */}
                            <div>
                                <label className="block text-sm font-bold text-[#E2E8F0] mb-2">
                                    Username
                                </label>
                                <div className="relative group">
                                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within:text-indigo-400 transition-colors" />
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Enter your username"
                                        required
                                        className="w-full h-12 bg-[#0F172A] border border-[#334155] rounded-xl pl-11 pr-4 text-sm text-white placeholder:text-[#64748B] outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:bg-[#1E293B]/50 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* PASSWORD */}
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label className="block text-sm font-bold text-[#E2E8F0]">
                                        Password
                                    </label>
                                    <a href="#" className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition-colors">
                                        Forgot Password?
                                    </a>
                                </div>
                                <div className="relative group">
                                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-[#64748B] group-focus-within:text-indigo-400 transition-colors" />
                                    <input
                                        type="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        placeholder="••••••••"
                                        required
                                        className="w-full h-12 bg-[#0F172A] border border-[#334155] rounded-xl pl-11 pr-4 text-sm text-white placeholder:text-[#64748B] tracking-widest outline-none focus:border-indigo-500/50 focus:ring-4 focus:ring-indigo-500/10 focus:bg-[#1E293B]/50 transition-all duration-300"
                                    />
                                </div>
                            </div>

                            {/* SUBMIT BUTTON */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full h-12 mt-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
                            >
                                {isLoading ? (
                                    <span className="animate-pulse">Authenticating...</span>
                                ) : (
                                    <>
                                        Sign In
                                        <FaArrowRight className="text-xs" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage