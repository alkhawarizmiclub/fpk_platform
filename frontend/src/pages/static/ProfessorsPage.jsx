import Professor from "../../components/Professor";
import StaticPageContainer from "../../layouts/StaticPageContainer";

const ProfessorsPage = () => {

    const professors = [
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                gitHub: "https://github.com/itsachrafmansari",
                researchGate: "https://www.behance.net/itsachrafmansari",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                researchGate: "https://www.behance.net/itsachrafmansari",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                linkedIn: "https://www.linkedin.com/in/itsachrafmansari/",
                gitHub: "https://github.com/itsachrafmansari",
                researchGate: "https://www.behance.net/itsachrafmansari",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                linkedIn: "https://www.linkedin.com/in/itsachrafmansari/",
                gitHub: "https://github.com/itsachrafmansari",
                researchGate: "https://www.behance.net/itsachrafmansari",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                linkedIn: "https://www.linkedin.com/in/itsachrafmansari/",
                gitHub: "https://github.com/itsachrafmansari",
                researchGate: "https://www.behance.net/itsachrafmansari",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                linkedIn: "https://www.linkedin.com/in/itsachrafmansari/",
                gitHub: "https://github.com/itsachrafmansari",
                researchGate: "https://www.behance.net/itsachrafmansari",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                gitHub: "https://github.com/itsachrafmansari",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                gitHub: "https://github.com/itsachrafmansari",
                researchGate: "https://www.behance.net/itsachrafmansari",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                researchGate: "https://www.behance.net/itsachrafmansari",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                linkedIn: "https://www.linkedin.com/in/itsachrafmansari/",
                researchGate: "https://www.behance.net/itsachrafmansari",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                linkedIn: "https://www.linkedin.com/in/itsachrafmansari/",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                linkedIn: "https://www.linkedin.com/in/itsachrafmansari/",
                gitHub: "https://github.com/itsachrafmansari",
                researchGate: "https://www.behance.net/itsachrafmansari",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                linkedIn: "https://www.linkedin.com/in/itsachrafmansari/",
            }
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {}
        },
        {
            firstName: "Achraf",
            lastName: "Mansari",
            specialty: "INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION",
            socialMedia: {
                email: "achraf.mansari@usms.ac.ma",
                linkedIn: "https://www.linkedin.com/in/itsachrafmansari/",
            }
        },
    ]

    return (
        <StaticPageContainer page_title="Professors">
            <div className="grid grid-cols-4 gap-5">
                {professors.map(professorObject => <Professor professorObject={professorObject} />)}
            </div>
        </StaticPageContainer>
    );
}

export default ProfessorsPage;