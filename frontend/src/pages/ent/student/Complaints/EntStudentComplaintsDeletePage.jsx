import { useNavigate, useParams } from "react-router-dom";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import EntStudentApi from "../../../../api/EntStudentApi";
import Paths from "../../../../routers/Paths.json";

const EntStudentComplaintsDeletePage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const deleteHandler = () => {

        EntStudentApi.deleteComplaint(id).then(() => {
            navigate(Paths.E_STUDENT_COMPLAINTS_PAGE);
        });

    }

    return (
        <EntPageContainer>
            Delete {id} ?
            <button onClick={deleteHandler} type="submit">Delete</button>
        </EntPageContainer>
    );
}

export default EntStudentComplaintsDeletePage;