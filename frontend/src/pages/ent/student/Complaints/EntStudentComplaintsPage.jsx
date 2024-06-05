import EntPageContainer from "../../../../components/ent/EntPageContainer";
import Paths from "../../../../routers/Paths.json";

const EntStudentComplaintsPage = () => {

    const complaints = [
        { id: 89, datetime: new Date(), subject: "Lorem Ipsum", message: "It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." },
        { id: 103, datetime: new Date(), subject: "It was popularised in the 1960s with the release of Letraset", message: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." },
        { id: 176, datetime: new Date(), subject: "Lorem Ipsum", message: "لوريم إيبسوم(Lorem Ipsum) هو ببساطة نص شكلي (بمعنى أن الغاية هي الشكل وليس المحتوى) ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص، لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون من الزمن لم تقضي على هذا النص،" },
        { id: 321, datetime: new Date(), subject: "Lorem Ipsum", message: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." },
        { id: 1023, datetime: new Date(), subject: "Lorem Ipsum", message: "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source." },
    ]

    return (
        <EntPageContainer title="Reclamations">
            <table className="w-full rounded shadow overflow-hidden">
                <tbody>
                    <tr className="text-white bg-slate-800">
                        <th className="p-3">Id</th>
                        <th className="p-3">Date et temps</th>
                        <th className="p-3">Sujet</th>
                        <th className="p-3">Message</th>
                    </tr>
                    {complaints.map(({ id, datetime, subject, message }, i) =>
                        <tr key={i}>
                            <td className="p-3 text-center underline">{id}</td>
                            <td className="p-3 text-center">{datetime.getFullYear()}/{datetime.getMonth()}/{datetime.getDay()}</td>
                            <td className="p-3 text-center">{subject}</td>
                            <td className="p-3 break-all">{message}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </EntPageContainer>
    );
}

export default EntStudentComplaintsPage;