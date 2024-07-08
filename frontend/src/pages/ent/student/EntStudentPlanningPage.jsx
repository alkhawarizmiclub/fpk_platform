import { useEffect, useState } from "react";
import EntStudentApi from "../../../api/EntStudentApi";
import EntPageContainer from "../../../components/ent/EntPageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload, faSpinner } from "@fortawesome/free-solid-svg-icons";

const EntStudentPlanningPage = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [pdfFilePath, setPdfFilePath] = useState("");
    const [pdfFilename, setPdfFilename] = useState("");

    useEffect(() => {
        setIsLoading(true);

        EntStudentApi.getPlanningPDF()
            .then((response) => {
                setPdfFilePath(response.data.url);
                const parts = pdfFilePath.split('/');
                setPdfFilename(parts[parts.length - 1]);
            })
            .catch(() => {
                // TODO: Add error handling
            })
            .finally(() => {
                setIsLoading(false);
            });

    }, []);

    return (
        <EntPageContainer title="Planning">

            {isLoading ? (

                <div className="text-center"><FontAwesomeIcon icon={faSpinner} className="text-lg loader" /></div>

            ) : (

                <div className="flex flex-col gap-5">
                    <p className="text-center">Si vous ne voyez pas le fichier, veuillez le télécharger en cliquant sur le bouton suivant : <a href={pdfFilePath} download={pdfFilename} target="_blank" rel="noreferrer" className="p-3 rounded-lg text-white font-semibold bg-slate-600 hover:bg-slate-500 transition-colors duration-default"><FontAwesomeIcon icon={faDownload} /> Télécharger</a></p>

                    <div className="rounded-lg overflow-hidden">
                        <object data={pdfFilePath} type="application/pdf" className="w-full aspect-video">
                            <p className="text-center">Si vous ne voyez pas le fichier, veuillez le télécharger en cliquant sur le bouton suivant : <a href={pdfFilePath} download={pdfFilename} target="_blank" rel="noreferrer" className="p-3 rounded-lg text-white font-semibold bg-slate-600 hover:bg-slate-500 transition-colors duration-default"><FontAwesomeIcon icon={faDownload} /> Télécharger</a></p>
                        </object>
                    </div>
                </div >

            )}

        </EntPageContainer >
    );

}

export default EntStudentPlanningPage;