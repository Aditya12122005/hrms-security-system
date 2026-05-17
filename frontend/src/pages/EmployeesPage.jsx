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

import AddEmployeeModal
from "../components/AddEmployeeModal"

import EditEmployeeModal
from "../components/EditEmployeeModal"

function EmployeesPage() {

    const [employees, setEmployees] =
        useState([])

    const [searchTerm, setSearchTerm] =
        useState("")

    const [isModalOpen, setIsModalOpen] =
        useState(false)

    const [isEditModalOpen,
        setIsEditModalOpen] =
        useState(false)

    const [selectedEmployee,
        setSelectedEmployee] =
        useState(null)

    useEffect(() => {

        fetchEmployees()

    }, [])

    const fetchEmployees = async () => {

        try {

            const data =
                await getEmployees()

            setEmployees(data)

        } catch (error) {

            console.log(error)
        }
    }

    const handleDelete =
        async (id) => {

            try {

                await deleteEmployee(id)

                fetchEmployees()

            } catch (error) {

                console.log(error)
            }
        }

    const handleEditClick =
        (employee) => {

            setSelectedEmployee(employee)

            setIsEditModalOpen(true)
        }

    // SAFE FILTERING

    const filteredEmployees =
        employees.filter((employee) =>

            `${employee.firstName || ""}
             ${employee.lastName || ""}`

                .toLowerCase()

                .includes(
                    searchTerm.toLowerCase()
                )

            ||

            (employee.department || "")

                .toLowerCase()

                .includes(
                    searchTerm.toLowerCase()
                )

            ||

            (employee.role || "")

                .toLowerCase()

                .includes(
                    searchTerm.toLowerCase()
                )

            ||

            (employee.email || "")

                .toLowerCase()

                .includes(
                    searchTerm.toLowerCase()
                )
        )

    return (

        <div
            className="
                w-full
                max-w-7xl
                mx-auto
                pb-12

                animate-fade-in
            "
        >

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

                            {employees.length}
                            {" "}
                            Total

                        </span>

                    </h1>

                    <p
                        className="
                            text-[#94A3B8]
                            mt-2
                            text-sm
                        "
                    >

                        Manage your workforce
                        directory, roles, and
                        compensation details.

                    </p>

                </div>

                {/* SEARCH + BUTTON */}

                <div
                    className="
                        flex
                        items-center
                        gap-4
                    "
                >

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
                            "
                        />

                        <input

                            type="text"

                            placeholder="Search employees..."

                            value={searchTerm}

                            onChange={(e) =>
                                setSearchTerm(
                                    e.target.value
                                )
                            }

                            className="
                                w-full
                                h-11

                                bg-[#111827]/80

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

                                transition-all
                            "
                        />

                    </div>

                    {/* ADD BUTTON */}

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

                            hover:scale-105

                            transition-all
                        "
                    >

                        <FaPlus
                            className="text-xs"
                        />

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
                "
            >

                <div
                    className="
                        overflow-x-auto
                    "
                >

                    <table
                        className="
                            w-full
                            text-left
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

                                <th
                                    className="
                                        p-5
                                        text-xs
                                        font-bold

                                        text-[#94A3B8]

                                        uppercase
                                    "
                                >
                                    Employee
                                </th>

                                <th
                                    className="
                                        p-5
                                        text-xs
                                        font-bold

                                        text-[#94A3B8]

                                        uppercase
                                    "
                                >
                                    Department
                                </th>

                                <th
                                    className="
                                        p-5
                                        text-xs
                                        font-bold

                                        text-[#94A3B8]

                                        uppercase
                                    "
                                >
                                    Role
                                </th>

                                <th
                                    className="
                                        p-5
                                        text-xs
                                        font-bold

                                        text-[#94A3B8]

                                        uppercase
                                    "
                                >
                                    Salary
                                </th>

                                <th
                                    className="
                                        p-5
                                        text-xs
                                        font-bold

                                        text-[#94A3B8]

                                        uppercase

                                        text-right
                                    "
                                >
                                    Actions
                                </th>

                            </tr>

                        </thead>

                        {/* BODY */}

                        <tbody>

                            {filteredEmployees.length > 0 ? (

                                filteredEmployees.map(
                                    (employee) => (

                                    <tr
                                        key={employee.id}

                                        className="
                                            border-t
                                            border-[#334155]/50

                                            hover:bg-white/[0.02]

                                            transition-all
                                        "
                                    >

                                        {/* EMPLOYEE */}

                                        <td
                                            className="
                                                p-5
                                            "
                                        >

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
                                                    "
                                                >

                                                    {(employee.firstName || "U")
                                                        .charAt(0)}

                                                    {(employee.lastName || "E")
                                                        .charAt(0)}

                                                </div>

                                                {/* DETAILS */}

                                                <div>

                                                    <h3
                                                        className="
                                                            text-sm
                                                            font-bold
                                                            text-white
                                                        "
                                                    >

                                                        {employee.firstName || "Unknown"}
                                                        {" "}
                                                        {employee.lastName || "Employee"}

                                                    </h3>

                                                    <p
                                                        className="
                                                            text-xs
                                                            text-[#64748B]
                                                            mt-0.5
                                                        "
                                                    >

                                                        {employee.email ||

                                                            `${(employee.firstName || "employee")
                                                                .toLowerCase()}.${
                                                                (employee.lastName || "user")
                                                                    .toLowerCase()
                                                            }@company.com`
                                                        }

                                                    </p>

                                                </div>

                                            </div>

                                        </td>

                                        {/* DEPARTMENT */}

                                        <td
                                            className="
                                                p-5
                                                text-white
                                            "
                                        >

                                            {employee.department || "N/A"}

                                        </td>

                                        {/* ROLE */}

                                        <td
                                            className="
                                                p-5
                                                text-[#94A3B8]
                                            "
                                        >

                                            {employee.role || "N/A"}

                                        </td>

                                        {/* SALARY */}

                                        <td
                                            className="
                                                p-5
                                                text-white
                                                font-bold
                                            "
                                        >

                                            ₹{
                                                employee.salary
                                                    ?.toLocaleString()
                                                || 0
                                            }

                                        </td>

                                        {/* ACTIONS */}

                                        <td
                                            className="
                                                p-5
                                                text-right
                                            "
                                        >

                                            <div
                                                className="
                                                    flex
                                                    justify-end
                                                    gap-2
                                                "
                                            >

                                                {/* EDIT */}

                                                <button

                                                    onClick={() =>
                                                        handleEditClick(
                                                            employee
                                                        )
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

                                                        transition-all
                                                    "
                                                >

                                                    <FaEdit />

                                                </button>

                                                {/* DELETE */}

                                                <button

                                                    onClick={() =>
                                                        handleDelete(
                                                            employee.id
                                                        )
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

                                                        transition-all
                                                    "
                                                >

                                                    <FaTrash />

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

                                            text-[#94A3B8]
                                        "
                                    >

                                        No employees found

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

                onEmployeeAdded={
                    fetchEmployees
                }

            />

            {/* EDIT MODAL */}

            <EditEmployeeModal

                isOpen={isEditModalOpen}

                onClose={() =>
                    setIsEditModalOpen(false)
                }

                employee={selectedEmployee}

                onEmployeeUpdated={
                    fetchEmployees
                }

            />

        </div>
    )
}

export default EmployeesPage