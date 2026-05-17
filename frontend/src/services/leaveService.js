import axios from "axios"

const API_URL =
    "http://localhost:8080/api/leaves"

const getAuthHeader = () => {

    const token =
        localStorage.getItem("token")

    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

// APPLY LEAVE

export const applyLeave =
    async (
        employeeId,
        leaveData
    ) => {

        const response =
            await axios.post(

                `${API_URL}/apply/${employeeId}`,

                leaveData,

                getAuthHeader()
            )

        return response.data
    }

// GET ALL LEAVES

export const getLeaves =
    async () => {

        const response =
            await axios.get(
                API_URL,
                getAuthHeader()
            )

        return response.data
    }

// APPROVE LEAVE

export const approveLeave =
    async (leaveId) => {

        const response =
            await axios.put(

                `${API_URL}/approve/${leaveId}`,

                {},

                getAuthHeader()
            )

        return response.data
    }