import { useSignUpContext } from "../../contexts/signUpContext";

const SignUpStep1 = () => {

    const { formData, handleInputChange, nextStep, prevStep } = useSignUpContext();

    return (
        <form id="formEtape1" onSubmit={nextStep}>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="firstName">
                        Nom
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="firstName"
                        type="text"
                        placeholder="Votre nom"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lastName">
                        Prenom
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="lastName"
                        type="text"
                        placeholder="Votre prenom"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="famille">
                        الإسم العائلي
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                        id="firstNameAr"
                        type="text"
                        placeholder="الإسم العائلي"
                        value={formData.firstNameAr}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="personnel">
                        الإسم الشخصي
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="lastNameAr"
                        type="text"
                        placeholder="الإسم الشخصي"
                        value={formData.lastNameAr}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="birthDate">
                        Date de Naissance
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="birthDate"
                        type="date"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="birthPlace">
                        Lieu de Naissance
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="birthPlace"
                        type="text"
                        placeholder="Lieu de naissance"
                        value={formData.birthPlace}
                        onChange={handleInputChange}
                        required
                    />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nationality">
                        Nationalité
                    </label>
                    <div className="relative">
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="" disabled>Select</option>
                            <option value="Marocain">Marocain</option>
                            <option value="Etanger">Etranger</option>
                        </select>
                    </div>
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="gender">
                        Genre
                    </label>
                    <div className="relative">
                        <select
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="gender"
                            value={formData.gender}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="" disabled>Select</option>
                            <option value="male">Homme</option>
                            <option value="female">Femme</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">

                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="studentId">
                        Code Etudiant
                    </label>
                    <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="studentId"
                        type="text"
                        placeholder="F101020300"
                        value={formData.studentId}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="idNum">
                        C.I.N ou Passwort
                    </label>
                    <input
                        id="idNum"
                        type="text"
                        placeholder="X123456"
                        value={formData.idNum}
                        onChange={handleInputChange}
                        required
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                    />
                </div>
            </div>

            <div className="flex items-center justify-end">
                <button
                    type="submit"
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Suivant
                </button>
            </div>
        </form>
    );
}

export default SignUpStep1;