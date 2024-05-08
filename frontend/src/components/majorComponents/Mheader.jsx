
const Mheader = ({formation,filiere,slogan,image}) => {
    return ( 
        <>
            <section className="bg-sky-700  h-90 py-16 px-20 flex items-center justify-between">
                <div className="flex-1 mr-10">
                    <h1 className="text-white text-3xl">{formation}</h1>
                    <h1 className="text-white text-4xl font-bold mb-5">{filiere}</h1>
                    <p className="text-white text-lg">{slogan}</p>
                    <a href="#" className="inline-block mt-5 px-8 py-3 bg-orange-400 text-white rounded-lg font-semibold hover:bg-orange-500 transition duration-300">Inscrivez-vous</a>
                </div>
                <div className="">
                    <img src={image} alt="Image of Major" className="w-96 h-auto" />
                </div>
            </section>

           
        </>
    );
}
 
export default Mheader;