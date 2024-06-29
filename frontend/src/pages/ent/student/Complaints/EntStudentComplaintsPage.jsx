import { faPlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import EntStudentApi from "../../../../api/EntStudentApi";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import Paths from "../../../../routers/Paths.json";
import { useEffect, useState } from "react";

const EntStudentComplaintsPage = () => {

    const [complaintsList, setComplaintsList] = useState([]);

    useEffect(() => {
        EntStudentApi.getComplaintsData().then((response) => {
            console.log(response.data);
            setComplaintsList(response.data);
        });
    })

    return (
        <EntPageContainer title="Reclamations">

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                <Link to={Paths.E_STUDENT_COMPLAINTS_CREATE_PAGE} className="p-5 flex justify-center items-center shadow rounded-lg border border-slate-100"><FontAwesomeIcon icon={faPlus} /></Link>

                <div className="hidden md:block xl:col-span-2"></div> {/* Grid Placeholder */}

                {complaintsList.map(({ id, type, created_at, description }, i) =>

                    <div key={i} className="relative p-5 shadow rounded-lg border border-slate-100">

                        <Link to={Paths.E_STUDENT_COMPLAINTS_DELETE_PAGE.replace(':id', id)} className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 p-2 h-10 w-10 flex justify-center items-center rounded-full bg-slate-300"><FontAwesomeIcon icon={faTrashCan} className="text-white" /></Link>

                        {/* <div className="text-slate-500 text-sm">{datetime.getDay()}/{datetime.getMonth()}/{datetime.getFullYear()}</div> */}
                        <h1 className="font-semibold">#{id} | {type}</h1>
                        <p>{description}</p>

                    </div>

                )}

            </div>

        </EntPageContainer>
    );
}

export default EntStudentComplaintsPage;