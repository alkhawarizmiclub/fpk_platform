import { useSignUpContext } from "../../contexts/signUpContext";
import generatePDF from "./signupPdfGenerator";

const SignUpStep5 = () => {

    const { formData } = useSignUpContext();

    return (
        <div className='text-center'>
            <p>Félicitations, vous avez postulé avec succès à la Faculté Polydisciplinaire de Khouribga.</p>
            <p>Si le téléchargement du document de candidature a commencé automatiquement, veuillez <a href='#' onClick={() => generatePDF(formData)} className='text-orange-400'>cliquer ici</a> pour le faire manuellement.</p>
        </div>
    );
}

export default SignUpStep5;