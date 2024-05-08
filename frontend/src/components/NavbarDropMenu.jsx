import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavbarDropMenu = ({ label, subElementsList }) => {

    let subMenu = null;

    if (subElementsList) {
        subMenu = (
            <div className="absolute -translate-x-1/2 left-1/2 pt-9 hidden group-hover:block text-nowrap">
                <ul className="shadow bg-white">
                    {subElementsList.map(( {label, url} ) => (
                        <li key={label} className="py-3 px-5 text-slate-900 hover:text-slate-600 border-b border-slate-200 last:border-0">
                            <a href={url} className="w-full block">{label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div className="relative group">

            <div className="flex items-center space-x-1">
                {subElementsList && (
                    <FontAwesomeIcon icon={faAngleDown} className="transition duration-300 transform -rotate-90 group-hover:rotate-0 text-orange-400" />
                )}
                <div>{label}</div>
            </div>

            {subMenu}

        </div>
    );
}

export default NavbarDropMenu;