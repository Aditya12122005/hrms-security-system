function FeatureCard({ title, description, icon }) {

    return (

        <div
            className="
                group

                bg-[#1E293B]
                border
                border-[#334155]

                rounded-2xl
                p-7

                transition-all
                duration-200

                hover:border-[#6366F1]/40
                hover:bg-[#243244]
            "
        >

            {/* ICON */}

            <div
                className="
                    w-14
                    h-14

                    rounded-xl

                    bg-[#0F172A]
                    border
                    border-[#334155]

                    flex
                    items-center
                    justify-center

                    text-2xl

                    mb-6

                    transition-all
                    duration-200

                    group-hover:border-[#6366F1]/40
                "
            >
                {icon}
            </div>

            {/* TITLE */}

            <h3
                className="
                    text-xl
                    font-semibold
                    tracking-tight

                    text-white

                    mb-3
                "
            >
                {title}
            </h3>

            {/* DESCRIPTION */}

            <p
                className="
                    text-[#94A3B8]
                    leading-7
                    text-sm
                "
            >
                {description}
            </p>

        </div>
    )
}

export default FeatureCard