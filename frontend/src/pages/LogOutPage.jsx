import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/context";
import Paths from "../routers/Paths.json";

const LogOutPage = () => {

    const { logout } = useUserContext();
    const navigate = useNavigate();

    const logoutHandler = () => {
        logout();
        navigate(Paths.LOGIN_PAGE);
    }

    return (
        <>
            <p>You sure you wanna log out ?</p>
            <button onClick={logoutHandler} className="p-4 bg-gray-300">Yep!</button>
        </>
    );
}

export default LogOutPage;