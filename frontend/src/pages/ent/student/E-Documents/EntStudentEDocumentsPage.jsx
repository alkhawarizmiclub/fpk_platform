import EntStudentApi from "../../../../api/EntStudentApi";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import EntEDocumentCard from "../../../../components/ent/EntEDocumentCard";

const EntStudentEDocumentsPage = () => {

    const e_documents = EntStudentApi.getEDocumentsData();

    return (
        <EntPageContainer title="E-Documents">
            <div className="grid grid-cols-3 gap-5">
                {e_documents.map(({ label, creationDateTime, type, data }, i) =>
                    <EntEDocumentCard key={i} label={label} creationDateTime={creationDateTime} type={type} data={data} />
                )}
            </div>
        </EntPageContainer>
    );
}

export default EntStudentEDocumentsPage;