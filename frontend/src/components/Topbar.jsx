import {
    FaBell,
    FaSearch
} from "react-icons/fa"

function Topbar() {

    return (

        <header
            className="
                h-20

                border-b
                border-[#1E293B]

                bg-[#111827]

                flex
                items-center
                justify-between

                px-8
            "
        >

            {/* SEARCH */}

            <div
                className="
                    relative
                    w-[340px]
                "
            >

                <FaSearch
                    className="
                        absolute
                        left-4
                        top-1/2
                        -translate-y-1/2

                        text-[#64748B]
                        text-sm
                    "
                />

                <input
                    type="text"
                    placeholder="Search employees..."

                    className="
                        w-full
                        h-11

                        bg-[#0F172A]

                        border
                        border-[#334155]

                        rounded-xl

                        pl-11
                        pr-4

                        text-sm
                        text-white

                        placeholder:text-[#64748B]

                        outline-none

                        focus:border-[#6366F1]
                        focus:ring-4
                        focus:ring-indigo-500/10

                        transition-all
                        duration-200
                    "
                />

            </div>

            {/* RIGHT SECTION */}

            <div
                className="
                    flex
                    items-center
                    gap-5
                "
            >

                {/* NOTIFICATION */}

                <button
                    className="
                        relative

                        w-11
                        h-11

                        rounded-xl

                        bg-[#0F172A]

                        border
                        border-[#334155]

                        flex
                        items-center
                        justify-center

                        text-[#94A3B8]

                        hover:text-white
                        hover:border-[#475569]

                        transition-all
                        duration-200
                    "
                >

                    <FaBell className="text-sm" />

                    <span
                        className="
                            absolute
                            top-3
                            right-3

                            w-2
                            h-2

                            rounded-full
                            bg-[#6366F1]
                        "
                    ></span>

                </button>

                {/* PROFILE */}

                <div
                    className="
                        flex
                        items-center
                        gap-3
                    "
                >

                    {/* AVATAR */}

                    <div
                        className="
                            w-11
                            h-11

                            rounded-full

                            bg-[#6366F1]

                            flex
                            items-center
                            justify-center

                            text-white
                            font-semibold
                            text-sm
                        "
                    >
                        A
                    </div>

                    {/* USER INFO */}

                    <div>

                        <h3
                            className="
                                text-white
                                font-medium
                                text-sm
                            "
                        >
                            Aditya
                        </h3>

                        <p
                            className="
                                text-[#94A3B8]
                                text-xs
                                mt-0.5
                            "
                        >
                            SUPER_ADMIN
                        </p>

                    </div>

                </div>

            </div>

        </header>
    )
}

export default Topbar