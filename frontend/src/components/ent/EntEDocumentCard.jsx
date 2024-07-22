import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gradeSheetsPdfGenerator } from "./EntPdfTemplateGradeSheet";

import EntStudentApi from "../../api/EntStudentApi";
import { useState } from "react";


const EntEDocumentCard = ({ label, creationDateTime, type }) => {

	const [error, setError] = useState('');

	const downloadHandler = (type) => {

		EntStudentApi.getReleveNote(type)
			.then((res) => {
				setError('');
				const url = URL.createObjectURL(res.data)
				const a = document.createElement('a');
				a.href = url;
				a.style = 'display: none';
				a.download = (type === 'att') ? ('attestion.pdf') : ('releve-note- ' + type + '.pdf');
				document.body.appendChild(a);
				a.click();
				a.remove();
				URL.revokeObjectURL(url);
			})
			.catch((error) => {
				let errorMessage = '';
				if (error.response && error.response.data) {
					const reader = new FileReader();
					reader.onload = () => {
						try {
							const json = JSON.parse(reader.result);
							errorMessage = json.message || "Une erreur s'est produite";
						} catch (e) {
							errorMessage = "Une erreur s'est produite et la réponse à l'erreur n'a pas pu être analysée.";
						}
						setError(errorMessage);
					};
					reader.readAsText(error.response.data);
				}
			});
	}
	return (
		<div className="relative p-5 rounded-lg shadow border border-slate-50">

			<button onClick={() => downloadHandler(type)} className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 p-2 h-10 w-10 flex justify-center items-center rounded-full bg-slate-300"><FontAwesomeIcon icon={faDownload} className="text-white" /></button>

			<h1 className="font-semibold">{label}</h1>

			<div className="text-sm text-slate-400">{error}</div>


		</div>
	);
}

export default EntEDocumentCard;
