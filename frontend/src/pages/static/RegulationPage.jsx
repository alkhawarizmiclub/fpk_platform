import StaticPageContainer from "../../layouts/StaticPageContainer";

    const regulations = [
      {
        title: 'Réglement Intérieur',
        description: 'Réglement intérieur de la faculté polydisciplinaire de Khouribga',
        icon: 'fas fa-book',
        link: 'reg_inter .pdf',
        image: 'fpk_logo.svg', // Add the path to the image
      },
      {
        title: 'CNP Licence',
        description: 'Cahier des normes pédagogiques Licence',
        icon: 'fas fa-book',
        link: 'CNP-Licence.pdf',
        image: 'fpk_logo.svg',
      },
      {
        title: 'CNP Master',
        description: 'Cahier des normes pédagogiques Master',
        icon: 'fas fa-book',
        link: 'CNP-Master.pdf',
        image: 'fpk_logo.svg',
      },
      {
        title: 'Mesures et consignes relatives aux examens',
        description: 'Mesures et consignes relatives aux examens',
        icon: 'fas fa-book',
        link: 'Consignes.pdf',
        image: 'fpk_logo.svg',
      },
      {
        title: 'Loi 01-00',
        description: 'Loi 01-00 organisant le secteur de l’enseignement supérieur et de la recherche scientifique',
        icon: 'fas fa-book',
        link: 'loi.pdf',
        image: 'fpk_logo.svg',
      },
      {
        title: 'Loi relatif au conseil de discipline',
        description: 'Loi et Décret relatif au conseil de discipline concernant les étudiants',
        icon: 'fas fa-desktop',
        link: 'la loi.pdf',
        image: 'fpk_logo.svg',
      },
    ];

const RegulationPage = () => {
    return (
        <StaticPageContainer page_title="Réglementation">
           <div className="flex flex-col items-center justify-center py-12 px-4 bg-gray-100">
     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {regulations.map((reg, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
            <div className="text-4xl text-blue-500 mb-4">
              <i className={reg.icon}></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">{reg.title}</h3>
            <a href={reg.link} target="_blank" rel="noopener noreferrer">
              <div className="border-4 border-gray-200 p-4"> {/* Adjusted padding for larger frame */}
                <img src={reg.image} alt={reg.title} className="w-60 h-35 object-cover mb-4 transition" /> {/* Increased width and height */}
              </div>
            </a>
            <p className="text-gray-600 mt-4 text-center">{reg.description}</p>
          </div>
        ))}
      </div>
    </div>
        </StaticPageContainer>
    );
}

export default RegulationPage;