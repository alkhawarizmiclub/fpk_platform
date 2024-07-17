import { useEffect, useState } from "react";
import { useSignUpContext } from "../../contexts/signUpContext";
import EntPublicApi from "../../api/EntPublicApi";

const SignUpStep3 = () => {

    const [isLoading, setLoading] = useState(true);

    const { formData, handleInputChange, nextStep, prevStep } = useSignUpContext();

    const [majors, setMajors] = useState([]);

    const years = [];
    for (let year = new Date().getFullYear(); year >= 1970; year--) {
        years.push(year);
    }

    useEffect(() => {
        setLoading(true);

        EntPublicApi.getAllMajors()
            .then((response) => {
                setMajors(response.data.data)
                console.log(response.data.data);
            })
            .catch(() => { })
            .finally(() => {
                setLoading(false);
            })
    }, [])

    return (
        <form id="formEtape3" onSubmit={nextStep}>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="major">
                    Filière
                </label>
                <div className="relative">
                    <select
                        id="major"
                        value={formData.major}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="" disabled>Select</option>
                        {majors.map(({ id, filiere_abrv, filiere_name }) => (
                            <option key={id} value={id}>{filiere_name}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bacYear">
                    Type du Baccalauréat
                </label>
                <div className="relative">
                    <select
                        id="bacMajor"
                        value={formData.bacMajor}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        <option value="" disabled>Select</option>
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
                    <select
                        id="bacYear"
                        value={formData.bacYear}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    >
                        {years.map((year) => (
                            <option key={year} value={year}>
                                {year}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bacGrade">
                        Moyenne du Bac
                    </label>
                    <input
                        id="bacGrade"
                        type="number"
                        min={0}
                        max={20}
                        step={0.01}
                        placeholder="20.00"
                        value={formData.bacGrade}
                        onChange={handleInputChange}
                        required
                        disabled={isLoading}
                        className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between">
                <button
                    onClick={prevStep}
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Retour
                </button>
                <button
                    className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Suivant
                </button>
            </div>
        </form>
    );
}

export default SignUpStep3;
