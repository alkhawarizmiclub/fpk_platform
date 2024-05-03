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
import Navbar from "../../components/Navbar";

const Seg = () => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    return (
        <>
            <section className="bg-sky-700 py-16 px-20 flex items-center justify-between">
                <div className="flex-1 mr-10">
                    <h1 className="text-white text-3xl">Licence</h1>
                    <h1 className="text-white text-4xl font-bold mb-5">Filière Sciences Mathématiques <br /> et Informatique</h1>
                    <p className="text-white text-lg">Formez-vous aux technologies et aux compétences nécessaires <br /> pour réussir dans ce domaine passionnant.</p>
                    <a href="#" className="inline-block mt-5 px-8 py-3 bg-orange-400 text-white rounded-lg font-semibold hover:bg-orange-500 transition duration-300">Inscrivez-vous</a>
                </div>
                <div className="">
                    <img src="https://cigma.org/assets/img/filieres/y9ugngux0d.svg" alt="Image of Major" className="w-96 h-auto" />
                </div>
            </section>

            <section className="bg-zinc-200">
                <section className="section-alpha bg-white mx-14 py-14 px-14 flex justify-between mb-6">
                    {/* Replicate content of section-alpha here */}
                    <div className="w-2/3 objectif-de-la-formation">
                        <h1 className="text-3xl font-bold pb-6 pl-6">Objectifs de la formation</h1>
                        <ul className="list-disc">
                            <li>Développer les connaissances des étudiants en informatique fondamentale, mathématiques, physique, langues et communication</li>
                            <li>Préparer les étudiants, les plus méritants, de la licence SMI de poursuivre leur cursus de formation dans le cadre d’un master en informatique ou d’une école d’ingénieur</li>
                            <li>Préparer les étudiants à intégrer, avec succès la vie professionnelle dans les domaines correspondants à leur formation</li>
                        </ul>
                        <h1 className="font-bold text-3xl pt-6 pb-6 px-6">Compétences à acquérir</h1>
                        <ul className="list-disc">
                            <li>Une base de connaissance  académique générale avec un ancrage disciplinaire pendant la première année </li>
                            <li>Des enseignements d’approfondissement des connaissances en informatique pendant la deuxième année sont dispensés</li>
                            <li>Une formation théorique et pratique spécifique dans un parcours choisi pendant la troisième année, ainsi qu’une acquisition de compétences en méthodologie et en entreprenariat</li>
                        </ul>
                    </div>
                    <div className="w-1/3 pt-20">
                        <img src="https://cigma.org/assets/svg/formation-objectif.svg" alt="image" className="w-full h-auto"/>
                    </div>
                </section>

                <nav className="bg-white mx-14 py-4 px-6 flex justify-between ">
                    <button
                        className={`focus:outline-none ${
                            activeTab === 1 ? "border-b-2 border-blue-500" : ""
                        }`}
                        onClick={() => handleTabClick(1)}
                    >
                        Débouchés de la formation
                    </button>
                    <button
                        className={`focus:outline-none ${
                            activeTab === 2 ? "border-b-2 border-blue-500" : ""
                        }`}
                        onClick={() => handleTabClick(2)}
                    >
                        Conditions d’accès
                    </button>
                    <button
                        className={`focus:outline-none ${
                            activeTab === 3 ? "border-b-2 border-blue-500" : ""
                        }`}
                        onClick={() => handleTabClick(3)}
                    >
                        Achraf Suck
                    </button>
                </nav>

                {activeTab === 1 && (
                    <section className="section-alpha bg-white mx-14 py-14 px-14 flex justify-between mb-6">
                         <div className="flex-1 mr-10">
                            <h1 className=" text-3xl font-bold pl-24 mb-14">Débouchés de la formation</h1>
                            
                                <ul className="list-disc">
                                    <li>Poursuivre leurs études en Master ou écoles des ingénieurs.</li>
                                    <li>Intégrer une autre filière au cours de la formation.</li>
                                    <li>Accéder à l’emploi dans les différents secteurs où les mathématiques et l’informatique sont valorisées en tant qu’outils de savoir et savoir faire.</li>
                                </ul>
                          
                            
                        </div>
                        <div className="">
                            <img src="https://cigma.org/assets/img/filieres/y9ugngux0d.svg" alt="Image of Major" className="w-96 h-auto" />
                        </div>
                    </section>
                )}
                {activeTab === 2 && (
                    <section className="section-alpha bg-white mx-14 py-14 px-14 flex justify-between mb-6">
                        <div className="flex-1 mr-10">
                            <h1 className=" text-3xl font-bold pl-24 mb-14">CONDITIONS D’ADMISSION</h1>
                            <div>
                                <h1 className=" text-xl font-semibold hover:font-bold mb-2 ">Cette formation est destinée aux étudiants titulaires d’un baccalauréat en :</h1>
                                <ul>
                                    <li>– sciences mathématiques ou un diplôme reconnu équivalent.</li>
                                    <li>– sciences et techniques après étude du dossier.</li>
                                </ul>
                            </div>
                            <div className="mt-2">
                                <h1 className=" text-xl font-semibold hover:font-bold mb-2 ">Diplômes requis :</h1>
                                <ul>
                                    <li>– Baccalauréat en sciences mathématiques.</li>
                                    <li>– Baccalauréat en sciences et techniques avec une moyenne générale supérieure ou égale    à 14/20.</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="">
                            <img src="https://cigma.org/assets/img/filieres/y9ugngux0d.svg" alt="Image of Major" className="w-96 h-auto" />
                        </div>
                    </section>
                )}
                {activeTab === 3 && (
                    <section className="section-alpha bg-white mx-14 py-14 px-14 flex justify-between mb-6">
                        {/* Replicate content of section-alpha here */}
                    </section>
                )}
            </section>
        </>
    );
};

export default Seg;
