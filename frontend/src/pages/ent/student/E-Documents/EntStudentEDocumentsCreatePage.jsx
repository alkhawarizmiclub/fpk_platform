import { useState } from "react";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Paths from "../../../../routers/Paths.json";
import EntStudentApi from "../../../../api/EntStudentApi";


const EntStudentEDocumentsCreatePage = () => {

    const [documentType, setDocumentType] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const documentOptions = [
        { id: 'grade_sheets', label: 'Relevé de notes' },
        { id: 'school_certificate', label: 'Attestation de scolarité' },
        { id: 'bac1_certificate', label: 'Attestation de Bac+1' },
        { id: 'deug_certificate', label: 'Attestation de DEUG' },
        { id: 'bachelor_certificate', label: 'Attestation de Licence' },
        { id: 'bachelor_certificate', label: 'Attestation de Master' },
        { id: 'deug_diploma', label: 'Diplome de DEUG' },
        { id: 'bachelor_diploma', label: 'Diplome de Licence' },
        { id: 'bachelor_diploma', label: 'Diplome de Master' },
        { id: 'Internship_agreement', label: 'Convention de Stage' },
    ];

    const submitHandler = (e) => {
        e.preventDefault();

        EntStudentApi.demandEDocument()
            .then(() => {
                navigate(Paths.E_STUDENT_E_DOCUMENTS_PAGE);
            })
            .catch(() => {
                // TODO: Add error handling
            })
            .finally(() => {
                setIsSubmitting(false);
            });

    }

    return (
        <EntPageContainer title="E-Documents">
            <div className="mx-auto p-4">
                <form onSubmit={submitHandler} className="mx-auto max-w-xl flex flex-col gap-5">

                    <div>
                        <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">Sélectionnez le type de document</label>
                        <select id="documentType" name="documentType" value={documentType} onChange={(e) => setDocumentType(e.target.value)} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required >
                            <option value="">-- Sélectionnez un document --</option>
                            {documentOptions.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="flex justify-center gap-5">

                        <button type="submit" disabled={isSubmitting} className={`px-5 py-3 space-x-2 rounded-lg text-white ${isSubmitting ? "bg-orange-300" : "bg-orange-400 hover:bg-orange-300"} transtition-colors duration-300`}>
                            {isSubmitting ? (<FontAwesomeIcon icon={faSpinner} className="text-lg loader" />) : (<FontAwesomeIcon icon={faSave} />)}
                            <span>Demander</span>
                        </button>

                        {!isSubmitting &&
                            <Link to={Paths.E_STUDENT_E_DOCUMENTS_PAGE} className={`px-5 py-3 rounded-lg text-white ${isSubmitting ? "bg-orange-300" : "bg-orange-400 hover:bg-orange-300"} transtition-colors duration-300`}>Annuler</Link>
                        }

                    </div>

                </form>
            </div>
        </EntPageContainer>
    );
}

export default EntStudentEDocumentsCreatePage;