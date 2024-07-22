import { axiosClient } from "./axiosClient"

const EntTeacherApi = {
    login: async (email, password) => {
        return await axiosClient.post("/api/prof/login", { email, password });
    },
    getAccountsData: async () => {
		return await axiosClient.get("/api/prof/accounts");
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
