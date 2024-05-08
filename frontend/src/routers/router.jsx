import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import Error404Page from "../pages/Error404Page";
import PlainLayout from "../layouts/PlainLayout";
import UserLayout from "../layouts/UserLayout";
import PageLayout from "../layouts/PageLayout";
import ApplyPage from "../pages/ApplyPage";
import PresentationPage from "../pages/PresentationPage";
import StaffPage from "../pages/StaffPage";
import Smi from "../pages/majors/Smi";
import Sma from "../pages/majors/Sma";
import Smp from "../pages/majors/Smp";
import Ea from "../pages/majors/Ea";
import Sv from "../pages/majors/Sv";
import Smc from "../pages/majors/Smc";
import Geo from "../pages/majors/Geo";
import Seg from "../pages/majors/Seg";

const Paths = {
    HOME_PAGE: "/",
    LOGIN_PAGE: "/login",
    SIGNUP_PAGE: "/signup",
    APPLY_PAGE: "/apply",
    CONTACT_PAGE: "/apply",
    WORD_FROM_THE_DEAN_PAGE: "/mot-du-doyen",
    PRESENTATION_PAGE: "/presenetation",
    STAFF_PAGE: "/staff",
    DEPARTMENTS_PAGE: "/departements",
    REGULATION_PAGE: "/reglementation",
    MEDIA_PAGE: "/media",
    TRACKS_PAGE: "/formations",
    BACHELORS_PAGE: "/formations/licence-fondamentale",
    PROFESSIONAL_BACHELORS_PAGE: "/formations/licence-professionnelle",
    MASTERS_PAGE: "/formations/master",
    PHDS_PAGE: "/formations/doctorat",
    E_STUDENT_PAGE: "/e-student",
    E_TEACHER_PAGE: "/e-enseignant",
    EVENTS_PAGE: "/events",
    CLUBS_PAGE: "/clubs",
    EXTRACURRICULAR_ACTIVITIES_PAGE: "/activite-parascolaire",
    LABOLATORIES_PAGE: "/recherche/laboratoires",
    THESES_PAGE: "/recherche/theses",
    ANNOUNCEMENTS_PAGE: "/avis",
    ERROR_PAGE: "*",
    AL_KHAWARIZMI_CLUB_URL: "https://www.example.com/"
}

const router = createBrowserRouter([
    {
        element: <PlainLayout />,
        children: [
            { path: Paths.LOGIN_PAGE, element: <LoginPage /> },
            { path: Paths.SIGNUP_PAGE, element: <SignUpPage /> },
            { path: Paths.APPLY_PAGE, element: <ApplyPage /> },
            { path: Paths.ERROR_PAGE, element: <Error404Page /> }
        ]
    },
    {
        element: <UserLayout />,
        children: [
            {
                path: Paths.HOME_PAGE,
                element: <HomePage />
            }
        ]
    },
    { path: Paths.PRESENTATION_PAGE, element: <PresentationPage page_title="Presenetation" /> },
    { path: Paths.STAFF_PAGE, element: <StaffPage page_title="Staff administratif" /> },
])

export { Paths, router };