import { Link } from "react-router-dom";
import NavbarDropMenu from "./NavbarDropMenu";
import Paths from "../routers/Paths.json";
import Button from "./Button";
import { useUserContext } from "../contexts/context";

const Navbar = () => {

    const { authenticated } = useUserContext();

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
                { label: "Licence Professionnelle", url: Paths.LPS_PAGE },
                { label: "Master", url: Paths.MASTERS_PAGE },
                { label: "Doctorat", url: Paths.PHDS_PAGE }
            ]
        },
        {
            label: "espace scolarité",
            children: [
                { label: "Espace numerique de Travail", url: Paths.ENT_DASHBOARD_PAGE },
                // { label: "Emploi du temps", url: Paths.EMP_PAGE },
                // { label: "Planning des exams", url: Paths.PLANNING_PAGE },
            ]
        },
        {
            label: "nouveautés",
            children: [
                { label: "Avis", url: Paths.ANNOUNCEMENTS_PAGE },
                { label: "Evenement", url: Paths.EVENTS_PAGE },
            ]
        },
        {
            label: "recherche & coopération",
            children: [
                { label: "Professeurs", url: Paths.PROFESSORS_PAGE },
                { label: "Départements", url: Paths.DEPARTMENTS_PAGE },
                { label: "Laboratoires", url: Paths.LABO_PAGE },
               
            ]
        },
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

                {authenticated ? (
                    <>
                        <Button>
                            <Link className="py-3 px-6 block" to={Paths.ENT_DASHBOARD_PAGE}>ENT</Link>
                        </Button>
                        <Button plain_bg={true}>
                            <Link className="py-3 px-6 block" to={Paths.LOGOUT_PAGE}>Log Out</Link>
                        </Button>
                    </>
                ) : (
                    <>
                        <Button plain_bg={true}>
                            <Link className="py-3 px-6 block" to={Paths.LOGIN_PAGE}>Login</Link>
                        </Button>
                        <Button>
                            <Link className="py-3 px-6 block" to={Paths.SIGNUP_PAGE}>Apply</Link>
                        </Button>
                    </>
                )}
            </div >

        </nav >
    );
}

export default Navbar;