import { axiosClient } from "./axiosClient"

const EntStaffApi = {
    login: async (email, password) => {
        return await axiosClient.post("/api/admin/login", { email, password });
    },
}

export default EntStaffApi;