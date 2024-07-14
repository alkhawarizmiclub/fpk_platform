import { axiosClient } from "./axiosClient"

const EntStudentApi = {
    getCsrfToken: async () => {
        return await axiosClient.get("/sanctum/csrf-cookie", {
            baseURL: import.meta.env.VITE_BACKEND_URL
        });
    },
    signup: async (data) => {
        console.log(data);
    },
    login: async (email, password) => {
        return await axiosClient.post("/api/student/login", { email, password });
    },
    logout: async () => {
        return await axiosClient.get("/api/student/logout");
    },
    getInscriptionData: async () => {
        const api_data = await axiosClient.get("/api/student/modules");
        return api_data.data;
    },
    getAccountsData: async () => {
        return await axiosClient.get("/api/student/accounts");
    },
    getSchedulePDF: async (major_id) => {
        return await axiosClient.get(`/api/public/filieres/schedule?id=${major_id}`);
    },
    getPlanningPDF: async (major_id) => {
        return await axiosClient.get(`/api/public/filieres/schedule?id=${major_id}`);
    },
    getResultsData: async () => {
        return await axiosClient.get("/api/student/result");
    },
    getEDocumentsData: async () => {
        await new Promise(resolve => setTimeout(resolve, 800)); // TO BE REMOVED
        return {
            status: 200,
            data: [
                { label: "Relevé de notes de S1", creationDateTime: new Date(), type: "grades sheet", data: {} },
                { label: "Attestation de DEUG", creationDateTime: new Date(), type: "deug attestation", data: {} },
                { label: "Relevé de notes de S3", creationDateTime: new Date(), type: "grades sheet", data: {} },
                { label: "convention de stage", creationDateTime: new Date(), type: "", data: {} },
                { label: "convention de stage", creationDateTime: new Date(), type: "", data: {} }
            ]
        };
    },
    demandEDocument: async (document_type) => {
        await new Promise(resolve => setTimeout(resolve, 800)); // TO BE REMOVED
        console.log(document_type);
    },
    getComplaintsData: async () => {
        const response = await axiosClient.get("/api/student/complaint");
        return response;
    },
    createComplaint: async (complaint_id, description) => {
        return await axiosClient.post("/api/student/complaint", { complaint_id, description });
    },
    deleteComplaint: async (complaintId) => {
        return await axiosClient.delete(`/api/student/complaint/${complaintId}`);
    },
}

export default EntStudentApi;