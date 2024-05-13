import { Link } from "react-router-dom";
import Paths from "../../routers/Paths.json";
import EntPagesUrlsList from "./EntPagesUrlsList";
import SidebarMenuItem from "./SidebarMenuItem";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {

    return (
        <aside className="p-5 w-full max-w-xs space-y-5 bg-slate-700">

            <Link to={Paths.HOME_PAGE} className="w-full aspect-[3/1] flex">
                <img src="/fpk_logo.svg" className="w-full h-full object-contain" />
            </Link>

            <div className="flex flex-col gap-1">
                <SidebarMenuItem label="Home" url={Paths.E_STUDENT_DASHBOARD_PAGE} icon={faHome} />
                {EntPagesUrlsList.map(({ label, url, icon }, i) => <SidebarMenuItem label={label} url={url} icon={icon} key={i} />)}
            </div>

        </aside>
    );
}

export default Sidebar;