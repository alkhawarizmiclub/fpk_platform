import EntResultsSemester from "../../../components/ent/EntResultsSemester";
import EntPageContainer from "../../../components/ent/EntPageContainer";
import EntStudentApi from "../../../api/EntStudentApi";

const EntStudentResultsPage = () => {

    const results = EntStudentApi.getResultsData();

    return (

        <EntPageContainer title="Resultats">
            <div className="flex flex-col gap-5">
                {results.map(({ semesterNumber, majorLabel, moduleObjects }, i) =>
                    <EntResultsSemester key={i} semesterNumber={semesterNumber} majorLabel={majorLabel} moduleObjects={moduleObjects} />
                )}
            </div>
        </EntPageContainer>

    );
}

export default EntStudentResultsPage;