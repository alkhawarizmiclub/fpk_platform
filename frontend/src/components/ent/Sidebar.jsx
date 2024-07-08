import Paths from "../../routers/Paths.json";
import SidebarMenuItem from "./SidebarMenuItem";
import { faBorderAll, faHome, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../contexts/context";
import NavbarToggleButton from "./NavbarToggleButton";
import { EntStaffPagesUrlsList, EntStudentPagesUrlsList, EntTeacherPagesUrlsList } from "./EntPagesUrlsList";

const Sidebar = () => {

    const { user, entSidebarDisplay } = useUserContext();

    let entPagesList = []
    switch (user.role) {
        case "student":
            entPagesList = EntStudentPagesUrlsList;
            break;

        case "teacher":
            entPagesList = EntTeacherPagesUrlsList;
            break;

        case "staff":
            entPagesList = EntStaffPagesUrlsList;
            break;

        default:
            break;
    }

    return (
        <>
            <aside className={`fixed z-[11] p-5 w-full max-w-xs h-screen transition-all duration-300 ${entSidebarDisplay ? "-translate-x-0" : "-translate-x-full"} flex flex-col justify-between bg-slate-700`}>

                <div className="space-y-5">
                    <div className="flex items-center text-white">
                        <NavbarToggleButton />
                        <h1 className="text-xl font-semibold">ENT</h1>
                    </div>

                    <div className="flex flex-col gap-1">
                        <SidebarMenuItem label="tableau de bord" url={Paths.ENT_DASHBOARD_PAGE} icon={faBorderAll} />
                        {entPagesList.map(({ label, url, icon }, i) => <SidebarMenuItem label={label} url={url} icon={icon} key={i} />)}
                    </div>
                </div>

                <div>
                    <SidebarMenuItem label="Log Out" url={Paths.LOGOUT_PAGE} icon={faSignOut} />
                    <SidebarMenuItem label="Retour à la page d'accueil" url={Paths.HOME_PAGE} icon={faHome} />
                </div>

            </aside>
        </>
    );
}

export default Sidebar;