import { useState } from "react"
import axios from "axios"

function AddEmployeeModal({
    isOpen,
    onClose,
    onEmployeeAdded
}) {

    const [formData, setFormData] = useState({

        firstName: "",
        lastName: "",
        email: "",
        department: "",
        role: "",
        salary: ""

    })

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            await axios.post(
                "http://localhost:8080/api/employees",
                formData
            )

            onEmployeeAdded()

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
                bg-black/70
                backdrop-blur-sm

                flex
                items-center
                justify-center

                z-50
                px-4
            "
        >

            <div
                className="
                    w-full
                    max-w-2xl

                    bg-[#1E293B]
                    border
                    border-[#334155]

                    rounded-2xl
                    p-8

                    shadow-2xl
                "
            >

                {/* HEADER */}

                <div className="flex items-start justify-between mb-8">

                    <div>

                        <h2
                            className="
                                text-2xl
                                font-semibold
                                text-white
                                tracking-tight
                            "
                        >
                            Add Employee
                        </h2>

                        <p
                            className="
                                text-[#94A3B8]
                                mt-2
                                text-sm
                            "
                        >
                            Create and manage workforce profiles securely.
                        </p>

                    </div>

                    <button
                        onClick={onClose}
                        className="
                            w-10
                            h-10

                            rounded-xl

                            bg-[#0F172A]
                            border
                            border-[#334155]

                            text-[#94A3B8]
                            hover:text-white

                            transition-all
                            duration-200
                        "
                    >
                        ✕
                    </button>

                </div>

                {/* FORM */}

                <form
                    onSubmit={handleSubmit}
                    className="grid grid-cols-2 gap-5"
                >

                    {/* FIRST NAME */}

                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        onChange={handleChange}

                        className="
                            h-12

                            bg-[#0F172A]
                            border
                            border-[#334155]

                            rounded-xl
                            px-4

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

                    {/* LAST NAME */}

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        onChange={handleChange}

                        className="
                            h-12

                            bg-[#0F172A]
                            border
                            border-[#334155]

                            rounded-xl
                            px-4

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

                    {/* EMAIL */}

                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={handleChange}

                        className="
                            col-span-2

                            h-12

                            bg-[#0F172A]
                            border
                            border-[#334155]

                            rounded-xl
                            px-4

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

                    {/* DEPARTMENT */}

                    <input
                        type="text"
                        name="department"
                        placeholder="Department"
                        onChange={handleChange}

                        className="
                            h-12

                            bg-[#0F172A]
                            border
                            border-[#334155]

                            rounded-xl
                            px-4

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

                    {/* ROLE */}

                    <input
                        type="text"
                        name="role"
                        placeholder="Role"
                        onChange={handleChange}

                        className="
                            h-12

                            bg-[#0F172A]
                            border
                            border-[#334155]

                            rounded-xl
                            px-4

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

                    {/* SALARY */}

                    <input
                        type="number"
                        name="salary"
                        placeholder="Salary"
                        onChange={handleChange}

                        className="
                            col-span-2

                            h-12

                            bg-[#0F172A]
                            border
                            border-[#334155]

                            rounded-xl
                            px-4

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

                    {/* BUTTON */}

                    <button
                        type="submit"

                        className="
                            col-span-2

                            h-12

                            bg-[#6366F1]
                            hover:bg-[#4F46E5]

                            rounded-xl

                            text-white
                            font-medium

                            transition-all
                            duration-200
                        "
                    >
                        Create Employee
                    </button>

                </form>

            </div>

        </div>
    )
}

export default AddEmployeeModal