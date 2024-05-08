import { useState } from "react";
import sma from "../../../public/sma.png";

const SectionBeta = ({opportunities,conditions1,conditions2,titre,image}) => {
    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    

    return ( 

        <section>

                    <nav className="bg-white mx-14 py-4 px-6 flex justify-between mb-3">
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
                                        {opportunities}
                                    </ul>
                            
                                
                            </div>
                            <div className="">
                                <img src={image} alt="Image of Major" className="w-96 h-auto" />
                            </div>
                        </section>
                    )}
                    {activeTab === 2 && (
                        <section className="section-beta bg-white mx-14 py-14 px-14 flex justify-between mb-6">
                            <div className="flex-1 mr-10">
                                <h1 className=" text-3xl font-bold pl-24 mb-14">CONDITIONS D’ADMISSION</h1>
                                <div>
                                    <h1 className=" text-xl font-semibold hover:font-bold mb-2 ">{titre}</h1>
                                    
                                        {conditions1}
                                    
                                </div>
                                <div className="mt-2">
                                    <h1 className=" text-xl font-semibold hover:font-bold mb-2 ">Diplômes requis :</h1>
                                    
                                        {conditions2}
                                    
                                </div>
                                
                            </div>
                            <div className="">
                                <img src={image} alt="Image of Major" className="w-96 h-auto" />
                            </div>
                        </section>
                    )}
                    {activeTab === 3 && (
                        <section className="section-delta bg-white mx-14 py-14 px-14 flex justify-between mb-6">
                            {/* code */}
                        </section>
                    )}

                </section>

    );
}
 
export default SectionBeta;