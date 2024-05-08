import { Link } from "react-router-dom";
import { Paths } from "../routers/router";

const SignUpPage = () => {
    return (
        <div className="min-h-screen flex">
            <div className="p-10 w-1/2 flex justify-center items-center">

                <form method="post" className="w-full max-w-lg flex flex-col gap-5">

                    <div className="flex gap-5">
                        <div className="w-1/2 flex flex-col">
                            <label htmlFor="first-name-ar" className="text-right">الاسم الشخصي</label>
                            <input type="text" dir="rtl" name="first-name-ar" id="first-name-ar" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                        </div>
                        <div className="w-1/2 flex flex-col">
                            <label htmlFor="first-name-ar" className="text-right">الاسم العائلي</label>
                            <input type="text" dir="rtl" name="last-name-ar" id="last-name-ar" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                        </div>
                    </div>

                    <div className="flex gap-5">
                        <div className="w-1/2 flex flex-col">
                            <label htmlFor="first-name-ar">Prenom</label>
                            <input type="text" name="first-name-fr" id="first-name-fr" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                        </div>
                        <div className="w-1/2 flex flex-col">
                            <label htmlFor="first-name-ar">Nom</label>
                            <input type="text" name="last-name-fr" id="last-name-fr" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                        </div>
                    </div>

                    <div className="w-full flex flex-col">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" placeholder="i.e. example@gmail.com" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" id="phone" placeholder="i.e. +212 600112233" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="password">Mot de passe</label>
                        <input type="password" name="password" id="password" placeholder="Mot de passe" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="password2">Mot de passe (répété)</label>
                        <input type="password" name="password2" id="password2" placeholder="Répétez le mot de passe ici" className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                    </div>
                    <p>Mot de passe oublié?<a href="#" className="text-orange-400"> Réinitialisez-le ici.</a></p>

                    <input type="submit" value="Sign Up" className="py-2 px-3 rounded-lg text-white bg-orange-400" />

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

export default SignUpPage;
