import { Link } from "react-router-dom";
import { Paths } from "../../routers/router";
import NavbarDropMenu from "../NavbarDropMenu";

const Navbar = () => {

    let navLinks = [
        {
            label: "RESULTATS",
            url: "/p"
        },
        {
            label: "COMPTES",
            url: "/p"
        },
        {
            label: "DEMANDES",
            url: "/p"
        },
        {
            label: "RECHERCHE & COOPÉRATION",
            url: "/p"
        }
    ]

    return (
        <nav className="z-10 py-5 px-10 h-24 flex justify-between items-center shadow bg-white">

            <Link to={Paths.HOME_PAGE} className="h-full">
                <img src="/fpk_logo.svg" className="h-full" />
            </Link>

            <ul className="flex gap-5 font-semibold">
                {navLinks.map(({ label, url, children }) => (
                    <li key={label} ><NavbarDropMenu label={label} url={url} subElementsList={children} /></li>
                ))}
            </ul>

            <div className="flex gap-4">
                O
            </div>

        </nav>
    );
}

export default Navbar;