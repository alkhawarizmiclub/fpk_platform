import EntPageContainer from "../../../components/ent/EntPageContainer";
import EntTeacherApi from '../../../api/EntTeacherApi';

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import EntTeacherClassRow from "../../../components/ent/EntTeacherClassRow";

const EntTeacherClassesPage = () => {

	const [classesList, setClassesList] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

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
								<th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Filières</th>
								<th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Nombre des Étudiants</th>
								<th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">List d'Inscription</th>
							</tr>
						</thead>
						<tbody>
							{classesList.length > 0 ?
								classesList.map(({ id, module_name, filiere_name, student_count }) => (
									<EntTeacherClassRow key={id} id={id} module_name={module_name} filiere_name={filiere_name} student_count={student_count} />))
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
