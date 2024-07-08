import { axiosClient } from "./axiosClient"

const EntTeacherApi = {
    login: async (email, password) => {
        return await axiosClient.post("/api/prof/login", { email, password });
    },
    getAccountsData: () => {
        return [
            { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
            { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
            { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
            { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" }
        ]
    },
  
    submitAnnouncement: (title, thumbnail_path, tags, content, poster_image_path) => {
        console.log(title, thumbnail_path, tags, content, poster_image_path);
    },
  
    submitGrades: async (apogee, module_id, normale, ratt) => {
        return await axiosClient.post("/api/prof/add-result", { apogee, module_id, normale, ratt });
    },

    getModulesData: async () => {
        const response = await axiosClient.get("/api/prof/modules")
        return response;
    },
    getStudentGrade: async (id, apogee, fname, lname) => {
        const response = await axiosClient.get(`/api/prof/modules/${id}?apogee=${apogee}&fname=${fname}&lname=${lname}`);
        return response;
    },
    getStudentData: (apogee) => {
        if (apogee) {
            return [{
                id: 1,
                photo: "/frontend/public/MOROKI .png",
                fname: "John",
                lname: "Doe"
            }
            ]
        }
        else {
            console.error('not found');
        }

    }



}

export default EntTeacherApi;