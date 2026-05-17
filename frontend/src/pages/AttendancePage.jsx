import {

    useEffect,
    useState

} from "react"

import {

    getAttendance,
    checkInEmployee,
    checkOutEmployee

} from "../services/attendanceService"

function AttendancePage() {

    const [attendance,
        setAttendance] = useState([])

    useEffect(() => {

        fetchAttendance()

    }, [])

    const fetchAttendance = async () => {

        try {

            const data =
                await getAttendance()

            setAttendance(data)

        } catch (error) {

            console.log(error)
        }
    }

    const handleCheckIn =
        async () => {

            try {

                await checkInEmployee(4)

                fetchAttendance()

            } catch (error) {

                console.log(error)
            }
        }

    const handleCheckOut =
        async (attendanceId) => {

            try {

                await checkOutEmployee(
                    attendanceId
                )

                fetchAttendance()

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

                            tracking-tight

                            text-white
                        "
                    >
                        Attendance
                    </h1>

                    <p
                        className="
                            text-slate-400
                            mt-3
                            text-lg
                        "
                    >
                        Monitor employee check-ins
                        and attendance activity.
                    </p>

                </div>

                <button

                    onClick={handleCheckIn}

                    className="
                        px-7
                        h-12

                        rounded-2xl

                        bg-gradient-to-r
                        from-indigo-500
                        to-purple-600

                        text-white
                        font-semibold

                        shadow-lg
                        shadow-indigo-500/30

                        hover:scale-105

                        transition-all
                        duration-300
                    "
                >

                    Check In

                </button>

            </div>

            {/* TABLE */}

            <div
                className="
                    bg-slate-900/60

                    backdrop-blur-xl

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

                            border-b
                            border-white/10
                        "
                    >

                        <tr>

                            <th
                                className="
                                    p-6
                                    text-left

                                    text-slate-300
                                    font-semibold
                                "
                            >
                                Employee
                            </th>

                            <th
                                className="
                                    p-6
                                    text-left

                                    text-slate-300
                                    font-semibold
                                "
                            >
                                Check In
                            </th>

                            <th
                                className="
                                    p-6
                                    text-left

                                    text-slate-300
                                    font-semibold
                                "
                            >
                                Check Out
                            </th>

                            <th
                                className="
                                    p-6
                                    text-left

                                    text-slate-300
                                    font-semibold
                                "
                            >
                                Status
                            </th>

                            <th
                                className="
                                    p-6
                                    text-left

                                    text-slate-300
                                    font-semibold
                                "
                            >
                                Action
                            </th>

                        </tr>

                    </thead>

                    <tbody>

                        {attendance.map((item) => (

                            <tr
                                key={item.id}

                                className="
                                    border-t
                                    border-white/5

                                    hover:bg-white/5

                                    transition-all
                                "
                            >

                                <td
                                    className="
                                        p-6

                                        text-white
                                        font-medium
                                    "
                                >

                                    {
                                        item.employee
                                            ?.firstName
                                    }

                                </td>

                                <td
                                    className="
                                        p-6

                                        text-slate-300
                                    "
                                >

                                    {
                                        item.checkIn
                                    }

                                </td>

                                <td
                                    className="
                                        p-6

                                        text-slate-300
                                    "
                                >

                                    {
                                        item.checkOut ||

                                        "Not Checked Out"
                                    }

                                </td>

                                <td className="p-6">

                                    <span
                                        className="
                                            px-4
                                            py-2

                                            rounded-xl

                                            bg-emerald-500/20

                                            text-emerald-400

                                            text-sm
                                            font-semibold
                                        "
                                    >

                                        {
                                            item.status
                                        }

                                    </span>

                                </td>

                                <td className="p-6">

                                    {
                                        !item.checkOut && (

                                            <button

                                                onClick={() =>
                                                    handleCheckOut(
                                                        item.id
                                                    )
                                                }

                                                className="
                                                    px-5
                                                    h-10

                                                    rounded-xl

                                                    bg-red-500/20

                                                    text-red-400

                                                    hover:bg-red-500/30

                                                    transition-all
                                                "
                                            >

                                                Check Out

                                            </button>
                                        )
                                    }

                                </td>

                            </tr>
                        ))}

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default AttendancePage