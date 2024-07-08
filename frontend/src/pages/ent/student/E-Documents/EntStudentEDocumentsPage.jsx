import EntStudentApi from "../../../../api/EntStudentApi";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import EntEDocumentCard from "../../../../components/ent/EntEDocumentCard";
import Paths from "../../../../routers/Paths.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const EntStudentEDocumentsPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    
    const [docsList, setDocsList] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        EntStudentApi.getEDocumentsData()
            .then((response) => {
                setDocsList(response.data);
            })
            .catch(() => {
                // TODO: Add error handling
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, []);


    return (
        <EntPageContainer title="E-Documents">
            {isLoading ? (

                <div className="text-center"><FontAwesomeIcon icon={faSpinner} className="text-lg loader" /></div>

            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                    <Link to={Paths.E_STUDENT_E_DOCUMENTS_CREATE_PAGE} className="p-5 flex justify-center items-center shadow rounded-lg border border-slate-100"><FontAwesomeIcon icon={faPlus} /></Link>

                    <div className="hidden md:block xl:col-span-2"></div> {/* Grid Placeholder */}

                    {docsList.map(({ label, creationDateTime, type, data }, i) =>
                        <EntEDocumentCard key={i} label={label} creationDateTime={creationDateTime} type={type} data={data} />
                    )}

                </div>
            )}
        </EntPageContainer>
    );
}

export default EntStudentEDocumentsPage;