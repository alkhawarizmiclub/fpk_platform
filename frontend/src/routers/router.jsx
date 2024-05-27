import { createBrowserRouter } from "react-router-dom";
import Paths from "./Paths.json";
import BlankLayout from "../layouts/BlankLayout";
import StaticPageLayout from "../layouts/StaticPageLayout";
import UserLayout from "../layouts/UserLayout";
import EntLayout from "../layouts/EntLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import LogOutPage from "../pages/LogOutPage";
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
import EntStudentDashbordPage from "../pages/ent/student/EntStudentDashbordPage";
import EntStudentResultsPage from "../pages/ent/student/EntStudentResultsPage";
import EntStudentComplaintsPage from "../pages/ent/student/EntStudentComplaintsPage";
import EntStudentPlanningPage from "../pages/ent/student/EntStudentPlanningPage";
import EntStudentSchedulesPage from "../pages/ent/student/EntStudentSchedulesPage";
import EntStudentInscriptionPage from "../pages/ent/student/EntStudentInscriptionPage";
import EntStudentAccountsPage from "../pages/ent/student/EntStudentAccountsPage";
import EntStudentEDocumentsPage from "../pages/ent/student/EntStudentEDocumentsPage";
import ProfessorsPage from "../pages/static/ProfessorsPage";

const router = createBrowserRouter([
    { path: Paths.HOME_PAGE, element: <HomePage /> },
    {
        element: <BlankLayout />,
        children: [
            { path: Paths.LOGIN_PAGE, element: <LoginPage /> },
            { path: Paths.SIGNUP_PAGE, element: <SignUpPage /> },
            { path: Paths.LOGOUT_PAGE, element: <LogOutPage /> },
            { path: Paths.APPLY_PAGE, element: <ApplyPage /> },
            { path: Paths.ERROR_PAGE, element: <Error404Page /> }
        ]
    },
    {
        element: <StaticPageLayout />,
        children: [
            { path: Paths.HOME_PAGE, element: <HomePage /> },
            { path: "/smi", element: <Smi /> },
            { path: "/sma", element: <Sma /> },
            { path: "/geo", element: <Geo /> },
            { path: "/ea", element: <Ea /> },
            { path: "/smp", element: <Smp /> },
            { path: "/sv", element: <Sv /> },
            { path: "/seg", element: <Seg /> },
            { path: "/smc", element: <Smc /> },
            { path: Paths.DEAN_WORD_PAGE, element: <DeanWordPage /> },
            { path: Paths.PRESENTATION_PAGE, element: <PresentationPage /> },
            { path: Paths.STAFF_PAGE, element: <StaffPage /> },
            { path: Paths.DEPARTMENTS_PAGE, element: <DepartmentsPage /> },
            { path: Paths.REGULATION_PAGE, element: <RegulationPage /> },
            { path: Paths.MEDIA_PAGE, element: <MediaPage /> },
            { path: Paths.PROFESSORS_PAGE, element: <ProfessorsPage /> },
        ]
    },
    {
        element: <EntLayout />,
        children: [
            { path: Paths.E_STUDENT_DASHBOARD_PAGE, element: <EntStudentDashbordPage /> },
            { path: Paths.E_STUDENT_INSCRIPTIONS_PAGE, element: <EntStudentInscriptionPage /> },
            { path: Paths.E_STUDENT_ACCOUNTS_PAGE, element: <EntStudentAccountsPage /> },
            { path: Paths.E_STUDENT_SCHEDULES_PAGE, element: <EntStudentSchedulesPage /> },
            { path: Paths.E_STUDENT_PLANNING_PAGE, element: <EntStudentPlanningPage /> },
            { path: Paths.E_STUDENT_RESULTS_PAGE, element: <EntStudentResultsPage /> },
            { path: Paths.E_STUDENT_E_DOCUMENTS_PAGE, element: <EntStudentEDocumentsPage /> },
            { path: Paths.E_STUDENT_COMPLAINTS_PAGE, element: <EntStudentComplaintsPage /> },
        ]
    }
])

export { router };