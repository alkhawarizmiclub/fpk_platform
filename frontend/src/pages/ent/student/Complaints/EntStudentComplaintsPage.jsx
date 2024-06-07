import EntStudentApi from "../../../../api/EntStudentApi";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import Paths from "../../../../routers/Paths.json";

const EntStudentComplaintsPage = () => {

    const complaints = EntStudentApi.getComplaintsData();

    return (
        <EntPageContainer title="Reclamations">
            <table className="w-full rounded shadow overflow-hidden">
                <tbody>
                    <tr className="text-white bg-slate-800">
                        <th className="p-3">Id</th>
                        <th className="p-3">Date et temps</th>
                        <th className="p-3">Sujet</th>
                        <th className="p-3">Message</th>
                    </tr>
                    {complaints.map(({ id, datetime, subject, message }, i) =>
                        <tr key={i}>
                            <td className="p-3 text-center underline">{id}</td>
                            <td className="p-3 text-center">{datetime.getFullYear()}/{datetime.getMonth()}/{datetime.getDay()}</td>
                            <td className="p-3 text-center">{subject}</td>
                            <td className="p-3 break-all">{message}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </EntPageContainer>
    );
}

export default EntStudentComplaintsPage;