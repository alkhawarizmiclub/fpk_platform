import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EntResultsTypeInfo = () => {
    return (
        <span className="relative group">
            <FontAwesomeIcon icon={faInfoCircle} className="hover:text-slate-400 transition-all duration-300" />
            <span className="absolute top-5 left-1/2 -translate-x-1/2 py-1 px-2 hidden group-hover:block rounded-lg shadow bg-white">
                <table className="text-xs">
                    <tbody>
                        <tr>
                            <td className="px-1 py-1 font-semibold">V</td>
                            <td className="px-1 py-1 font-normal">Valide</td>
                        </tr>
                        <tr>
                            <td className="px-1 py-1 font-semibold">VAR</td>
                            <td className="px-1 py-1 font-normal">Valide apres rattrapage</td>
                        </tr>
                        <tr>
                            <td className="px-1 py-1 font-semibold">R</td>
                            <td className="px-1 py-1 font-normal">Rattrapage</td>
                        </tr>
                        <tr>
                            <td className="px-1 py-1 font-semibold">NV</td>
                            <td className="px-1 py-1 font-normal">Non valide</td></tr>
                        <tr>
                            <td className="px-1 py-1 font-semibold">NVA</td>
                            <td className="px-1 py-1 font-normal">Non Valide Ajournee</td>
                        </tr>
                        <tr>
                            <td className="px-1 py-1 font-semibold">AC</td>
                            <td className="px-1 py-1 font-normal">Acquis par compensation</td>
                        </tr>
                    </tbody>
                </table>
            </span>
        </span>
    );
}

export default EntResultsTypeInfo;