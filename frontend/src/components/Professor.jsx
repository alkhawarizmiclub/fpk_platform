const Professor = ({ professorObject }) => {

    let { firstName, lastName, specialty, socialMedia } = professorObject;

    return (
        <div>
            <div>{firstName}</div>
            <div>{lastName}</div>
            <div>{specialty}</div>
            <div>{socialMedia.email}</div>
            <div>{socialMedia.linkedIn}</div>
            <div>{socialMedia.gitHub}</div>
            <div>{socialMedia.researchGate}</div>
            {/* <div>{socialMedia.map(() => {})}</div> */}
        </div>
    );
}

export default Professor;