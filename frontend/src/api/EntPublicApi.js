import { axiosClient } from "./axiosClient"

const EntPublicApi = {
    getComplaintCategories: async () => {
        return await axiosClient.get("/api/public/complaint");
    },
    getAllAnnounceements: async () => {
        return await axiosClient.get("/api/public/announce");
    },
    getAnnouncement: async (id) => {
        return await axiosClient.get(`/api/public/announce/${id}`);
    },
    getAllMajors: async () => {
        return await axiosClient.get("/api/public/filieres");
    },
    getCurrentAcademicYear: async () => {
        return await axiosClient.get("/api/public/acadmic-year");
    },
}

export default EntPublicApi;