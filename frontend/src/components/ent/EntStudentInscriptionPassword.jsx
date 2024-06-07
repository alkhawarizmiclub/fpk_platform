import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EntStudentInscriptionPassword = ({ password }) => {

    const [display, setDisplay] = useState(false);

    const blurHandler = () => {
        setDisplay(!display);
    }

    return (
        <span className="space-x-3">
            <button onClick={blurHandler}><FontAwesomeIcon icon={faEye} /></button>
            <span>{display ? password : "•".repeat(password.length)}</span>
        </span>
    );
}

export default EntStudentInscriptionPassword;