import { faBullhorn, faCalendarDays, faClock, faHome, faTableList, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
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
        label: "announces",
        url: Paths.E_TEACHER_ANNOUNCEMENTS_PAGE,
        icon: faBullhorn,
        bg: "bg-gradient-to-tr from-slate-500 to-slate-300"
    },
    {
        label: "classes",
        url: Paths.E_TEACHER_CLASSES_PAGE,
        icon: faUsers,
        bg: "bg-gradient-to-tr from-slate-500 to-slate-300"
    },
    {
        label: "notes",
        url: Paths.E_TEACHER_GRADES_PAGE,
        icon: faTableList,
        bg: "bg-gradient-to-tr from-slate-500 to-slate-300"
    }
]

export default EntTeacherPagesUrlsList;