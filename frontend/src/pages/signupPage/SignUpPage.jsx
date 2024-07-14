import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Paths from '../../routers/Paths.json';
import EntStudentApi from '../../api/EntStudentApi';
import generatePDF from './signupPdfGenerator';

const SignUpPage = () => {
	const navigate = useNavigate();

	const years = [];
	for (let year = new Date().getFullYear(); year >= 1970; year--) {
		years.push(year);
	}

	const [currentStep, setCurrentStep] = useState(1);
	const [errors, setErrors] = useState('');

	const [formData, setFormData] = useState({
		studentPhoto: '',
		firstName: '',
		lastName: '',
		firstNameAr: '',
		lastNameAr: '',
		birthDate: '',
		birthPlace: '',
		studentId: '',
		nationality: '',
		idNum: '',
		idCardFile: null,
		email: '',
		phone: '',
		emergencyPhone: '',
		homeAddress: '',
		password: '',
		passwordConfirmation: '',
		major: '',
		bacMajor: '',
		bacYear: '',
		bacGrade: '',
		bacFile: null,
	});

	const handleChange = (e) => {
		setErrors('');
		setFormData((prevData) => ({
			...prevData,
			[e.target.id]: e.target.value,
		}));
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

	const validateStep = (currentStep) => {
		switch (currentStep) {
			case 1:
				return (
					formData.firstName &&
					formData.lastName &&
					formData.firstNameAr &&
					formData.lastNameAr &&
					formData.birthDate &&
					formData.birthPlace &&
					formData.studentId &&
					formData.nationality &&
					formData.idNum
				);

			case 2:
				if (formData.email && formData.phone && formData.emergencyPhone && formData.homeAddress && formData.password) {
					if (formData.password === formData.passwordConfirmation) {
						return true;
					} else {
						setErrors("Le mot de passe et la confirmation du mot de passe doivent être identiques");
					}
				} else {
					setErrors("Il est obligatoire de remplir tous les champs");
				}
				return false;

			case 3:
				return (formData.major && formData.bacMajor && formData.bacYear && formData.bacGrade);

			case 4:
				// Adjust validation logic as necessary for file uploads
				return true;

			default:
				return false;
		}
	};

	const nextStep = (e) => {
		e.preventDefault();
		if (validateStep(currentStep)) {
			setCurrentStep(currentStep + 1);
			setErrors('');
		} else {
			setErrors('Please fill out all required fields.');
		}
	};

	const prevStep = () => {
		if (currentStep > 1) {
			setCurrentStep(currentStep - 1);
			setErrors('');
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setErrors('');

		if (validateStep(currentStep)) {
			generatePDF(formData);

			EntStudentApi.signup(formData)
				.then((response) => {
					setCurrentStep(5);
				})
				.catch(() => { })
				.finally(() => { })
		} else {
			setErrors('Please fill out all required fields.');
		}
	};

	const handePdfGeneration = () => {
		generatePDF(formData);
	}


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
								{[1, 2, 3, 4, 5].map((num) => (
									<li key={num} className={`flex-1 text-center ${currentStep === num ? 'text-orange-400' : 'text-orange-300'}`}>
										<div className="relative mb-2">
											<div className={`w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center ${currentStep === num ? "bg-orange-500" : "bg-orange-300"} text-white`}>{num}</div>
										</div>
										<div className="text-xs">{`Étape ${num}`}</div>
									</li>
								))}
							</ul>
						</div>

						{/* ============================================================== FIRST STEP ============================================================== */}
						{currentStep === 1 && (
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
											onChange={handleChange}
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
											onChange={handleChange}
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
											onChange={handleChange}
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
											onChange={handleChange}
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
											onChange={handleChange}
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
											onChange={handleChange}
											required
										/>
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full px-3">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="studentId">
											Code Etudiant
										</label>
										<input
											className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
											id="studentId"
											type="text"
											placeholder="F101020300"
											value={formData.studentId}
											onChange={handleChange}
											required
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
												className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
												id="nationality"
												value={formData.nationality}
												onChange={handleChange}
												required
											>
												<option value="">Select</option>
												<option value="marocain">Marocain</option>
												<option value="etranger">Etranger</option>
											</select>
										</div>
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full px-3">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="idNum">
											C.I.N ou Passwort
										</label>
										<input
											className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
											id="idNum"
											type="text"
											placeholder="X123456"
											value={formData.idNum}
											onChange={handleChange}
											required
										/>
									</div>
								</div>

								<div className="flex items-center justify-end">
									<button
										className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
										type="submit"
									>
										Suivant
									</button>
								</div>
							</form>
						)}

						{/* ============================================================== SECOND STEP ============================================================== */}
						{currentStep === 2 && (
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
										onChange={handleChange}
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
											onChange={handleChange}
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
											onChange={handleChange}
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
										onChange={handleChange}
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
										onChange={handleChange}
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
										onChange={handleChange}
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
						)}

						{/* ============================================================== THIRD STEP ============================================================== */}
						{currentStep === 3 && (
							<form id="formEtape3" onSubmit={nextStep}>
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="major">
										Filière
									</label>
									<div className="relative">
										<select
											id="major"
											value={formData.major}
											onChange={handleChange}
											required
											className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bacYear">
										Type du Baccalauréat
									</label>
									<div className="relative">
										<select
											id="bacMajor"
											value={formData.bacMajor}
											onChange={handleChange}
											required
											className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										>
											<option value="">Select</option>
											<option value="SMA">SCIENCES MATHÉMATIQUES A </option>
											<option value="SMB">SSCIENCES MATHÉMATIQUES B</option>
											<option value="PC"> SCIENCES PHYSIQUES</option>
											<option value="SVT"> SVT</option>
											<option value="SE">SCIENCES ÉCONOMIQUES</option>
											<option value="SGC">TECHNIQUES DE GESTION ET COMPTABILITÉ</option>
											<option value="STE">SCIENCES ET TECHNOLOGIES ÉLECTRIQUES</option>
											<option value="STM">SCIENCES ET TECHNOLOGIES MÉCANIQUES</option>
											<option value="SC">SCIENCES DE LA CHARIAA</option>
											<option value="L">LETTRES</option>
											<option value="SH">SCIENCES HUMAINES</option>
										</select>
									</div>
								</div>

								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
										<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bacYear">
											Année du Baccalauréat
										</label>
										<select
											id="bacYear"
											value={formData.bacYear}
											onChange={handleChange}
											required
											className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										>
											{years.map((year) => (
												<option key={year} value={year}>
													{year}
												</option>
											))}
										</select>
									</div>
									<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
										<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bacGrade">
											Moyenne du Bac
										</label>
										<input
											id="bacGrade"
											type="number"
											min={0}
											max={20}
											step={0.01}
											placeholder="20.00"
											value={formData.bacGrade}
											onChange={handleChange}
											required
											className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										/>
									</div>
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
						)}

						{/* ============================================================== FOURTH STEP ============================================================== */}
						{currentStep === 4 && (
							<form id="formEtape4" onSubmit={handleSubmit}>
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
										CNI recto-verso
									</label>
									<input
										id="cnifile"
										type="file"
										onChange={handleFileUpload}
										className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
										className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
										className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
									/>
								</div>
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="studentPhoto">
										Photo
									</label>
									<input
										className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										id="studentPhoto"
										type="file"
										accept="image/*"
										onChange={handleFileUpload}
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
						)}

						{/* ============================================================== FOURTH STEP ============================================================== */}
						{currentStep === 5 && (
							<div className='text-center'>
								<p>Félicitations, vous avez postulé avec succès à la Faculté Polydisciplinaire de Khouribga.</p>
								<p>Si le téléchargement du document de candidature a commencé automatiquement, veuillez <a href='#' onClick={handePdfGeneration} className='text-orange-400'>cliquer ici</a> pour le faire manuellement.</p>
							</div>
						)}

						{errors && <p className="text-red-500 text-xs italic">{errors}</p>}
					</div>
				</div>

			</div>
		</div>
	);
};

export default SignUpPage;
