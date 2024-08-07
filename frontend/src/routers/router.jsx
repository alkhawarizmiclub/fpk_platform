import { createBrowserRouter } from "react-router-dom";
import Paths from "./Paths.json";
import BlankLayout from "../layouts/BlankLayout";
import StaticPageLayout from "../layouts/StaticPageLayout";
import EntLayout from "../layouts/EntLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/signupPage/SignUpPage";
import LogOutPage from "../pages/LogOutPage";
import Error404Page from "../pages/static/Error404Page";
import PresentationPage from "../pages/static/PresentationPage";
import StaffPage from "../pages/static/StaffPage";
import DepartmentsPage from "../pages/static/DepartmentsPage";
import EventsPage from "../pages/static/EventsPage";
import RegulationPage from "../pages/static/RegulationPage";
import MediaPage from "../pages/static/MediaPage";
import DeanWordPage from "../pages/static/DeanWordPage";
import ClubsPage from "../pages/static/ClubsPage";
import LfsPage from "../pages/static/LfsPage";
import LpsPage from "../pages/static/LpsPage";
import MastersPage from "../pages/static/MastersPage";
import PhdsPage from '../pages/static/PhdsPage';
import LaboPage from "../pages/static/LaboPage";
import Smi from "../pages/majors/Smi";
import Sma from "../pages/majors/Sma";
import Smp from "../pages/majors/Smp";
import Ea from "../pages/majors/Ea";
import Sv from "../pages/majors/Sv";
import Smc from "../pages/majors/Smc";
import Geo from "../pages/majors/Geo";
import Seg from "../pages/majors/Seg";
import EmpPage from "../pages/static/EmpPage";
import PlanningPage from "../pages/static/PlanningPage";
import EntStudentResultsPage from "../pages/ent/student/EntStudentResultsPage";
import EntStudentComplaintsPage from "../pages/ent/student/Complaints/EntStudentComplaintsPage";
import EntStudentComplaintsCreatePage from "../pages/ent/student/Complaints/EntStudentComplaintsCreatePage";
import EntStudentPlanningPage from "../pages/ent/student/EntStudentPlanningPage";
import EntStudentSchedulePage from "../pages/ent/student/EntStudentSchedulePage";
import EntStudentInscriptionPage from "../pages/ent/student/EntStudentInscriptionPage";
import EntStudentAccountsPage from "../pages/ent/student/EntStudentAccountsPage";
import EntStudentEDocumentsPage from "../pages/ent/student/E-Documents/EntStudentEDocumentsPage";
import ProfessorsPage from "../pages/static/ProfessorsPage";
import EntTeacherAccountsPage from "../pages/ent/teacher/EntTeacherAccountsPage";
import EntTeacherSchedulePage from "../pages/ent/teacher/EntTeacherSchedulePage";
import EntTeacherPlanningPage from "../pages/ent/teacher/EntTeacherPlanningPage";
import EntTeacherClassesPage from "../pages/ent/teacher/EntTeacherClassesPage";
import EntTeacherGradesPage from "../pages/ent/teacher/EntTeacherGradesPage";
import EntStudentComplaintsDeletePage from "../pages/ent/student/Complaints/EntStudentComplaintsDeletePage";
import EntDashboardPage from "../pages/ent/EntDashboardPage";
import EntStudentEDocumentsCreatePage from "../pages/ent/student/E-Documents/EntStudentEDocumentsCreatePage";
import CLUBS_PAGE from "../pages/static/ClubsPage";
import SignUpContextProvider from "../contexts/signUpContext";
import EntTeacherAnnouncementCreatePage from "../pages/ent/teacher/Announces/EntTeacherAnnouncementCreatePage";
import EntTeacherAnnouncementDeletePage from "../pages/ent/teacher/Announces/EntTeacherAnnouncementDeletePage";
import EntTeacherAnnouncementsPage from "../pages/ent/teacher/Announces/EntTeacherAnnouncementsPage";
import AnnouncementPage from "../pages/announcements/AnnouncementPage";
import EntTeacherAnnouncementViewPage from "../pages/ent/teacher/Announces/EntTeacherAnnouncementViewPage";
import AnnouncementsPage from "../pages/announcements/AnnouncementsPage";


