import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../contexts/context";

const Navbar = () => {

    const context = useUserContext();

    const fullname = `${context.user.firstName} ${context.user.lastName}`;

    return (
        <nav className="z-10 p-5 h-20 flex justify-between items-center shadow bg-white">

            <div>
                <div className="font-semibold">{fullname}</div>
                <div className="text-sm text-slate-500">{context.user.currentMajor} - {context.user.currentSemester}</div>
            </div>

            <button className="flex items-center">
                <FontAwesomeIcon icon={faBell} className="text-xl text-slate-500"/>
            </button>

        </nav>
    );
}

export default Navbar;