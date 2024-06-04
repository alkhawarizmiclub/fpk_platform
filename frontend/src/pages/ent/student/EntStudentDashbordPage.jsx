import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import EntStudentPagesUrlsList from "../../../components/ent/EntStudentPagesUrlsList";
import { axiosClient } from "../../../api/axios";


const EntStudentDashbordPage = () => {

    console.log(axiosClient.defaults);

    return (
        <div className="p-5 grid grid-cols-5 gap-5">
            {EntStudentPagesUrlsList.map(({ label, url, icon, bg }, i) => (
                <Link to={url} key={i} className="aspect-square flex flex-col justify-center items-center gap-2 rounded-lg shadow bg-white">
                    <div><FontAwesomeIcon icon={icon} className={`p-5 text-5xl rounded-lg text-white ${bg}`}/></div>
                    <div className="capitalize text-xl">{label}</div>
                </Link>
            ))}
        </div>
    );
}

export default EntStudentDashbordPage;