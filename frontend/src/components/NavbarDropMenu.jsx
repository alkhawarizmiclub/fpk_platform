import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const NavbarDropMenu = ({ label, url, subElementsList }) => {

    let subMenu = null;

    if (subElementsList) {
        subMenu = (
            <div className="absolute -translate-x-1/2 left-1/2 pt-9 hidden group-hover:block text-nowrap">
                <ul className="shadow bg-white">
                    {subElementsList.map(({ label, url }, i) => (
                        <li key={i} className="py-3 px-5 text-slate-900 hover:text-slate-600 border-b border-slate-200 last:border-0">
                            <Link to={url} className="w-full block">{label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div className="relative group">

            <div className="flex items-center gap-1">
                {subElementsList && (
                    <FontAwesomeIcon icon={faAngleDown} className="transition duration-300 transform -rotate-90 group-hover:rotate-0 text-orange-400" />
                )}

                {url ? (
                    <Link to={url} className="capitalize">{label}</Link>
                ) : (
                    <div className="capitalize">{label}</div>
                )}

            </div>

            {subMenu}

        </div>
    );
}

export default NavbarDropMenu;