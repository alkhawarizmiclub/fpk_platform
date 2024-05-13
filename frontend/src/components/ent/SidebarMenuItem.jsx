import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SidebarMenuItem = ( {url, icon, label} ) => {
    return (
        <Link to={url} className="px-4 py-3 flex gap-2 items-center text-white transition-all duration-300 hover:bg-slate-600">
            <div className="w-5 text-center"><FontAwesomeIcon icon={icon} /></div>
            <span className="capitalize">{label}</span>
        </Link>
    );
}

export default SidebarMenuItem;