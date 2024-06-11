import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from "../contexts/context";
import Paths from "../routers/Paths.json";
import { EntStaffPagesUrlsList, EntStudentPagesUrlsList, EntTeacherPagesUrlsList } from "../components/ent/EntPagesUrlsList";


const LoginPage = () => {

    const { login, authenticated, setAuthenticated, setUser, user, setEntPagesList } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        if (authenticated) {
            navigate(Paths.ENT_DASHBOARD_PAGE);
        }
    }, []);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        login(email, password).then(
            (response) => {
                if (response.data.status === "success") {
                    setAuthenticated(true);

                    const userData = {
                        ...response.data.data,
                        role: "student" // <--- REMEMBER TO CHANGE THIS !
                    }
                    setUser(userData);

                    switch (userData.role) {
                        case "student":
                            setEntPagesList(EntStudentPagesUrlsList);
                            break;

                        case "teacher":
                            setEntPagesList(EntTeacherPagesUrlsList);
                            break;

                        case "staff":
                            setEntPagesList(EntStaffPagesUrlsList);
                            break;

                        default:
                            break;
                    }
                    
                    navigate(Paths.ENT_DASHBOARD_PAGE);
                }
            }
        ).finally(() => {
            console.log(isSubmitting);
            setIsSubmitting(false);
        });

    }

    return (
        <div className="min-h-screen flex">
            <div className="p-10 w-full md:w-1/2 flex justify-center items-center">
                <form onSubmit={submitHandler} className="w-full max-w-lg flex flex-col gap-5">

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

                    <p>Mot de passe oublié?<a href="#" className="text-orange-400"> Réinitialisez-le ici.</a></p>

                    <button type="submit" className={`py-2 px-3 rounded-lg text-white ${isSubmitting ? "bg-orange-200" : "bg-orange-400"}`} disabled={isSubmitting}>{isSubmitting ? 'Logging in...' : 'Login'}</button>

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