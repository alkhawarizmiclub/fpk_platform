

import { useEffect, useState } from "react";
import EntTeacherApi from "../../../api/EntTeacherApi";
import EntPageContainer from "../../../components/ent/EntPageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const EntTeacherAccountsPage = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        EntTeacherApi.getAccountsData()
            .then((response) => {
                setAccounts(response.data.data);
            })
            .catch(() => {
                // TODO: Add error handling
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, []);

    return (
        <EntPageContainer title="Comptes">

            {isLoading ? (

                <div className="text-center"><FontAwesomeIcon icon={faSpinner} className="text-lg loader" /></div>

            ) : (

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Compte</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Mot de passe</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Lien de connexion</th>
                            </tr>
                        </thead>
                        <tbody>
                            {accounts.length > 0 ? accounts.map(({ account_type, account_id, account_password, account_url }, i) => (
                                <tr key={i}>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{account_type}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{account_id}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{account_password}</td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-blue-600 underline text-center">
                                        <a href={account_url} target="_blank" rel="noopener noreferrer" className="px-4 py-2 space-x-2 rounded-lg text-sm text-white bg-orange-400 hover:bg-orange-300 transtition-colors duration-default">
                                            <FontAwesomeIcon icon={faUpRightFromSquare} />
                                            <span>Lien</span>
                                        </a>
                                    </td>
                                </tr>
                            )) : (
                                <tr>
                                    <td colSpan={4} className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">Aucun compte ne vous est encore attribué</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

            )}
        </EntPageContainer>
    );
}

export default EntTeacherAccountsPage;
