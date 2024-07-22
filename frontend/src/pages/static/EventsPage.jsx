import StaticPageContainer from "../../layouts/StaticPageContainer";

const events = [
    {
      id: 6782,
      title: "I2CEAI 2024 – 1st International Conference on Computer Engineering and Artificial Intelligence",
      date: "mercredi 29/05/2024",
      updated: "vendredi 21/06/2024",
      author: "morad",
      imgSrc: "https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2024/05/annonce-khouribga3_page-0001-e1716973379890.jpg?resize=240%2C172",
      description: "We are pleased to invite academics and business community to share their works in the I2CEAI 2024 – 1st International Conference on Computer Engineering and Artificial Intelligence. I2CEAI is a scientific and technical event, aimed at presenting and discussing the latest novelties, new perspectives, experiences, and innovations in the fields of Artificial Intelligence and Computer Science.",
      link: "http://www.fpk.ac.ma/posts/6782",
      categories: ["Evénements", "Général"]
    },
    {
      id: 6768,
      title: "ندوة وطنية: تدريسية علوم اللغة العربية وآداهبا: إشكاالت الواقع وآفاق املستقبل",
      date: "samedi 25/05/2024",
      updated: "samedi 25/05/2024",
      author: "NOUREDDINE BARKA",
      imgSrc: "https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2024/05/واجهة-ندوة-تدريسية-علوم-اللغة.jpg?resize=240%2C172",
      description: "",
      link: "http://www.fpk.ac.ma/posts/6768",
      categories: ["Evénements", "Général"]
    },
    {
      id: 6765,
      title: "Conférence: Territoire, habitat, architecture et patrimoine dans le plateau des Phosphates du Maroc",
      date: "samedi 25/05/2024",
      updated: "samedi 25/05/2024",
      author: "NOUREDDINE BARKA",
      imgSrc: "https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2024/05/Affiche-FPK-Lundi-27-mai-2024-scaled.jpg?resize=240%2C172",
      description: "La Faculté Polydisciplinaire de Khouribga organise le lundi 27 mai à 14h30, une conférence intitulée : Territoire, habitat, architecture et patrimoine dans le plateau des Phosphates du Maroc. Cette conférence sera animée par madame Annalisa Trentin, professeur de design architectural et urbain à l’Université de Bologne en Italie. En marge de cette conférence, un atelier sera également animé par des étudiantes de la même université.",
      link: "http://www.fpk.ac.ma/posts/6765",
      categories: ["Evénements", "Général"]
    },
    {
      id: 6646,
      title: "Formation en Soft Skills de recherche FD SEG",
      date: "lundi 13/05/2024",
      updated: "mercredi 05/06/2024",
      author: "NOUREDDINE BARKA",
      imgSrc: "https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2024/05/Soft-Skills-recherche-doctorale-scaled.jpg?resize=240%2C172",
      description: "Le laboratoire SEG organise le jeudi 06 juin 2024 une formation en Soft Skills pour le compte des doctorants inscrits à la formation doctorale SEG de la FPK et ceux des laboratoires de l’ENCG et de la FEG à l’amphi 6 à partir de 10h00. Pr. Chahboune",
      link: "http://www.fpk.ac.ma/posts/6646",
      categories: ["Doctorat", "Evénements"]
    },
    {
      id: 6543,
      title: "Formation en méthodologie de recherche FD SEG",
      date: "mardi 30/04/2024",
      updated: "mardi 30/04/2024",
      author: "NOUREDDINE BARKA",
      imgSrc: "https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2024/04/Formation-Methodologie-SEG.jpg?resize=240%2C172",
      description: "Le laboratoire SEG organise le vendredi 17 mai 2024 une formation en méthodologie de recherche scientifique pour le compte des doctorants inscrits à la formation doctorale SEG de la FPK et ceux des laboratoires de l’ENCG et de la FEG.",
      link: "http://www.fpk.ac.ma/posts/6543",
      categories: ["Doctorat", "Evénements"]
    }
  ];
const EVENEMENT_PAGE = () => {
    return (

        <StaticPageContainer page_title="Nos Evenement "> 
        <div className="container mx-auto p-6">
     
      <main>
        {events.map(event => (
          <article key={event.id} className="mb-6 p-4 bg-white shadow rounded-lg">
            <header className="mb-4">
              <h2 className="text-2xl font-bold">
                <a href={event.link} className="hover:underline">{event.title}</a>
              </h2>
              <div className="flex items-center text-gray-600 text-sm mt-2">
                <span className="mr-2"><i className="fa fa-calendar"></i> {event.date}</span>
                <span><i className="fa fa-user"></i> {event.author}</span>
              </div>
            </header>
            <div className="mb-4">
              <a href={event.link} title={event.title}>
                <img src={event.imgSrc} alt={event.title} className="w-60 h-40 object-cover rounded" />
              </a>
            </div>
            <div className="text-gray-700 mb-4">
              <p>{event.description}</p>
              <a href={event.link} className="text-blue-500 hover:underline">Lire la suite</a>
            </div>
            <footer className="text-gray-600 text-sm">
              <div>
                {event.categories.map(category => (
                  <span key={category} className="mr-2">
                    <a href="#" className="hover:underline">{category}</a>
                  </span>
                ))}
              </div>
            </footer>
          </article>
        ))}
      </main>
    </div>
        
        </StaticPageContainer>
    );
}

export default EVENEMENT_PAGE;