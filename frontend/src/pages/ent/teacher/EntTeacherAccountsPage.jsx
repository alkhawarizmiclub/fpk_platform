

import EntPageContainer from "../../../components/ent/EntPageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import EntAccountPassword from "../../../components/ent/EntAccountPassword";
import EntTeacherApi from "../../../api/EntTeacherApi";
import { useEffect, useState } from "react";

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

				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
					{accounts.map(({ account_type, account_id, account_password, account_url }, i) =>
						<div key={i} className="p-5 grow space-y-3 rounded shadow">
							<div className="w-full flex justify-between items-center">
								<div>
									<div className="text-sm text-slate-700 font-semibold">Platform</div>
									<div className="text-slate-500">{account_type}</div>
								</div>
								<a href={account_url} target="_blank" className="text-slate-500"><FontAwesomeIcon icon={faUpRightFromSquare} /></a>
							</div>
							<div>
								<div className="text-sm text-slate-700 font-semibold">Identifiant</div>
								<div className="text-slate-500">{account_id}</div>
							</div>
							<div>
								<div className="text-sm text-slate-700 font-semibold">Password</div>
								<div className="text-slate-500"><EntAccountPassword password={account_password} /></div>
							</div>
						</div>
					)}
				</div>

			)}
		</EntPageContainer>
	);
}

export default EntTeacherAccountsPage;
