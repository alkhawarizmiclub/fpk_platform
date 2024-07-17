import { useState } from "react";
import { useNavigate } from "react-router-dom";
import EntPageContainer from "../../../../components/ent/EntPageContainer";

const EntTeacherAnnouncementCreatePage = () => {

    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        title: "",
        content: "",
        thumbnail: null,
        tags: "",
    });

    const handleInputChange = (e) => {
        const value = e.target.type === "file" ? e.target.files[0] : e.target.value
        setFormData({
            ...formData,
            [e.target.id]: value,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // EntTeacherApi.submitAnnouncement(formData)
        //     .then(() => {
        //         navigate(Paths.E_TEACHER_ANNOUNCEMENTS_PAGE);
        //     })
        //     .catch(() => {
        //         // TODO: Add error handling
        //     })
        //     .finally(() => {
        //         setIsSubmitting(false);
        //     });

    }

    return (
        <EntPageContainer title="Announcements">
            <form onSubmit={handleSubmit} className="mx-auto max-w-xl flex flex-col gap-5">

                <div className="w-full flex flex-col">
                    <label htmlFor="title">Titre</label>
                    <input id="title" type="text" value={formData.title} onChange={handleInputChange} required className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="content">Contenu</label>
                    <textarea id="content" value={formData.content} onChange={handleInputChange} required className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" ></textarea>
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="tags">Tags</label>
                    <input id="tags" type="text" value={formData.tags} onChange={handleInputChange} required className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="thumbnail_path">Image</label>
                    <input id="thumbnail_path" type="file" onChange={handleInputChange} required className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                </div>

                <div className="flex justify-center gap-5">

                    <button type="submit" disabled={isSubmitting} className={`px-5 py-3 space-x-2 rounded-lg text-white ${isSubmitting ? "bg-orange-300" : "bg-orange-400 hover:bg-orange-300"} transtition-colors duration-300`}>
                        {isSubmitting ? (<FontAwesomeIcon icon={faSpinner} className="text-lg loader" />) : (<FontAwesomeIcon icon={faSave} />)}
                        <span>Soumettre</span>
                    </button>

                    {!isSubmitting &&
                        <Link to={Paths.E_TEACHER_ANNOUNCEMENTS_PAGE} className={`px-5 py-3 rounded-lg text-white ${isSubmitting ? "bg-orange-300" : "bg-orange-400 hover:bg-orange-300"} transtition-colors duration-300`}>Annuler</Link>
                    }

                </div>
            </form>
        </EntPageContainer>

    );
}

export default EntTeacherAnnouncementCreatePage;