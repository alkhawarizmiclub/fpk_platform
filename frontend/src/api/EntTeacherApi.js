const EntTeacherApi = {
    login: (email, password) => { },
    getAccountsData: () => {
        return [
            { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
            { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
            { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
            { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" }
        ]
    },
    submitGrades: (apogee, module_id, grade, session, fname, lname) => {
        console.log(apogee, module_id, grade, session, fname, lname);
    },
    getModulesData: () => {
        return [
            { id: 1, label: "reseau - smi" },
            { id: 2, label: "reseau - seg" },
            { id: 3, label: "lbota - smi" },
            { id: 4, label: "WAW - smp" },
            { id: 5, label: "3a - smi" },
        ]
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
        else{
            console.error('not found');
        }

    }



}

export default EntTeacherApi;