import { Link } from "react-router-dom"
import Navbar from "../components/Navbar"
import FeatureCard from "../components/FeatureCard"
import Footer from "../components/Footer"

function LandingPage() {
    return (
        <div className="min-h-screen bg-white text-slate-900 selection:bg-orange-500/30 overflow-hidden relative">
            
            {/* AMBIENT BACKGROUND GLOWS */}
            <div className="absolute top-[-20%] left-[-10%] w-[1000px] h-[1000px] bg-orange-300/30 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute bottom-[20%] right-[-10%] w-[800px] h-[800px] bg-pink-300/30 blur-[150px] rounded-full pointer-events-none" />
            <div className="absolute top-[40%] left-[50%] w-[600px] h-[600px] bg-yellow-300/20 blur-[120px] rounded-full pointer-events-none translate-x-[-50%]" />

            {/* NAVBAR */}
            <div className="relative z-50">
                <Navbar />
            </div>

            {/* HERO SECTION */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
                <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                        
                        {/* LEFT CONTENT */}
                        <div className="animate-fade-in-up">
                            {/* BADGE */}
                            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-sm font-bold tracking-wide mb-8 hover:bg-orange-100 transition-colors cursor-pointer group shadow-sm shadow-orange-500/5">
                                <span className="relative flex h-2.5 w-2.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
                                </span>
                                Next-Gen Enterprise Platform
                                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>

                            {/* HEADING */}
                            <h1 className="text-5xl lg:text-7xl xl:text-[5.5rem] font-extrabold tracking-tight leading-[1.1] mb-8 text-slate-900">
                                Manage your workforce with{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-red-500 to-pink-500">
                                    Antigravity
                                </span>
                            </h1>

                            {/* DESCRIPTION */}
                            <p className="text-slate-600 text-lg lg:text-2xl leading-relaxed max-w-2xl mb-12 font-medium">
                                Streamline employee management, payroll, attendance, and global workforce operations with our seamlessly integrated, zero-friction HRMS platform.
                            </p>

                            {/* BUTTONS */}
                            <div className="flex flex-col sm:flex-row gap-5">
                                <Link to="/dashboard">
                                    <button className="h-16 px-10 w-full sm:w-auto rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold text-lg hover:shadow-[0_0_40px_rgba(249,115,22,0.4)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3">
                                        Open Dashboard
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </Link>
                                <button className="h-16 px-10 w-full sm:w-auto rounded-2xl bg-white border-2 border-slate-200 text-slate-700 font-bold text-lg hover:bg-slate-50 hover:border-orange-300 hover:text-orange-600 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                                    View Live Demo
                                </button>
                            </div>
                        </div>

                        {/* RIGHT DASHBOARD PREVIEW */}
                        <div className="relative lg:h-[700px] flex items-center justify-center">
                            {/* Decorative Glow behind dashboard */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-yellow-300/40 via-orange-300/40 to-pink-300/40 blur-[100px] rounded-[3rem]" />
                            
                            {/* Dashboard Mockup Container */}
                            <div className="relative w-full bg-white/60 backdrop-blur-2xl border border-white rounded-[2.5rem] p-3 shadow-2xl shadow-orange-500/10 transform lg:rotate-[-2deg] hover:rotate-0 transition-transform duration-700 group">
                                
                                {/* Mockup Topbar */}
                                <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-sm">
                                    <div className="flex items-center justify-between mb-10">
                                        <div className="flex items-center gap-5">
                                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center shadow-lg shadow-orange-500/30">
                                                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-slate-900">System Overview</h3>
                                                <p className="text-md text-slate-500 font-medium">Live Organization Analytics</p>
                                            </div>
                                        </div>
                                        <div className="px-5 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-bold uppercase tracking-wider flex items-center gap-2 shadow-sm animate-pulse">
                                            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                                            Online
                                        </div>
                                    </div>

                                    {/* Stats Grid inside Mockup */}
                                    <div className="grid grid-cols-2 gap-5">
                                        <PreviewCard title="Total Workforce" value="10,248" trend="+12%" />
                                        <PreviewCard title="Active Departments" value="24" trend="Optimal" />
                                        <PreviewCard title="Global Attendance" value="98.2%" trend="+0.4%" />
                                        <PreviewCard title="Monthly Payroll" value="$2.4M" trend="Processed" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* STATS DIVIDER SECTION */}
            <section className="relative border-y border-slate-200 bg-slate-50/50 backdrop-blur-md overflow-hidden z-10">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/5 to-transparent" />
                <div className="w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24 py-20 relative">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 divide-x divide-slate-200">
                        <StatItem value="10K+" label="Employees Managed" />
                        <StatItem value="99.9%" label="Platform Uptime" />
                        <StatItem value="24/7" label="Global Support" />
                        <StatItem value="50ms" label="Avg. Latency" />
                    </div>
                </div>
            </section>

            {/* FEATURES */}
            <section id="features" className="relative w-full max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-24 py-32 z-10">
                {/* HEADER */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <div className="inline-flex items-center px-5 py-2 rounded-full bg-pink-50 border border-pink-200 text-pink-600 text-sm font-bold uppercase tracking-widest mb-8 shadow-sm">
                        Core Capabilities
                    </div>
                    <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-8 text-slate-900">
                        Everything your HR team needs, <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-orange-500">built for the future.</span>
                    </h2>
                    <p className="text-slate-600 text-xl leading-relaxed font-medium">
                        Constructed on secure, scalable enterprise architecture, our platform provides real-time analytics and frictionless operations.
                    </p>
                </div>

                {/* FEATURE GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <FeatureCard
                        variant="light"
                        icon="👩‍💻"
                        title="Employee Directory"
                        description="Centralized, real-time database for managing employee records, onboarding, and departmental structures."
                    />
                    <FeatureCard
                        variant="light"
                        icon="🔐"
                        title="Zero-Trust Security"
                        description="Military-grade JWT authentication and role-based access control protecting your most sensitive HR data."
                    />
                    <FeatureCard
                        variant="light"
                        icon="📈"
                        title="Antigravity Analytics"
                        description="Beautiful, interactive dashboards providing instant insights into workforce performance and attendance metrics."
                    />
                    <FeatureCard
                        variant="light"
                        icon="💸"
                        title="Automated Payroll"
                        description="Streamlined salary processing, compensation adjustments, and automated financial reporting workflows."
                    />
                    <FeatureCard
                        variant="light"
                        icon="⏱️"
                        title="Smart Attendance"
                        description="Frictionless time-tracking, leave management, and automated scheduling systems."
                    />
                    <FeatureCard
                        variant="light"
                        icon="⚡"
                        title="Infinite Scalability"
                        description="Engineered with React, Spring Boot, and PostgreSQL to handle organizations of any size without breaking a sweat."
                    />
                </div>
            </section>

            {/* FOOTER */}
            <div className="relative z-50">
                <Footer />
            </div>
        </div>
    )
}

function PreviewCard({ title, value, trend }) {
    return (
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-orange-300 hover:bg-white hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group cursor-pointer">
            <div className="flex justify-between items-start mb-4">
                <p className="text-sm font-bold text-slate-500 group-hover:text-orange-500 transition-colors uppercase tracking-wide">
                    {title}
                </p>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-100 px-3 py-1.5 rounded-lg shadow-sm">
                    {trend}
                </span>
            </div>
            <h3 className="text-4xl font-extrabold text-slate-900 group-hover:scale-105 origin-left transition-transform duration-300">
                {value}
            </h3>
        </div>
    )
}

function StatItem({ value, label }) {
    return (
        <div className="text-center group cursor-default px-6">
            <h3 className="text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-slate-900 to-slate-500 group-hover:to-orange-500 transition-all duration-500 mb-4">
                {value}
            </h3>
            <p className="text-slate-500 text-sm font-bold uppercase tracking-widest group-hover:text-slate-900 transition-colors duration-300">
                {label}
            </p>
        </div>
    )
}

export default LandingPage