
import { useEffect, useState } from 'react';
import EntPageContainer from "../../../components/ent/EntPageContainer";
import EntTeacherApi from '../../../api/EntTeacherApi';
import EntTeacherGradesStudentEntry from '../../../components/ent/EntTeacherGradesStudentEntry';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';


const EntTeacherGradesPage = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [modulesList, setModulesList] = useState([]);
    const [error, setError] = useState('');

    const [apogee, setApogee] = useState('');
    const [module, setModule] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentData, setStudentData] = useState(null);

    useEffect(() => {
        setIsLoading(true)

        EntTeacherApi.getModulesData()
            .then((response) => {
                setModulesList(response.data.data);
            })
            .catch(() => {
                // TODO: Error Handling
            })
            .finally(() => {
                setIsLoading(false);
            })

    }, []);


    const handleSearch = (e) => {
        e.preventDefault();
        setError('');

        if ((apogee || (firstName && lastName)) && module) {
            setIsSubmitting(true)

            EntTeacherApi.getStudentGrade(module, apogee, firstName, lastName)
                .then((response) => {
                    setStudentData(response.data.data);
                })
                .catch((error) => {
                    console.error(error);
                })
                .finally(() => {
                    setIsSubmitting(false);
                })

        } else {
            setError('Veuillez entrer les champs necéssaires');
        }
    };

    return (
        <>
            <EntPageContainer title="Notes">

                <div className="flex flex-col gap-4">

                    <p>Saisissez <span className='font-semibold'>le prénom et le nom</span> ou <span className='font-semibold'>l'APOGEE</span> de l'étudiant :</p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>

                        <div>
                            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                disabled={apogee !== "" || isLoading || isSubmitting}
                                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                                disabled={apogee !== "" || isLoading || isSubmitting}
                                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="apogee" className="block text-sm font-medium text-gray-700">APOGEE</label>
                            <input
                                type="text"
                                id="apogee"
                                value={apogee}
                                onChange={(e) => setApogee(e.target.value)}
                                disabled={firstName || lastName !== "" || isLoading || isSubmitting}
                                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="module" className="block text-sm font-medium text-gray-700">Module <span className='text-red-600'>*</span></label>
                            <select
                                required
                                id="module"
                                value={module}
                                onChange={(e) => setModule(e.target.value)}
                                disabled={isLoading || isSubmitting}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                            >
                                <option value="" disabled>Select Module</option>
                                {modulesList.map(({ id, filiere, semester, module_name }) => <option key={id} value={id}>{filiere} | {semester} | {module_name}</option>)}
                            </select>
                        </div>

                    </div>

                    <div className='flex justify-between'>
                        <p className='mt-2 text-sm text-red-600'>{error}</p>

                        <button
                            onClick={handleSearch}
                            className={`px-4 py-2 space-x-2 rounded-lg text-sm text-white ${isSubmitting ? "bg-orange-300" : "bg-orange-400 hover:bg-orange-300"} transtition-colors duration-default`}
                        >
                            {isSubmitting ? (<FontAwesomeIcon icon={faSpinner} className="text-lg loader" />) : (<FontAwesomeIcon icon={faSearch} />)}
                            <span>Rechercher</span>
                        </button>
                    </div>

                </div>

            </EntPageContainer>
            {studentData && (
                <EntPageContainer title="Liste des etudiants">
                    <table className="mt-5 min-w-full bg-white border border-gray-300">
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Photo</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Prénom</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Nom</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">APOGEE</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Normal</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Rattrapage</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Actions</th>
                        </tr>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {studentData.length > 0 ? (
                                studentData.map((data, i) => (
                                    <EntTeacherGradesStudentEntry key={i} data={data} />
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={7} className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">Il n'y a aucun élève avec les données saisies </td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </EntPageContainer >
            )}

        </>
    );
}

export default EntTeacherGradesPage;
