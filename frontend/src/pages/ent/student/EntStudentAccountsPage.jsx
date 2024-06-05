import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EntPageContainer from "../../../components/ent/EntPageContainer";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import EntStudentInscriptionPassword from "../../../components/ent/EntStudentInscriptionPassword";

const EntStudentAccountsPage = () => {

    const accounts = [
        { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
        { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
        { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" },
        { label: "Microsoft Office", email: "firstname.lastname@usms.ac.ma", password: "thisIsYourPassword", loginURL: "http://www.google.com" }
    ]

    return (

        <EntPageContainer title="Comptes">
            {/* <table className="w-full hidden md:flex rounded shadow overflow-hidden">
                <tbody>
                    <tr className="text-white bg-slate-800">
                        <th className="p-3">Compte</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Mot de passe</th>
                        <th className="p-3">Lien de connexion</th>
                    </tr>
                    {accounts.map(({ label, email, password, loginURL }) =>
                        <tr className="text-slate-700 odd:bg-gray-100">
                            <td className="p-3 text-center">{label}</td>
                            <td className="p-3 text-center">{email}</td>
                            <td className="p-3 text-center"><EntStudentInscriptionPassword password={password} /></td>
                            <td className="p-3 text-center underline"><a href={loginURL}><FontAwesomeIcon icon={faUpRightFromSquare} /></a></td>
                        </tr>
                    )}
                </tbody>
            </table> */}

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {accounts.map(({ label, email, password, loginURL }, i) =>
                    <div key={i} className="p-5 flex items-center rounded shadow">
                        <div className="grow space-y-3">
                            <div className="w-full flex justify-between items-center">
                                <div>
                                    <div className="text-sm text-slate-700 font-semibold">Platform</div>
                                    <div className="text-slate-500">{label}</div>

                                </div>
                                <a href={loginURL} target="_blank" className="text-slate-500"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
                            </div>
                            <div>
                                <div className="text-sm text-slate-700 font-semibold">Email</div>
                                <div className="text-slate-500">{email}</div>
                            </div>
                            <div>
                                <div className="text-sm text-slate-700 font-semibold">Password</div>
                                <div className="text-slate-500"><EntStudentInscriptionPassword password={password} /></div>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                )}
            </div>
        </EntPageContainer>
    );
}

export default EntStudentAccountsPage;