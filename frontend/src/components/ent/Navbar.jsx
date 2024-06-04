import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {

    let fullname = "Achraf Mansari";
    let major = "Science Mathématique et Informatique";
    let semester = "S6"

    return (
        <nav className="z-10 p-5 h-20 flex justify-between items-center shadow bg-white">

            <div>
                <div className="font-semibold">{fullname}</div>
                <div className="text-sm text-slate-500">{major} - {semester}</div>
            </div>

            <button className="flex items-center">
                <FontAwesomeIcon icon={faBell} className="text-xl text-slate-500"/>
            </button>

        </nav>
    );
}

export default Navbar;