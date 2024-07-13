import StaticPageContainer from "../../layouts/StaticPageContainer";

const DeanWordPage = () => {
    return (
        <StaticPageContainer page_title="Mot du Doyen">
             <section className="bg-gray-100 py-10">
      <div className="container mx-auto">
        <div className="flex flex-wrap">
          {/* Image Section */}
          <div className="w-full lg:w-1/3 px-4">
            <div className="bg-white rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2023/02/doyen-scaled.jpg?w=640"
                alt="Doyen"
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Text Section */}
          <div className="w-full lg:w-2/3 px-4 flex flex-col justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4">Mot du Doyen</h3>
              <p className="text-gray-700 mb-4">
                Bienvenue à tous les étudiants, professeurs et membres du
                personnel. Nous sommes ravis de vous accueillir dans notre
                communauté académique. Ensemble, nous visons l'excellence et la
                réussite.
              </p>
              <p className="text-gray-700">
                Nous espérons que vous trouverez votre temps ici enrichissant et
                stimulant. Nous sommes impatients de voir vos contributions et
                vos réalisations. Bonne chance et bon travail à tous!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </StaticPageContainer>
    );
}

export default DeanWordPage;