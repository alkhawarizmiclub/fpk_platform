import { axiosClient } from "./axiosClient"

const EntStudentApi = {
    getCsrfToken: async () => {
        return await axiosClient.get("/sanctum/csrf-cookie", {
            baseURL: import.meta.env.VITE_BACKEND_URL
        })
    },
    login: async (email, password) => {
        return await axiosClient.post("/api/student/login", { email, password })
    }
}

export default EntStudentApi;