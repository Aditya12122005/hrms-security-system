import { useEffect, useState } from "react"

import { updateEmployee } from "../services/employeeService"

function EditEmployeeModal({

    isOpen,
    onClose,
    employee,
    onEmployeeUpdated

}) {

    const [formData, setFormData] = useState({

        firstName: "",
        lastName: "",
        email: "",
        department: "",
        role: "",
        salary: ""

    })

    useEffect(() => {

        if (employee) {

            setFormData({

                firstName: employee.firstName || "",
                lastName: employee.lastName || "",
                email: employee.email || "",
                department: employee.department || "",
                role: employee.role || "",
                salary: employee.salary || ""

            })
        }

    }, [employee])

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            await updateEmployee(
                employee.id,
                formData
            )

            onEmployeeUpdated()

            onClose()

        } catch (error) {

            console.log(error)
        }
    }

    if (!isOpen) return null

    return (

        <div
            className="
                fixed
                inset-0
                bg-black/60
                backdrop-blur-sm

                flex
                items-center
                justify-center

                z-50
            "
        >

            <div
                className="
                    w-full
                    max-w-2xl

                    bg-[#151524]

                    border
                    border-pink-500/20

                    rounded-3xl
                    p-10
                "
            >

                <div
                    className="
                        flex
                        items-center
                        justify-between
                        mb-8
                    "
                >

                    <div>

                        <h2
                            className="
                                text-3xl
                                font-bold
                                text-white
                            "
                        >
                            Edit Employee
                        </h2>

                        <p className="text-gray-400 mt-2">
                            Update employee information.
                        </p>

                    </div>

                    <button

                        onClick={onClose}

                        className="
                            text-gray-400
                            hover:text-white
                            text-2xl
                        "
                    >
                        ✕
                    </button>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-2 gap-6"
                >

                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="First Name"

                        className="
                            bg-[#1f1f35]

                            border
                            border-white/10

                            rounded-2xl

                            px-5
                            py-4

                            text-white
                            outline-none
                        "
                    />

                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Last Name"

                        className="
                            bg-[#1f1f35]

                            border
                            border-white/10

                            rounded-2xl

                            px-5
                            py-4

                            text-white
                            outline-none
                        "
                    />

                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"

                        className="
                            col-span-2

                            bg-[#1f1f35]

                            border
                            border-white/10

                            rounded-2xl

                            px-5
                            py-4

                            text-white
                            outline-none
                        "
                    />

                    <input
                        type="text"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        placeholder="Department"

                        className="
                            bg-[#1f1f35]

                            border
                            border-white/10

                            rounded-2xl

                            px-5
                            py-4

                            text-white
                            outline-none
                        "
                    />

                    <input
                        type="text"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        placeholder="Role"

                        className="
                            bg-[#1f1f35]

                            border
                            border-white/10

                            rounded-2xl

                            px-5
                            py-4

                            text-white
                            outline-none
                        "
                    />

                    <input
                        type="number"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        placeholder="Salary"

                        className="
                            col-span-2

                            bg-[#1f1f35]

                            border
                            border-white/10

                            rounded-2xl

                            px-5
                            py-4

                            text-white
                            outline-none
                        "
                    />

                    <button
                        type="submit"

                        className="
                            col-span-2

                            bg-gradient-to-r
                            from-[#ff9f43]
                            to-[#ff6ec7]

                            py-4

                            rounded-2xl

                            text-white
                            font-semibold
                            text-lg
                        "
                    >
                        Save Changes
                    </button>

                </form>

            </div>

        </div>
    )
}

export default EditEmployeeModal