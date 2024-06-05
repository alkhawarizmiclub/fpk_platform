import { Link } from "react-router-dom";
import Paths from "../../routers/Paths.json";
import SidebarMenuItem from "./SidebarMenuItem";
import { faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useUserContext } from "../../contexts/context";
import NavbarToggleButton from "./NavbarToggleButton";

const Sidebar = ({ EntPagesUrlsList }) => {

    const context = useUserContext();

    return (
        <>
            <aside className={`fixed z-[11] p-5 w-full max-w-xs h-screen transition-all duration-300 ${context.entSidebarDisplay ? "-translate-x-0" : "-translate-x-full"} flex flex-col justify-between bg-slate-700`}>

                <div className="space-y-5">
                    <NavbarToggleButton className="text-white" />

                    <Link to={Paths.HOME_PAGE} className="w-full aspect-[3/1] flex">
                        <img src="/fpk_logo.svg" className="w-full h-full object-contain" />
                    </Link>

                    <div className="flex flex-col gap-1">
                        {EntPagesUrlsList.map(({ label, url, icon }, i) => <SidebarMenuItem label={label} url={url} icon={icon} key={i} />)}
                    </div>
                </div>

                <SidebarMenuItem label="Log Out" url={Paths.LOGOUT_PAGE} icon={faSignOut} />

            </aside>
        </>
    );
}

export default Sidebar;