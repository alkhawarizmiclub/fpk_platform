import { createContext, useContext, useState } from "react";
import EntStudentApi from "../api/EntStudentApi";
import generatePDF from "../pages/signupPage/signupPdfGenerator";

const SignUpContext = createContext({
    formData: {},
    // setFormData: () => { },
    currentStep: 1,
    // setCurrentStep: () => { },
    formErrorMessage: "",
    // setFormErrorMessage: () => { },
    handleInputChange: () => { },
    stepValidation: () => { },
    nextStep: () => { },
    prevStep: () => { },
    handleSubmit: () => { },
})


const SignUpContextProvider = ({ children }) => {

    const [formData, setFormData] = useState({
        firstName: 'First-name',
        lastName: 'Last-name',
        firstNameAr: 'الاسم الشخصي',
        lastNameAr: 'الاسم العائلي',
        birthDate: '1890-12-22',
        birthPlace: 'Utopia',
        gender: 'male',
        nationality: 'Marocain',
        studentId: 'F100200300',
        idNum: 'Q100200',
        idCardFile: null,
        email: 'test@test.com',
        phone: '0610203040',
        emergencyPhone: '0611223344',
        homeAddress: 'Khouribga',
        password: '12341234',
        passwordConfirmation: '12341234',
        major: '1',
        bacMajor: '',
        bacYear: '2020',
        bacGrade: '14.00',
        bacFile: null,
        gradeSheetsFile: null,
        studentPhotoFile: null,
    });

    const [currentStep, setCurrentStep] = useState(1);
    const [formErrorMessage, setFormErrorMessage] = useState("");

    const handleInputChange = (e) => {
        setFormErrorMessage('');

        const inputValue = e.target.type === "file" ? e.target.files[0] : e.target.value;

        setFormData((prevData) => ({
            ...prevData,
            [e.target.id]: inputValue,
        }));
    };

    const stepValidation = (step) => {

        switch (step) {

            case 1:
                return (
                    formData.firstName &&
                    formData.lastName &&
                    formData.firstNameAr &&
                    formData.lastNameAr &&
                    formData.birthDate &&
                    formData.birthPlace &&
                    formData.studentId &&
                    formData.nationality &&
                    formData.idNum
                );

            case 2:
                if (formData.email && formData.phone && formData.emergencyPhone && formData.homeAddress && formData.password) {
                    if (formData.password === formData.passwordConfirmation) {
                        return true;
                    } else {
                        setFormErrorMessage("Le mot de passe et la confirmation du mot de passe doivent être identiques");
                    }
                } else {
                    setFormErrorMessage("Il est obligatoire de remplir tous les champs");
                }
                return false;

            case 3:
                return (formData.major && formData.bacMajor && formData.bacYear && formData.bacGrade);

            case 4:
                if (formData.idCardFile && formData.bacFile && formData.gradeSheetsFile && formData.studentPhotoFile) {

                    if (!formData.idCardFile.type === "application/pdf") {
                        setFormErrorMessage('Le format de fichier du CIN/Passeport scanné doit être pdf.');
                        return false;
                    }

                    if (!formData.bacFile.type === "application/pdf") {
                        setFormErrorMessage('Le format de fichier du diplome de baccalauréat scanné doit être pdf.');
                        return false;
                    }

                    if (!formData.gradeSheetsFile.type === "application/pdf") {
                        setFormErrorMessage('Le format de fichier des relevés de notes scanné doit être pdf.');
                        return false;
                    }

                    if (!['image/jpeg', 'image/png'].includes(formData.studentPhotoFile.type)) {
                        setFormErrorMessage('Le format de fichier du CIN/Passeport scanné doit être pdf.');
                        return false;
                    }

                    return true;

                }
                setFormErrorMessage("Il est obligatoire de remplir tous les champs");
                return false;

            default:
                return false;
        }
    }

    const nextStep = (e) => {
        e.preventDefault();
        setFormErrorMessage('');

        if (stepValidation(currentStep)) {
            setCurrentStep(currentStep + 1);
            setFormErrorMessage('');
        }
    };

    const prevStep = () => {
        setFormErrorMessage('');

        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrorMessage('');

        if (stepValidation(currentStep)) {

            EntStudentApi.signup(formData)
                .then((response) => {
                    setCurrentStep(5);
                    generatePDF(formData);
                })
                .catch(({ response }) => {
                    setFormErrorMessage(response.data.message);
                })
                .finally(() => { })
        }
    };

    return (
        <SignUpContext.Provider value={{ formData, currentStep, formErrorMessage, handleInputChange, nextStep, prevStep, handleSubmit }}>
            {children}
        </SignUpContext.Provider>
    )
}

const useSignUpContext = () => useContext(SignUpContext);

export default SignUpContextProvider;
export { useSignUpContext }
