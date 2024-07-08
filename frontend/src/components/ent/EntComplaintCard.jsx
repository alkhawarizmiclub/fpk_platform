import { Link } from "react-router-dom";
import Paths from "../../routers/Paths.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const EntComplaintCard = ({ id, type, created_at, description }) => {

    const datetime = new Date(created_at);

    return (
        <div className="relative p-5 shadow rounded-lg border border-slate-100">

            <Link to={Paths.E_STUDENT_COMPLAINTS_DELETE_PAGE.replace(':id', id)} className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 p-2 h-10 w-10 flex justify-center items-center rounded-full bg-slate-300"><FontAwesomeIcon icon={faTrashCan} className="text-white" /></Link>

            <div className="text-slate-500 text-sm">{datetime.getDay()}/{datetime.getMonth()}/{datetime.getFullYear()}</div>
            <h1 className="text-slate-700 font-semibold">#{id} | {type}</h1>
            <p className="text-sm text-slate-500">{description}</p>

        </div>
    );
}

export default EntComplaintCard;