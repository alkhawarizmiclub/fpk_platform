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
    getResultsData: () => {
        return [
            {
                semesterNumber: 1,
                majorLabel: "Science Mathématique et Informatique",
                moduleObjects: [
                    {
                        name: "M01 - Analyse 1: Suites Numériques et Fonctions",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M02 - ALGEBRE 1: Généralités et Arithmétique dans Z",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M03 - ALGEBRE 2: Structures, Polynômes et Fractions Rationnelles",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M04 - Physique 1: Mécanique 1",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M05 - Physique 2: Thermodynamique",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M06 - Informatique 1: Introduction à l’informatique",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M07 - LT I",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    }
                ]
            },
            {
                semesterNumber: 2,
                majorLabel: "Science Mathématique et Informatique",
                moduleObjects: [
                    {
                        name: "M01 - Analyse 1: Suites Numériques et Fonctions",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M02 - ALGEBRE 1: Généralités et Arithmétique dans Z",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M03 - ALGEBRE 2: Structures, Polynômes et Fractions Rationnelles",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M04 - Physique 1: Mécanique 1",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M05 - Physique 2: Thermodynamique",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M06 - Informatique 1: Introduction à l’informatique",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M07 - LT I",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    }
                ]
            },
            {
                semesterNumber: 3,
                majorLabel: "Science Mathématique et Informatique",
                moduleObjects: [
                    {
                        name: "M01 - Analyse 1: Suites Numériques et Fonctions",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M02 - ALGEBRE 1: Généralités et Arithmétique dans Z",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M03 - ALGEBRE 2: Structures, Polynômes et Fractions Rationnelles",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M04 - Physique 1: Mécanique 1",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M05 - Physique 2: Thermodynamique",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M06 - Informatique 1: Introduction à l’informatique",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M07 - LT I",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    }
                ]
            },
            {
                semesterNumber: 4,
                majorLabel: "Science Mathématique et Informatique",
                moduleObjects: [
                    {
                        name: "M01 - Analyse 1: Suites Numériques et Fonctions",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M02 - ALGEBRE 1: Généralités et Arithmétique dans Z",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M03 - ALGEBRE 2: Structures, Polynômes et Fractions Rationnelles",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M04 - Physique 1: Mécanique 1",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M05 - Physique 2: Thermodynamique",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M06 - Informatique 1: Introduction à l’informatique",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    },
                    {
                        name: "M07 - LT I",
                        season: "2021/2022",
                        normal: 9,
                        rattrapage: 16
                    }
                ]
            },
        ];
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