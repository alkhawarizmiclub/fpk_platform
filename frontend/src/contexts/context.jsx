import { createContext, useContext, useState } from "react";
import EntStudentApi from "../api/EntStudentApi";
import { readFromLocalStorage, writeToLocalStorage } from "../api/localStorage";

const UserContext = createContext({
    user: {},
    setUser: (userData) => { },
    authenticated: false,
    setAuthenticated: (isAuthenticated) => { },
    token: "",
    setToken: (tokenValue) => { },
    login: async (email, password) => { },
    logout: async () => { },
    entSidebarDisplay: false,
    setEntSidebarDisplay: () => { },
});


const UserContextProvider = ({ children }) => {

    const [user, _setUser] = useState(() => {
        const userData = window.localStorage.getItem('USER');
        return userData ? JSON.parse(userData) : {};
    });

    const setUser = (userData) => {
        _setUser(userData);
        window.localStorage.setItem("USER", JSON.stringify(userData));
    };

    const [authenticated, _setAuthenticated] = useState(() => {
        const isAuthenticated = localStorage.getItem('AUTHENTICATED');
        return isAuthenticated ? JSON.parse(isAuthenticated) : false;
    });

    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated);
        window.localStorage.setItem("AUTHENTICATED", JSON.stringify(isAuthenticated));
    };

    const [token, _setToken] = useState(() => {
        readFromLocalStorage("TOKEN", "");
    });

    const setToken = (tokenValue) => {
        _setToken(tokenValue);
        writeToLocalStorage("TOKEN", tokenValue);
    }

    const [entSidebarDisplay, setEntSidebarDisplay] = useState(false);

    const login = async (email, password) => {
        await EntStudentApi.getCsrfToken();
        return EntStudentApi.login(email, password);
    }

    const logout = async () => {
        await EntStudentApi.logout();
    }

    return (
        <UserContext.Provider value={{ user, setUser, authenticated, setAuthenticated, token, setToken, login, logout, entSidebarDisplay, setEntSidebarDisplay }}>
            {children}
        </UserContext.Provider>
    );
}


const useUserContext = () => useContext(UserContext);

export default UserContextProvider;
export { useUserContext };
