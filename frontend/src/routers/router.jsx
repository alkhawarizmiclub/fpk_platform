import { createBrowserRouter } from "react-router-dom";
import BlankLayout from "../layouts/BlankLayout";
import StaticPageLayout from "../layouts/StaticPageLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ApplyPage from "../pages/ApplyPage";
import Error404Page from "../pages/static/Error404Page";
import PresentationPage from "../pages/static/PresentationPage";
import StaffPage from "../pages/static/StaffPage";
import DepartmentsPage from "../pages/static/DepartmentsPage";
import RegulationPage from "../pages/static/RegulationPage";
import MediaPage from "../pages/static/MediaPage";
import DeanWordPage from "../pages/static/DeanWordPage";
import Smi from "../pages/majors/Smi";
import Sma from "../pages/majors/Sma";
import Smp from "../pages/majors/Smp";
import Ea from "../pages/majors/Ea";
import Sv from "../pages/majors/Sv";
import Smc from "../pages/majors/Smc";
import Geo from "../pages/majors/Geo";
import Seg from "../pages/majors/Seg";
import UserLayout from "../layouts/UserLayout";
import EntStudentDashbordPage from "../pages/ent/student/EntStudentDashbordPage";

const Paths = {
    HOME_PAGE: "/",
    LOGIN_PAGE: "/login",
    SIGNUP_PAGE: "/signup",
    APPLY_PAGE: "/apply",
    CONTACT_PAGE: "/contact",
    DEAN_WORD_PAGE: "/mot-du-doyen",
    PRESENTATION_PAGE: "/presenetation",
    STAFF_PAGE: "/staff",
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
    
    DEPARTMENTS_PAGE: "/recherche/departements",
    LABOLATORIES_PAGE: "/recherche/laboratoires",
    THESES_PAGE: "/recherche/theses",
    ANNOUNCEMENTS_PAGE: "/avis",
    ERROR_PAGE: "*",
    AL_KHAWARIZMI_CLUB_URL: "https://www.example.com/"
}

const router = createBrowserRouter([
    { path: Paths.HOME_PAGE, element: <HomePage /> },
    {
        element: <BlankLayout />,
        children: [
            { path: Paths.LOGIN_PAGE, element: <LoginPage /> },
            { path: Paths.SIGNUP_PAGE, element: <SignUpPage /> },
            { path: Paths.APPLY_PAGE, element: <ApplyPage /> },
            { path: Paths.ERROR_PAGE, element: <Error404Page /> }
        ]
    },
    {
        element: <StaticPageLayout/>,
        children: [
            { path: Paths.DEAN_WORD_PAGE, element: <DeanWordPage />},
            { path: Paths.PRESENTATION_PAGE, element: <PresentationPage />},
            { path: Paths.STAFF_PAGE, element: <StaffPage /> },
            { path: Paths.DEPARTMENTS_PAGE, element: <DepartmentsPage /> },
            { path: Paths.REGULATION_PAGE, element: <RegulationPage /> },
            { path: Paths.MEDIA_PAGE, element: <MediaPage /> },
        ]
    },
    {
        element: <UserLayout />,
        children: [
            { path: "/e-student", element: <EntStudentDashbordPage />}
        ]
    }
])

export { Paths, router };