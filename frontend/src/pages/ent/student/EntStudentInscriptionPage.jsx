import EntPageContainer from "../../../components/ent/EntPageContainer";
import EntStudentApi from "../../../api/EntStudentApi";
import { useEffect, useState } from "react";

const EntStudentInscriptionPage = () => {

    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        EntStudentApi.getInscriptionData().then((resp) => {
            setSubjects(resp.data);
        });
    }, []);

    return (
        <EntPageContainer title="Inscription">
            <table className="w-full rounded shadow overflow-hidden">
                <tbody>
                    <tr className="text-white bg-slate-800">
                        {/* <th className="p-3">Systeme</th> */}
                        <th className="p-3">Module</th>
                        <th className="p-3">Semester</th>
                        {/* <th className="p-3">Group</th> */}
                        <th className="p-3">Statue</th>
                    </tr>
                    {subjects.map(({ isOldSystem, module_name, semester }, i) => (
                        <tr key={i} className="text-slate-700 odd:bg-gray-100">
                            {/* <td className="p-3 text-center">{isOldSystem ? "Ancienne" : "Nouveau"}</td> */}
                            <td className="p-3 text-center">{module_name}</td>
                            <td className="p-3 text-center">{semester}</td>
                            {/* <td className="p-3 text-center">{groupLabel}</td> */}
                            {/* <td className="p-3 text-center">{inscriptionStatus}</td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </EntPageContainer>
    );
}

export default EntStudentInscriptionPage;