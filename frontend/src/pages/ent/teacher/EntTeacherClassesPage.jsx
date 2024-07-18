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
								<th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Nom du Module</th>
								<th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Filiere</th>
								<th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Nombre des Etudients</th>
								<th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">List de Inscription</th>
							</tr>
						</thead>
						<tbody>
							{
								classesList.map(({ id, module_name, filiere_name, student_count }, i) => (
									<tr key={i} className="hover:bg-gray-100 transition-colors duration-200">
										<th className="px-6 py-3 border-b-2 border-gray-300  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">{module_name}</th>
										<th className="px-6 py-3 border-b-2 border-gray-300  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">{filiere_name}</th>
										<th className="px-6 py-3 border-b-2 border-gray-300  text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">{student_count}</th>
										<th className="px-6 py-3 border-b-2 border-gray-300  text-left text-xs leading-4 font-medium text-blue-600  tracking-wider"><button onClick={() => handelCLick(id, module_name)}>Télécharger la liste pdf</button></th>
									</tr>))
							}
						</tbody>
					</table>
				</div>
			)}
		</EntPageContainer>
	);
}

export default EntTeacherClassesPage;
