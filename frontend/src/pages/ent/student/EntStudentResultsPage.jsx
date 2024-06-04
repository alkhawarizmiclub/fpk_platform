import EntResultsSemester from "../../../components/ent/EntResultsSemester";
import EntPageContainer from "../../../components/ent/EntPageContainer";

const EntStudentResultsPage = () => {

    const results = [
        {
            semesterNumber: 1,
            majorLabel: "Science Mathématique et Informatique",
            moduleObjects: [
                {
                    name: "M01 - Analyse 1: Suites Numériques et Fonctions",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M02 - ALGEBRE 1: Généralités et Arithmétique dans Z",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M03 - ALGEBRE 2: Structures, Polynômes et Fractions Rationnelles",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M04 - Physique 1: Mécanique 1",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M05 - Physique 2: Thermodynamique",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M06 - Informatique 1: Introduction à l’informatique",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M07 - LT I",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                }
            ]
        },
        {
            semesterNumber: 2,
            majorLabel: "Science Mathématique et Informatique",
            moduleObjects: [
                {
                    name: "M01 - Analyse 1: Suites Numériques et Fonctions",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M02 - ALGEBRE 1: Généralités et Arithmétique dans Z",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M03 - ALGEBRE 2: Structures, Polynômes et Fractions Rationnelles",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M04 - Physique 1: Mécanique 1",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M05 - Physique 2: Thermodynamique",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M06 - Informatique 1: Introduction à l’informatique",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M07 - LT I",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                }
            ]
        },
        {
            semesterNumber: 3,
            majorLabel: "Science Mathématique et Informatique",
            moduleObjects: [
                {
                    name: "M01 - Analyse 1: Suites Numériques et Fonctions",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M02 - ALGEBRE 1: Généralités et Arithmétique dans Z",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M03 - ALGEBRE 2: Structures, Polynômes et Fractions Rationnelles",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M04 - Physique 1: Mécanique 1",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M05 - Physique 2: Thermodynamique",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M06 - Informatique 1: Introduction à l’informatique",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M07 - LT I",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                }
            ]
        },
        {
            semesterNumber: 4,
            majorLabel: "Science Mathématique et Informatique",
            moduleObjects: [
                {
                    name: "M01 - Analyse 1: Suites Numériques et Fonctions",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M02 - ALGEBRE 1: Généralités et Arithmétique dans Z",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M03 - ALGEBRE 2: Structures, Polynômes et Fractions Rationnelles",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M04 - Physique 1: Mécanique 1",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M05 - Physique 2: Thermodynamique",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M06 - Informatique 1: Introduction à l’informatique",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                },
                {
                    name: "M07 - LT I",
                    season: "2021/2022",
                    normal: 9,
                    rattrapage: 16
                }
            ]
        },
    ]

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