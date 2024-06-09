import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import EntStudentApi from "../../../../api/EntStudentApi";
import Paths from "../../../../routers/Paths.json";

const EntStudentComplaintsCreatePage = () => {

    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        EntStudentApi.createComplaint(subject, message);

        navigate(Paths.E_STUDENT_COMPLAINTS_PAGE);
    }

    return (
        <EntPageContainer title="Reclamations">
            <form onSubmit={submitHandler} className="mx-auto max-w-xl flex flex-col gap-5">

                <div className="w-full flex flex-col">
                    <label htmlFor="subject">Sujet de reclamation :</label>
                    <input type="text" name="subject" id="subject" value={subject} onChange={(e) => setSubject(e.target.value)} required className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                </div>

                <div className="w-full flex flex-col">
                    <label htmlFor="message">Votre reclamation :</label>
                    <textarea name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} required className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" ></textarea>
                </div>

                <div className="flex justify-center gap-5">
                    <button type="submit" className="px-5 py-3 rounded-lg text-white bg-orange-400">Soumettre</button>
                    <Link to={Paths.E_STUDENT_COMPLAINTS_PAGE} className="px-5 py-3 rounded-lg text-white bg-orange-400">Annuler</Link>
                </div>

            </form>
        </EntPageContainer>
    );
}

export default EntStudentComplaintsCreatePage;