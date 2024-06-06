import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from "../contexts/context";
import Paths from "../routers/Paths.json";


const LoginPage = () => {

    const { login, authenticated, setAuthenticated, setUser } = useUserContext();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        login(email, password).then(
            (response) => {
                if (response.data.status === "success") {
                    setAuthenticated(true);
                    setUser(response.data.data);
                    navigate(Paths.E_STUDENT_DASHBOARD_PAGE);
                }
            }
        );
    }

    useEffect(() => {
        if (authenticated) {
            navigate(Paths.E_STUDENT_DASHBOARD_PAGE);
        }
    }, []);

    return (
        <div className="min-h-screen flex">
            <div className="p-10 w-1/2 flex justify-center items-center">

                <form onSubmit={submitHandler} className="w-full max-w-lg flex flex-col gap-5">

                    <p>
                        <Link to={Paths.HOME_PAGE} className="w-full space-x-2 text-sm text-slate-600">
                            <FontAwesomeIcon icon={faArrowLeftLong} />
                            <span>Go back Home</span>
                        </Link>
                    </p>

                    <div className="w-full flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="i.e. example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                    </div>

                    <div className="w-full flex flex-col">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="password" id="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                    </div>

                    <p>Mot de passe oublié?<a href="#" className="text-orange-400"> Réinitialisez-le ici.</a></p>

                    <button type="submit" className="py-2 px-3 rounded-lg text-white bg-orange-400" >Login</button>

                </form>

            </div>

            <div className="p-48 w-1/2 bg-cover bg-no-repeat bg-center bg-[url(/signup_bg.jpg)]">
                <div className="w-full h-full flex rounded-lg shadow shadow-black/20 backdrop-blur-3xl">
                    <Link to={Paths.HOME_PAGE} className="grow flex justify-center items-center">
                        <img src="/fpk_logo.svg" className="max-w-64" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;