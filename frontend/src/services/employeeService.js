import axios from "axios"

const API_URL = "http://localhost:8080/api/employees"

export const getEmployees = async () => {

    const token = localStorage.getItem("token")

    const response = await axios.get(

        API_URL,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )

    return response.data
}
export const createEmployee = async (

    employeeData

) => {

    const token =
            localStorage.getItem("token")

    const response = await axios.post(

        API_URL,

        employeeData,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )

    return response.data
}

export const deleteEmployee = async (id) => {

    const token = localStorage.getItem("token")

    await axios.delete(

        `${API_URL}/${id}`,

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )
}
export const updateEmployee = async (id, employeeData) => {

    const token = localStorage.getItem("token")

    const response = await axios.put(
        `http://localhost:8080/api/employees/${id}`,
        employeeData,
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )

    return response.data
}
export const getDashboardStats = async () => {

    const token = localStorage.getItem("token")

    const response = await axios.get(

        "http://localhost:8080/api/employees/dashboard-stats",

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )

    return response.data
}
export const getDepartmentStats = async () => {

    const token = localStorage.getItem("token")

    const response = await axios.get(

        "http://localhost:8080/api/employees/department-stats",

        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    )

    return response.data
}