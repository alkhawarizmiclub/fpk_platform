import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import NavbarToggleButton from "./NavbarToggleButton";
import { useUserContext } from "../../contexts/context";

const Navbar = () => {

    const {user} = useUserContext();

    return (
        <nav className="z-10 p-5 h-20 flex justify-between items-center shadow bg-white">

            <div className="flex items-center gap-5">
                <NavbarToggleButton className="text-slate-500" />
                <div>
                    <div className="font-semibold">{`${user.firstname} ${user.lastname}`}</div>
                    <div className="text-sm text-slate-500">{user.apogee}</div>
                </div>
            </div>

            {/* <button className="flex items-center">
                <FontAwesomeIcon icon={faBell} className="text-xl text-slate-500" />
            </button> */}

        </nav>
    );
}

export default Navbar;