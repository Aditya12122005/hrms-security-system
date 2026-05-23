import axios from "axios"

const API_URL = "http://localhost:8080/api"

export const sendOtp = async (email) => {

    const response = await axios.post(

        `${API_URL}/otp/send`,

        {
            email
        }
    )

    return response.data
}

export const verifyOtp = async (

    email,

    otp

) => {

    const response = await axios.post(

        `${API_URL}/otp/verify`,

        {
            email,
            otp
        }
    )

    return response.data
}

export const resetPassword = async (

    email,

    newPassword

) => {

    const response = await axios.post(

        `${API_URL}/otp/reset-password`,

        {
            email,
            newPassword
        }
    )

    return response.data
}