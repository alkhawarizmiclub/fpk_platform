import { useState } from "react";
import Mheader from "../../components/majorComponents/Mheader";
import SectionAlpha from "../../components/majorComponents/SectionAlpha";
import SectionBeta from "../../components/majorComponents/SectionBeta";
import smp from "../../../public/smp.png";


const Smp = () => {

    const objectifs = [
        <li key="obj1">
        Assurer aux étudiants une formation pluridisciplinaire, à dominance Mathématiques axée sur les aspects théoriques et fondamentaux des Mathématiques et sur les applications de l’outil informatique au profit des Mathématiques Appliquées et de la physique.</li>,
        <li key="obj2">Donner à l’étudiant les méthodes de travail et les outils de base afin d’acquérir des connaissances scientifiques lui permettant d’élargir ses champs de compétence.</li>,
        <li key="obj3">Développer chez l’étudiant un esprit de rigueur, d’initiative et de volonté d’apprentissage et de recherche.</li>,
        <li key="obj4">Susciter l’étudiant à poursuivre ses études en Master ou dans des écoles d’ingénieurs ou de s’insérer dans la vie active </li>
    ];
    const competences = [
        <li key="comp1">Acquérir des connaissances scientifiques  fondamentales en mathématiques (de S1 à S3) en s’appuyant sur des applications concrètes venant de la physique ou autre domaine en utilisant l’informatique pour traiter ses applications (de S3 à S6).</li>,
        <li key="comp2">Acquérir un esprit d’ouverture sur plusieurs domaines et un esprit d’initiative pour aborder des enseignements spécialisés et appliqués en Master ou écoles d’ingénieurs.</li>,       
        <li key="comp3">Acquérir l’ouverture pratique souhaitable pour intégrer la vie professionnelle.</li>
    ];
    const opportunities=[
        <li>Poursuite des études en Master</li>,
        <li>Intégration des écoles d’ingénieurs</li>,
        <li>Accès à d’autres filières en cours de formation</li>,
        <li>Insertion dans la vie active</li>
    ];
    const conditions1=[
        <p>Sont autorisés à s’inscrire en troisième semestre S3 les étudiants : <br /> </p>,
        <li>ayant validé  les deux premiers semestres S1 et S2 de la filière Sciences Mathématiques et Informatique (SMI)</li>,
        <li> ayant réussi la première année des classes préparatoire « Mathématiques, Physique et Sciences industrielles » (MPSI) ou « Physique, Chimie et Sciences industrielles » (PCSI) d’un établissement publique marocain.</li>
    ];
    const conditions2=[
        <p>La filière Sciences Mathématiques et Applications est ouverte aux bacheliers scientifiques </p>,
        <li>Sciences mathématiques ou d’un diplôme reconnu équivalent : accès direct</li>,
        <li> Sciences physiques ou d’un diplôme reconnu équivalent avec étude du dossier scolaire du candidat.</li>
    ]

    



    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <Mheader formation="Licence" filiere="Filière Sciences Mathématiques et Application" 
                    slogan="Explorez les applications pratiques des mathématiques à travers notre programme, vous préparant ainsi à résoudre les défis concrets du monde moderne."
                    image = {smp}
            />
            <section className="bg-zinc-200">
                <SectionAlpha objectifs={objectifs} competences={competences}/>
                <SectionBeta  image={smp} opportunities={opportunities} conditions1={conditions1} conditions2={conditions2} titre="Accès par passerelles"/>
                
            </section>
        </>
    );
};

export default Smp;
