import { faAngleRight, faEye, faEyeDropper, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import EntResultsTypeInfo from "./EntResultsTypeInfo";

const EntResultsSemester = ({ majorLabel, semesterNumber, moduleObjects }) => {

    const [extended, setExtended] = useState(false);

    const handleExtendButton = () => {
        setExtended(!extended);
    }


    return (
        <div className="transition-all duration-300">

            <div colSpan="5" className="py-2 px-5 flex gap-5 text-lg text-center text-slate-700 font-semibold bg-slate-200">
                <div className="grow space-x-2">
                    <span>{majorLabel}</span>
                    <FontAwesomeIcon icon={faAngleRight} className="text-xs text-slate-600" />
                    <span>S{semesterNumber}</span>
                </div>
                <button onClick={() => handleExtendButton()} className="capitalize">
                    {extended ? <FontAwesomeIcon icon={faEyeSlash} /> : <FontAwesomeIcon icon={faEye} />}
                </button>
            </div>

            <div className={`${extended ? "h-full" : "h-0"} overflow-hidden transition-all duration-300`}>

                <table className="w-full">
                    <tbody>
                        <tr className="capitalize text-slate-500 bg-slate-100">
                            <th className="py-2 px-5 text-left">Module</th>
                            <th className="py-2 px-5">année universitaire</th>
                            <th className="py-2 px-5">Note Normal</th>
                            <th className="py-2 px-5 flex items-center">
                                <EntResultsTypeInfo />
                                <span>Resultat Normal</span>
                            </th>
                            <th className="py-2 px-5">Note Rattrapage</th>
                            <th className="py-2 px-5 flex items-center">
                                <EntResultsTypeInfo />
                                <span>Resultat Rattrapage</span>
                            </th>
                        </tr>
                        {moduleObjects.map(({ name, season, normal, rattrapage }, i) => (
                            <tr key={i}>
                                <td className="py-2 px-5">{name}</td>
                                <td className="py-2 px-5 text-center">{season}</td>
                                <td className="py-2 px-5 text-center">{normal} / 20</td>
                                <td className="py-2 px-5 text-center">R</td>
                                <td className="py-2 px-5 text-center">{rattrapage} / 20</td>
                                <td className="py-2 px-5 text-center">V</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

        </div>
    );
}

export default EntResultsSemester;