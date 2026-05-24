import axios from "axios"

const API_URL = "http://localhost:8080/api/documents"

const authHeaders = () => {

    const token =
        localStorage.getItem("token")

    return token
        ? { Authorization: `Bearer ${token}` }
        : {}
}

export const uploadDocument = async (
    employeeId,
    file
) => {

    const formData =
        new FormData()

    formData.append("file", file)

    const response =
        await axios.post(
            `${API_URL}/upload/${employeeId}`,
            formData,
            {
                headers: {
                    ...authHeaders(),
                    "Content-Type": "multipart/form-data"
                }
            }
        )

    return response.data
}

export const uploadProfileImage = async (
    employeeId,
    file
) => {

    const formData =
        new FormData()

    formData.append("file", file)

    const response =
        await axios.post(
            `${API_URL}/profile-image/${employeeId}`,
            formData,
            {
                headers: {
                    ...authHeaders(),
                    "Content-Type": "multipart/form-data"
                }
            }
        )

    return response.data
}

export const getEmployeeDocuments =
    async (employeeId) => {

        const response =
            await axios.get(
                `${API_URL}/employee/${employeeId}`,
                {
                    headers: authHeaders()
                }
            )

        return response.data
    }

export const getDocumentViewUrl =
    (documentId) =>
        `${API_URL}/view/${documentId}`

export const getDocumentDownloadUrl =
    (documentId) =>
        `${API_URL}/download/${documentId}`
