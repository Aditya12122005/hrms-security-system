function FeatureCard({ title, description, icon, variant = "dark" }) {
    const isLight = variant === "light"
    return (
        <div
            className={`
                group
                relative
                overflow-hidden
                border
                rounded-3xl
                p-8
                transition-all
                duration-500
                hover:-translate-y-2
                z-10
                ${isLight
                    ? "bg-white border-slate-200 hover:border-orange-300 hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)] shadow-sm"
                    : "bg-[#111827] border-[#334155] hover:border-[#6366F1]/50 hover:shadow-[0_20px_40px_-15px_rgba(99,102,241,0.2)]"
                }
            `}
        >
            {/* HOVER GLOW EFFECT */}
            <div
                className={`
                    absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10
                    ${isLight ? "from-orange-500/5 to-transparent" : "from-[#6366F1]/10 to-transparent"}
                `}
            />

            {/* ICON CONTAINER */}
            <div
                className={`
                    w-16 h-16 rounded-2xl border flex items-center justify-center text-3xl mb-8 transition-all duration-500 group-hover:text-white group-hover:border-transparent group-hover:scale-110 group-hover:-rotate-3
                    ${isLight
                        ? "bg-slate-50 border-slate-200 text-slate-400 group-hover:bg-gradient-to-br group-hover:from-orange-400 group-hover:to-pink-500 group-hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]"
                        : "bg-[#1E293B] border-[#334155] text-[#94A3B8] group-hover:bg-gradient-to-br group-hover:from-indigo-500 group-hover:to-purple-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.4)]"
                    }
                `}
            >
                {icon}
            </div>

            {/* TITLE */}
            <h3
                className={`
                    text-2xl font-bold tracking-tight mb-4 transition-colors duration-300
                    ${isLight ? "text-slate-900 group-hover:text-orange-500" : "text-white group-hover:text-indigo-400"}
                `}
            >
                {title}
            </h3>

            {/* DESCRIPTION */}
            <p
                className={`
                    leading-relaxed font-medium text-sm
                    ${isLight ? "text-slate-600" : "text-[#94A3B8]"}
                `}
            >
                {description}
            </p>
        </div>
    )
}

export default FeatureCard