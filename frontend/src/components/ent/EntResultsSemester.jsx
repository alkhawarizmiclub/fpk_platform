import EntResultsTypeInfo from "./EntResultsTypeInfo";

const EntResultsSemester = ({ majorLabel, semesterNumber, moduleObjects }) => {

    return (
        <table className="w-full rounded-lg shadow overflow-hidden">

            <tbody>

                <tr>
                    <th colSpan={6} className="py-2 px-5 space-x-5 text-lg text-center text-white font-semibold bg-slate-800">
                        <span>{majorLabel}</span>
                        <span>{semesterNumber}</span>
                    </th>
                </tr>

                <tr className="capitalize text-white bg-slate-700">
                    <th className="py-2 px-5 text-left">Module</th>
                    <th className="py-2 px-5">année universitaire</th>
                    <th className="py-2 px-5">Note Normal</th>
                    <th className="py-2 px-5 flex items-center gap-1">
                        <span>Resultat Normal</span>
                        <EntResultsTypeInfo />
                    </th>
                    <th className="py-2 px-5">Note Rattrapage</th>
                    <th className="py-2 px-5 flex items-center gap-1">
                        <span>Resultat Rattrapage</span>
                        <EntResultsTypeInfo />
                    </th>
                </tr>

                {moduleObjects.map(({ name, inscrit_year, normal, rattrapage }, i) => (
                    <tr key={i} className="odd:bg-gray-100">
                        <td className="py-2 px-5">{name ? name : "M32: Architecture des oridanteurs"}</td>
                        <td className="py-2 px-5 text-center">{inscrit_year}</td>
                        <td className="py-2 px-5 text-center">{normal ? `${normal} / 20` : "-"}</td>
                        <td className="py-2 px-5 text-center"></td>
                        <td className="py-2 px-5 text-center">{rattrapage ? `${rattrapage} / 20` : "-"}</td>
                        <td className="py-2 px-5 text-center"></td>
                    </tr>
                ))}
            </tbody>

        </table>
    );
}

export default EntResultsSemester;