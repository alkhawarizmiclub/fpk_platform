const EntTeacherGradesStudentEntry = ({ data }) => {

    const { id, image, firstname, lastname, normale, ratt } = data;

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
        console.log('Submitted data:', studentData);
    };

    return (
        <tr key={id}>
            <td className="px-6 py-4 whitespace-nowrap">
                <img src={image} alt="Student" className="w-10 h-10 rounded-full" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">{firstname}</td>
            <td className="px-6 py-4 whitespace-nowrap">{lastname}</td>
            <td className="px-6 py-4 whitespace-nowrap">
                <input
                    type="text"
                    value={normale}
                    onChange={(e) => handleNormalNoteChange(id, e.target.value)}
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <input
                    type="text"
                    value={ratt}
                    onChange={(e) => handleRattrapageNoteChange(id, e.target.value)}
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                />
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
                <button
                    onClick={() => handleSubmit(id)}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                >
                    Envoyer
                </button>
            </td>
        </tr>
    );
}

export default EntTeacherGradesStudentEntry;