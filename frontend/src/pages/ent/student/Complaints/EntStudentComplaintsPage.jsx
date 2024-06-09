import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import EntStudentApi from "../../../../api/EntStudentApi";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import Paths from "../../../../routers/Paths.json";

const EntStudentComplaintsPage = () => {

    const complaints = EntStudentApi.getComplaintsData();

    return (
        <EntPageContainer title="Reclamations">

            <div className="mb-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                <Link to={Paths.E_STUDENT_COMPLAINTS_CREATE_PAGE} className="p-5 flex justify-center items-center shadow rounded-lg border border-slate-100"><FontAwesomeIcon icon={faPlus} /></Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {complaints.map(({ id, datetime, subject, message }, i) =>

                    <div key={i} className="relative p-5 shadow rounded-lg border border-slate-100">

                        <Link to={Paths.E_STUDENT_COMPLAINTS_DELETE_PAGE.replace(':id', id)} className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 p-2 h-10 w-10 flex justify-center items-center rounded-full bg-slate-300"><FontAwesomeIcon icon={faTrashCan} className="text-white" /></Link>

                        <div className="text-slate-500 text-sm">{datetime.getDay()}/{datetime.getMonth()}/{datetime.getFullYear()}</div>
                        <h1 className="font-semibold">#{id} | {subject}</h1>
                        <p>{message}</p>

                    </div>

                )}
            </div>

        </EntPageContainer>
    );
}

export default EntStudentComplaintsPage;