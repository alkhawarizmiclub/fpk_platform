import EntPageContainer from "../../../components/ent/EntPageContainer";

const EntStudentAccountsPage = () => {

    const accounts = [
        { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
        { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
        { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
        { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" }
    ]

    return (
        
        <EntPageContainer title="Comptes">
            <table className="w-full">
                <tbody>
                    <tr className="bg-slate-300">
                        <th className="p-3">Compte</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Mot de passe</th>
                        <th className="p-3">Lien de connexion</th>
                    </tr>
                    {accounts.map(({ label, email, password, loginURL }) =>
                        <tr>
                            <td className="p-3 text-center">{label}</td>
                            <td className="p-3 text-center">{email}</td>
                            <td className="p-3 text-center">{password}</td>
                            <td className="p-3 text-center underline"><a href={loginURL}>Lien</a></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </EntPageContainer>
    );
}

export default EntStudentAccountsPage;