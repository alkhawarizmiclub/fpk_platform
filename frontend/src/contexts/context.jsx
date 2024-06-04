import { createContext, useContext } from "react";

const UserContext = createContext({
    user: {
        firstName: "",
        lastName: "",
        role: "", // teacher || student || staff
        currentMajor: "",
        currentSemester: ""
    }
});

const UserContextProvider = ({ children }) => {

    const user = {
        firstName: "achraf",
        lastName: "mansari",
        role: "teacher",
        currentMajor: "science mathématique et informatique",
        currentSemester: "S6"
    };

    return (
        <>
            <UserContext.Provider value={{ user }}>
                {children}
            </UserContext.Provider>
        </>
    );
}

const useUserContext = () => useContext(UserContext);

export { UserContextProvider, useUserContext };
