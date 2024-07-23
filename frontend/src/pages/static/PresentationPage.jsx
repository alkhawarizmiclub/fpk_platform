// import StaticPageContainer from "../../layouts/StaticPageContainer";

// const PresentationPage = () => {
//     return (
//         <StaticPageContainer page_title="Présentation">

//             <h1>Création</h1>
//             <p>
//                 La Faculté Polydisciplinaire de Khouribga (FPK)a été créée en 2005 dans le cadre de la politique de décentralisation et de régionalisation que connait le Maroc.
//                 La FPK est consciente du rôle qu'elle doit jouer pour être à la hauteur des attentes de la population de cette Province, établissement universitaire relevant de l’Université Sultan Moulay Sliman et ayant pour vocation la formation sous toutes ces formes (initiale et continue).
//                 De par sa vocation la Faculté Polydisciplinaire de Khouribga offre des formations diversifiées couvrantplusieurs champs disciplinaires sous forme de filières à enseignement modulaire. Ces filières sont de deux natures,
//                 En effet, malgré son jeune âge treize filières sont déjà offertes à ses étudiants il s'agit de :
//             </p>
//             <ul>
//                 <li>Etudes Arabes (EA)</li>
//                 <li>Géographie (GEO)</li>
//                 <li>Sciences de la Matière Chimie (SMC)</li>
//                 <li>Sciences de la Matière Physique (SMP)</li>
//                 <li>Sciences de la Terre et de l'Univers (STU)</li>
//                 <li>Sciences de la Vie (SV)</li>
//                 <li>Sciences Economiques et Gestion (SEG)</li>
//                 <li>Sciences Mathématiques et Application (SMA)</li>
//                 <li>Sciences Mathématiques et informatique (SMI)</li>
//             </ul>

//             <h1>Mission</h1>
//             <p>
//                 La Faculté Polydisciplinaire de Khouribga (FPK) a comme mission de veiller à l’application de la législation et de la réglementation concernant les établissements publics d’enseignement. ​(loi 01-00, Article 4) .
//                 Elle a aussi pour rôle de dispenser le savoir, de la science et de la culture à différentes échelles de la société.
//             </p>

//             <h1>Infrastructure</h1>
//             <ul>
//                 <li>Superficie totale de la faculté : 12 Hectares</li>
//                 <li>2 Amphithéâtres de 280 places</li>
//                 <li>4 Amphithéâtres de 204 places</li>
//                 <li>1 Amphi des séminaires de 405 places</li>
//                 <li>4 Salles de cours de 100 places</li>
//                 <li>39 Salles de TD de 60 places</li>
//                 <li>44 Bureaux pour enseignants</li>
//                 <li>30 Salles de TP de 30 places</li>
//                 <li>12 Salles de préparation</li>
//                 <li>6 Salles d'informatique de 20 places</li>
//                 <li>4 Salles de langues de 40 places</li>
//                 <li>1 Bibliothèque pour étudiants (400 places) avec 3 Salles de lecture et 2 Salles de rayonnage.</li>
//                 <li>2 Salle de tirage et de photocopie</li>
//                 <li>1 Buvette des étudiants</li>
//                 <li>1 Buvette des enseignants</li>
//                 <li>1 Salle de prière</li>
//                 <li>2 Parking</li>
//                 <li>1 Bus de 23 places</li>
//                 <li>1 Bus de 48 places (en commun avec l'ENSAK)</li>
//                 <li>1 voiture utilitaire</li>

//             </ul>
//         </StaticPageContainer>
//     );
// }

// export default PresentationPage;

import StaticPageContainer from "../../layouts/StaticPageContainer";

const PresentationPage = () => {
    return (
        <StaticPageContainer page_title="Présentation">
            <div className="space-y-8 p-8 bg-gray-100">
                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4 border-b-2 pb-2">Création</h1>
                    <p className="mb-4 text-gray-700 leading-relaxed">
                        La Faculté Polydisciplinaire de Khouribga (FPK) a été créée en 2005 dans le cadre de la politique de décentralisation et de régionalisation que connaît le Maroc.
                        La FPK est consciente du rôle qu'elle doit jouer pour être à la hauteur des attentes de la population de cette Province, établissement universitaire relevant de l’Université Sultan Moulay Sliman et ayant pour vocation la formation sous toutes ses formes (initiale et continue).
                        De par sa vocation, la Faculté Polydisciplinaire de Khouribga offre des formations diversifiées couvrant plusieurs champs disciplinaires sous forme de filières à enseignement modulaire. Ces filières sont de deux natures.
                        En effet, malgré son jeune âge, treize filières sont déjà offertes à ses étudiants. Il s'agit de :
                    </p>
                    <ul className="list-disc list-inside ml-5 text-gray-600">
                        <li>Etudes Arabes (EA)</li>
                        <li>Géographie (GEO)</li>
                        <li>Sciences de la Matière Chimie (SMC)</li>
                        <li>Sciences de la Matière Physique (SMP)</li>
                        <li>Sciences de la Terre et de l'Univers (STU)</li>
                        <li>Sciences de la Vie (SV)</li>
                        <li>Sciences Economiques et Gestion (SEG)</li>
                        <li>Sciences Mathématiques et Application (SMA)</li>
                        <li>Sciences Mathématiques et Informatique (SMI)</li>
                    </ul>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4 border-b-2 pb-2">Mission</h1>
                    <p className="text-gray-700 leading-relaxed">
                        La Faculté Polydisciplinaire de Khouribga (FPK) a pour mission de veiller à l’application de la législation et de la réglementation concernant les établissements publics d’enseignement (loi 01-00, Article 4).
                        Elle a aussi pour rôle de dispenser le savoir, la science et la culture à différentes échelles de la société.
                    </p>
                </section>

                <section className="bg-white p-6 rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold  mb-4 border-b-2 pb-2">Infrastructure</h1>
                    <ul className="list-disc list-inside ml-5 text-gray-600">
                        <li>Superficie totale de la faculté : 12 Hectares</li>
                        <li>2 Amphithéâtres de 280 places</li>
                        <li>4 Amphithéâtres de 204 places</li>
                        <li>1 Amphi des séminaires de 405 places</li>
                        <li>4 Salles de cours de 100 places</li>
                        <li>39 Salles de TD de 60 places</li>
                        <li>44 Bureaux pour enseignants</li>
                        <li>30 Salles de TP de 30 places</li>
                        <li>12 Salles de préparation</li>
                        <li>6 Salles d'informatique de 20 places</li>
                        <li>4 Salles de langues de 40 places</li>
                        <li>1 Bibliothèque pour étudiants (400 places) avec 3 Salles de lecture et 2 Salles de rayonnage</li>
                        <li>2 Salles de tirage et de photocopie</li>
                        <li>1 Buvette des étudiants</li>
                        <li>1 Buvette des enseignants</li>
                        <li>1 Salle de prière</li>
                        <li>2 Parkings</li>
                        <li>1 Bus de 23 places</li>
                        <li>1 Bus de 48 places (en commun avec l'ENSAK)</li>
                        <li>1 voiture utilitaire</li>
                    </ul>
                </section>
            </div>
        </StaticPageContainer>
    );
}

export default PresentationPage;
