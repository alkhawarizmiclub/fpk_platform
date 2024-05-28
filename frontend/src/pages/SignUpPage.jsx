import { Link } from "react-router-dom";
import Paths from "../routers/Paths.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const SignUpPage = () => {
  const [step, setStep] = useState(1);
    const [nationality, setNationality] = useState('');
    const [cin, setCin] = useState('');
    const [passport, setPassport] = useState('');

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const handleNationalityChange = (event) => {
        setNationality(event.target.value);
    };

    return (
      
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="container mx-auto py-8">
                <p>
                    <Link to={Paths.HOME_PAGE} className="w-full space-x-2 text-sm text-slate-600">
                        <FontAwesomeIcon icon={faArrowLeftLong} />
                        <span>Go back Home</span>
                    </Link>
                </p>
                <div class="flex justify-center mb-6">
                <Link to={Paths.HOME_PAGE} className="grow flex justify-center items-center">
                    <img src="/fpk_logo.svg" className="max-w-64" />
                </Link>
      </div>
                <div className="max-w-2xl mx-auto mt-10">
                    <div className="bg-white shadow-md rounded-lg p-6">
                        <div className="mb-6">
                            <ul className="flex justify-between">
                                <li className={`flex-1 text-center ${step === 1 ? 'text-blue-500' : 'text-gray-600'}`}>
                                    <div className="relative mb-2">
                                        <div className="w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center bg-orange-500 text-white">1</div>
                                    </div>
                                    <div className="text-xs text-orange">Étape 1</div>
                                </li>
                                <li className={`flex-1 text-center ${step === 2 ? 'text-blue-500' : step > 2 ? 'text-gray-600' : ''}`}>
                                    <div className="relative mb-2">
                                        <div className="w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center bg-orange-500 text-white">2</div>
                                    </div>
                                    <div className="text-xs">Étape 2</div>
                                </li>
                                <li className={`flex-1 text-center ${step === 3 ? 'text-blue-500' : step > 3 ? 'text-gray-600' : ''}`}>
                                    <div className="relative mb-2">
                                        <div className="w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center bg-orange-500 text-white">3</div>
                                    </div>
                                    <div className="text-xs">Étape 3</div>
                                </li>
                            </ul>
                        </div>

                        {step === 1 && (
                            <form id="formEtape1">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nom_prenom">
                                        Nom et Prénom
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nom_prenom" type="text" placeholder="Nom et Prénom" />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        EMAIL
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Votre Email" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nationality">
                                        Êtes-vous Marocain ou Étranger?
                                    </label>
                                    <select className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="nationality" value={nationality} onChange={handleNationalityChange}>
                                        <option value="" disabled>Choisir...</option>
                                        <option value="marocain">Marocain</option>
                                        <option value="etranger">Étranger</option>
                                    </select>
                                </div>
                                {nationality === 'marocain' && (
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cin">
                                            CIN
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cin" type="text" placeholder="CIN" value={cin} onChange={(e) => setCin(e.target.value)} />
                                    </div>
                                )}
                                {nationality === 'etranger' && (
                                    <div className="mb-4">
                                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passport">
                                            Numéro de Passeport
                                        </label>
                                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="passport" type="text" placeholder="Numéro de Passeport" value={passport} onChange={(e) => setPassport(e.target.value)} />
                                    </div>
                                )}
                                
                                <div className="flex items-center justify-between">
                                    <button onClick={nextStep} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Suivant
                                    </button>
                                </div>
                            </form>
                        )}

                        {step === 2 && (
                            <form id="formEtape2">
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                        Email
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button onClick={prevStep} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Retour
                                    </button>
                                    <button onClick={nextStep} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Suivant
                                    </button>
                                </div>
                            </form>
                        )}

                        {step === 3 && (
                            <form id="formEtape3">
                                <div className="mb-6">
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                        Mot de passe
                                    </label>
                                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="********" />
                                </div>
                                <div className="flex items-center justify-between">
                                    <button onClick={prevStep} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                                        Retour
                                    </button>
                                    <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                                        Terminer
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
            
            
        </div>
    );
}

export default SignUpPage;
