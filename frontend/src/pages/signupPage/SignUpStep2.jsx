import { useSignUpContext } from "../../contexts/signUpContext";

const SignUpStep2 = () => {

    const { formData, handleInputChange, nextStep, prevStep } = useSignUpContext();

    return (
        <form id="formEtape2" onSubmit={nextStep}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Adresse E-mail
                </label>
                <input
                    id="email"
                    type="email"
                    placeholder="Adresse E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                        Téléphone
                    </label>
                    <input
                        id="phone"
                        type="tel"
                        placeholder="+000 693129042"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emergencyPhone">
                        Téléphone  Urgent
                    </label>
                    <input
                        id="emergencyPhone"
                        type="tel"
                        placeholder="+000 7039182924"
                        value={formData.emergencyPhone}
                        onChange={handleInputChange}
                        required
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="homeAddress">
                    Adresse
                </label>
                <input
                    id="homeAddress"
                    type="text"
                    placeholder="Rue Zitouna 123"
                    value={formData.homeAddress}
                    onChange={handleInputChange}
                    required
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Mot de Passe
                </label>
                <input
                    id="password"
                    type="password"
                    placeholder="*************"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordConfirmation">
                    Confirmer Mot de Passe
                </label>
                <input
                    id="passwordConfirmation"
                    type="password"
                    placeholder="***************"
                    value={formData.passwordConfirmation}
                    onChange={handleInputChange}
                    required
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Suivant
                </button>
            </div>
        </form>
    );
}

export default SignUpStep2;