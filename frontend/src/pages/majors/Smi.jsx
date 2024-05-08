
import { useState } from "react";
import Mheader from "../../components/majorComponents/Mheader";
import SectionAlpha from "../../components/majorComponents/SectionAlpha";
import SectionBeta from "../../components/majorComponents/SectionBeta";


const Smi = () => {

    const objectifs = [
        <li>Développer les connaissances des étudiants en informatique fondamentale, mathématiques, physique, langues et communication</li>,
        <li>Préparer les étudiants, les plus méritants, de la licence SMI de poursuivre leur cursus de formation dans le cadre d’un master en informatique ou d’une école d’ingénieur</li>,
        <li>Préparer les étudiants à intégrer, avec succès la vie professionnelle dans les domaines correspondants à leur formation</li>
    ];
    const competences = [
        <li>Une base de connaissance  académique générale avec un ancrage disciplinaire pendant la première année </li>,
        <li>Des enseignements d’approfondissement des connaissances en informatique pendant la deuxième année sont dispensés</li>,
        <li>Une formation théorique et pratique spécifique dans un parcours choisi pendant la troisième année, ainsi qu’une acquisition de compétences en méthodologie et en entreprenariat</li>
    ];
    const opportunities=[
        <li>Poursuivre leurs études en Master ou écoles des ingénieurs.</li>,
        <li>Intégrer une autre filière au cours de la formation.</li>,
        <li>Accéder à l’emploi dans les différents secteurs où les mathématiques et l’informatique sont valorisées en tant qu’outils de savoir et savoir faire.</li>
    ];
    const conditions1=[
        <li>sciences mathématiques ou un diplôme reconnu équivalent, </li>,
        <li>sciences et techniques après étude du dossier.</li>
    ];
    const conditions2=[
        <li>Baccalauréat en sciences mathématiques </li>,
        <li>Baccalauréat en sciences et techniques avec une moyenne générale supérieure ou égale à 14/20.</li>
    ]

    



    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <Mheader formation="Licence" filiere="Filière Sciences Mathématiques et Informatique" 
                    slogan="Formez-vous aux technologies et aux compétences nécessaires pour réussir dans ce domaine passionnant."
                    image="https://cigma.org/assets/img/filieres/y9ugngux0d.svg"/>

            <section className="bg-zinc-200">
                <SectionAlpha objectifs={objectifs} competences={competences}/>
                <SectionBeta  image="https://cigma.org/assets/img/filieres/y9ugngux0d.svg" opportunities={opportunities} conditions1={conditions1} conditions2={conditions2} titre="Cette formation est destinée aux étudiants titulaires d’un baccalauréat en :"/>
                
            </section>
        </>
    );
};

export default Smi;
