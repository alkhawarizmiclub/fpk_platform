import { createContext, useContext, useState } from "react";

const UserContext = createContext({
    user: {
        firstName: "",
        lastName: "",
        role: "", // teacher || student || staff
        currentMajor: "",
        currentSemester: ""
    },
    entSidebarDisplay: false,
    setEntSidebarDisplay: () => {},
});

const UserContextProvider = ({ children }) => {

    const user = {
        firstName: "achraf",
        lastName: "mansari",
        role: "teacher",
        currentMajor: "science mathématique et informatique",
        currentSemester: "S6"
    };

    const [entSidebarDisplay, setEntSidebarDisplay] = useState(false);

    return (
        <>
            <UserContext.Provider value={{ user, entSidebarDisplay, setEntSidebarDisplay }}>
                {children}
            </UserContext.Provider>
        </>
    );
}

const useUserContext = () => useContext(UserContext);

export { UserContextProvider, useUserContext };
