import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MajorCategory = ({ label }) => {
    return (
        <button className="flex flex-col items-center">
            <span className="capitalize">{label}</span>
            <FontAwesomeIcon icon={faAngleDown}/>
        </button>
    );
}

export default MajorCategory;