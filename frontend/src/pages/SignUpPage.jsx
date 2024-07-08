import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Paths from '../routers/Paths.json';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const SignUpPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    nom: '',
    prenom: '',
    date: '',
    lieu: '',
    code: '',
    nationality: '',
    cin: '',
    passport: '',
    email: '',
    phone: '',
    emergencyPhone: '',
    address: '',
    password: '',
    confirmPassword: '',
    filiere: '',
    studentPhoto: '',
  });
  const [errors, setErrors] = useState('');

  const nextStep = () => {
    if (validateStep(step)) {
      setStep(step + 1);
      setErrors('');
    } else {
      setErrors('Please fill out all required fields.');
    }
  };

  const prevStep = () => {
    setStep(step - 1);
    setErrors('');
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };
  const generatePDF = () => {
    const doc = new jsPDF();

    // Adding header
    doc.addImage('/lo.jpeg', 'JPEG', 10, 10, 30, 30); // Adjust path and size as needed
    doc.setFontSize(18);
    doc.text('Faculte Polidyciplinaire de Khouribga ', 105, 25, null, null, 'center');
    if (formData.studentPhoto) {
      doc.addImage(formData.studentPhoto, 'PNG', 150, 15, 40, 40); // Adjust the dimensions as needed
    }

    // Adding student info table
    const studentInfo = [
      ['Nom', formData.nom],
      ['Prenom', formData.prenom],
      ['Famille', formData.nom],
      ['Personnel', formData.prenom],
      ['Date de Naissance', formData.date],
      ['Lieu de Naissance', formData.lieu],
      ['Code Etudiant', formData.code],
      ['Nationalité', formData.nationality],
      ['CIN/Passport', formData.nationality === 'marocain' ? formData.cin : formData.passport],
      ['Email', formData.email],
      ['Téléphone', formData.phone],
      ['Téléphone Urgent', formData.emergencyPhone],
      ['Adresse', formData.address],
      ['Filière', formData.filiere],
    ];

    doc.autoTable({
      head: [['Champ', 'Détails']],
      body: studentInfo,
      startY: 50, // Adjust as needed
      styles: { fontSize: 10 },
    });

    // Adding footer
    doc.setFontSize(10);
    doc.text('Rue Zitouna ', 105, doc.internal.pageSize.height - 10, null, null, 'center');

    doc.save('etudiant_info.pdf');
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(step)) {
      setErrors('');
      generatePDF();
      alert('Form submitted successfully!');
      navigate(Paths.LOGIN_PAGE) // Redirect to login page
    } else {
      setErrors('Please fill out all required fields.');
    }
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        return (
          formData.nom &&
          formData.prenom &&
          formData.nom &&
          formData.prenom &&
          formData.date &&
          formData.lieu &&
          formData.code &&
          formData.nationality &&
          (formData.nationality === 'marocain' ? formData.cin : formData.passport)
        );
      case 2:
        return (
          formData.email &&
          formData.phone &&
          formData.emergencyPhone &&
          formData.address
        );
      case 3:
        return (
          formData.filiere
        );
      case 4:
        // Adjust validation logic as necessary for file uploads
        return true;
      default:
        return false;
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prevData) => ({
        ...prevData,
        studentPhoto: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="container mx-auto py-8">

        <div className="flex justify-center mb-6">
          <Link to={Paths.HOME_PAGE} className="grow flex justify-center items-center">
            <img src="/fpk_logo.svg" className="max-w-64" alt="logo" />
          </Link>
        </div>
        <div className="max-w-2xl mx-auto mt-10">
          <div className="bg-white shadow-md rounded-lg p-6">
            <div className="mb-6">
              <ul className="flex justify-between">
                {[1, 2, 3, 4].map((num) => (
                  <li key={num} className={`flex-1 text-center ${step === num ? 'text-blue-500' : 'text-gray-600'}`}>
                    <div className="relative mb-2">
                      <div className="w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center bg-orange-500 text-white">{num}</div>
                    </div>
                    <div className="text-xs">{`Étape ${num}`}</div>
                  </li>
                ))}
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
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
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
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
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
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="nom"
                      type="text"
                      placeholder="الإسم العائلي"
                      value={formData.nom}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="personnel">
                      الإسم الشخصي
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                      id="prenom"
                      type="text"
                      placeholder="الإسم الشخصي"
                      value={formData.prenom}
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
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
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
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
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
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
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
                      Nationalité
                    </label>
                    <div className="relative">
                      <select
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="nationality"
                        value={formData.nationality}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="marocain">Marocain</option>
                        <option value="etranger">Etranger</option>
                      </select>
                    </div>
                  </div>
                </div>
                {formData.nationality === 'marocain' && (
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cin">
                        C.I.N
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="cin"
                        type="text"
                        placeholder="X123456"
                        value={formData.cin}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
                {formData.nationality === 'etranger' && (
                  <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full px-3">
                      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="passport">
                        Passport
                      </label>
                      <input
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                        id="passport"
                        type="text"
                        placeholder="123456789"
                        value={formData.passport}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                )}
                {errors && <p className="text-red-500 text-xs italic">{errors}</p>}
                <div className="flex items-center justify-between">
                  <button
                    onClick={nextStep}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    type="button"
                  >
                    Suivant
                  </button>
                </div>
              </form>
            )}
            {step === 2 && (
              <form id="formEtape2">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Adresse E-mail
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Adresse E-mail"
                    value={formData.email}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                      onChange={handleChange}
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address">
                    Adresse
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Rue Zitouna 123"
                    value={formData.address}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                    Confirmer Mot de Passe
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    placeholder="***************"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                {errors && <p className="text-red-500 text-xs italic">{errors}</p>}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevStep}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Retour
                  </button>
                  <button
                    onClick={nextStep}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Suivant
                  </button>
                </div>
              </form>
            )}
            {step === 3 && (
              <form id="formEtape3">
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="filiere">
                    Filière
                  </label>
                  <div className="relative">
                    <select
                      id="filiere"
                      value={formData.filiere}
                      onChange={handleChange}
                      className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                      <option value="">Select</option>
                      <option value="SMI">Sciences Mathématiques et Informatique</option>
                      <option value="SMA">Sciences Mathématiques et Application</option>
                      <option value="SMP">Sciences de la Matière Physique</option>
                      <option value="SMC">Sciences de la Matière Chimie</option>
                      <option value="SV">Sciences de la Vie</option>
                      <option value="GEO">Géographie</option>
                      <option value="EA">Etude arabes</option>
                    </select>
                  </div>
                </div>
                {errors && <p className="text-red-500 text-xs italic">{errors}</p>}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevStep}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Retour
                  </button>
                  <button
                    onClick={nextStep}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Suivant
                  </button>
                </div>
              </form>
            )}
            {step === 4 && (
              <form id="formEtape4" onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
                    CNI recto-verso
                  </label>
                  <input
                    id="file"
                    type="file"
                    onChange={handleFileUpload}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Bac">
                    Bac recto-verso
                  </label>
                  <input
                    id="Bac"
                    type="file"
                    onChange={handleFileUpload}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />

                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="RN">
                    Releve de Notes
                  </label>
                  <input
                    id="RN"
                    type="file"
                    onChange={handleFileUpload}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentPhoto">
                    Photo
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="studentPhoto"
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                </div>
                {errors && <p className="text-red-500 text-xs italic">{errors}</p>}
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
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SignUpPage;
