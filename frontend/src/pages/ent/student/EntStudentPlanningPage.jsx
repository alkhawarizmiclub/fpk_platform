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
                    <div className="rounded-lg overflow-hidden">
                        <object data={pdfFilePath} type="application/pdf" className="mx-auto w-full max-w-screen-xl aspect-video rounded-lg">

                            <div className="flex justify-center items-center gap-2 aspect-video bg-gray-100">
                                <span>Si vous ne voyez pas le fichier, veuillez le télécharger en cliquant sur le bouton suivant :</span>

                                <a href={pdfFilePath} download={pdfFilename} target="_blank" rel="noreferrer" className="p-3 inline-block flex justify-center items-center gap-2 rounded-lg text-white font-semibold bg-slate-600 hover:bg-slate-500 transition-colors duration-default">
                                    <FontAwesomeIcon icon={faDownload} />
                                    <span>Télécharger</span>
                                </a>
                            </div>

                        </object>
                    </div>
                </div>

            )}

        </EntPageContainer >
    );

}

export default EntStudentPlanningPage;