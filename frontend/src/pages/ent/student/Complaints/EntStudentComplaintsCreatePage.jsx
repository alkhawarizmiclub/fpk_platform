import EntPageContainer from "../../../../components/ent/EntPageContainer";

const EntStudentComplaintsCreatePage = () => {
    return (
        <EntPageContainer title="Reclamations">
            <form className="mx-auto max-w-xl flex flex-col gap-5">
                <div className="w-full flex flex-col">
                    <label htmlFor="subject">Sujet :</label>
                    <input type="text" name="subject" id="subject" required className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" />
                </div>
                
                <textarea className="py-2 px-3 rounded-lg border border-gray-200 bg-slate-50" required ></textarea>
            </form>
        </EntPageContainer>
    );
}

export default EntStudentComplaintsCreatePage;