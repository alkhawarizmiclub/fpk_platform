import EntStudentApi from "../../../../api/EntStudentApi";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import EntEDocumentCard from "../../../../components/ent/EntEDocumentCard";
import Paths from "../../../../routers/Paths.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const EntStudentEDocumentsPage = () => {

    const e_documents = EntStudentApi.getEDocumentsData();

    return (
        <EntPageContainer title="E-Documents">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                <Link to={Paths.E_STUDENT_E_DOCUMENTS_CREATE_PAGE} className="p-5 flex justify-center items-center shadow rounded-lg border border-slate-100"><FontAwesomeIcon icon={faPlus} /></Link>

                <div class="hidden md:block xl:col-span-2"></div> {/* Grid Placeholder */}

                {e_documents.map(({ label, creationDateTime, type, data }, i) =>
                    <EntEDocumentCard key={i} label={label} creationDateTime={creationDateTime} type={type} data={data} />
                )}

            </div>
        </EntPageContainer>
    );
}

export default EntStudentEDocumentsPage;