import EntStudentApi from "../../../api/EntStudentApi";
import EntPageContainer from "../../../components/ent/EntPageContainer";

const EntStudentPlanningPage = () => {

    const planningPDF = EntStudentApi.getPlanningPDF();

    return (
        <EntPageContainer title="Planning">
            {planningPDF}
        </EntPageContainer>
    );

}

export default EntStudentPlanningPage;