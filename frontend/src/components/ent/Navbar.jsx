import { Link } from "react-router-dom";
import Paths from "../../routers/Paths.json";
import NavbarDropMenu from "../NavbarDropMenu";
import Button from "../Button";

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

            <Button>
                <Link className="py-3 px-6 block" to={Paths.LOGOUT_PAGE}>Log Out</Link>
            </Button>

        </nav>
    );
}

export default Navbar;