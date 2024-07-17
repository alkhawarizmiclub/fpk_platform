import { useEffect, useState } from "react";
import EntTeacherApi from "../../api/EntTeacherApi";

const EntTeacherGradesStudentEntry = ({ data }) => {


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
        EntTeacherApi.submitGrades(apogee, module_id, normalNote, rattrapageNote)
            .then((response) => {
                console.log(response);
                alert('Notes successfully submitted!');
            })
            .catch((error) => {
                console.log(error);
                alert('Failed to submit grades.');
                console.error(error.getMessage());
            })
            .finally();
    };

    return (
        <tr>
            <td className="px-6 py-4 whitespace-nowrap">
                <img src={student_photo} alt="Student" className="w-10 h-10 rounded-full" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{firstname}</td>
            <td className="px-6 py-4 whitespace-nowrap">{lastname}</td>
            <td className="px-6 py-4 whitespace-nowrap">
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
            <td className="px-6 py-4 whitespace-nowrap">
                <input
                    type="number"
                    step=".01"
                    min="0"
                    max="20"
                    value={rattrapageNote}
                    onChange={(e) => { setRattrapageNote(e.target.value); }}
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <button
                    onClick={handleSubmit}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Envoyer
                </button>
            </td>
        </tr>
    );
}

export default EntTeacherGradesStudentEntry;
