import { useState } from "react";
import EntTeacherApi from "../../api/EntTeacherApi";
import { faDownload, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EntTeacherClassRow = ({ id, module_name, filiere_name, student_count }) => {

    const [isDownloading, setIsDownloading] = useState(false);

    const handelCLick = () => {
        setIsDownloading(true);

        EntTeacherApi.getStudentsList(id)
            .then((res) => {
                const url = URL.createObjectURL(res.data);
                const a = document.createElement('a');
                a.href = url;
                a.style = 'display: none';
                a.download = module_name + '.pdf';
                document.body.appendChild(a);
                a.click();
                a.remove();
                URL.revokeObjectURL(url);
            })
            .catch((error) => {
                console.error(error);
                // TODO: Error Handling
            })
            .finally(() => {
                setIsDownloading(false)
            });
    };

    return (
        <tr>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{module_name}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{filiere_name}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{student_count}</td>
            <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-blue-400 text-center">
                <button
                    onClick={handelCLick}
                    className={`px-4 py-2 space-x-2 rounded-lg text-sm text-white ${isDownloading ? "bg-orange-300" : "bg-orange-400 hover:bg-orange-300"} transtition-colors duration-default`}
                >
                    {isDownloading ? (<FontAwesomeIcon icon={faSpinner} className="text-lg loader" />) : (<FontAwesomeIcon icon={faDownload} />)}
                    <span>Télécharger la liste pdf</span>
                </button>
            </td>
        </tr>
    );
}

export default EntTeacherClassRow;