import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from "../contexts/context";
import Paths from "../routers/Paths.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";


const LoginPage = () => {

    const { login, authenticated, setAuthenticated, setUser, user, setToken } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (authenticated) {
            navigate(Paths.ENT_DASHBOARD_PAGE);
        }
    }, []);

    const [userRole, setUserRole] = useState("student");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const loginTypeToggle = (e) => {
        e.preventDefault();
        setError("");
        setUserRole(e.target.value);
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        setError("");
        setIsSubmitting(true);

        login(userRole, email, password)
            .then((response) => {

                if (response.data.status === "success") {
                    setAuthenticated(true);
                    setUser(response.data.data || {});
                    setToken(response.data.token);
                    navigate(Paths.ENT_DASHBOARD_PAGE);
                }

            })
            .catch((error) => {

                if (!error.response) {

                    setError("La plateforme rencontre quelques difficultés techniques, veuillez réessayer plus tard.");

                } else {

                    switch (response.status) {
                        case 401:
                            setError("Email ou mot de passe est invalide.");
                            break;

                        default:
                            setError("La plateforme rencontre quelques difficultés techniques, veuillez réessayer plus tard.");
                            break;
                    }

                }

            })
            .finally(() => {

                setIsSubmitting(false);

            });

    }

    return (
        <div className="w-full min-h-screen flex">

            <div className="p-10 w-full md:w-1/2 flex justify-center items-center">

                <form onSubmit={submitHandler} className="w-full max-w-lg flex flex-col gap-5">

                    <div className="grid grid-cols-3 overflow-hidden rounded-lg">
                        <button className={`p-5 text-center text-white font-semibold ${userRole === "student" ? "bg-orange-300" : "bg-orange-400"}`} disabled={userRole === "student"} value="student" onClick={loginTypeToggle}>Etudiant</button>
                        <button className={`p-5 text-center text-white font-semibold ${userRole === "teacher" ? "bg-orange-300" : "bg-orange-400"}`} disabled={userRole === "teacher"} value="teacher" onClick={loginTypeToggle}>Enseignant</button>
                        <button className={`p-5 text-center text-white font-semibold ${userRole === "staff" ? "bg-orange-300" : "bg-orange-400"}`} disabled={userRole === "staff"} value="staff" onClick={loginTypeToggle}>Staff</button>
                    </div>
                    <div className="p-5 w-full flex flex-col gap-5 ">

                        <Link to={Paths.HOME_PAGE} className="block md:hidden w-full h-28 flex justify-center items-center rounded-lg">
                            <img src="/fpk_logo.svg" className="w-full h-full object-fit" />
                        </Link>

                        <p className="hidden md:block">
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

                        <p>Mot de passe oublié? <a href="#" className="text-orange-400">Réinitialisez-le ici.</a></p>

                        {error && <p className="text-red-500">{error}</p>}

                        <button type="submit" className={`py-2 px-3 rounded-lg text-white ${isSubmitting ? "bg-orange-200" : "bg-orange-400"}`} disabled={isSubmitting}>{isSubmitting ? 'Logging in...' : 'Login'}</button>
                    </div>

                </form>

            </div>

            <div className="hidden md:block p-10 w-1/2 bg-cover bg-no-repeat bg-center bg-[url(/signup_bg.jpg)]">
                <Link to={Paths.HOME_PAGE} className="p-5 w-full h-full flex justify-center items-center rounded-lg shadow shadow-black/20 backdrop-blur-3xl">
                    <img src="/fpk_logo.svg" className="max-w-64 w-full max-h-64 h-full object-contain" />
                </Link>
            </div>

        </div>
    );
}

export default LoginPage;