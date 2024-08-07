import { faBullhorn, faCalendarDays, faClipboardCheck, faClock, faFileLines, faTableList, faUser, faUsers } from "@fortawesome/free-solid-svg-icons";
import Paths from "../../routers/Paths.json";

// ⚠ I put this list in a seperate file because I use it in both the Sidebar component and the EntDashboardPage page 

const EntStudentPagesUrlsList = [
    {
        label: "inscription",
        url: Paths.E_STUDENT_INSCRIPTIONS_PAGE,
        icon: faFileLines,
        bg: "bg-gradient-to-tr from-stone-400 to-neutral-300"
    },
    {
        label: "comptes",
        url: Paths.E_STUDENT_ACCOUNTS_PAGE,
        icon: faUser,
        bg: "bg-gradient-to-tr from-green-500 to-green-300"
    },
    {
        label: "emploi du temps",
        url: Paths.E_STUDENT_SCHEDULES_PAGE,
        icon: faClock,
        bg: "bg-gradient-to-tr from-cyan-500 to-cyan-300"
    },
    {
        label: "planning des exams",
        url: Paths.E_STUDENT_PLANNING_PAGE,
        icon: faCalendarDays,
        bg: "bg-gradient-to-tr from-slate-500 to-slate-300"
    },
    {
        label: "resultats",
        url: Paths.E_STUDENT_RESULTS_PAGE,
        icon: faTableList,
        bg: "bg-gradient-to-tr from-blue-500 to-blue-300"
    },
    {
        label: "e-documents",
        url: Paths.E_STUDENT_E_DOCUMENTS_PAGE,
        icon: faFileLines,
        bg: "bg-gradient-to-tr from-red-500 to-red-300"
    },
    {
        label: "reclamations",
        url: Paths.E_STUDENT_COMPLAINTS_PAGE,
        icon: faClipboardCheck,
        bg: "bg-gradient-to-tr from-orange-500 to-orange-300"
    }
]

const EntTeacherPagesUrlsList = [
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
        bg: "bg-gradient-to-tr from-orange-500 to-orange-300"
    },
    {
        label: "classes",
        url: Paths.E_TEACHER_CLASSES_PAGE,
        icon: faUsers,
        bg: "bg-gradient-to-tr from-red-500 to-red-300"
    },
    {
        label: "notes",
        url: Paths.E_TEACHER_GRADES_PAGE,
        icon: faTableList,
        bg: "bg-gradient-to-tr from-blue-500 to-blue-300"
    }
];

const EntStaffPagesUrlsList = [
];

export { EntStudentPagesUrlsList, EntTeacherPagesUrlsList, EntStaffPagesUrlsList };