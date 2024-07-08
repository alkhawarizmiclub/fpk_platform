import EntResultsSemester from "../../../components/ent/EntResultsSemester";
import EntPageContainer from "../../../components/ent/EntPageContainer";
import EntStudentApi from "../../../api/EntStudentApi";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const EntStudentResultsPage = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [results, setResults] = useState({});

    useEffect(() => {
        setIsLoading(true);

        EntStudentApi.getResultsData()
            .then((response) => {
                const groupedData = Object.groupBy(response.data.data, item => item.semester);
                setResults(groupedData);
            })
            .catch(() => {
                // TODO: Add error handling
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, []);


    return (

        <EntPageContainer title="Resultats">

            {isLoading ? (

                <div className="text-center"><FontAwesomeIcon icon={faSpinner} className="text-lg loader" /></div>

            ) : (
                <div className="flex flex-col gap-5">
                    {Object.entries(results).map(([semester, modulesList]) => (

                        <EntResultsSemester key={semester} semesterNumber={semester} moduleObjects={modulesList} />

                    ))}
                </div>
            )
            }
        </EntPageContainer >

    );
}

export default EntStudentResultsPage;