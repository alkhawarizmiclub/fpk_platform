import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EntAccountPassword = ({ password }) => {

    const [display, setDisplay] = useState(false);

    const blurHandler = () => {
        setDisplay(!display);
    }

    return (
        <span className="space-x-3">
            <button onClick={blurHandler}>
                {display ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
            </button>
            <span>{display ? password : "•".repeat(password.length)}</span>
        </span>
    );
}

export default EntAccountPassword;