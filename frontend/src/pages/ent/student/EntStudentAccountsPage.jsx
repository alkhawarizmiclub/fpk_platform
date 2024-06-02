const EntStudentAccountsPage = () => {

    const accounts = [
        { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
        { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
        { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
        { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" }
    ]

    return (
        <div className="m-5 p-5 rounded-lg flex flex-col gap-5 bg-white">
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
        </div>
    );
}

export default EntStudentAccountsPage;