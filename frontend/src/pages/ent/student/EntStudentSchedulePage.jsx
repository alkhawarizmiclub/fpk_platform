import EntStudentApi from "../../../api/EntStudentApi";
import EntPageContainer from "../../../components/ent/EntPageContainer";

const EntStudentSchedulePage = () => {

    const schedulePDF = EntStudentApi.getSchedulePDF();

    return (
        <EntPageContainer title="Emploi du temps">
            {schedulePDF}
        </EntPageContainer>
    );
}

export default EntStudentSchedulePage;