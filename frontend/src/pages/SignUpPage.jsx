import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Paths from '../routers/Paths.json';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import EntStudentApi from '../api/EntStudentApi';

const SignUpPage = () => {
	const navigate = useNavigate();
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		nom: '',
		prenom: '',
		nomArabe: '',
		prenomArabe: '',
		birthDate: '',
		birthPlace: '',
		cne: '',
		nationality: '',
		idNum: '',
		email: '',
		phone: '',
		emergencyPhone: '',
		homeAddress: '',
		password: '',
		passwordConfirmation: '',
		major: '',
		bacYear: '',
		bacYear: '',
		bacGrade: '',
		studentPhoto: '',
		cniFile: false,
		Bac: false,
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
		doc.addImage('/lo.png', 'png', 10, 10, 30, 30); // Replace with your logo path and size
		doc.setFontSize(18);
		doc.text('Université Soltan Molay', 105, 25, { align: 'center' });
		doc.text(' Selaiman', 105, 32, { align: 'center' });
		doc.text('Faculté Polydisciplinaire de', 105, 39, { align: 'center' });
		doc.text(' Khouribga', 105, 46, { align: 'center' });

		if (formData.studentPhoto) {
			doc.addImage(formData.studentPhoto, 'PNG', 150, 15, 40, 40); // Adjust the dimensions as needed
		}


		// Adding student info table
		const studentInfo = [
			[{ content: 'Informations personnelles', colSpan: 2, styles: { fontStyle: 'bold', halign: 'center', fillColor: [255, 165, 0] } }],
			['Champs', 'Détails'],
			['Nom', formData.nom],
			['Prénom', formData.prenom],
			['Nom en arabe', formData.nomArabe],
			['Prénom en arabe', formData.prenomArabe],
			['Date de Naissance', formData.birthDate],
			['Lieu de Naissance', formData.birthPlace],
			['Nationalité', formData.nationality],
			['CIN/Passport', formData.idNum],
			['Email', formData.email],
			['Téléphone', formData.phone],
			['Téléphone Urgent', formData.emergencyPhone],
			['Adresse', formData.homeAddress],

		];
		doc.autoTable({
			body: studentInfo,
			startY: 50, // Adjust as needed
			styles: { fontSize: 10 },
			headStyles: { fillColor: [255, 165, 0], fontStyle: 'bold', halign: 'center' },
			bodyStyles: { halign: 'left' },
			columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'wrap' } },
			tableLineWidth: 0.1, // Line width between columns
		});


		// Adding academic info table
		const academicInfo = [
			[{ content: 'Parcours Académique', colSpan: 2, styles: { fontStyle: 'bold', halign: 'center', fillColor: [255, 165, 0] } }],
			['Champs', 'Détails'],
			['Filière', formData.major],
			['Type du  Baccalauréat', formData.bacYear],
			['CNE', formData.cne],
			['Année du Baccalauréat', formData.bacYear],
			['Moyenne du Bac', formData.bacGrade], // Replace with correct key
		];

		doc.autoTable({
			body: academicInfo,
			startY: doc.autoTable.previous.finalY + 10, // Start after previous table + padding
			styles: { fontSize: 10 },
			headStyles: { fillColor: [255, 165, 0], fontStyle: 'bold', halign: 'center' },
			bodyStyles: { halign: 'left' },
			columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'wrap' } },
			tableLineWidth: 0.1, // Line width between columns
		});


		// Adding documents provided section
		const documentsProvided = [
			[{ content: 'Documents Fournis', colSpan: 2, styles: { fontStyle: 'bold', halign: 'center', fillColor: [255, 165, 0] } }],
			['Champs', 'Détails'],
			['Copie de la CNI (Recto-verso)', formData.cniFile ? 'X' : ''],
			['Copie du diplôme du Baccalauréat', formData.Bac ? 'X' : ''],
		];

		doc.autoTable({
			body: documentsProvided,
			startY: doc.autoTable.previous.finalY + 10, // Start after previous table + padding
			styles: { fontSize: 10 },
			headStyles: { fillColor: [255, 165, 0], fontStyle: 'bold', halign: 'center' },
			bodyStyles: { halign: 'left' },
			columnStyles: { 0: { cellWidth: 'auto' }, 1: { cellWidth: 'wrap' } },
			tableLineWidth: 0.1, // Line width between columns
		});

		// Adding download date
		const downloadDate = new Date().toLocaleDateString('fr-FR');
		doc.setFontSize(10);
		doc.text(`Date de téléchargement : ${downloadDate}`, 180, doc.autoTable.previous.finalY + 10, null, null, 'right');

		// Adding footer
		doc.setLineWidth(0.5);
		doc.line(10, doc.internal.pageSize.height - 20, doc.internal.pageSize.width - 10, doc.internal.pageSize.height - 20);
		doc.setFontSize(8);
		doc.text('www.example.com', 105, doc.internal.pageSize.height - 8, null, null, 'center');

		doc.text('tel: +212 456 789 || Fax: +212 5671234475', 105, doc.internal.pageSize.height - 4, null, null, 'center'); // Replace with actual phone number

		doc.save('informations_etudiant.pdf');
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateStep(step)) {
			setErrors('');
			// generatePDF();

			EntStudentApi.signup(
				nom,
				prenom,
				nomArabe,
				prenomArabe,
				birthDate,
				birthPlace,
				cne,
				nationality,
				id_num,
				email,
				phone,
				emergencyPhone,
				homeAddress,
				password,
				passwordConfirmation,
				major,
				studentPhoto,
			)
				.then(() => { })
				.catch(() => { })
				.finally(() => { })

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
					formData.nomArabe &&
					formData.prenomArabe &&
					formData.birthDate &&
					formData.birthPlace &&
					formData.cne &&
					formData.nationality &&
					formData.idNum
				);
			case 2:
				return (
					formData.email &&
					formData.phone &&
					formData.emergencyPhone &&
					formData.homeAddress
				);
			case 3:
				return (
					formData.major &&
					formData.bacYear &&
					formData.bacYear &&
					formData.bacGrade
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
											id="nomArabe"
											type="text"
											placeholder="الإسم العائلي"
											value={formData.nomArabe}
											onChange={handleChange}
										/>
									</div>
									<div className="w-full md:w-1/2 px-3">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="personnel">
											الإسم الشخصي
										</label>
										<input
											className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
											id="prenomArabe"
											type="text"
											placeholder="الإسم الشخصي"
											value={formData.prenomArabe}
											onChange={handleChange}
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
										/>
									</div>
								</div>
								<div className="flex flex-wrap -mx-3 mb-6">
									<div className="w-full px-3">
										<label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="cne">
											Code Etudiant
										</label>
										<input
											className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
											id="cne"
											type="text"
											placeholder="F101020300"
											value={formData.cne}
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
										/>
									</div>
								</div>
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
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="homeAddress">
										Adresse
									</label>
									<input
										id="homeAddress"
										type="text"
										placeholder="Rue Zitouna 123"
										value={formData.homeAddress}
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
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passwordConfirmation">
										Confirmer Mot de Passe
									</label>
									<input
										id="passwordConfirmation"
										type="password"
										placeholder="***************"
										value={formData.passwordConfirmation}
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
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="major">
										Filière
									</label>
									<div className="relative">
										<select
											id="major"
											value={formData.major}
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
								<div className="mb-4">
									<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bacYear">
										Type du Baccalauréat
									</label>
									<div className="relative">
										<select
											id="bacYear"
											value={formData.bacYear}
											onChange={handleChange}
											className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
										<input
											id="bacYear"
											type="text"
											placeholder="2020"
											value={formData.bacYear}
											onChange={handleChange}
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										/>
									</div>
									<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
										<label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bacGrade">
											Moyenne du Bac
										</label>
										<input
											id="bacGrade"
											type="tel"
											placeholder="20.00"
											value={formData.bacGrade}
											onChange={handleChange}
											className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
										/>
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
										id="cnifile"
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
