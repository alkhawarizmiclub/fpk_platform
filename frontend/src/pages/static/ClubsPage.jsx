import StaticPageContainer from "../../layouts/StaticPageContainer";

const CLUBS_PAGE = () => {
    return (
        <StaticPageContainer page_title="Nos Clubs ">

<section id="section-b0d8d015-35fd-4981-98e7-d801a9357ebb" className="bg-gray-100 py-12">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                   <a href="https://www.example.com/">   <img
                            src="/club_logo.svg"
                            alt="Al Khawarizmi Club"
                            className="w-full h-75 object-cover"
                            
                        />
                        </a> 
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold mb-2">Al Khawarizmi Club</h3>
                        </div>
                    </div>

                   

                    {/* Deuxième club */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/enactus.jpg"
                            alt="ENACTUS"
                            className="w-full h-75 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold mb-2">ENACTUS</h3>
                        </div>
                    </div>

                    {/* Troisième club */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/ib.jpg"
                            alt="نادي الخط والإبداع"
                            className="w-full h-75 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold mb-2">نادي الخط والإبداع</h3>
                        </div>
                    </div>

                    {/* Quatrième club */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/orat.jpeg"
                            alt="ORATORS FOR LIFE"
                            className="w-full h-75 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold mb-2">ORATORS FOR LIFE</h3>
                        </div>
                    </div>

                    {/* Cinquième club */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/jim.jpg"
                            alt="JLM CLUB"
                            className="w-full h-90 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold mb-2">JLM CLUB</h3>
                        </div>
                    </div>

                    {/* Sixième club */}
                    <div className="bg-white rounded-lg overflow-hidden shadow-md">
                        <img
                            src="/alfia.png"
                            alt="نادي الألفية الثالثة"
                            className="w-full h-75 object-cover"
                        />
                        <div className="p-4 text-center">
                            <h3 className="text-xl font-bold mb-2">نادي الألفية الثالثة</h3>
                        </div>
                    </div>

                 
                   
                </div>
            </div>
        </section>
            </StaticPageContainer>
    );
}
 
export default CLUBS_PAGE;