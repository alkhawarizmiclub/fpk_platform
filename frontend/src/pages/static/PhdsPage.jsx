import StaticPageContainer from "../../layouts/StaticPageContainer";
import React, { useState } from 'react';
const programs = [
    {
      title: 'Sciences, Innovation et Développement Durable',
      responsible: 'Pr. Noureddine BARKA',
      description: 
      <>
      <h2 className="text-xl font-semibold mb-2">Description sommaire</h2>
      <p>
        La formation doctorale « Sciences, Innovation et Développement Durable » vise à développer une recherche multidisciplinaire et translationnelle entre divers domaines scientifiques et techniques, notamment la chimie, la biologie, la géologie, la physique, les mathématiques, l’informatique, le génie des procédés, l’environnement, ainsi que dans les sciences de la pédagogie et de l’enseignement. Cette formation prône la pluridisciplinarité, la synergie et la complémentarité, non seulement entre ses équipes de recherche, mais également avec un ensemble de collaborateurs appartenant aux différentes structures de recherche nationales et internationales. Ceci favorise le développement d’une recherche polyvalente avec valeurs ajoutées pour son environnement socioéconomique.
      </p>

      <h2 className="text-xl font-semibold mb-2 mt-4">Domaines de recherche</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Sciences exactes et naturelles</h3>
        <ul className="list-disc pl-5">
          <li>Mathématiques</li>
          <li>Informatique et science de l’information</li>
          <li>Sciences physiques</li>
          <li>Sciences chimiques</li>
          <li>Sciences de la Terre et sciences connexes de l’environnement</li>
          <li>Sciences biologiques</li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Sciences de l’ingénieur et technologiques</h3>
        <ul className="list-disc pl-5">
          <li>Génie civil</li>
          <li>Génie électrique, électronique, ingénierie informationnelle</li>
          <li>Génie mécanique</li>
          <li>Génie chimique</li>
          <li>Génie des matériaux</li>
          <li>Ingénierie médicale</li>
          <li>Génie de l’environnement</li>
          <li>Biotechnologie environnementale</li>
          <li>Biotechnologie industrielle</li>
          <li>Nanotechnologies</li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold mb-2 mt-4">Prérequis scientifique et pédagogique</h2>
      <ul className="list-disc pl-5">
        <li>
          Diplôme de master ou tout diplôme reconnu équivalent dont les disciplines de la formation doctorale (sciences exactes et naturelles ou sciences de l’ingénieur et technologiques).
        </li>
        <li>
          Cursus universitaire en adéquation avec le profil demandé par la formation doctorale et le sujet de thèse.
        </li>
        <li>
          Bon niveau en compétences linguistiques (communication en français et en anglais).
        </li>
      </ul>
    </>
  
    },
    {
      title: 'Sciences Économiques et de Gestion',
      responsible: 'Pr. Nabil Amine BOUAYAD',
      description: (
        <>
          <h2 className="text-xl font-semibold mb-2">Description Sommaire</h2>
          <p>Les objectifs de cette formation doctorale sont multiples, il s’agit principalement de :</p>
          <ul className="list-disc pl-5 mb-4">
            <li>Contribuer à l’avancement de la recherche scientifique tant au niveau régional, national qu’international.</li>
            <li>Diffuser des résultats de recherche à travers des publications dans des revues à facteurs d’impacts élevés.</li>
            <li>Établir des coopérations scientifiques avec des institutions de recherche de renommées internationales.</li>
            <li>Créer une dynamique de la recherche fondamentale et appliquée dans notre université.</li>
            <li>Rendre actif le partenariat avec le milieu socio-professionnel.</li>
            <li>Organiser des journées d’études et de manifestations scientifiques (régionales, nationales et internationales) sur les thèmes développés au sein de la formation à partir de l’expérience acquise par chacun de ses membres.</li>
            <li>Offrir des formations complémentaires aux jeunes doctorants afin d’élargir et approfondir leurs connaissances.</li>
            <li>Former de jeunes doctorants qui pourront intégrer l’enseignement supérieur.</li>
          </ul>
          <h2 className="text-xl font-semibold mb-2">Axes Principaux de Recherche</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Axe 1 : Prévisions et Analyses et Économiques.</li>
            <li>Axe 2 : Économie et Management.</li>
            <li>Axe 3 : Entrepreneuriat et Dynamique Économique des Territoires et des Organisations.</li>
            <li>Axe 4 : Management, Finance et Économie Sociale.</li>
            <li>Axe 5 : Entreprise et Développement Local.</li>
            <li>Axe 6 : Management International en Techniques de Décision et en Logistique.</li>
            <li>Axe 7 : Entreprenariat et Management des Organisations.</li>
            <li>Axe 8 : Management, Finance et Audit des Organisations.</li>
            <li>Axe 9 : Économie Sociale et Solidaire.</li>
            <li>Axe 10 : Études Comptables et Fiscales.</li>
            <li>Axe 11 : Économie et Sociologie du Travail, Économie des institutions, marché du travail et choix publics.</li>
            <li>Axe 12 : Économie régionale de patrimoine et techniques quantitatives.</li>
            <li>Axe 13 : Entrepreneuriat et développement durable.</li>
            <li>Axe 14 : Management des Ressources Humaines et Ingénierie financière.</li>
            <li>Axe 15 : Démocratie participative et développement social local.</li>
            <li>Axe 16 : Sociologie et Management des organisations.</li>
            <li>Axe 17 : Économie sociale appliquée et environnement vert durable.</li>
            <li>Axe 18 : Finance participative et locale.</li>
            <li>Axe 19 : Économie de développement et Justice sociale.</li>
          </ul>
          <h2 className="text-xl font-semibold mb-2">Prérequis Scientifique et Pédagogique</h2>
          <p>L’ensemble des éléments nécessaires et suffisants pour aborder un sujet de thèse dans la spécialité sollicitée et participer aux différentes activités scientifiques.</p>
        </>
      )
    },
    {
      title: 'Espace, Société et Langues',
      responsible: 'Pr. Said SGHIR',
      description: (
        <>
          <h2 className="text-xl font-semibold mb-2">Description Sommaire</h2>
          <p className="mb-4">
            La formation doctorale (Espace, Société et langues) vise à former des docteurs en Géographie ainsi qu’en littérature et langues. Elle s’intéresse à une large variété de problématiques concernant les territoires et les langues et leurs relations avec la vie humaine en général allant du diagnostic au développement. L’idée de la mise en œuvre d’un développement durable cabale d’une part à garantir un développement socio-économique et d’autre part garantir la promotion des langues et de la communication. Les doctorants auront pour ambition de mener des études théoriques qui doivent constituer par la suite une base pour toute proposition pratique.
          </p>

          <h2 className="text-xl font-semibold mb-2">Axes Principaux de Recherche</h2>
          <ul className="list-disc pl-5 mb-4">
            <li>Aménagement des espaces urbains, ruraux et forestiers</li>
            <li>Régionalisation et développement local</li>
            <li>Géopolitique urbaine</li>
            <li>Écotourisme et gestion des ressources naturelles</li>
            <li>Hydrologie des bassins versants et ressources en eau</li>
            <li>Changements climatiques et les ilots de chaleur urbains</li>
            <li>Impacts des changements climatiques sur le littoral</li>
            <li>Systèmes d’information géographique et télédétection</li>
            <li>الجفاف واختيارات الفلاحين الرعي</li>
            <li>زراعية بالمناطق شبه الجافة</li>
            <li>الأنظمة العقارية وأشكال الاستغلال الفلاحي بالمغرب</li>
            <li>دينامية المجال الغابي في علاقته بالضغط البشري</li>
            <li>الإرث الغابي والتنمية المستدامة للموارد الطبيعية</li>
            <li>حماية الأصناف الغابية النادرة بجبال الأطلس والريف</li>
            <li>تقييم مشاريع التهيئة بالمنتزهات الوطنية والمناطق الرطبة والمواقع ذات الأهمية الإيكولوجية والبيولوجية</li>
            <li>دينامية النظام الفلاحي بالبيئات شبه الجافة</li>
            <li>الاقتصاد الغابي</li>
            <li>الجغرافيا السياسية وأزمة التواصل</li>
            <li>الجغرافيا والهوية ومنظومة القيم</li>
            <li>الجغرافيا الثقافية وصراع الإيديولوجيات</li>
            <li>اللسانيات والتنمية</li>
            <li>اللسانيات التوليدية</li>
            <li>المعجمية</li>
            <li>الدلالة</li>
            <li>المصطلحية (المصطلح الجغرافي بين العربية المغربية والعربية المعيار…)</li>
            <li>Aménagement linguistique التهيئة اللغوية</li>
            <li>Langue et espace urbain/ citadin</li>
            <li>Géographie des langues, Géographie culturelle et Géographie littéraire</li>
            <li>Langue, territoire et patrimoine</li>
            <li>Régiolecte/ Géolecte de Khouribga</li>
            <li>Espace réel et espace virtuel</li>
            <li>Géographie et communication à l’ère digital</li>
          </ul>

          <h2 className="text-xl font-semibold mb-2">Prérequis Scientifique et Pédagogique</h2>
          <p className="mb-4">
            Diplôme de master ou tout diplôme reconnu équivalent en Géographie, Aménagement du territoire, Sciences économiques, sciences de la vie et de la terre, Langues et littérature, sociologie.
            Compétences scientifiques en analyse en géographie, cartographie, statistiques, maîtrise des langues, bonnes connaissances en littérature.
          </p>
        </>
      )
    }
  ];
const PHDS_PAGE = () => {
    const [activeProgram, setActiveProgram] = useState(null);
    return (
<StaticPageContainer page_title="Doctorales">

<div className="container mx-auto p-6">
      {/* Sidebar */}
      <nav className="bg-gray-800 text-white p-4 rounded mb-6">
     
      <ul className="flex space-x-4">
          {programs.map((program, index) => (
            <li
              key={index}
              className={`py-2 px-4 rounded ${activeProgram === index ? 'bg-gray-600' : 'bg-gray-800 hover:bg-gray-600'}`}
              onClick={() => setActiveProgram(index)}
            >
              {program.title}
            </li>
          ))}
        </ul>
      </nav>

      {/* Content */}
      <div className="w-3/4 p-6">
        {activeProgram !== null && (
          <div>
            <h1 className="text-2xl font-bold mb-4">{programs[activeProgram].title}</h1>
            <h2 className="text-xl font-semibold mb-2">Responsable :</h2>
            <p className="mb-4">{programs[activeProgram].responsible}</p>
           
            <p>{programs[activeProgram].description}</p>
          </div>
        )}
      </div>
    </div>
</StaticPageContainer>
    );
}
export default PHDS_PAGE;