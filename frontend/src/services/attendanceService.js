import axios from "axios"

const API_URL =
    "http://localhost:8080/api/attendance"

// GET TOKEN

const getAuthHeader = () => {

    const token =
        localStorage.getItem("token")

    return {

        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

// CHECK-IN

export const checkInEmployee =
    async (employeeId) => {

        const response =
            await axios.post(

                `${API_URL}/check-in/${employeeId}`,

                {},

                getAuthHeader()
            )

        return response.data
    }

// CHECK-OUT

export const checkOutEmployee =
    async (attendanceId) => {

        const response =
            await axios.post(

                `${API_URL}/check-out/${attendanceId}`,

                {},

                getAuthHeader()
            )

        return response.data
    }

// GET ALL ATTENDANCE

export const getAttendance =
    async () => {

        const response =
            await axios.get(

                API_URL,

                getAuthHeader()
            )

        return response.data
    }

// GET EMPLOYEE ATTENDANCE

export const getEmployeeAttendance =
    async (employeeId) => {

        const response =
            await axios.get(

                `${API_URL}/employee/${employeeId}`,

                getAuthHeader()
            )

        return response.data
    }