import EntTeacherApi from "../../../api/EntTeacherApi";
import EntPageContainer from "../../../components/ent/EntPageContainer";

const EntTeacherAccountsPage = () => {

    const accounts = EntTeacherApi.getAccountsData();

    return (
        <EntPageContainer title="comptes">
            <table>
                <tbody>
                    <tr>
                        <th>Compte</th>
                        <th>Email</th>
                        <th>Mot de passe</th>
                        <th>Lien de connexion</th>
                    </tr>
                    {accounts.map(({ label, email, password, loginURL }) =>
                        <tr>
                            <td className="py-2 px-3 text-center">{label}</td>
                            <td className="py-2 px-3 text-center">{email}</td>
                            <td className="py-2 px-3 text-center">{password}</td>
                            <td className="py-2 px-3 text-center underline"><a href={loginURL}>Lien</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </EntPageContainer>
    );

}

export default EntTeacherAccountsPage;