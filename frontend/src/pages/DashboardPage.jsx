function DashboardPage() {

    const stats = [

        {
            title: "Total Employees",
            value: "245",
            change: "+12%"
        },

        {
            title: "Departments",
            value: "12",
            change: "+2"
        },

        {
            title: "Monthly Payroll",
            value: "$125K",
            change: "+8%"
        },

        {
            title: "Attendance Rate",
            value: "96%",
            change: "+1.4%"
        }

    ]

    return (

        <div>

            {/* PAGE HEADER */}

            <div className="mb-10">

                <h1
                    className="
                        text-3xl
                        font-semibold
                        tracking-tight
                        text-white
                    "
                >
                    Dashboard
                </h1>

                <p
                    className="
                        text-[#94A3B8]
                        mt-2
                        text-sm
                    "
                >
                    Monitor workforce insights, employee activity and company operations.
                </p>

            </div>

            {/* STATS GRID */}

            <div
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    xl:grid-cols-4

                    gap-6
                "
            >

                {
                    stats.map((item, index) => (

                        <DashboardCard
                            key={index}
                            title={item.title}
                            value={item.value}
                            change={item.change}
                        />

                    ))
                }

            </div>

            {/* SECOND SECTION */}

            <div
                className="
                    grid
                    grid-cols-1
                    xl:grid-cols-3

                    gap-6

                    mt-8
                "
            >

                {/* ACTIVITY */}

                <div
                    className="
                        xl:col-span-2

                        bg-[#1E293B]

                        border
                        border-[#334155]

                        rounded-2xl

                        p-6
                    "
                >

                    <div className="mb-6">

                        <h2
                            className="
                                text-lg
                                font-semibold
                                text-white
                            "
                        >
                            Recent Activity
                        </h2>

                        <p
                            className="
                                text-[#94A3B8]
                                text-sm
                                mt-1
                            "
                        >
                            Latest workforce updates and HR operations.
                        </p>

                    </div>

                    <div className="space-y-5">

                        <ActivityItem
                            title="New employee onboarding completed"
                            time="2 hours ago"
                        />

                        <ActivityItem
                            title="Payroll processed for May 2026"
                            time="5 hours ago"
                        />

                        <ActivityItem
                            title="Attendance report generated"
                            time="Yesterday"
                        />

                    </div>

                </div>

                {/* QUICK STATS */}

                <div
                    className="
                        bg-[#1E293B]

                        border
                        border-[#334155]

                        rounded-2xl

                        p-6
                    "
                >

                    <h2
                        className="
                            text-lg
                            font-semibold
                            text-white
                        "
                    >
                        Quick Insights
                    </h2>

                    <div className="mt-6 space-y-6">

                        <InsightItem
                            label="Remote Employees"
                            value="48%"
                        />

                        <InsightItem
                            label="Open Positions"
                            value="14"
                        />

                        <InsightItem
                            label="Leave Requests"
                            value="6"
                        />

                    </div>

                </div>

            </div>

        </div>
    )
}

function DashboardCard({
    title,
    value,
    change
}) {

    return (

        <div
            className="
                bg-[#1E293B]

                border
                border-[#334155]

                rounded-2xl

                p-6

                hover:border-[#475569]

                transition-all
                duration-200
            "
        >

            <div
                className="
                    flex
                    items-start
                    justify-between
                "
            >

                <div>

                    <p
                        className="
                            text-sm
                            text-[#94A3B8]
                        "
                    >
                        {title}
                    </p>

                    <h2
                        className="
                            text-3xl
                            font-semibold
                            text-white

                            mt-3
                        "
                    >
                        {value}
                    </h2>

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
                    {change}
                </div>

            </div>

        </div>
    )
}

function ActivityItem({
    title,
    time
}) {

    return (

        <div
            className="
                flex
                items-start
                justify-between

                pb-5

                border-b
                border-[#334155]
            "
        >

            <div>

                <h3
                    className="
                        text-sm
                        font-medium
                        text-white
                    "
                >
                    {title}
                </h3>

                <p
                    className="
                        text-xs
                        text-[#94A3B8]

                        mt-1
                    "
                >
                    {time}
                </p>

            </div>

        </div>
    )
}

function InsightItem({
    label,
    value
}) {

    return (

        <div
            className="
                flex
                items-center
                justify-between
            "
        >

            <p
                className="
                    text-sm
                    text-[#94A3B8]
                "
            >
                {label}
            </p>

            <span
                className="
                    text-white
                    font-semibold
                "
            >
                {value}
            </span>

        </div>
    )
}

export default DashboardPage