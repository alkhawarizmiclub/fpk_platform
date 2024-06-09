import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import jsPDF from 'jspdf';

const EntEDocumentCard = ({ label, creationDateTime, type, data }) => {

    const downloadHandler = () => {
        const doc = new jsPDF();

        // Set the title
        doc.setFontSize(22);
        doc.text(label, 10, 20);

        // Set the description
        doc.setFontSize(16);
        doc.text("This is a description for my PDF file.", 10, 30);

        // Save the PDF
        doc.save('download.pdf');
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