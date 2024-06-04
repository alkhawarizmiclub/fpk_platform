import EntPageContainer from "../../../components/ent/EntPageContainer";

const EntStudentInscriptionPage = () => {

    const subjects = [
        { label: "Module 2", isOldSystem: true, semesterNumber: 2, groupLabel: "Group 3", inscriptionStatus: "Inscrit" },
        { label: "Module 2", isOldSystem: true, semesterNumber: 2, groupLabel: "Group 4", inscriptionStatus: "Inscrit" },
        { label: "Module 2", isOldSystem: true, semesterNumber: 2, groupLabel: "Section B", inscriptionStatus: "Inscrit" },
        { label: "Module 2", isOldSystem: true, semesterNumber: 2, groupLabel: "Secion A", inscriptionStatus: "Inscrit" },
        { label: "Module 2", isOldSystem: true, semesterNumber: 2, groupLabel: "", inscriptionStatus: "Inscrit" },
    ]

    return (
        <EntPageContainer title="Inscription">
            <table className="w-full">
                <tbody>
                    <tr className="bg-slate-300">
                        <th className="p-3">Systeme</th>
                        <th className="p-3">Module</th>
                        <th className="p-3">Semester</th>
                        <th className="p-3">Group</th>
                        <th className="p-3">Statue</th>
                    </tr>
                    {subjects.map(({ label, isOldSystem, semesterNumber, groupLabel, inscriptionStatus }, i) => (
                        <tr>
                            <td className="p-3 text-center">{isOldSystem ? "Ancienne" : "Nouveau"}</td>
                            <td className="p-3 text-center">{label}</td>
                            <td className="p-3 text-center">{semesterNumber}</td>
                            <td className="p-3 text-center">{groupLabel}</td>
                            <td className="p-3 text-center">{inscriptionStatus}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </EntPageContainer>
    );
}

export default EntStudentInscriptionPage;