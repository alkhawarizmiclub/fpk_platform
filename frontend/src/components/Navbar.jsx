import { Link } from "react-router-dom";
import NavbarDropMenu from "./NavbarDropMenu";
import { Paths } from "../routers/router";
import Button from "./Button";

const Navbar = () => {

    let navLinks = [
        {
            label: "ETABLISSEMENT",
            children: [
                { label: "Mot du Doyen", url: "url 1" },
                { label: "Présentation", url: Paths.PRESENTATION_PAGE },
                { label: "Staff administratif", url: Paths.STAFF_PAGE },
                { label: "Départements", url: "/url 3" },
                { label: "Réglementation", url: "/url 3" },
                { label: "Galerie", url: "/url 3" },
                { label: "Video", url: "/url 3" }
            ]
        },
        {
            label: "FORMATION",
            children: [
                { label: "Licence Fondamentale", url: "/lf" },
                { label: "Licence Professionnelle", url: "/lp" },
                { label: "Master", url: "/master" },
                { label: "Doctorat", url: "/doctorat" }
            ]
        },
        {
            label: "ESPACE ETUDIANTS",
            children: [
                { label: "Evénements", url: "url 1" },
                { label: "Clubs", url: "url 1" },
                { label: "Activités para-universitaires", url: "url 1" }
            ]
        },
        {
            label: "RECHERCHE & COOPÉRATION",
            children: [
                { label: "Laboratoires", url: "url 1" },
                { label: "Thèses", url: "url 1" }
            ]
        },
        {
            label: "CONTACT",
            url: "/contact"
        }
    ]

    return (
        <nav className="z-10 py-5 px-10 h-24 flex justify-between items-center shadow bg-white">

            <Link to={Paths.HOME_PAGE} className="h-full">
                <img src="/fpk_logo.svg" className="h-full" />
            </Link>

            <ul className="flex gap-5 font-semibold">
                {navLinks.map(({ label, children }) => (
                    <li key={label} ><NavbarDropMenu label={label} subElementsList={children} /></li>
                ))}
            </ul>

            <div className="flex gap-4">
                <Button plain_bg={true}>
                    <Link className="py-3 px-6 block" to={Paths.LOGIN_PAGE}>Login</Link>
                </Button>
                <Button>
                    <Link className="py-3 px-6 block" to={Paths.APPLY_PAGE}>Apply</Link>
                </Button>
            </div>

        </nav>
    );
}

export default Navbar;