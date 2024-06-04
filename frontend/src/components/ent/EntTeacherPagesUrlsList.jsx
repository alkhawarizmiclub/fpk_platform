import { faCalendarDays, faClipboardCheck, faClock, faFileLines, faHome, faTableList, faUser } from "@fortawesome/free-solid-svg-icons";
import Paths from "../../routers/Paths.json";

// ⚠ I put this list in a seperate file because I use it in both the Sidebar component and the EntTeacherDashboardPage page 

const EntTeacherPagesUrlsList = [
    {
        label: "acceuil",
        url: Paths.E_TEACHER_DASHBOARD_PAGE,
        icon: faHome,
        bg: "bg-gradient-to-tr from-red-500 to-red-300",
        isHome: true,
    },
    {
        label: "inscription",
        url: Paths.E_TEACHER_E_DOCUMENTS_PAGE,
        icon: faFileLines,
        bg: "bg-gradient-to-tr from-red-500 to-red-300"
    },
    {
        label: "comptes",
        url: Paths.E_TEACHER_ACCOUNTS_PAGE,
        icon: faUser,
        bg: "bg-gradient-to-tr from-green-500 to-green-300"
    },
    {
        label: "emploi du temps",
        url: Paths.E_TEACHER_SCHEDULES_PAGE,
        icon: faClock,
        bg: "bg-gradient-to-tr from-cyan-500 to-cyan-300"
    },
    {
        label: "planning des exams",
        url: Paths.E_TEACHER_PLANNING_PAGE,
        icon: faCalendarDays,
        bg: "bg-gradient-to-tr from-slate-500 to-slate-300"
    },
    {
        label: "resultats",
        url: Paths.E_TEACHER_RESULTS_PAGE,
        icon: faTableList,
        bg: "bg-gradient-to-tr from-blue-500 to-blue-300"
    },
    {
        label: "e-documents",
        url: Paths.E_TEACHER_E_DOCUMENTS_PAGE,
        icon: faFileLines,
        bg: "bg-gradient-to-tr from-red-500 to-red-300"
    },
    {
        label: "reclamations",
        url: Paths.E_TEACHER_COMPLAINTS_PAGE,
        icon: faClipboardCheck,
        bg: "bg-gradient-to-tr from-orange-500 to-orange-300"
    }
]

export default EntTeacherPagesUrlsList;