import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/context";
import Paths from "../routers/Paths.json";


const LogOutPage = () => {

    const { setUser, setAuthenticated, setToken, logout } = useUserContext();
    const navigate = useNavigate();

    const logoutHandler = async () => {
        // await logout();

        setUser({});
        setAuthenticated(false);
        setToken("");
        navigate(Paths.LOGIN_PAGE);

    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-white">

            <div className="p-5 w-full max-w-sm flex flex-col items-center gap-5">
                <img src="/fpk_logo.svg" alt="FPK Logo" className="max-w-40" />
                <p>You sure you wanna log out ?</p>
                <button onClick={logoutHandler} className="px-3 py-2 rounded-lg font-semibold text-white bg-mainEntColor hover:bg-mainEntColorOnHover transition-colors duration-default">Log out</button>
            </div>

        </div>
    );
}

export default LogOutPage;