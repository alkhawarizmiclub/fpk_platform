import { useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import EntTeacherApi from "../../../../api/EntTeacherApi";


const EntTeacherAnnouncementDeletePage = () => {

    const navigate = useNavigate;
    const [isSubmitting, setIsSubmitting] = useState(false);

    const { id } = useParams();

    const deleteHandler = () => {
        setIsSubmitting(true);

        EntTeacherApi.deleteAnnouncement(id)
            .then(() => {
                navigate(Paths.E_TEACHER_ANNOUNCEMENTS_PAGE);
            })
            .catch((error) => { })
            .finally(() => {
                setIsSubmitting(false);
            });

    }

    return (
        <EntPageContainer>

            <div className="flex justify-center items-center gap-5 text-center">
                <span>Etes-vous sûr de vouloir supprimer l'annonce ?</span>
                <button onClick={deleteHandler} disabled={isSubmitting} type="submit" className={`p-3 rounded-lg text-white font-semibold ${isSubmitting ? "bg-slate-400" : "bg-slate-600 hover:bg-slate-500"} transition-colors duration-default`}>
                    {isSubmitting ? (<FontAwesomeIcon icon={faSpinner} className="text-lg loader" />) : (<FontAwesomeIcon icon={faTrash} />)}
                    <span> Supprimer</span>
                </button>
            </div>

        </EntPageContainer>

    );
}

export default EntTeacherAnnouncementDeletePage;