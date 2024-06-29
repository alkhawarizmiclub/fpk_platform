import { useState } from "react";
import EntPageContainer from "../../../../components/ent/EntPageContainer";

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

    const documentChangeHandler = (e) => setDocumentType(e.target.value);

    const submitHandler = () => {

    }

    return (
        <EntPageContainer title="E-Documents">
            <div className="mx-auto p-4">
                <form onSubmit={submitHandler} className="space-y-4">

                    <div>
                        <label htmlFor="documentType" className="block text-sm font-medium text-gray-700">Sélectionnez le type de document</label>
                        <select id="documentType" name="documentType" value={documentType} onChange={documentChangeHandler} className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" required >
                            <option value="">-- Sélectionnez un document --</option>
                            {documentOptions.map((option) => (
                                <option key={option.id} value={option.id}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <button type="submit" className={`py-2 px-4 bg-blue-500 text-white rounded-md ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`} disabled={isSubmitting} >
                            {isSubmitting ? 'Processing...' : 'Request Document'}
                        </button>
                    </div>

                </form>
            </div>
        </EntPageContainer>
    );
}

export default EntStudentEDocumentsCreatePage;