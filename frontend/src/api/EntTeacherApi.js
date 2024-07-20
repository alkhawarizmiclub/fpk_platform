import { axiosClient } from "./axiosClient"

const EntTeacherApi = {
    login: async (email, password) => {
        return await axiosClient.post("/api/prof/login", { email, password });
    },
    getAccountsData: async () => {
        await new Promise(resolve => setTimeout(resolve, 800)); // TO BE REMOVED
        return {
            status: 200,
            data: {
                data: [
                    { account_type: "Microsoft Office", account_id: "firstname.lastname@usms.ac.ma", account_password: "thisIsYourPassword", account_url: "http://www.google.com" },
                    { account_type: "Microsoft Office", account_id: "firstname.lastname@usms.ac.ma", account_password: "thisIsYourPassword", account_url: "http://www.google.com" },
                    { account_type: "Microsoft Office", account_id: "firstname.lastname@usms.ac.ma", account_password: "thisIsYourPassword", account_url: "http://www.google.com" },
                    { account_type: "Microsoft Office", account_id: "firstname.lastname@usms.ac.ma", account_password: "thisIsYourPassword", account_url: "http://www.google.com" }
                ],
            }
        }
    },
    getSchedulePDF: async () => {
        return await axiosClient.get("/api/prof/schedule");
    },
    getSchedulePDF: async () => {
        return await axiosClient.get("/api/prof/schedule");
    },
    getOwnAnnouncements: async () => {
        return await axiosClient.get("/api/prof/announce");
    },
    submitAnnouncement: async (data) => {
        return await axiosClient.post("/api/prof/announce", data, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
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

    },
	getClassesData: async () => {
		return await axiosClient.get("/api/prof/classes");
	},
	getStudentsList: async (id) => {
		return axiosClient.get(`/api/prof/classes/${id}`, {
			responseType: 'blob'
		});
	},
}

export default EntTeacherApi;
