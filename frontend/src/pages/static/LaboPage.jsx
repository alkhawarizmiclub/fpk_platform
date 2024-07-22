import StaticPageContainer from "../../layouts/StaticPageContainer";
const labs = [
   
    
    {
      title: "Equipe Energie Renouvelable, Environnement et Développement (ERED)",
      director: "FPK",
      email: "contact@usms.ac.ma",
      phone: "99 00 44 33 12"
    },
    {
      title: "Informatique, Réseaux, Mobilité et Modélisation (IR2M)",
    
      director: "FPK",
      email: "personne@usms.ac.ma",
      phone: "99 68 12 55 77 ",
      institution: "FP Khouribga"
    },
    {
      title: " Management Industriel et Innovation (IMII)",
  
      director: "FPK",
      phone: "99 88 55 44 22",
      institution: "FP Khouribga"
    },
    {
      title: "Mathématiques, Informatique ",
    
      director: "FPK",
      email: "fpk@usms.ac.ma",
      institution: "FP Khouribga"
    },
    {
      title: "Mécanique, Informatique, Electronique et Télécommunications (MIET)",
      
      director: "FPK",
      email: "contact@usms.ac.ma",
      phone: "44 66 33 55 99",
      institution: "FP Khouribga"
    },
    {
      title: "Physico-chimie des Procédés et des Matériaux (PCPM)",
  
      director: "FPK",
      email: "contact@usms.ac.ma",
      phone: "88 66 33 44 12",
      institution: "FP Khouribga"
    },
    {
      title: "Rayonnement-Matière et Instrumentation (RMI)",
     
      director: "FPK",
      email: "contact@usms.ac.ma",
      phone: "00 44 55 66 77",
      institution: "FP Khouribga"
    },
    {
      title: "Recherche de Veille pour les Technologies Emergentes (VETE)",
    
      director: "FPK",
      email: "personne@usms.ac.ma",
      phone: "55 66 77 88 99",
      institution: "FP Khouribga"
    }
  ];
const LABO_PAGE = () => {
    return (
        <StaticPageContainer page_title="laboratoire">
 <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">LABORATOIRES DE RECHERCHE</h2>
            
            {labs.map((lab, index) => (
              <div key={index} className="mb-8">
                <h2 className="text-2xl font-semibold text-orange-600">
                <span >{lab.title}</span>
                </h2>
                <ul className="mt-2">
                
                  <li>Directeur du laboratoire : <span className="text-orange-500">{lab.director}</span></li>
                  <li>Email : <span className="text-blue-700">{lab.email}</span></li>
                  <li>Téléphone: <span>{lab.phone}</span></li>
                  {lab.institution && <li>Etablissement du laboratoire : <span className="text-orange-500">{lab.institution}</span></li>}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div>
          <aside className="bg-white p-4 rounded-lg shadow-lg">
            <img
              src="/fpk_logo.svg"
              alt="FPK"
              className="w-full"
            />
          </aside>
        </div>
      </div>
    </div>
        </StaticPageContainer>
    );
}
export default LABO_PAGE;