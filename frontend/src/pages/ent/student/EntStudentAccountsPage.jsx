import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EntPageContainer from "../../../components/ent/EntPageContainer";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import EntStudentInscriptionPassword from "../../../components/ent/EntStudentInscriptionPassword";
import EntStudentApi from "../../../api/EntStudentApi";

const EntStudentAccountsPage = () => {

    const accounts = EntStudentApi.getAccountsData();

    return (
        <EntPageContainer title="Comptes">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                {accounts.map(({ label, email, password, loginURL }, i) =>
                    <div key={i} className="p-5 grow space-y-3 rounded shadow">
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
                )}
            </div>
        </EntPageContainer>
    );
}

export default EntStudentAccountsPage;