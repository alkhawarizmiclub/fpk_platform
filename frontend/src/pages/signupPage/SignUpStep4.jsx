import { useSignUpContext } from "../../contexts/signUpContext";

const SignUpStep4 = () => {

    const { handleInputChange, prevStep, handleSubmit } = useSignUpContext();

    return (
        <form id="formEtape4" onSubmit={handleSubmit}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="idCardFile">
                    CNI recto-verso (Format : PDF | Taille max : 2 Mb)
                </label>
                <input
                    id="idCardFile"
                    type="file"
                    accept="application/pdf"
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bacFile">
                    Bac recto-verso (Format : PDF | Taille max : 2 Mb)
                </label>
                <input
                    id="bacFile"
                    type="file"
                    accept="application/pdf"
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />

            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gradeSheetsFile">
                    Releve de Notes (Format : PDF | Taille max : 2 Mb)
                </label>
                <input
                    id="gradeSheetsFile"
                    type="file"
                    accept="application/pdf"
                    onChange={handleInputChange}
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentPhotoFile">
                    Photo (Format : JPG, JPEG ou PNG | Taille max : 2 Mb)
                </label>
                <input
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="studentPhotoFile"
                    type="file"
                    accept="image/*"
                    onChange={handleInputChange}
                />
            </div>

            <div className="flex items-center justify-between">
                <button
                    onClick={prevStep}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Retour
                </button>
                <button
                    onClick={handleSubmit}
                    className="bg-orange-500 text-white py-2 px-4 rounded hover:bg-orange-600 focus:outline-none"
                >
                    Soumettre
                </button>
            </div>
        </form>
    );
}

export default SignUpStep4;