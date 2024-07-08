import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import EntPageContainer from "../../../components/ent/EntPageContainer";
import EntAccountPassword from "../../../components/ent/EntAccountPassword";
import EntStudentApi from "../../../api/EntStudentApi";
import { useEffect, useState } from "react";

const EntStudentAccountsPage = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        setIsLoading(true);

        EntStudentApi.getAccountsData()
            .then((response) => {
                setAccounts(response.data);
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

                accounts.length ? (

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
                                    <div className="text-slate-500"><EntAccountPassword password={password} /></div>
                                </div>
                            </div>
                        )}
                    </div>

                ) : (

                    <p className="text-center">Il n'y a aucune donnée à afficher actuellement!</p>

                )
            )}
        </EntPageContainer>
    );
}

export default EntStudentAccountsPage;