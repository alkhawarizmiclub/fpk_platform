import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Paths from '../routers/Paths.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';

const SignUpPage = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    famille: '',
    personnel: '',
    code: '',
    nationality: '',
    cin: '',
    passport: '',
    email: '',
    phone: '',
    emergencyPhone: '',
    address: '',
    filière: '',

  });
  const [errors, setErrors] = useState('');

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      setErrors('Please fill out all required fields.');
    } else {
      setErrors('');
      // Envoyer les données du formulaire
      alert('Form submitted successfully!');
    }
  };

  const validateForm = () => {
    return Object.values(formData).every((value) => value !== '');
  };
  const handleFileUpload = (event) => {
    const file = event.target.files[0]; // Obtenez le premier fichier
    // Vous pouvez maintenant utiliser le fichier comme vous le souhaitez, par exemple, le stocker dans le state ou l'envoyer à votre backend
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
        <div className="flex justify-center mb-6">
          <Link to={Paths.HOME_PAGE} className="grow flex justify-center items-center">
            <img src="/fpk_logo.svg" className="max-w-64" alt="logo" />
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
                <li className={`flex-1 text-center ${step === 4 ? 'text-blue-500' : step > 4 ? 'text-gray-600' : ''}`}>
                  <div className="relative mb-2">
                    <div className="w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center bg-orange-500 text-white">4</div>
                  </div>
                  <div className="text-xs">Étape 4</div>
                </li>
              </ul>
            </div>
            {step === 1 && (
              <form id="formEtape1">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nom">
                      Nom
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="nom"
                      type="text"
                      placeholder="Votre nom"
                      value={formData.nom}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="prenom">
                      Prenom
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="prenom"
                      type="text"
                      placeholder="Votre prenom"
                      value={formData.prenom}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="famille">
                    الإسم العائلي
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="famille"
                      type="text"
                      placeholder="الإسم العائلي"
                      value={formData.famille}
                      onChange={handleChange}
                    />
                    <p className="text-red-500 text-xs italic">Please fill out this field.</p>
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="personnel">
                      الإسم الشخصي
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="personnel"
                      type="text"
                      placeholder="الإسم الشخصي"
                      value={formData.personnel}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="date">
                      Date de Naissance
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="date"
                      type="date"
                      value={formData.date}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="lieu">
                      Lieu de Naissance
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="lieu"
                      type="text"
                      placeholder="lieu"
                      value={formData.lieu}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="code">
                      Code Etudiant
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="code"
                      type="text"
                      placeholder="X123456"
                      value={formData.code}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nationality">
                      Êtes-vous Marocain ou Étranger?
                    </label>
                    <select
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                    >
                      <option value="" disabled>Choisir...</option>
                      <option value="marocain">Marocain</option>
                      <option value="etranger">Étranger</option>
                    </select>
                  </div>
                </div>
                {formData.nationality === 'marocain' && (
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cin">
                      CIN
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="cin"
                      type="text"
                      placeholder="CIN"
                      value={formData.cin}
                      onChange={handleChange}
                    />
                  </div>
                )}
                {formData.nationality === 'etranger' && (
                  <div className="mb-4">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="passport">
                      Numéro de Passeport
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="passport"
                      type="text"
                      placeholder="Numéro de Passeport"
                      value={formData.passport}
                      onChange={handleChange}
                    />
                  </div>
                )}
                <div className="flex items-center justify-between">
                  <button onClick={nextStep} className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full" type="button">
                    Suivant
                  </button>
                </div>
              </form>
            )}
            {step === 2 && (
              <form id="formEtape2">
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="email">
                      Email
                    </label>
                   < input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="phone">
                      Telephone
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-phone"
                      type="telephone"
                      placeholder="(+212) 68982291 "
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="uphone">
                      Telephone Urgent
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-emergency-phone"
                      type="tel"
                      placeholder="(+212) 679875764"
                      value={formData.emergencyPhone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="address">
                      Addresse
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-address"
                      type="text"
                      placeholder="123 Rue Zitouna "
                      value={formData.address}
                      onChange={handleChange}
                    />
                  </div>
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
              <form id="formEtape3" onSubmit={handleSubmit}>
                <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filiere">
        Filière
      </label>
      <select
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="filiere"
        value={formData.filiere}
        onChange={handleChange}
      >
        <option value="" disabled>Sélectionner une filière...</option>
        <option value="Informatique">Informatique</option>
        <option value="Electronique">Electronique</option>
        <option value="Mécanique">Mécanique</option>
        {/* Ajoutez d'autres options selon vos besoins */}
      </select>
    </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Mot de passe
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="********"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
        Confirmer le mot de passe
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="confirmPassword"
        type="password"
        placeholder="********"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
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
            {step === 4 && (
                 <form id="formEtape4" onSubmit={handleSubmit}>
                 <div className="mb-6">
                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="baccalaureat">
                     Télécharger le Baccalauréat
                   </label>
                   <input
                     className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                     id="baccalaureat"
                     type="file"
                     accept=".pdf, .jpg, .jpeg, .png"
                     onChange={handleFileUpload}
                   />
                 </div>
                 <div className="mb-6">
                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="releveNotes">
                     Télécharger le Relevé de Notes
                   </label>
                   <input
                     className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                     id="releveNotes"
                     type="file"
                     accept=".pdf, .jpg, .jpeg, .png"
                     onChange={handleFileUpload}
                   />
                 </div>
                 <div className="mb-6">
                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
                     Télécharger les Images 4x4
                   </label>
                   <input
                     className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                     id="images"
                     type="file"
                     accept="image/*"
                     multiple
                     onChange={handleFileUpload}
                   />
                 </div>
                 <div className="mb-6">
                   <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cinOrPassport">
                     Télécharger la CIN recto-verso ou le Passeport
                   </label>
                   <input
                     className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                     id="cinOrPassport"
                     type="file"
                     accept=".pdf, .jpg, .jpeg, .png"
                     onChange={handleFileUpload}
                   />
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
      {errors && (
        <div className="text-red-500 text-center mt-4">
          {errors}
        </div>
      )}
    </div>
  );
};

export default SignUpPage;

