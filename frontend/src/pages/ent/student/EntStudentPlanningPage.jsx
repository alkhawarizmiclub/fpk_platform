import EntStudentApi from "../../../api/EntStudentApi";
import EntPageContainer from "../../../components/ent/EntPageContainer";

const EntStudentPlanningPage = () => {

    const planningPDF = EntStudentApi.getPlanningPDF();

    const parts = planningPDF.split('/');

    const filename = parts[parts.length - 1];

    console.log(filename);

    return (
        <EntPageContainer title="Planning">
            <a href={planningPDF} download={filename} target="_blank" rel="noreferrer" className="p-3 bg-slate-300">Telecharger</a>
            <object data={planningPDF} type="application/pdf" className="w-full aspect-video">
                <p>Alternative text - include a link <a href={planningPDF}>to the PDF!</a></p>
            </object>
        </EntPageContainer>
    );

}

export default EntStudentPlanningPage;