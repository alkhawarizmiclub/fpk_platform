import { useEffect, useState } from "react";
import EntTeacherApi from "../../api/EntTeacherApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faSpinner } from "@fortawesome/free-solid-svg-icons";

const EntTeacherGradesStudentEntry = ({ data }) => {

    const [isSubmitting, setIsSubmitting] = useState();

    const { apogee, module_id, student_photo, firstname, lastname, normale, ratt } = data;

    const [normalNote, _setNormalNote] = useState('');
    const [rattrapageNote, _setRattrapageNote] = useState('');

    const setNormalNote = (val) => {
        _setNormalNote(val ? val : '');
    }
    const setRattrapageNote = (val) => {
        _setRattrapageNote(val ? val : '');
    }

    useEffect(() => {
        setNormalNote(normale);
        setRattrapageNote(ratt);
    }, [normale, ratt]);

    const handleSubmit = async () => {
        setIsSubmitting(true);

        EntTeacherApi.submitGrades(apogee, module_id, normalNote, rattrapageNote)
            .then((response) => {
                alert('Notes successfully submitted!');
            })
            .catch((error) => {
                alert('Failed to submit grades.');
            })
            .finally(() => {
                setIsSubmitting(false);
            });
    };

    return (
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">
                <img src={student_photo} alt="Student" className="w-10 h-10 rounded-full" />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{firstname}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{lastname}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{apogee}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">
                <input
                    type="number"
                    step=".01"
                    min="0"
                    max="20"
                    value={normalNote}
                    onChange={(e) => { setNormalNote(e.target.value); }}
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">
                <input
                    type="number"
                    step=".01"
                    min="0"
                    max="20"
                    disabled={normalNote >= 10}
                    value={rattrapageNote}
                    onChange={(e) => { setRattrapageNote(e.target.value); }}
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">
                <button
                    onClick={handleSubmit}
                    className={`px-4 py-2 space-x-2 rounded-lg text-sm text-white ${isSubmitting ? "bg-orange-300" : "bg-orange-400 hover:bg-orange-300"} transtition-colors duration-default`}
                >
                    {isSubmitting ? (<FontAwesomeIcon icon={faSpinner} className="text-lg loader" />) : (<FontAwesomeIcon icon={faSave} />)}
                    <span>Envoyer</span>
                </button>
            </td>
        </tr>
    );
}

export default EntTeacherGradesStudentEntry;
