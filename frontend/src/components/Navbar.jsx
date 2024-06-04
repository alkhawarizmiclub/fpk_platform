import { Link } from "react-router-dom";
import NavbarDropMenu from "./NavbarDropMenu";
import Paths from "../routers/Paths.json";
import Button from "./Button";

const Navbar = () => {

    let navLinks = [
        {
            label: "etablissement",
            children: [
                { label: "Mot du Doyen", url: Paths.DEAN_WORD_PAGE },
                { label: "Présentation", url: Paths.PRESENTATION_PAGE },
                { label: "Staff administratif", url: Paths.STAFF_PAGE },
                { label: "Réglementation", url: Paths.REGULATION_PAGE },
                { label: "Media", url: Paths.MEDIA_PAGE }
            ]
        },
        {
            label: "formation",
            children: [
                { label: "Licence Fondamentale", url: Paths.BACHELORS_PAGE },
                { label: "Licence Professionnelle", url: Paths.PROFESSIONAL_BACHELORS_PAGE },
                { label: "Master", url: Paths.MASTERS_PAGE },
                { label: "Doctorat", url: Paths.PHDS_PAGE }
            ]
        },
        {
            label: "espace scolarité",
            children: [
                { label: "E-Etudiant", url: Paths.E_STUDENT_DASHBOARD_PAGE },
                { label: "E-Enseignant", url: Paths.E_STUDENT_DASHBOARD_PAGE },
                { label: "Emploi du temps", url: "____" },
                { label: "Planning des exams", url: "____" },
            ]
        },
        {
            label: "h",
            children: [
                { label: "Evénements", url: Paths.EVENTS_PAGE },
                { label: "Clubs", url: Paths.CLUBS_PAGE },
                { label: "Activités para-universitaires", url: Paths.EXTRACURRICULAR_ACTIVITIES_PAGE }
            ]
        },
        {
            label: "recherche & coopérqtion",
            children: [
                { label: "Professeurs", url: Paths.PROFESSORS_PAGE },
                { label: "Départements", url: Paths.DEPARTMENTS_PAGE },
                { label: "Laboratoires", url: Paths.LABOLATORIES_PAGE },
                { label: "Equipes de recherche", url: Paths.LABOLATORIES_PAGE },
                { label: "Thèses", url: Paths.THESES_PAGE }
            ]
        },
        { label: "contact", url: Paths.CONTACT_PAGE }
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
                <Button plain_bg={true}>
                    <Link className="py-3 px-6 block" to={Paths.LOGIN_PAGE}>Login</Link>
                </Button>
                <Button>
                    <Link className="py-3 px-6 block" to={Paths.SIGNUP_PAGE}>Apply</Link>
                </Button>
            </div>

        </nav>
    );
}

export default Navbar;