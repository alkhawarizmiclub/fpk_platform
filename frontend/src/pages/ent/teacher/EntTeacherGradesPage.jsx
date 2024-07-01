
import { useEffect, useState } from 'react';
import EntPageContainer from "../../../components/ent/EntPageContainer";
import EntTeacherApi from '../../../api/EntTeacherApi';
import EntTeacherGradesStudentEntry from '../../../components/ent/EntTeacherGradesStudentEntry';

// Import the image directly from the public directory
const morokiImage = "../../../../public/MOROKI .png";
const achrafImage = "../../../../public/achraf mansari.png";
const nawfalImage = "/liinkedin.png";

const EntTeacherGradesPage = () => {

    const [modulesList, setModulesList] = useState([]);

    const [apogee, setApogee] = useState('');
    const [module, setModule] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        EntTeacherApi.getModulesData()
            .then((response) => {
                setModulesList(response.data.data);
            })
    }, []);


    const handleSearch = (e) => {
        e.preventDefault();

        EntTeacherApi.getStudentGrade(module, apogee, firstName, lastName)
            .then((response) => {
                setStudentData(response.data.data);
            })
    };

    return (
        <div>
            <h1 className="pt-5 px-5 pb-5 mb-5 capitalize text-center text-xl text-slate-800 font-semibold border-b border-slate-300">Notes</h1>

            <EntPageContainer title="données de recherche">
                <div className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor="apogee" className="block text-sm font-medium text-gray-700">Apogée</label>
                        <input
                            type="text"
                            id="apogee"
                            value={apogee}
                            onChange={(e) => setApogee(e.target.value)}
                            disabled={firstName || lastName !== ""}
                            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            disabled={apogee !== ""}
                            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            disabled={apogee !== ""}
                            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="module" className="block text-sm font-medium text-gray-700">Module</label>
                        <select
                            id="module"
                            value={module}
                            onChange={(e) => setModule(e.target.value)}
                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                        >
                            <option value="">Select Module</option>
                            {modulesList.map(({ id, filiere, semester, module_name }) => <option key={id} value={id}>{filiere} | {semester} | {module_name}</option>)}
                        </select>
                    </div>

                    <button
                        onClick={handleSearch}
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Rechercher
                    </button>
                </div>
            </EntPageContainer>

            <EntPageContainer title="liste">
                {studentData.length > 0 && (
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Note Normal</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Note Rattrapage</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {studentData.map((data) => (
                                <EntTeacherGradesStudentEntry key={data.id} data={data} />
                            ))}
                        </tbody>
                    </table>
                )}
            </EntPageContainer>
        </div>
    );
}

export default EntTeacherGradesPage;
