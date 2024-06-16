
// import { useState } from 'react';
// import EntPageContainer from "../../../components/ent/EntPageContainer";
// import EntTeacherApi from '../../../api/EntTeacherApi';

// // Import the image directly from the public directory
// const morokiImage = "../../../../public/MOROKI .png";
// const achrafImage = "../../../../public/achraf mansari.png";
// const nawfalImage = "/liinkedin.png";

// const EntTeacherGradesPage = () => {
//     const [apogee, setApogee] = useState('');
//     const [module, setModule] = useState('');
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [studentData, setStudentData] = useState([]);

//     const modules = EntTeacherApi.getModulesData();
//     const student = EntTeacherApi.getStudentData();

//     const handleSearch = () => {
//         // Dummy data for demonstration purposes
//         const dummyStudentData = [
//             {
//                 id: 1,
//                 firstName: 'John',
//                 lastName: 'Doe',
//                 notes: '',
//                 photo: achrafImage,
//                 noteType: 'normal'
//             },
//             {
//                 id: 2,
//                 firstName: 'Jane',
//                 lastName: 'Smith',
//                 notes: '',
//                 photo: morokiImage,
//                 noteType: 'normal'
//             },
//             {
//                 id: 3,
//                 firstName: 'wa',
//                 lastName: 'taher',
//                 notes: '',
//                 photo: nawfalImage,
//                 noteType: 'normal'
//             }
//         ];
//         setStudentData(dummyStudentData);
//     };

//     const handleNoteChange = (id, newNote) => {
//         setStudentData(prevData => 
//             prevData.map(student => 
//                 student.id === id ? { ...student, notes: newNote } : student
//             )
//         );
//     };

//     const handleNoteTypeChange = (id, newNoteType) => {
//         setStudentData(prevData => 
//             prevData.map(student => 
//                 student.id === id ? { ...student, noteType: newNoteType } : student
//             )
//         );
//     };

//     const handleSubmit = () => {
//         // Implement the submission logic
//         console.log('Submitted data:', studentData);
//     };

//     return (
//         <div>
//             <h1 className="pt-5 px-5 pb-5 mb-5 capitalize text-center text-xl text-slate-800 font-semibold border-b border-slate-300">Notes</h1>

//             <EntPageContainer title="données de recherche">
//                 <div className="flex flex-col space-y-4">
//                     <div>
//                         <label htmlFor="apogee" className="block text-sm font-medium text-gray-700">Apogée</label>
//                         <input
//                             type="text"
//                             id="apogee"
//                             value={apogee}
//                             onChange={(e) => setApogee(e.target.value)}
//                             className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
//                         <input
//                             type="text"
//                             id="firstName"
//                             value={firstName}
//                             onChange={(e) => setFirstName(e.target.value)}
//                             className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
//                         <input
//                             type="text"
//                             id="lastName"
//                             value={lastName}
//                             onChange={(e) => setLastName(e.target.value)}
//                             className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>

//                     <div>
//                         <label htmlFor="module" className="block text-sm font-medium text-gray-700">Module</label>
//                         <select
//                             id="module"
//                             value={module}
//                             onChange={(e) => setModule(e.target.value)}
//                             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
//                         >
//                             <option value="">Select Module</option>
//                             {modules.map(({id, label}) => <option key={id} value={id}>{label}</option>)}
//                         </select>
//                     </div>

//                     <button
//                         onClick={handleSearch}
//                         className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                     >
//                         Rechercher
//                     </button>
//                 </div>
//             </EntPageContainer>

//             <EntPageContainer title="liste">
//                 {studentData.length > 0 && (
//                     <table className="min-w-full divide-y divide-gray-200">
//                         <thead className="bg-gray-50">
//                             <tr>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photo</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Note Type</th>
//                                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Note</th>
//                             </tr>
//                         </thead>
//                         <tbody className="bg-white divide-y divide-gray-200">
//                             {studentData.map(student => (
//                                 <tr key={student.id}>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <img src={student.photo} alt="Student" className="w-10 h-10 rounded-full"/>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{student.firstName}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">{student.lastName}</td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <select
//                                             value={student.noteType}
//                                             onChange={(e) => handleNoteTypeChange(student.id, e.target.value)}
//                                             className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
//                                         >
//                                             <option value="normal">Note Normal</option>
//                                             <option value="rattrapage">Note Rattrapage</option>
//                                         </select>
//                                     </td>
//                                     <td className="px-6 py-4 whitespace-nowrap">
//                                         <input
//                                             type="text"
//                                             value={student.notes}
//                                             onChange={(e) => handleNoteChange(student.id, e.target.value)}
//                                             className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                                         />
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 )}

//                 {studentData.length > 0 && (
//                     <div className="mt-4">
//                         <button
//                             onClick={handleSubmit}
//                             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                         >
//                             Envoyer
//                         </button>
//                     </div>
//                 )}
//             </EntPageContainer>
//         </div>
//     );
// }

// export default EntTeacherGradesPage;


import { useState } from 'react';
import EntPageContainer from "../../../components/ent/EntPageContainer";
import EntTeacherApi from '../../../api/EntTeacherApi';

// Import the image directly from the public directory
const morokiImage = "../../../../public/MOROKI .png";
const achrafImage = "../../../../public/achraf mansari.png";
const nawfalImage = "/liinkedin.png";

const EntTeacherGradesPage = () => {
    const [apogee, setApogee] = useState('');
    const [module, setModule] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [studentData, setStudentData] = useState([]);

    const modules = EntTeacherApi.getModulesData();
    const student = EntTeacherApi.getStudentData();

    const handleSearch = () => {
        // Dummy data for demonstration purposes
        const dummyStudentData = [
            {
                id: 1,
                firstName: 'John',
                lastName: 'Doe',
                normalNote: '',
                rattrapageNote: '',
                photo: achrafImage,
            },
            {
                id: 2,
                firstName: 'Jane',
                lastName: 'Smith',
                normalNote: '',
                rattrapageNote: '',
                photo: morokiImage,
            },
            {
                id: 3,
                firstName: 'wa',
                lastName: 'taher',
                normalNote: '',
                rattrapageNote: '',
                photo: nawfalImage,
            }
        ];
        setStudentData(dummyStudentData);
    };

    const handleNormalNoteChange = (id, newNote) => {
        setStudentData(prevData => 
            prevData.map(student => 
                student.id === id ? { ...student, normalNote: newNote } : student
            )
        );
    };

    const handleRattrapageNoteChange = (id, newNote) => {
        setStudentData(prevData => 
            prevData.map(student => 
                student.id === id ? { ...student, rattrapageNote: newNote } : student
            )
        );
    };

    const handleSubmit = () => {
        // Implement the submission logic (for demonstration, console logging)
        console.log('Submitted data:', studentData);
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
                            {modules.map(({id, label}) => <option key={id} value={id}>{label}</option>)}
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
                            {studentData.map(student => (
                                <tr key={student.id}>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <img src={student.photo} alt="Student" className="w-10 h-10 rounded-full"/>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.firstName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{student.lastName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="text"
                                            value={student.normalNote}
                                            onChange={(e) => handleNormalNoteChange(student.id, e.target.value)}
                                            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <input
                                            type="text"
                                            value={student.rattrapageNote}
                                            onChange={(e) => handleRattrapageNoteChange(student.id, e.target.value)}
                                            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button
                                            onClick={() => handleSubmit(student.id)}
                                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                        >
                                            Envoyer
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </EntPageContainer>
        </div>
    );
}

export default EntTeacherGradesPage;
