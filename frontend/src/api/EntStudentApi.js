import { axiosClient } from "./axiosClient"

const EntStudentApi = {
    getCsrfToken: async () => {
        return await axiosClient.get("/sanctum/csrf-cookie", {
            baseURL: import.meta.env.VITE_BACKEND_URL
        });
    },
    signup: async (nom_fr, prenom_fr, nom_ar, prenom_ar, date, lieu, code, nationality, cin, email, phone, emergencyPhone, address, password, confirmPassword, filiere, studentPhoto) => {
        console.log({ nom_fr, prenom_fr, nom_ar, prenom_ar, date, lieu, code, nationality, cin, email, phone, emergencyPhone, address, password, confirmPassword, filiere, studentPhoto });
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
        await new Promise(resolve => setTimeout(resolve, 500));
        return {
            status: 200,
            data: [
                { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
                { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
                { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
                { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" }
            ]
        }
    },
    getSchedulePDF: async () => {
        return await axiosClient.get("/api/public/emploi");
    },
    getPlanningPDF: async () => {
        await new Promise(resolve => setTimeout(resolve, 800)); // TO BE REMOVED
        return {
            status: 200,
            data: {
                url: "/schedule.pdf"
            }
        };
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