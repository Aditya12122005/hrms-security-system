import { useState, useEffect } from "react"

import {

    FaTimes,
    FaUser,
    FaEnvelope,
    FaBuilding,
    FaBriefcase,
    FaMoneyBillWave

} from "react-icons/fa"

import {
    createEmployee
} from "../services/employeeService"

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

    const [isAnimating, setIsAnimating] =
            useState(false)

    useEffect(() => {

        if (isOpen) {

            setTimeout(() =>

                setIsAnimating(true),

                10
            )

        } else {

            setIsAnimating(false)
        }

    }, [isOpen])

    const handleChange = (e) => {

        setFormData({

            ...formData,

            [e.target.name]:
                e.target.value
        })
    }

    // CREATE EMPLOYEE

    const handleSubmit = async (e) => {

        e.preventDefault()

        try {

            await createEmployee(
                formData
            )

            onEmployeeAdded()

            onClose()

        } catch (error) {

            console.log(error)
        }
    }

    if (!isOpen && !isAnimating)
        return null

    return (

        <div

            className={`
                fixed
                inset-0
                flex
                items-center
                justify-center
                z-[100]
                px-4
                transition-all
                duration-300
                ${isAnimating
                    ? "opacity-100"
                    : "opacity-0"}
            `}
        >

            {/* BACKDROP */}

            <div

                className="
                    absolute
                    inset-0
                    bg-[#0F172A]/80
                    backdrop-blur-md
                "

                onClick={onClose}
            />

            {/* MODAL */}

            <div

                className={`
                    relative
                    w-full
                    max-w-2xl
                    bg-[#111827]
                    border
                    border-[#334155]
                    rounded-3xl
                    p-8
                    shadow-[0_20px_50px_rgba(0,0,0,0.5)]
                    transition-all
                    duration-300
                    ease-out
                    ${isAnimating
                        ? "translate-y-0 scale-100"
                        : "translate-y-8 scale-95"}
                `}
            >

                {/* HEADER */}

                <div className="
                    flex
                    items-start
                    justify-between
                    mb-8
                ">

                    <div>

                        <h2

                            className="
                                text-3xl
                                font-bold
                                text-white
                                tracking-tight
                                bg-clip-text
                                text-transparent
                                bg-gradient-to-r
                                from-indigo-400
                                to-purple-400
                            "
                        >

                            Add New Employee

                        </h2>

                        <p className="
                            text-[#94A3B8]
                            mt-2
                            text-sm
                            font-medium
                        ">

                            Create a new workforce profile and assign roles securely.

                        </p>

                    </div>

                    <button

                        onClick={onClose}

                        type="button"

                        className="
                            w-10
                            h-10
                            rounded-full
                            bg-[#1E293B]
                            border
                            border-[#334155]
                            flex
                            items-center
                            justify-center
                            text-[#94A3B8]
                            hover:text-white
                            hover:bg-[#334155]
                            hover:rotate-90
                            transition-all
                            duration-300
                        "
                    >

                        <FaTimes />

                    </button>
                </div>

                {/* FORM */}

                <form

                    onSubmit={handleSubmit}

                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-6
                    "
                >

                    {/* FIRST NAME */}

                    <div className="relative group">

                        <div className="
                            absolute
                            inset-y-0
                            left-0
                            pl-4
                            flex
                            items-center
                            pointer-events-none
                            text-[#64748B]
                            group-focus-within:text-indigo-400
                            transition-colors
                        ">

                            <FaUser />

                        </div>

                        <input

                            type="text"

                            name="firstName"

                            placeholder="First Name"

                            value={formData.firstName}

                            onChange={handleChange}

                            required

                            className="
                                w-full
                                h-12
                                bg-[#0F172A]
                                border
                                border-[#334155]
                                rounded-xl
                                pl-11
                                pr-4
                                text-white
                                placeholder:text-[#64748B]
                                outline-none
                                focus:border-indigo-500
                                focus:ring-4
                                focus:ring-indigo-500/10
                                transition-all
                                duration-200
                            "
                        />
                    </div>

                    {/* LAST NAME */}

                    <div className="relative group">

                        <div className="
                            absolute
                            inset-y-0
                            left-0
                            pl-4
                            flex
                            items-center
                            pointer-events-none
                            text-[#64748B]
                            group-focus-within:text-indigo-400
                            transition-colors
                        ">

                            <FaUser />

                        </div>

                        <input

                            type="text"

                            name="lastName"

                            placeholder="Last Name"

                            value={formData.lastName}

                            onChange={handleChange}

                            required

                            className="
                                w-full
                                h-12
                                bg-[#0F172A]
                                border
                                border-[#334155]
                                rounded-xl
                                pl-11
                                pr-4
                                text-white
                                placeholder:text-[#64748B]
                                outline-none
                                focus:border-indigo-500
                                focus:ring-4
                                focus:ring-indigo-500/10
                                transition-all
                                duration-200
                            "
                        />
                    </div>

                    {/* EMAIL */}

                    <div className="relative group md:col-span-2">

                        <div className="
                            absolute
                            inset-y-0
                            left-0
                            pl-4
                            flex
                            items-center
                            pointer-events-none
                            text-[#64748B]
                            group-focus-within:text-indigo-400
                            transition-colors
                        ">

                            <FaEnvelope />

                        </div>

                        <input

                            type="email"

                            name="email"

                            placeholder="Email Address"

                            value={formData.email}

                            onChange={handleChange}

                            required

                            className="
                                w-full
                                h-12
                                bg-[#0F172A]
                                border
                                border-[#334155]
                                rounded-xl
                                pl-11
                                pr-4
                                text-white
                                placeholder:text-[#64748B]
                                outline-none
                                focus:border-indigo-500
                                focus:ring-4
                                focus:ring-indigo-500/10
                                transition-all
                                duration-200
                            "
                        />
                    </div>

                    {/* DEPARTMENT */}

                    <div className="relative group">

                        <div className="
                            absolute
                            inset-y-0
                            left-0
                            pl-4
                            flex
                            items-center
                            pointer-events-none
                            text-[#64748B]
                            group-focus-within:text-indigo-400
                            transition-colors
                        ">

                            <FaBuilding />

                        </div>

                        <input

                            type="text"

                            name="department"

                            placeholder="Department"

                            value={formData.department}

                            onChange={handleChange}

                            required

                            className="
                                w-full
                                h-12
                                bg-[#0F172A]
                                border
                                border-[#334155]
                                rounded-xl
                                pl-11
                                pr-4
                                text-white
                                placeholder:text-[#64748B]
                                outline-none
                                focus:border-indigo-500
                                focus:ring-4
                                focus:ring-indigo-500/10
                                transition-all
                                duration-200
                            "
                        />
                    </div>

                    {/* ROLE */}

                    <div className="relative group">

                        <div className="
                            absolute
                            inset-y-0
                            left-0
                            pl-4
                            flex
                            items-center
                            pointer-events-none
                            text-[#64748B]
                            group-focus-within:text-indigo-400
                            transition-colors
                        ">

                            <FaBriefcase />

                        </div>

                        <input

                            type="text"

                            name="role"

                            placeholder="Role"

                            value={formData.role}

                            onChange={handleChange}

                            required

                            className="
                                w-full
                                h-12
                                bg-[#0F172A]
                                border
                                border-[#334155]
                                rounded-xl
                                pl-11
                                pr-4
                                text-white
                                placeholder:text-[#64748B]
                                outline-none
                                focus:border-indigo-500
                                focus:ring-4
                                focus:ring-indigo-500/10
                                transition-all
                                duration-200
                            "
                        />
                    </div>

                    {/* SALARY */}

                    <div className="relative group md:col-span-2">

                        <div className="
                            absolute
                            inset-y-0
                            left-0
                            pl-4
                            flex
                            items-center
                            pointer-events-none
                            text-[#64748B]
                            group-focus-within:text-indigo-400
                            transition-colors
                        ">

                            <FaMoneyBillWave />

                        </div>

                        <input

                            type="number"

                            name="salary"

                            placeholder="Annual Salary"

                            value={formData.salary}

                            onChange={handleChange}

                            required

                            min="0"

                            className="
                                w-full
                                h-12
                                bg-[#0F172A]
                                border
                                border-[#334155]
                                rounded-xl
                                pl-11
                                pr-4
                                text-white
                                placeholder:text-[#64748B]
                                outline-none
                                focus:border-indigo-500
                                focus:ring-4
                                focus:ring-indigo-500/10
                                transition-all
                                duration-200
                            "
                        />
                    </div>

                    {/* BUTTONS */}

                    <div className="
                        md:col-span-2
                        flex
                        gap-4
                        mt-2
                    ">

                        <button

                            type="button"

                            onClick={onClose}

                            className="
                                flex-1
                                h-12
                                bg-[#1E293B]
                                hover:bg-[#334155]
                                border
                                border-[#334155]
                                rounded-xl
                                text-white
                                font-medium
                                transition-all
                                duration-200
                            "
                        >

                            Cancel

                        </button>

                        <button

                            type="submit"

                            className="
                                flex-1
                                h-12
                                bg-gradient-to-r
                                from-indigo-500
                                to-purple-500
                                hover:from-indigo-400
                                hover:to-purple-400
                                rounded-xl
                                text-white
                                font-bold
                                shadow-[0_0_20px_rgba(99,102,241,0.4)]
                                hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
                                transition-all
                                duration-300
                                transform
                                hover:-translate-y-0.5
                            "
                        >

                            Create Employee

                        </button>

                    </div>

                </form>

            </div>

        </div>
    )
}

export default AddEmployeeModal