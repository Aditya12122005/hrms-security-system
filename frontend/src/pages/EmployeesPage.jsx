import { useEffect, useState } from "react"
import {
    FaSearch,
    FaPlus,
    FaEdit,
    FaTrash
} from "react-icons/fa"

import {
    getEmployees,
    deleteEmployee
} from "../services/employeeService"

import AddEmployeeModal from "../components/AddEmployeeModal"
import EditEmployeeModal from "../components/EditEmployeeModal"

function EmployeesPage() {

    const [employees, setEmployees] = useState([])

    const [searchTerm, setSearchTerm] = useState("")

    const [isModalOpen, setIsModalOpen] = useState(false)

    const [isEditModalOpen, setIsEditModalOpen] = useState(false)

    const [selectedEmployee, setSelectedEmployee] = useState(null)

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

    const handleEditClick = (employee) => {

        setSelectedEmployee(employee)

        setIsEditModalOpen(true)
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

        <div className="w-full max-w-7xl mx-auto pb-12 animate-fade-in">

            {/* HEADER */}

            <div
                className="
                    flex
                    flex-col
                    md:flex-row
                    md:items-center
                    justify-between

                    gap-6
                    mb-8
                "
            >

                <div>

                    <h1
                        className="
                            text-3xl
                            font-bold
                            tracking-tight
                            text-white

                            flex
                            items-center
                            gap-3
                        "
                    >

                        Employees

                        <span
                            className="
                                px-3
                                py-1

                                rounded-full

                                bg-indigo-500/10
                                border
                                border-indigo-500/20

                                text-indigo-400
                                text-xs
                                font-semibold

                                uppercase
                                tracking-wider
                            "
                        >

                            {employees.length} Total

                        </span>

                    </h1>

                    <p
                        className="
                            text-[#94A3B8]
                            mt-2
                            text-sm
                        "
                    >
                        Manage your workforce directory,
                        roles, and compensation details.
                    </p>

                </div>

                <div className="flex items-center gap-4">

                    {/* SEARCH */}

                    <div
                        className="
                            relative
                            group

                            w-full
                            md:w-[320px]
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

                                group-focus-within:text-indigo-400
                                transition-colors
                            "
                        />

                        <input
                            type="text"

                            placeholder="Search employees..."

                            value={searchTerm}

                            onChange={(e) =>
                                setSearchTerm(e.target.value)
                            }

                            className="
                                w-full
                                h-11

                                bg-[#111827]/80
                                backdrop-blur-sm

                                border
                                border-[#1E293B]

                                rounded-xl

                                pl-11
                                pr-4

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

                    </div>

                    {/* ADD EMPLOYEE BUTTON */}

                    <button

                        onClick={() =>
                            setIsModalOpen(true)
                        }

                        className="
                            h-11
                            px-5

                            rounded-xl

                            bg-gradient-to-r
                            from-indigo-500
                            to-purple-500

                            text-white
                            text-sm
                            font-bold

                            flex
                            items-center
                            gap-2

                            shadow-[0_0_15px_rgba(99,102,241,0.3)]

                            hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
                            hover:-translate-y-0.5

                            transition-all
                            duration-300

                            whitespace-nowrap
                        "
                    >

                        <FaPlus className="text-xs" />

                        Add Employee

                    </button>

                </div>

            </div>

            {/* TABLE */}

            <div
                className="
                    overflow-hidden

                    bg-[#1E293B]/50
                    backdrop-blur-xl

                    border
                    border-[#334155]

                    rounded-3xl

                    shadow-xl

                    relative
                    z-10
                "
            >

                <div className="overflow-x-auto">

                    <table
                        className="
                            w-full
                            text-left
                            border-collapse
                        "
                    >

                        {/* HEADER */}

                        <thead
                            className="
                                bg-[#0B1120]/50
                                border-b
                                border-[#334155]
                            "
                        >

                            <tr>

                                <th className="p-5 text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                                    Employee
                                </th>

                                <th className="p-5 text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                                    Department
                                </th>

                                <th className="p-5 text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                                    Role
                                </th>

                                <th className="p-5 text-xs font-bold text-[#94A3B8] uppercase tracking-wider">
                                    Salary
                                </th>

                                <th className="p-5 text-xs font-bold text-[#94A3B8] uppercase tracking-wider text-right">
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        {/* BODY */}

                        <tbody
                            className="
                                divide-y
                                divide-[#334155]/50
                            "
                        >

                            {filteredEmployees.length > 0 ? (

                                filteredEmployees.map((employee) => (

                                    <tr
                                        key={employee.id}

                                        className="
                                            group
                                            hover:bg-white/[0.02]

                                            transition-colors
                                            duration-300
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

                                                <div
                                                    className="
                                                        w-10
                                                        h-10

                                                        rounded-full

                                                        bg-gradient-to-br
                                                        from-indigo-500/20
                                                        to-purple-500/20

                                                        border
                                                        border-indigo-500/30

                                                        flex
                                                        items-center
                                                        justify-center

                                                        text-indigo-300
                                                        text-sm
                                                        font-bold

                                                        group-hover:scale-110
                                                        group-hover:border-indigo-500/50

                                                        group-hover:shadow-[0_0_15px_rgba(99,102,241,0.2)]

                                                        transition-all
                                                        duration-300
                                                    "
                                                >

                                                    {employee.firstName?.charAt(0)}
                                                    {employee.lastName?.charAt(0)}

                                                </div>

                                                <div>

                                                    <h3
                                                        className="
                                                            text-sm
                                                            font-bold
                                                            text-white

                                                            group-hover:text-indigo-300

                                                            transition-colors
                                                        "
                                                    >

                                                        {employee.firstName}
                                                        {" "}
                                                        {employee.lastName}

                                                    </h3>

                                                    <p
                                                        className="
                                                            text-xs
                                                            text-[#64748B]
                                                            mt-0.5
                                                        "
                                                    >

                                                        {employee.email ||
                                                            `${employee.firstName.toLowerCase()}.${employee.lastName.toLowerCase()}@company.com`
                                                        }

                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* DEPARTMENT */}

                                        <td className="p-5">

                                            <span
                                                className="
                                                    inline-flex
                                                    items-center

                                                    px-2.5
                                                    py-1

                                                    rounded-md

                                                    bg-[#334155]/50

                                                    border
                                                    border-[#475569]/50

                                                    text-xs
                                                    font-medium

                                                    text-[#E2E8F0]

                                                    group-hover:border-[#64748B]

                                                    transition-colors
                                                "
                                            >

                                                {employee.department}

                                            </span>

                                        </td>

                                        {/* ROLE */}

                                        <td
                                            className="
                                                p-5
                                                text-sm
                                                font-medium

                                                text-[#94A3B8]

                                                group-hover:text-white

                                                transition-colors
                                            "
                                        >

                                            {employee.role}

                                        </td>

                                        {/* SALARY */}

                                        <td
                                            className="
                                                p-5
                                                text-sm
                                                font-bold
                                                text-white
                                            "
                                        >

                                            ₹{employee.salary?.toLocaleString()}

                                        </td>

                                        {/* ACTIONS */}

                                        <td className="p-5 text-right">

                                            <div
                                                className="
                                                    flex
                                                    items-center
                                                    justify-end
                                                    gap-2

                                                    opacity-0
                                                    group-hover:opacity-100

                                                    transition-opacity
                                                    duration-300
                                                "
                                            >

                                                {/* EDIT */}

                                                <button

                                                    onClick={() =>
                                                        handleEditClick(employee)
                                                    }

                                                    className="
                                                        w-9
                                                        h-9

                                                        rounded-lg

                                                        bg-indigo-500/10
                                                        text-indigo-400

                                                        flex
                                                        items-center
                                                        justify-center

                                                        hover:bg-indigo-500
                                                        hover:text-white

                                                        hover:shadow-[0_0_10px_rgba(99,102,241,0.5)]

                                                        hover:-translate-y-0.5

                                                        transition-all
                                                        duration-300
                                                    "
                                                >

                                                    <FaEdit className="text-sm" />

                                                </button>

                                                {/* DELETE */}

                                                <button

                                                    onClick={() =>
                                                        handleDelete(employee.id)
                                                    }

                                                    className="
                                                        w-9
                                                        h-9

                                                        rounded-lg

                                                        bg-red-500/10
                                                        text-red-400

                                                        flex
                                                        items-center
                                                        justify-center

                                                        hover:bg-red-500
                                                        hover:text-white

                                                        hover:shadow-[0_0_10px_rgba(239,68,68,0.5)]

                                                        hover:-translate-y-0.5

                                                        transition-all
                                                        duration-300
                                                    "
                                                >

                                                    <FaTrash className="text-sm" />

                                                </button>

                                            </div>

                                        </td>

                                    </tr>

                                ))

                            ) : (

                                <tr>

                                    <td
                                        colSpan="5"

                                        className="
                                            p-12
                                            text-center
                                        "
                                    >

                                        <div
                                            className="
                                                inline-flex
                                                items-center
                                                justify-center

                                                w-16
                                                h-16

                                                rounded-full

                                                bg-[#334155]/30

                                                mb-4
                                            "
                                        >

                                            <FaSearch
                                                className="
                                                    text-2xl
                                                    text-[#64748B]
                                                "
                                            />

                                        </div>

                                        <h3
                                            className="
                                                text-lg
                                                font-medium
                                                text-white
                                                mb-1
                                            "
                                        >
                                            No employees found
                                        </h3>

                                        <p
                                            className="
                                                text-sm
                                                text-[#94A3B8]
                                            "
                                        >

                                            {searchTerm
                                                ? "Try adjusting your search terms."
                                                : "Get started by adding a new employee."
                                            }

                                        </p>

                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>

            </div>

            {/* ADD MODAL */}

            <AddEmployeeModal

                isOpen={isModalOpen}

                onClose={() =>
                    setIsModalOpen(false)
                }

                onEmployeeAdded={fetchEmployees}

            />

            {/* EDIT MODAL */}

            <EditEmployeeModal

                isOpen={isEditModalOpen}

                onClose={() =>
                    setIsEditModalOpen(false)
                }

                employee={selectedEmployee}

                onEmployeeUpdated={fetchEmployees}

            />

        </div>
    )
}

export default EmployeesPage