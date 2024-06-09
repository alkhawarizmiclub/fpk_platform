import { createContext, useContext, useState } from "react";
import EntStudentApi from "../api/EntStudentApi";

const UserContext = createContext({
    user: {},
    setUser: (userData) => { },
    authenticated: false,
    setAuthenticated: (isAuthenticated) => { },
    login: async (email, password) => { },
    logout: () => { },
    entPagesList: {},
    setEntPagesList: () => { },
    entSidebarDisplay: false,
    setEntSidebarDisplay: () => { },
});


const UserContextProvider = ({ children }) => {

    const [user, _setUser] = useState(() => {
        const userData = localStorage.getItem('USER');
        return userData ? JSON.parse(userData) : {};
    });

    const setUser = (userData) => {
        _setUser(userData);
        window.localStorage.setItem("USER", JSON.stringify(userData));
    }

    const [authenticated, _setAuthenticated] = useState(() => {
        const isAuthenticated = localStorage.getItem('AUTHENTICATED');
        return isAuthenticated ? JSON.parse(isAuthenticated) : false;
    });

    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated);
        window.localStorage.setItem("AUTHENTICATED", JSON.stringify(isAuthenticated));
    }

    const login = async (email, password) => {
        await EntStudentApi.getCsrfToken();
        return EntStudentApi.login(email, password);
    }

    const logout = () => {
        setUser({});
        setAuthenticated(false);
    }

    const [entPagesList, setEntPagesList] = useState({});
    const [entSidebarDisplay, setEntSidebarDisplay] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser, authenticated, setAuthenticated, login, logout, entPagesList, setEntPagesList, entSidebarDisplay, setEntSidebarDisplay }}>
            {children}
        </UserContext.Provider>
    );
}


const useUserContext = () => useContext(UserContext);

export default UserContextProvider;
export { useUserContext };
