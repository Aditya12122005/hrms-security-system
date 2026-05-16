import Navbar from "../components/Navbar"
import FeatureCard from "../components/FeatureCard"
import Footer from "../components/Footer"

function LandingPage() {

    return (

        <div className="min-h-screen bg-[#0F172A] text-white">

            {/* NAVBAR */}

            <Navbar />

            {/* HERO SECTION */}

            <section
                className="
                    relative
                    overflow-hidden
                "
            >

                <div
                    className="
                        max-w-7xl
                        mx-auto

                        px-6
                        py-28
                    "
                >

                    <div
                        className="
                            grid
                            grid-cols-1
                            lg:grid-cols-2

                            gap-16

                            items-center
                        "
                    >

                        {/* LEFT CONTENT */}

                        <div>

                            {/* BADGE */}

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

                            {/* HEADING */}

                            <h1
                                className="
                                    text-5xl
                                    lg:text-6xl

                                    font-semibold

                                    tracking-tight

                                    leading-[1.1]
                                "
                            >
                                Manage your workforce from one secure platform.
                            </h1>

                            {/* DESCRIPTION */}

                            <p
                                className="
                                    mt-6

                                    text-[#94A3B8]
                                    text-lg

                                    leading-8

                                    max-w-2xl
                                "
                            >
                                Streamline employee management, payroll,
                                attendance and workforce operations with a
                                scalable enterprise HRMS platform.
                            </p>

                            {/* BUTTONS */}

                            <div
                                className="
                                    flex
                                    flex-col
                                    sm:flex-row

                                    gap-4

                                    mt-10
                                "
                            >

                                <button
                                    className="
                                        h-12

                                        px-6

                                        rounded-xl

                                        bg-[#6366F1]
                                        hover:bg-[#4F46E5]

                                        text-white
                                        font-medium

                                        transition-all
                                        duration-200
                                    "
                                >
                                    Get Started
                                </button>

                                <button
                                    className="
                                        h-12

                                        px-6

                                        rounded-xl

                                        border
                                        border-[#334155]

                                        text-[#E2E8F0]
                                        font-medium

                                        hover:bg-[#1E293B]

                                        transition-all
                                        duration-200
                                    "
                                >
                                    View Demo
                                </button>

                            </div>

                        </div>

                        {/* RIGHT DASHBOARD PREVIEW */}

                        <div
                            className="
                                relative
                            "
                        >

                            <div
                                className="
                                    bg-[#111827]

                                    border
                                    border-[#334155]

                                    rounded-3xl

                                    p-6
                                "
                            >

                                {/* TOP */}

                                <div
                                    className="
                                        flex
                                        items-center
                                        justify-between

                                        mb-8
                                    "
                                >

                                    <div>

                                        <h3
                                            className="
                                                text-lg
                                                font-semibold
                                            "
                                        >
                                            Workforce Overview
                                        </h3>

                                        <p
                                            className="
                                                text-sm
                                                text-[#94A3B8]

                                                mt-1
                                            "
                                        >
                                            Organization analytics dashboard
                                        </p>

                                    </div>

                                    <div
                                        className="
                                            px-3
                                            py-1

                                            rounded-full

                                            bg-[#6366F1]/10

                                            text-[#818CF8]
                                            text-xs
                                            font-medium
                                        "
                                    >
                                        Live
                                    </div>

                                </div>

                                {/* STATS */}

                                <div
                                    className="
                                        grid
                                        grid-cols-2

                                        gap-4
                                    "
                                >

                                    <PreviewCard
                                        title="Employees"
                                        value="10,248"
                                    />

                                    <PreviewCard
                                        title="Departments"
                                        value="24"
                                    />

                                    <PreviewCard
                                        title="Attendance"
                                        value="96%"
                                    />

                                    <PreviewCard
                                        title="Payroll"
                                        value="$240K"
                                    />

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* STATS SECTION */}

            <section
                className="
                    border-y
                    border-[#1E293B]

                    bg-[#111827]
                "
            >

                <div
                    className="
                        max-w-7xl
                        mx-auto

                        px-6
                        py-14
                    "
                >

                    <div
                        className="
                            grid
                            grid-cols-2
                            md:grid-cols-4

                            gap-10
                        "
                    >

                        <StatItem
                            value="10K+"
                            label="Employees Managed"
                        />

                        <StatItem
                            value="500+"
                            label="Organizations"
                        />

                        <StatItem
                            value="99.9%"
                            label="Platform Reliability"
                        />

                        <StatItem
                            value="24/7"
                            label="System Availability"
                        />

                    </div>

                </div>

            </section>

            {/* FEATURES */}

            <section
                id="features"

                className="
                    max-w-7xl
                    mx-auto

                    px-6
                    py-24
                "
            >

                {/* HEADER */}

                <div className="mb-16">

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

                            mb-6
                        "
                    >
                        Platform Features
                    </div>

                    <h2
                        className="
                            text-4xl
                            font-semibold

                            tracking-tight
                        "
                    >
                        Everything your HR team needs
                    </h2>

                    <p
                        className="
                            text-[#94A3B8]

                            text-lg

                            mt-5

                            max-w-3xl

                            leading-8
                        "
                    >
                        Built for modern organizations with secure
                        infrastructure, workforce analytics and scalable
                        enterprise architecture.
                    </p>

                </div>

                {/* FEATURE GRID */}

                <div
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        lg:grid-cols-3

                        gap-6
                    "
                >

                    <FeatureCard
                        icon="👨‍💼"
                        title="Employee Management"
                        description="Manage employee records, departments, onboarding and workforce operations from one centralized dashboard."
                    />

                    <FeatureCard
                        icon="🔐"
                        title="Secure Authentication"
                        description="JWT authentication and enterprise-grade access control for secure workforce management."
                    />

                    <FeatureCard
                        icon="📊"
                        title="Analytics Dashboard"
                        description="Monitor workforce performance, attendance and operational insights in real time."
                    />

                    <FeatureCard
                        icon="💰"
                        title="Payroll Management"
                        description="Simplify salary processing, compensation management and payroll operations."
                    />

                    <FeatureCard
                        icon="📅"
                        title="Attendance Tracking"
                        description="Track attendance, leaves and workforce schedules with streamlined workflows."
                    />

                    <FeatureCard
                        icon="⚡"
                        title="Scalable Architecture"
                        description="Built using React, Spring Boot and PostgreSQL with enterprise-ready architecture."
                    />

                </div>

            </section>

            {/* FOOTER */}

            <Footer />

        </div>
    )
}

function PreviewCard({
    title,
    value
}) {

    return (

        <div
            className="
                bg-[#1E293B]

                border
                border-[#334155]

                rounded-2xl

                p-5
            "
        >

            <p
                className="
                    text-sm
                    text-[#94A3B8]
                "
            >
                {title}
            </p>

            <h3
                className="
                    text-2xl
                    font-semibold

                    mt-3
                "
            >
                {value}
            </h3>

        </div>
    )
}

function StatItem({
    value,
    label
}) {

    return (

        <div>

            <h3
                className="
                    text-3xl
                    font-semibold

                    text-white
                "
            >
                {value}
            </h3>

            <p
                className="
                    text-[#94A3B8]

                    text-sm

                    mt-3
                "
            >
                {label}
            </p>

        </div>
    )
}

export default LandingPage