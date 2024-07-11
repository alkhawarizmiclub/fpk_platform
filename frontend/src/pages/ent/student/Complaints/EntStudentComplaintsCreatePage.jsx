import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import EntStudentApi from "../../../../api/EntStudentApi";
import Paths from "../../../../routers/Paths.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faSpinner } from "@fortawesome/free-solid-svg-icons";

const EntStudentComplaintsCreatePage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [complaintCategories, setComplaintCategories] = useState([]);

    const [complaintCategory, setComplaintCategory] = useState("");
    const [description, setDescription] = useState("");
    const navigate = useNavigate();

    const complaintCategoryChangeHandler = (e) => setComplaintCategory(e.target.value);

    const submitHandler = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        EntStudentApi.createComplaint(complaintCategory, description)
            .then(() => {
                navigate(Paths.E_STUDENT_COMPLAINTS_PAGE);
            })
            .catch(() => {
                // TODO: Add error handling
            })
            .finally(() => {
                setIsSubmitting(false);
            });

    }

    useEffect(() => {
        setIsLoading(true);

        EntStudentApi.getComplaintCategories()
            .then((response) => {
                console.log(response.data.data);
                setComplaintCategories(response.data.data)
            })
            .catch(() => {
                // TODO: Add error handling
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, [])

    return (
        <EntPageContainer title="Reclamations">

            {isLoading ? (

                <div className="text-center"><FontAwesomeIcon icon={faSpinner} className="text-lg loader" /></div>

            ) : (

                <form onSubmit={submitHandler} className="mx-auto max-w-xl flex flex-col gap-5">

                    <div>

                        <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">Sélectionnez le sujet de reclamation</label>

                        <select id="documentType" name="documentType" disabled={isSubmitting} value={complaintCategory} onChange={complaintCategoryChangeHandler} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required >
                            <option value="">-- Sélectionnez un sujet --</option>
                            {complaintCategories.map(({ id, is_active, type }) => (
                                is_active && <option key={id} value={id}>{type}</option>
                            ))}
                        </select>

                    </div >

                    <div className="w-full flex flex-col">

                        <label htmlFor="description">Votre reclamation :</label>

                        <textarea name="description" id="description" minLength={8} disabled={isSubmitting} value={description} onChange={(e) => setDescription(e.target.value)} required className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" ></textarea>

                    </div>

                    <div className="flex justify-center gap-5">

                        <button type="submit" disabled={isSubmitting} className={`px-5 py-3 space-x-2 rounded-lg text-white ${isSubmitting ? "bg-orange-300" : "bg-orange-400 hover:bg-orange-300"} transtition-colors duration-300`}>
                            {isSubmitting ? (<FontAwesomeIcon icon={faSpinner} className="text-lg loader" />) : (<FontAwesomeIcon icon={faSave} />)}
                            <span>Soumettre</span>
                        </button>

                        {!isSubmitting &&
                            <Link to={Paths.E_STUDENT_COMPLAINTS_PAGE} className={`px-5 py-3 rounded-lg text-white ${isSubmitting ? "bg-orange-300" : "bg-orange-400 hover:bg-orange-300"} transtition-colors duration-300`}>Annuler</Link>
                        }

                    </div>

                </form >
            )}

        </EntPageContainer >
    );
}

export default EntStudentComplaintsCreatePage;