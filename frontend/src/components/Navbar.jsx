import { Link } from "react-router-dom";
import NavbarDropMenu from "./NavbarDropMenu";

const Navbar = () => {

    let navLinks = [
        {
            label: "ETABLISSEMENT",
            children: [
                {label: "Mot du Doyen", url: "url 1"},
                {label: "Présentation", url: "url 2"},
                {label: "Staff administratif", url: "url 3"},
                {label: "Départements", url: "url 3"},
                {label: "Réglementation", url: "url 3"},
                {label: "Galerie", url: "url 3"},
                {label: "Video", url: "url 3"}
            ]
        },
        {
            label: "FORMATION",
            children: [
                {label: "Licence Fondamentale", url: "/lf"},
                {label: "Licence Professionnelle", url: "/lp"},
                {label: "Master", url: "/master"},
                {label: "Doctorat", url: "/doctorat"}
            ]
        },
        {
            label: "ESPACE ETUDIANTS",
            children: [
                {label: "Evénements", url: "url 1"},
                {label: "Clubs", url: "url 1"},
                {label: "Activités para-universitaires", url: "url 1"}
            ]
        },
        {
            label: "RECHERCHE & COOPÉRATION",
            children: [
                {label: "Laboratoires", url: "url 1"},
                {label: "Thèses", url: "url 1"}
            ]
        },
        {
            label: "CONTACT"
        }
    ]

    return (
        <nav className="z-[1] py-5 px-10 h-24 flex justify-between items-center shadow bg-white">

            <img src="/fpk_logo.svg" className="h-full" />

            <ul className="flex gap-5 font-semibold">
                {navLinks.map(({ label, children }) => (
                    <li key={label} ><NavbarDropMenu label={label} subElementsList={children} /></li>
                ))}
            </ul>

            <div className="flex gap-4">
                <Link type="button" className="py-3 px-6 rounded-lg text-white font-semibold bg-orange-400" to="/login">Login</Link>
                <Link type="button" className="py-3 px-6 rounded-lg text-orange-400 font-semibold border border-orange-400" to="/apply">Apply</Link>
            </div>

        </nav>
    );
}

export default Navbar;