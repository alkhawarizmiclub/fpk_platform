// import Navbar from "../../components/Navbar";

// const Smi = () => {
//     return (
//         <>
//             <Navbar />
//             <section className="bg-sky-700 py-16 px-20 flex items-center justify-between">
//                 <div className="flex-1 mr-10">
//                     <h1 className="text-white text-3xl">Licence</h1>
//                     <h1 className="text-white text-4xl font-bold mb-5">Filière Sciences Mathématiques <br /> et Informatique</h1>
//                     <p className="text-white text-lg">Formez-vous aux technologies et aux compétences nécessaires <br /> pour réussir dans ce domaine passionnant.</p>
//                     <a href="#" className="inline-block mt-5 px-8 py-3 bg-orange-400 text-white rounded-lg font-semibold hover:bg-orange-500 transition duration-300">Inscrivez-vous</a>
//                 </div>
//                 <div className="">
//                     <img src="https://cigma.org/assets/img/filieres/y9ugngux0d.svg" alt="Image of Major" className="w-96 h-auto" />
//                 </div>
//             </section>

//             <section className="bg-zinc-200  ">
//                 <section className="section-alpha bg-white mx-14 py-14 px-14 flex justify-between mb-10">

//                     <div className="w-2/3 objectif-de-la-formation">
//                         <h1 className="text-3xl font-bold pb-6 pl-6">Objectifs de la formation</h1>
//                         <ul className="list-disc">
//                             <li>Développer les connaissances des étudiants en informatique fondamentale, mathématiques, physique, langues et communication</li>
//                             <li>Préparer les étudiants, les plus méritants, de la licence SMI de poursuivre leur cursus de formation dans le cadre d’un master en informatique ou d’une école d’ingénieur</li>
//                             <li>Préparer les étudiants à intégrer, avec succès la vie professionnelle dans les domaines correspondants à leur formation</li>
//                         </ul>
                        
                        
                      

//                         <h1 className="font-bold text-3xl pt-6 pb-6 px-6">Compétences à acquérir</h1>
//                         <ul className="list-disc">
//                             <li>Une base de connaissance  académique générale avec un ancrage disciplinaire pendant la première année </li>
//                             <li>Des enseignements d’approfondissement des connaissances en informatique pendant la deuxième année sont dispensés</li>
//                             <li>Une formation théorique et pratique spécifique dans un parcours choisi pendant la troisième année, ainsi qu’une acquisition de compétences en méthodologie et en entreprenariat</li>
//                         </ul>
//                     </div>

//                     <div className="w-1/3 pt-20">
//                         <img src="https://cigma.org/assets/svg/formation-objectif.svg" alt="image" className="w-full h-auto"/>
//                     </div>

//                 </section>

//                 <section className="section-beta bg-white mx-14 py-14 px-14 flex justify-between mb-6">
//                     <p>good</p>
//                 </section>
//             </section>
            
//         </>
//     );
// }

// export default Smi;


import { useState } from "react";
import Mheader from "../../components/majorComponents/Mheader";
import SectionAlpha from "../../components/majorComponents/SectionAlpha";
import SectionBeta from "../../components/majorComponents/SectionBeta";
import sma from "../../../public/sma.png";


const Sma = () => {

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
                    image = {sma}
                    
            />
            <section className="bg-zinc-200">
                <SectionAlpha objectifs={objectifs} competences={competences}/>
                <SectionBeta  image={sma} opportunities={opportunities} conditions1={conditions1} conditions2={conditions2} titre="Accès par passerelles"/>
                
            </section>
        </>
    );
};

export default Sma;
