

import EntTeacherApi from "../../../api/EntTeacherApi";
import EntPageContainer from "../../../components/ent/EntPageContainer";

const EntTeacherAccountsPage = () => {
    const accounts = EntTeacherApi.getAccountsData();

    return (
        <EntPageContainer title="Comptes">
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead>
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Compte</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Email</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Mot de passe</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Lien de connexion</th>
                        </tr>
                    </thead>
                    <tbody>
                        {accounts.map(({ label, email, password, loginURL }, i) => (
                            <tr key={i} className="hover:bg-gray-100 transition-colors duration-200">
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{label}</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{email}</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{password}</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-blue-600 underline text-center">
                                    <a href={loginURL} target="_blank" rel="noopener noreferrer" className="hover:text-blue-800">Lien</a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </EntPageContainer>
    );
}

export default EntTeacherAccountsPage;
