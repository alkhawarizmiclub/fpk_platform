import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const EntStudentInscriptionPassword = ({ password }) => {

    const [blur, setBlur] = useState(true);

    const blurHandler = () => {
        setBlur(!blur);
    }

    return (
        <span className="space-x-3">
            <button onClick={blurHandler}><FontAwesomeIcon icon={faEye} /></button>
            <span className={blur ? "blur" : ""}>{password}</span>
        </span>
    );
}

export default EntStudentInscriptionPassword;