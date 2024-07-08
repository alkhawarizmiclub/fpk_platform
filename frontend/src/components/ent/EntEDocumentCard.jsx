import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gradeSheetsPdfGenerator } from "./EntPdfTemplateGradeSheet";


const EntEDocumentCard = ({ label, creationDateTime, type }) => {

    const downloadHandler = () => {
        const generatedPdfFile = gradeSheetsPdfGenerator({
            schoolSeason: "2023/2024",
            docTitle: "RELEVE",
            docId: "DRYN34R0GJ95",
            fullname: "John Wick",
            cneNum: "f131310020",
            apogeeNum: "20001001",
            birthPlace: "Casablanca",
            birthDate: new Date(),
            semesterNum: 2,
            majorLabel: "science mathématique et informatique",
            subjectsResultsTable: [
                ["Row 1 Col 1", 13, "V", "Normale", "Row 1 Col 5"],
                ["Row 1 Col 1", 15, "V", "Normale", "Row 1 Col 5"],
                ["Row 1 Col 1", 12, "V", "Normale", "Row 1 Col 5"],
                ["Row 1 Col 1", 7, "NV", "Normale", "Row 1 Col 5"],
                ["Row 1 Col 1", 4.7, "NVAJ", "Rattrapage", "Row 1 Col 5"],
                ["Row 1 Col 1", 9, "NV", "Rattrapage", "Row 1 Col 5"],
            ],
        });

        generatedPdfFile.save();
    }

    return (
        <div className="relative p-5 rounded-lg shadow border border-slate-50">

            <button onClick={downloadHandler} className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 p-2 h-10 w-10 flex justify-center items-center rounded-full bg-slate-300"><FontAwesomeIcon icon={faDownload} className="text-white" /></button>

            <div className="text-sm text-slate-400">Créé en : {creationDateTime.getDay()}/{creationDateTime.getMonth()}/{creationDateTime.getFullYear()}</div>
            <h1 className="font-semibold">{label}</h1>

            <div>
                <h1>Hello, PDF!</h1>
                <p>This content will be exported to a PDF file.</p>
            </div>

        </div>
    );
}

export default EntEDocumentCard;