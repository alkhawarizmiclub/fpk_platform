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
        return await axiosClient.post("/api/student/logout");
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
    getComplaintsData: () => {
        return [
            { id: 23, datetime: new Date(), subject: "Lorem Ipsum", message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
            { id: 103, datetime: new Date(), subject: "It was popularised in the 1960s with the release of Letraset", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
            { id: 176, datetime: new Date(), subject: "Lorem Ipsum", message: "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص،" },
            { id: 321, datetime: new Date(), subject: "Lorem Ipsum", message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
            { id: 1023, datetime: new Date(), subject: "Lorem Ipsum", message: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
        ];
    },
    getComplaintCategories: async () => {
        return [
            {id: 124, label: ""},
            {id: 124, label: ""},
            {id: 124, label: ""},
        ];
    },
    createComplaint: async (subject, message) => {

        console.log(subject, message);

        return {
            status: 204,
            complaintId: randomInt(1, 400),
        }
    },
    deleteComplaint: (complaintId) => {

        console.log(`Deleted complaint [${complaintId}]`);

        return {
            status: 204,
        }
    },
}

export default EntStudentApi;