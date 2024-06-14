import { createContext, useContext, useState } from "react";
import EntStudentApi from "../api/EntStudentApi";

const UserContext = createContext({
    user: {},
    setUser: (userData) => { },
    authenticated: false,
    setAuthenticated: (isAuthenticated) => { },
    login: async (email, password) => { },
    logout: () => { },
    entPagesList: [],
    setEntPagesList: (entPagesListData) => { },
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
    }

    const [authenticated, _setAuthenticated] = useState(() => {
        const isAuthenticated = localStorage.getItem('AUTHENTICATED');
        return isAuthenticated ? JSON.parse(isAuthenticated) : false;
    });

    const setAuthenticated = (isAuthenticated) => {
        _setAuthenticated(isAuthenticated);
        window.localStorage.setItem("AUTHENTICATED", JSON.stringify(isAuthenticated));
    }

    const [entPagesList, _setEntPagesList] = useState(() => {
        const entPagesListData = window.localStorage.getItem("ENT_PAGES_LIST");
        return entPagesListData ? JSON.parse(entPagesListData) : [];
    });

    const setEntPagesList = (entPagesListData) => {
        window.localStorage.setItem("ENT_PAGES_LIST", JSON.stringify(entPagesListData));
    }

    const [entSidebarDisplay, setEntSidebarDisplay] = useState(false);

    const login = async (email, password) => {
        await EntStudentApi.getCsrfToken();
        return EntStudentApi.login(email, password);
    }

    const logout = () => {
        setUser({});
        setAuthenticated(false);
        setEntPagesList([]);
    }
    const [entPagesList, setEntPagesList] = useState([]);
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
