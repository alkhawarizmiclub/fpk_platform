import EntPageContainer from "../../../components/ent/EntPageContainer";
import EntTeacherApi from '../../../api/EntTeacherApi';

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const EntTeacherClassesPage = () => {

	const [classesList, setClassesList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	const handelCLick = (id, module_name) => {
		EntTeacherApi.getStudentsList(id)
			.then((res) => {
				const url = URL.createObjectURL(res.data);
				const a = document.createElement('a');
				a.href = url;
				a.style = 'display: none';
				a.download = module_name + '.pdf';
				document.body.appendChild(a);
				a.click();
				a.remove();
				URL.revokeObjectURL(url);
			});
	};

	useEffect(() => {

		setIsLoading(isLoading);

		EntTeacherApi.getClassesData()
			.then((response) => {
				setClassesList(response.data.data);
			})
			.catch(() => {
				// TODO: Error Handling
			})
			.finally(() => {
				setIsLoading(false);
			})

	}, []);

	return (
		<EntPageContainer title="Classes">
			{isLoading ? (

				<div className="text-center"><FontAwesomeIcon icon={faSpinner} className="text-lg loader" /></div>

			) : (
				<div className="overflow-x-auto">
					<table className="min-w-full bg-white border border-gray-300 rounded-lg">
						<thead>
							<tr>
								<th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Nom du Module</th>
								<th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Filiere</th>
								<th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Nombre des Etudients</th>
								<th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">List de Inscription</th>
							</tr>
						</thead>
						<tbody>
							{classesList.length > 0 ? classesList.map(({ id, module_name, filiere_name, student_count }, i) => (
								<tr key={i}>
									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{module_name}</td>
									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{filiere_name}</td>
									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{student_count}</td>
									<td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-blue-400 text-center">
										<button onClick={() => handelCLick(id, module_name)}>Télécharger la liste pdf</button>
									</td>
								</tr>))
								: (
									<tr>
										<td colSpan={4} className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">Vous n'avez pas été affecté à un module ou vos modules n'ont pas encore d'étudiants inscrits</td>
									</tr>
								)}
						</tbody>
					</table>
				</div>
			)}
		</EntPageContainer>
	);
}

export default EntTeacherClassesPage;
