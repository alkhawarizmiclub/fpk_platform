import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Paths from '../../routers/Paths.json';
import EntStudentApi from '../../api/EntStudentApi';
import generatePDF from './signupPdfGenerator';
import SignUpStep1 from './SignUpStep1';
import SignUpStep2 from './SignUpStep2';
import SignUpStep3 from './SignUpStep3';
import SignUpStep4 from './SignUpStep4';
import SignUpStep5 from './SignUpStep5';
import { useSignUpContext } from '../../contexts/signUpContext';

const SignUpPage = () => {

	const { formErrorMessage, currentStep } = useSignUpContext();

	const steps = [
		{ num: 1, element: <SignUpStep1 /> },
		{ num: 2, element: <SignUpStep2 /> },
		{ num: 3, element: <SignUpStep3 /> },
		{ num: 4, element: <SignUpStep4 /> },
		{ num: 5, element: <SignUpStep5 /> },
	]

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

								{steps.map(({ num }) => (
									<li key={num} className={`flex-1 text-center ${currentStep === num ? 'text-orange-400' : 'text-orange-300'}`}>
										<div className="relative mb-2">
											<div className={`w-10 h-10 mx-auto rounded-full text-lg flex items-center justify-center ${currentStep === num ? "bg-orange-500" : "bg-orange-300"} text-white`}>{num}</div>
										</div>
										<div className="text-xs">{`Étape ${num}`}</div>
									</li>
								))}

							</ul>
						</div>

						{steps[currentStep - 1].element}

						{formErrorMessage && <p className="py-4 text-center text-red-500">{formErrorMessage}</p>}
					</div>
				</div>

			</div>
		</div>

	);
};

export default SignUpPage;
