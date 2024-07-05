import EntResultsSemester from "../../../components/ent/EntResultsSemester";
import EntPageContainer from "../../../components/ent/EntPageContainer";
import EntStudentApi from "../../../api/EntStudentApi";
import { useEffect, useState } from "react";

const EntStudentResultsPage = () => {

    const [results, setResults] = useState({});

    useEffect(() => {
        EntStudentApi.getResultsData()
            .then((response) => {
                const groupedData = Object.groupBy(response.data.data, item => item.semester);
                console.log(groupedData);
                setResults(groupedData);
            })
            .catch(() => { })
            .finally(() => { });
    }, []);


    return (

        <EntPageContainer title="Resultats">
            <div className="flex flex-col gap-5">
                {Object.entries(results).map(([semester, modulesList]) => (

                    <EntResultsSemester key={semester} semesterNumber={semester} moduleObjects={modulesList} />

                ))}
            </div>
        </EntPageContainer>

    );
}

export default EntStudentResultsPage;