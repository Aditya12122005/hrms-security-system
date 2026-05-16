import { useEffect, useState } from "react"

import {
    getEmployees,
    deleteEmployee
} from "../services/employeeService"

import AddEmployeeModal from "../components/AddEmployeeModal"

function EmployeesPage() {

    const [employees, setEmployees] = useState([])

    const [searchTerm, setSearchTerm] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {

        fetchEmployees()

    }, [])

    const fetchEmployees = async () => {

        try {

            const data = await getEmployees()

            setEmployees(data)

        } catch (error) {

            console.log(error)
        }
    }

    const handleDelete = async (id) => {

        try {

            await deleteEmployee(id)

            fetchEmployees()

        } catch (error) {

            console.log(error)
        }
    }

    const filteredEmployees = employees.filter((employee) =>

        `${employee.firstName} ${employee.lastName}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())

        ||

        employee.department
            .toLowerCase()
            .includes(searchTerm.toLowerCase())

        ||

        employee.role
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    )

    return (

        <div className="w-full max-w-7xl mx-auto">

            {/* HEADER */}

            <div
                className="
                    flex
                    flex-col
                    md:flex-row

                    md:items-center
                    md:justify-between

                    gap-6

                    mb-8
                "
            >

                <div>

                    <h1
                        className="
                            text-3xl
                            font-semibold
                            tracking-tight
                            text-white
                        "
                    >
                        Employees
                    </h1>

                    <p
                        className="
                            text-[#94A3B8]
                            mt-2
                            text-sm
                        "
                    >
                        Manage employees, departments and workforce operations.
                    </p>

                </div>

                <button

                    onClick={() => setIsModalOpen(true)}

                    className="
                        h-11

                        px-5

                        rounded-xl

                        bg-[#6366F1]
                        hover:bg-[#4F46E5]

                        text-white
                        text-sm
                        font-medium

                        transition-all
                        duration-200
                    "
                >
                    Add Employee
                </button>

            </div>

            {/* SEARCH */}

            <div className="mb-6">

                <input
                    type="text"

                    placeholder="Search employees..."

                    value={searchTerm}

                    onChange={(e) =>
                        setSearchTerm(e.target.value)
                    }

                    className="
                        w-full
                        md:w-[320px]

                        h-11

                        bg-[#111827]

                        border
                        border-[#334155]

                        rounded-xl

                        px-4

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

            {/* TABLE */}

            <div
                className="
                    overflow-hidden

                    bg-[#1E293B]

                    border
                    border-[#334155]

                    rounded-2xl
                "
            >

                <table className="w-full">

                    {/* TABLE HEADER */}

                    <thead
                        className="
                            bg-[#111827]

                            border-b
                            border-[#334155]
                        "
                    >

                        <tr>

                            <th
                                className="
                                    p-5

                                    text-left

                                    text-sm
                                    font-semibold

                                    text-white
                                "
                            >
                                Employee
                            </th>

                            <th
                                className="
                                    p-5

                                    text-left

                                    text-sm
                                    font-semibold

                                    text-white
                                "
                            >
                                Department
                            </th>

                            <th
                                className="
                                    p-5

                                    text-left

                                    text-sm
                                    font-semibold

                                    text-white
                                "
                            >
                                Role
                            </th>

                            <th
                                className="
                                    p-5

                                    text-left

                                    text-sm
                                    font-semibold

                                    text-white
                                "
                            >
                                Salary
                            </th>

                            <th
                                className="
                                    p-5

                                    text-left

                                    text-sm
                                    font-semibold

                                    text-white
                                "
                            >
                                Actions
                            </th>

                        </tr>

                    </thead>

                    {/* TABLE BODY */}

                    <tbody>

                        {
                            filteredEmployees.map((employee) => (

                                <tr
                                    key={employee.id}

                                    className="
                                        border-b
                                        border-[#334155]

                                        hover:bg-white/5

                                        transition-all
                                        duration-200
                                    "
                                >

                                    {/* EMPLOYEE */}

                                    <td className="p-5">

                                        <div
                                            className="
                                                flex
                                                items-center
                                                gap-4
                                            "
                                        >

                                            {/* AVATAR */}

                                            <div
                                                className="
                                                    w-10
                                                    h-10

                                                    rounded-full

                                                    bg-[#6366F1]/15

                                                    flex
                                                    items-center
                                                    justify-center

                                                    text-[#818CF8]
                                                    text-sm
                                                    font-semibold
                                                "
                                            >

                                                {
                                                    employee.firstName?.charAt(0)
                                                }

                                            </div>

                                            {/* INFO */}

                                            <div>

                                                <h3
                                                    className="
                                                        text-sm
                                                        font-medium
                                                        text-white
                                                    "
                                                >
                                                    {employee.firstName}
                                                    {" "}
                                                    {employee.lastName}
                                                </h3>

                                            </div>

                                        </div>

                                    </td>

                                    {/* DEPARTMENT */}

                                    <td
                                        className="
                                            p-5

                                            text-sm
                                            text-[#94A3B8]
                                        "
                                    >
                                        {employee.department}
                                    </td>

                                    {/* ROLE */}

                                    <td
                                        className="
                                            p-5

                                            text-sm
                                            text-[#94A3B8]
                                        "
                                    >
                                        {employee.role}
                                    </td>

                                    {/* SALARY */}

                                    <td
                                        className="
                                            p-5

                                            text-sm
                                            font-medium

                                            text-white
                                        "
                                    >
                                        ₹{employee.salary}
                                    </td>

                                    {/* ACTIONS */}

                                    <td className="p-5">

                                        <div className="flex gap-3">

                                            <button
                                                className="
                                                    px-4
                                                    h-9

                                                    rounded-lg

                                                    bg-[#6366F1]/10

                                                    text-[#818CF8]
                                                    text-sm
                                                    font-medium

                                                    hover:bg-[#6366F1]/20

                                                    transition-all
                                                    duration-200
                                                "
                                            >
                                                Edit
                                            </button>

                                            <button

                                                onClick={() =>
                                                    handleDelete(employee.id)
                                                }

                                                className="
                                                    px-4
                                                    h-9

                                                    rounded-lg

                                                    bg-red-500/10

                                                    text-red-400
                                                    text-sm
                                                    font-medium

                                                    hover:bg-red-500/20

                                                    transition-all
                                                    duration-200
                                                "
                                            >
                                                Delete
                                            </button>

                                        </div>

                                    </td>

                                </tr>

                            ))
                        }

                    </tbody>

                </table>

            </div>

            {/* MODAL */}

            <AddEmployeeModal

                isOpen={isModalOpen}

                onClose={() => setIsModalOpen(false)}

                onEmployeeAdded={fetchEmployees}

            />

        </div>
    )
}

export default EmployeesPage