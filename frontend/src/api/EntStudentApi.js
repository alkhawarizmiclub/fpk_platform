import { axiosClient } from "./axiosClient"

const randomInt = (min, max) => {
    return min + Math.random() * (max - min);
}

const EntStudentApi = {
    getCsrfToken: async () => {
        return await axiosClient.get("/sanctum/csrf-cookie", {
            baseURL: import.meta.env.VITE_BACKEND_URL
        });
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
    getAccountsData: () => {
        return [
            { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
            { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
            { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
            { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" }
        ];
    },
    getSchedulePDF: () => {
        return "http://www.fpk.ac.ma/wp-content/uploads/2024/03/Emploi-du-Temps-SMI-S4-SP-23-24.pdf";
    },
    getPlanningPDF: () => {
        return "http://www.fpk.ac.ma/wp-content/uploads/2024/06/smi_.pdf";
    },
    getResultsData: async () => {
        return await axiosClient.get("/api/student/result");
    },
    getEDocumentsData: () => {
        return [
            { label: "Relevé de notes de S1", creationDateTime: new Date(), type: "grades sheet", data: {} },
            { label: "Attestation de DEUG", creationDateTime: new Date(), type: "deug attestation", data: {} },
            { label: "Relevé de notes de S3", creationDateTime: new Date(), type: "grades sheet", data: {} },
            { label: "convention de stage", creationDateTime: new Date(), type: "", data: {} },
            { label: "convention de stage", creationDateTime: new Date(), type: "", data: {} }
        ];
    },
    getComplaintsData: async () => {
        const response = await axiosClient.get("/api/student/complaint");
        return response.data;
    },
    getComplaintCategories: () => {
        return [
            { id: 1, label: "Cat 1" },
            { id: 2, label: "Cat 2" },
            { id: 3, label: "Cat 3" },
        ];
    },
    createComplaint: async (subject, message) => {
        return await axiosClient.post("/api/student/complaint", { complaint_id: 1, description: message });
    },
    deleteComplaint: async (complaintId) => {
        return await axiosClient.delete(`/api/student/complaint/${complaintId}`);
    },
}

export default EntStudentApi;