const router = createBrowserRouter([
    { path: Paths.HOME_PAGE, element: <HomePage /> },
    {
        element: <BlankLayout />,
        children: [
            { path: Paths.LOGIN_PAGE, element: <LoginPage /> },
            { path: Paths.SIGNUP_PAGE, element: <SignUpContextProvider> <SignUpPage /> </SignUpContextProvider> },
            { path: Paths.LOGOUT_PAGE, element: <LogOutPage /> },
            { path: Paths.ERROR_PAGE, element: <Error404Page /> },
        ]
    },
    {
        element: <StaticPageLayout />,
        children: [
            { path: Paths.HOME_PAGE, element: <HomePage /> },
            { path: Paths.DEAN_WORD_PAGE, element: <DeanWordPage /> },
            { path: Paths.PRESENTATION_PAGE, element: <PresentationPage /> },
            { path: Paths.STAFF_PAGE, element: <StaffPage /> },
            { path: Paths.DEPARTMENTS_PAGE, element: <DepartmentsPage /> },
            { path: Paths.LABO_PAGE, element: <LaboPage /> },
            { path: Paths.REGULATION_PAGE, element: <RegulationPage /> },
            { path: Paths.MEDIA_PAGE, element: <MediaPage /> },
            { path: Paths.PROFESSORS_PAGE, element: <ProfessorsPage /> },
            { path: Paths.BACHELOR_SMI_PAGE, element: <Smi /> },
            { path: Paths.BACHELOR_SMA_PAGE, element: <Sma /> },
            { path: Paths.BACHELOR_GEO_PAGE, element: <Geo /> },
            { path: Paths.BACHELOR_EA_PAGE, element: <Ea /> },
            { path: Paths.BACHELOR_SMP_PAGE, element: <Smp /> },
            { path: Paths.BACHELOR_SV_PAGE, element: <Sv /> },
            { path: Paths.BACHELOR_SEG_PAGE, element: <Seg /> },
            { path: Paths.BACHELOR_SMC_PAGE, element: <Smc /> },

            { path: Paths.ANNOUNCEMENTS_PAGE, element: <AnnouncementsPage /> },
            { path: Paths.ANNOUNCEMENT_PAGE, element: <AnnouncementPage /> },

            { path: Paths.CLUBS_PAGE, element: <ClubsPage /> },
            { path: Paths.LFS_PAGE, element: <LfsPage /> },
            { path: Paths.LPS_PAGE, element: <LpsPage /> },
            { path: Paths.PHDS_PAGE, element: <PhdsPage /> },
            { path: Paths.MASTERS_PAGE, element: <MastersPage /> },
            { path: Paths.EVENTS_PAGE, element: <EventsPage /> },

            { path: Paths.EMP_PAGE, element: <EmpPage /> },
            { path: Paths.PLANNING_PAGE, element: <PlanningPage /> },
        ]
    },
    {
        element: <EntLayout />,
        children: [
            { path: Paths.ENT_DASHBOARD_PAGE, element: <EntDashboardPage /> },
            { path: Paths.E_STUDENT_INSCRIPTIONS_PAGE, element: <EntStudentInscriptionPage /> },
            { path: Paths.E_STUDENT_ACCOUNTS_PAGE, element: <EntStudentAccountsPage /> },
            { path: Paths.E_STUDENT_SCHEDULES_PAGE, element: <EntStudentSchedulePage /> },
            { path: Paths.E_STUDENT_PLANNING_PAGE, element: <EntStudentPlanningPage /> },
            { path: Paths.E_STUDENT_RESULTS_PAGE, element: <EntStudentResultsPage /> },
            { path: Paths.E_STUDENT_E_DOCUMENTS_PAGE, element: <EntStudentEDocumentsPage /> },
            { path: Paths.E_STUDENT_E_DOCUMENTS_CREATE_PAGE, element: <EntStudentEDocumentsCreatePage /> },
            { path: Paths.E_STUDENT_COMPLAINTS_PAGE, element: <EntStudentComplaintsPage /> },
            { path: Paths.E_STUDENT_COMPLAINTS_CREATE_PAGE, element: <EntStudentComplaintsCreatePage /> },
            { path: Paths.E_STUDENT_COMPLAINTS_DELETE_PAGE, element: <EntStudentComplaintsDeletePage /> },
            { path: Paths.E_TEACHER_ACCOUNTS_PAGE, element: <EntTeacherAccountsPage /> },
            { path: Paths.E_TEACHER_SCHEDULES_PAGE, element: <EntTeacherSchedulePage /> },
            { path: Paths.E_TEACHER_PLANNING_PAGE, element: <EntTeacherPlanningPage /> },
            { path: Paths.E_TEACHER_ANNOUNCEMENTS_PAGE, element: <EntTeacherAnnouncementsPage /> },
            { path: Paths.E_TEACHER_ANNOUNCEMENTS_VIEW_PAGE, element: <EntTeacherAnnouncementViewPage /> },
            { path: Paths.E_TEACHER_ANNOUNCEMENTS_CREATE_PAGE, element: <EntTeacherAnnouncementCreatePage /> },
            { path: Paths.E_TEACHER_ANNOUNCEMENTS_DELETE_PAGE, element: <EntTeacherAnnouncementDeletePage /> },
            { path: Paths.E_TEACHER_CLASSES_PAGE, element: <EntTeacherClassesPage /> },
            { path: Paths.E_TEACHER_GRADES_PAGE, element: <EntTeacherGradesPage /> },
        ]
    }

])

export { router };