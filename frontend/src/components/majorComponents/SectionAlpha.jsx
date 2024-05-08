const SectionAlpha = ({objectifs,competences}) => {
    return ( 

        
        <section className="section-alpha bg-white mx-14 py-14 px-14 flex justify-between mb-6">
            <div className="w-2/3 objectif-de-la-formation">
                <h1 className="text-3xl font-bold pb-6 pl-6">Objectifs de la formation</h1>
                <ul className="list-disc">
                    {objectifs}
                </ul>
                <h1 className="font-bold text-3xl pt-6 pb-6 px-6">Compétences à acquérir</h1>
                <ul className="list-disc">
                    {competences}
                </ul>
            </div>
            <div className="w-1/3 pt-20">
                <img src="https://cigma.org/assets/svg/formation-objectif.svg" alt="image" className="w-full h-auto"/>
            </div>
        </section>

    );
}
 
export default SectionAlpha;