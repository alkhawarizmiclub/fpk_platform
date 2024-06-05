import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useUserContext } from "../../contexts/context";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavbarToggleButton = ({ className }) => {

    const context = useUserContext();

    const sidebarHandler = () => {
        context.setEntSidebarDisplay(!context.entSidebarDisplay);
    }

    return (
        <button onClick={sidebarHandler} className={`p-3 ${className}`}><FontAwesomeIcon icon={faBars} className="text-xl" /></button>
    );
}

export default NavbarToggleButton;