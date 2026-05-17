import axios from "axios"

const API_URL =
    "http://localhost:8080/api/payroll"

// GET TOKEN HEADER

const getAuthConfig = () => {

    const token =
        localStorage.getItem("token")

    return {

        headers: {

            Authorization:
                `Bearer ${token}`
        }
    }
}

// GET ALL PAYROLLS

export const getPayrolls =
    async () => {

        const response =
            await axios.get(

                API_URL,

                getAuthConfig()
            )

        return response.data
    }

// GENERATE PAYROLL

export const generatePayroll =
    async (

        employeeId,

        bonus,

        deduction

    ) => {

        const response =
            await axios.post(

                `${API_URL}/generate/${employeeId}?bonus=${bonus}&deduction=${deduction}`,

                {},

                getAuthConfig()
            )

        return response.data
    }