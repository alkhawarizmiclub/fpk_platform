import { faPlus, faSpinner, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import EntStudentApi from "../../../../api/EntStudentApi";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import Paths from "../../../../routers/Paths.json";
import { useEffect, useState } from "react";
import EntComplaintCard from "../../../../components/ent/EntComplaintCard";

const EntStudentComplaintsPage = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [complaintsList, setComplaintsList] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        EntStudentApi.getComplaintsData()
            .then((response) => {
                setComplaintsList(response.data.data);
            })
            .catch(() => {
                // TODO: Add error handling
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, [])

    return (
        <EntPageContainer title="Reclamations">
            {isLoading ? (

                <div className="text-center"><FontAwesomeIcon icon={faSpinner} className="text-lg loader" /></div>

            ) : (

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                    <Link to={Paths.E_STUDENT_COMPLAINTS_CREATE_PAGE} className="p-5 flex justify-center items-center shadow rounded-lg border border-slate-100"><FontAwesomeIcon icon={faPlus} /></Link>

                    <div className="hidden md:block xl:col-span-2"></div> {/* Grid Placeholder */}

                    {complaintsList.map(({ id, type, created_at, description }, i) => (

                        <EntComplaintCard key={id} id={id} type={type} created_at={created_at} description={description} />

                    ))}

                </div>
            )}


        </EntPageContainer>
    );
}

export default EntStudentComplaintsPage;