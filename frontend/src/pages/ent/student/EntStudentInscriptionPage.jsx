import EntPageContainer from "../../../components/ent/EntPageContainer";
import EntStudentApi from "../../../api/EntStudentApi";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const EntStudentInscriptionPage = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [semesterSubjects, setSemesterSubjects] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        EntStudentApi.getInscriptionData()
            .then((response) => {
                const groupedData = Object.groupBy(response.data, item => item.semester);
                setSemesterSubjects(groupedData);
            })
            .catch(() => {
                // TODO: Add error handling
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, []);

    return (
        <EntPageContainer title="Inscription">

            {isLoading ? (

                <div className="text-center"><FontAwesomeIcon icon={faSpinner} className="text-lg loader" /></div>

            ) : (

                <div className="space-y-5">

                    {Object.entries(semesterSubjects).map(([semester, subjects]) => (
                        <table key={semester} className="w-full rounded shadow overflow-hidden">
                            <tbody>
                                <tr className="text-white bg-slate-800">
                                    <th className="p-3">Filiere</th>
                                    <th className="p-3">Module</th>
                                    <th className="p-3">Semester</th>
                                    <th className="p-3">Statue</th>
                                </tr>

                                {subjects.map(({ id, module_name, filiere }) => (
                                    <tr key={id} className="odd:bg-gray-100">
                                        <td className="p-3 text-center">{filiere}</td>
                                        <td className="p-3">{module_name}</td>
                                        <td className="p-3 text-center">{semester}</td>
                                        <td className="p-3 text-center">I</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ))}

                </div>

            )}

        </EntPageContainer>
    );
}

export default EntStudentInscriptionPage;