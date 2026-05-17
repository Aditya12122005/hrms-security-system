import {
    FaBell,
    FaSearch,
    FaChevronDown
} from "react-icons/fa"

function Topbar() {
    return (
        <header
            className="
                sticky
                top-0
                z-30
                h-20
                bg-[#0B1120]/80
                backdrop-blur-xl
                border-b
                border-[#1E293B]
                flex
                items-center
                justify-between
                px-8
                transition-all
                duration-300
            "
        >
            {/* SEARCH */}
            <div className="relative w-full max-w-md group">
                <FaSearch
                    className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2
                        text-[#64748B]
                        text-sm
                        group-focus-within:text-indigo-400
                        transition-colors
                        duration-300
                    "
                />
                <input
                    type="text"
                    placeholder="Search employees, departments..."
                    className="
                        w-full
                        h-11
                        bg-[#111827]
                        border
                        border-[#1E293B]
                        rounded-xl
                        pl-11
                        pr-14
                        text-sm
                        text-white
                        placeholder:text-[#64748B]
                        outline-none
                        focus:border-indigo-500/50
                        focus:ring-2
                        focus:ring-indigo-500/20
                        focus:bg-[#1E293B]/50
                        transition-all
                        duration-300
                        shadow-sm
                    "
                />
                {/* Keyboard shortcut hint */}
                <div className="absolute right-3 top-1/2 -translate-y-1/2 hidden md:flex items-center gap-1">
                    <kbd className="px-2 py-1 bg-[#1E293B] border border-[#334155] rounded text-xs text-[#94A3B8] font-mono">⌘</kbd>
                    <kbd className="px-2 py-1 bg-[#1E293B] border border-[#334155] rounded text-xs text-[#94A3B8] font-mono">K</kbd>
                </div>
            </div>

            {/* RIGHT SECTION */}
            <div className="flex items-center gap-6">

                {/* NOTIFICATION */}
                <button
                    className="
                        relative
                        w-11
                        h-11
                        rounded-xl
                        bg-[#111827]
                        border
                        border-[#1E293B]
                        flex
                        items-center
                        justify-center
                        text-[#94A3B8]
                        hover:text-indigo-400
                        hover:bg-indigo-500/10
                        hover:border-indigo-500/30
                        hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]
                        transition-all
                        duration-300
                    "
                >
                    <FaBell className="text-sm" />
                    <span
                        className="
                            absolute
                            top-2.5
                            right-2.5
                            w-2
                            h-2
                            rounded-full
                            bg-red-500
                            shadow-[0_0_8px_rgba(239,68,68,0.8)]
                        "
                    >
                        <span className="absolute inset-0 rounded-full bg-red-500 animate-ping opacity-75"></span>
                    </span>
                </button>

                {/* PROFILE */}
                <div
                    className="
                        flex
                        items-center
                        gap-3
                        pl-6
                        border-l
                        border-[#1E293B]
                        cursor-pointer
                        group
                    "
                >
                    {/* USER INFO */}
                    <div className="hidden md:block text-right">
                        <h3 className="text-white font-medium text-sm group-hover:text-indigo-300 transition-colors">
                            Aditya
                        </h3>
                        <p className="text-[#64748B] text-[10px] font-bold mt-0.5 tracking-wider uppercase">
                            Super Admin
                        </p>
                    </div>

                    {/* AVATAR */}
                    <div
                        className="
                            w-11
                            h-11
                            rounded-xl
                            bg-gradient-to-br
                            from-indigo-500
                            to-purple-500
                            flex
                            items-center
                            justify-center
                            text-white
                            font-bold
                            text-sm
                            shadow-[0_0_10px_rgba(99,102,241,0.3)]
                            group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]
                            group-hover:scale-105
                            transition-all
                            duration-300
                        "
                    >
                        A
                    </div>
                    
                    <FaChevronDown className="text-[#64748B] text-xs ml-1 group-hover:text-white transition-colors" />
                </div>
            </div>
        </header>
    )
}

export default Topbar