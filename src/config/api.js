import axios from "axios"

export const api = axios.create()
api.interceptors.response.use((res) => {
    return res.data
})
