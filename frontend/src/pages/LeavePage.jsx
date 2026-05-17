import {

    useEffect,
    useState

} from "react"

import {

    applyLeave,
    getLeaves,
    approveLeave

} from "../services/leaveService"

function LeavePage() {

    const [leaves,
        setLeaves] = useState([])

    useEffect(() => {

        fetchLeaves()

    }, [])

    const fetchLeaves = async () => {

        try {

            const data =
                await getLeaves()

            setLeaves(data)

        } catch (error) {

            console.log(error)
        }
    }

    const handleApplyLeave =
        async () => {

            try {

                await applyLeave(

                    4,

                    {
                        startDate:
                            "2026-05-20",

                        endDate:
                            "2026-05-25",

                        reason:
                            "Family Vacation"
                    }
                )

                fetchLeaves()

            } catch (error) {

                console.log(error)
            }
        }

    const handleApproveLeave =
        async (leaveId) => {

            try {

                await approveLeave(
                    leaveId
                )

                fetchLeaves()

            } catch (error) {

                console.log(error)
            }
        }

    return (

        <div className="p-10 text-white">

            {/* HEADER */}

            <div
                className="
                    flex
                    items-center
                    justify-between

                    mb-10
                "
            >

                <div>

                    <h1
                        className="
                            text-5xl
                            font-bold
                        "
                    >
                        Leave Management
                    </h1>

                    <p
                        className="
                            text-slate-400
                            mt-3
                            text-lg
                        "
                    >
                        Manage employee leave
                        requests.
                    </p>

                </div>

                <button

                    onClick={
                        handleApplyLeave
                    }

                    className="
                        px-6
                        h-12

                        rounded-2xl

                        bg-gradient-to-r
                        from-indigo-500
                        to-purple-600

                        font-semibold

                        hover:scale-105

                        transition-all
                    "
                >

                    Apply Leave

                </button>

            </div>

            {/* TABLE */}

            <div
                className="
                    bg-slate-900/60

                    border
                    border-white/10

                    rounded-3xl

                    overflow-hidden
                "
            >

                <table className="w-full">

                    <thead
                        className="
                            bg-white/5
                        "
                    >

                        <tr>

                            <th className="p-6 text-left">
                                Employee
                            </th>

                            <th className="p-6 text-left">
                                Start Date
                            </th>

                            <th className="p-6 text-left">
                                End Date
                            </th>

                            <th className="p-6 text-left">
                                Reason
                            </th>

                            <th className="p-6 text-left">
                                Status
                            </th>

                            <th className="p-6 text-left">
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {leaves.map((leave) => (

                            <tr

                                key={leave.id}

                                className="
                                    border-t
                                    border-white/5
                                "
                            >

                                <td className="p-6">

                                    {
                                        leave.employee
                                            ?.firstName
                                    }

                                </td>

                                <td className="p-6">

                                    {leave.startDate}

                                </td>

                                <td className="p-6">

                                    {leave.endDate}

                                </td>

                                <td className="p-6">

                                    {leave.reason}

                                </td>

                                <td className="p-6">

                                    <span
                                        className="
                                            px-4
                                            py-2

                                            rounded-xl

                                            bg-yellow-500/20

                                            text-yellow-400

                                            text-sm
                                            font-semibold
                                        "
                                    >

                                        {leave.status}

                                    </span>

                                </td>

                                <td className="p-6">

                                    {leave.status ===
                                        "PENDING" && (

                                        <button

                                            onClick={() =>
                                                handleApproveLeave(
                                                    leave.id
                                                )
                                            }

                                            className="
                                                px-5
                                                h-10

                                                rounded-xl

                                                bg-emerald-500/20

                                                text-emerald-400

                                                hover:bg-emerald-500/30

                                                transition-all
                                            "
                                        >

                                            Approve

                                        </button>
                                    )}

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default LeavePage