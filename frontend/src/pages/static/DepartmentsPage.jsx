import React, { useState } from 'react';
import StaticPageContainer from "../../layouts/StaticPageContainer";
const membres = [
  { nom: 'ABOUTOUFAYL FAYCAL', description: 'النص : دراسة لغوية و نقدية' },
  { nom: 'BDOUH HASSAN', description: 'دراسات اللسانيات العربية' },
  { nom: 'CHARBATI YOUSSEF', description: 'ANGLAIS' },
  { nom: 'DAKIR KAMAL', description: 'COURS LINGUISTIQUE ET LE DISCOURS CORANIQUE' },
  { nom: 'DOUIOU ABDELAZIZ', description: 'اللغة العربية و آدابها' },
  { nom: 'EL KHALFI LAILA', description: 'اللغة العربية و آدابها' },
  { nom: 'EL YAMANI SOUMIA', description: 'اللغة الإنجليزية و آدابها' },
  { nom: 'HARROUCHI ZINEB', description: 'LANGUE ET SOCIETE' },
  { nom: 'MANIANI MUSTAPHA', description: 'لسانيات' },
  { nom: 'NASRAOUI ECH CHERKI', description: 'اللغة العربية و آدابها' },
  { nom: 'OUASSAT TOURIA', description: 'Lettres' },
  { nom: 'SERRAJ KARIM', description: 'Littérature comparée, approche de psychanalyse textuelle et sémiotique' },
  { nom: 'MAJDI TOUFIK', description: 'Le problème de l’enseignement du français comme langue étrangère' },
  { nom: 'ASSO AMMO', description: 'الأدب العربي' }
];
const PC = [
  { nom: 'KHALID SBIAAI', description: 'PHYSIQUE INFORMATIQUE' },
  { nom: 'ABDENNOURI MOHAMED', description: 'MATÉRIAUX, PROCÈDES ET CATALYSE' },
  { nom: 'BAHOU YOUNOUSS', description: 'OPTIQUES DES MATÉRIAUX ET TRANSFERT D’ENERGIE' },
  { nom: 'BOUALY BRAHIM', description: 'CHIMIE CATALYTIQUE' },
  { nom: 'CHARAFI MOULAY MUSTAPHA', description: 'PHYSIQUE' },
  { nom: 'EL – IDRISSI MOHA', description: 'PHYSIQUE ATOMIQUE ET ELECTRODYNAMIQUE QUANTIQUE' },
  { nom: 'EL BOUABI YOUNES', description: 'ELECTROCHIMIE ANALYTIQUE' },
  { nom: 'EL HAIMOUTI AZIZ', description: 'Chimie du solide métallique' },
  { nom: 'EL HOUSSAME SOUFIANE', description: 'Chimie catalyseur' },
  { nom: 'EL MHAMMEDI MOULAY ABDERRAHIM', description: 'Électrochimie analytique' },
  { nom: 'EL MOUBARKI RACHID', description: 'CHIMIE-PHYSIQUE' },
  { nom: 'EL-OUAFY TARIK', description: 'CHIMIE-PHYSIQUE' },
  { nom: 'FAIZ ZINEB', description: 'RADIOCHIMIE, MATERIAUX ET ENVIRONNEMENT' },
  { nom: 'FARAHI ABDELFETTAH', description: 'CHIMIE ANALYTIQUE ET ENVIRONNEMENT' },
  { nom: 'FATHI AHMED', description: 'Physique statistique' },
  { nom: 'HASNAOUI ABDELLATIF', description: 'Physique moléculaire' },
  { nom: 'HASSANI ABDESSAMAD', description: 'PHYSIQUE DES MATERIAUX' },
  { nom: 'HAYANI MOUNIR SANAA', description: 'MECANIQUE ET ENERGETIQUE' },
  { nom: 'LAHRECH ABDELKABIR', description: 'INFORMATIQUE, TRAITEMENT DU SIGNAL ET DES IMAGES' },
  { nom: 'LAHRICH SARA', description: 'ELECTROCHIMIE ANALYTIQUE' },
  { nom: 'MALLOUK SIHAM', description: 'CHIMIE ORGANIQUE' },
  { nom: 'NEHARI DRISS', description: 'PHYSIQUE : PHYSIQUE GENERALE' },
  { nom: 'RACHID FATIM ZAHRA', description: 'PHYSIQUE DES MATERIAUX' },
  { nom: 'SADIQ M’HAMED', description: 'Propriétés physico-chimiques de la surface du matériau' },
  { nom: 'ZAHIDI YOUNESS', description: 'PHYSIQUE THEORIQUE' },
];

const departments = [
  {
    id: 'llc',
    title: 'Langue Littérature et Communication',
    content: (
      <div className="min-h-screen bg-gray-100">
      <section id="filiere-section" className="py-12 bg-white">
      
              <div className="text-gray-800 mb-4">
                <h2 className="text-xl font-semibold text-pink-600">Filières rattachées au département</h2>
                <ul className="list-disc pl-6">
                  <li>
                    <a href=".pdf" className="text-blue-600 hover:underline">
                   Licence-Études arabes
                    </a>
                  </li>
                  <li>
                    <a href=".pdf" className="text-blue-600 hover:underline">
                     Master-آليات تحليل الخطاب الأدبي
                    </a>
                  </li>
                  <li>
                    <a href="" className="text-blue-600 hover:underline">
                    Master spécialisé - التواصل البيداغوجي وديداكتيك اللغة العربية
                    </a>
                  </li>
                </ul>
              </div>
    </section>

   
    <section id="chef-section" className="py-12 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Chef de département</h2>
        <div className="flex justify-center">
          <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
            <img className="w-full h-70 object-cover" src="/chahid.jpg" alt="CHAHID ABDELFATTAH" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">CHAHID ABDELFATTAH</h3>
              <p className="text-gray-600 mb-4">الأدب العربي</p>
              <a className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/%D8%B9%D8%A8%D8%AF-%D8%A7%D9%84%D9%81%D8%AA%D8%A7%D8%AD-%D8%B4%D9%87%D9%8A%D8%AF-1a0928198/" target="_blank" rel="noopener noreferrer">Profil LinkedIn</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section id="membre-section" className="py-12">
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold text-center mb-8">Membre de département</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nom
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {membres.map((membre, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {membre.nom}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {membre.description}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <a href="#" className="text-blue-600 hover:text-blue-900">
                    Read More
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    
   
    
         
    
      </div>
    </section>
    </div>
    ),
  },
  {
    id: 'smpc',
    title: 'Sciences de la matière Physique-chimie',
    content: (
      <div className="min-h-screen bg-gray-100">
      {/* Section des filières */}
      <section id="filiere-section" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-gray-800 mb-4">
            <h2 className="text-xl font-semibold text-pink-600">Filières rattachées au département</h2>
            <ul className="list-disc pl-6">
              <li>
                <a href="#smp" className="text-blue-600 hover:underline">
                  SMP - Science de la Matière Physique
                </a>
              </li>
              <li>
                <a href="#smc" className="text-blue-600 hover:underline">
                  SMC - Science de la Matière Chimie
                </a>
              </li>
              <li>
                <a href="#mmr" className="text-blue-600 hover:underline">
                  MMR - Matière et rayonnement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section du Chef de département */}
      <section id="chef-section" className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Chef de département</h2>
          <div className="flex justify-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
              <img className="w-full h-70 object-cover" src="/vice_dean_2.jpg" alt="BARKA NOUREDDINE" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">BARKA NOUREDDINE</h3>
                <p className="text-gray-600 mb-4">PHYSICO-CHIMIE DES MATÉRIAUX A CARACTÈRES APPLIQUÉS</p>
                <a className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/barka-noureddine/" target="_blank" rel="noopener noreferrer">Profil LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section des membres du département */}
      <section id="membre-section" className="py-12">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold text-center mb-8">Membre de département</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nom
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {PC.map((PC, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {PC.nom}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {PC.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:text-blue-900">
                        Read More
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
    ),
  },
  {
    id: 'gbg',
    title: 'Géographie Biologie Géologie',
    content: (
      <div id="primary" className="py-6">
        <div className="container mx-auto">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Géographie Biologie Géologie</h1>
          </header>
          <main id="main" className="site-main">
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              {/* Add detailed content for GBG department here */}
            </div>
          </main>
        </div>
      </div>
    ),
  },
  {
    id: 'seg',
    title: 'Sciences Economiques & Gestion',
    content: (
      <div id="primary" className="py-6">
        <div className="container mx-auto">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Sciences Economiques & Gestion</h1>
          </header>
          <main id="main" className="site-main">
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              {/* Add detailed content for SEG department here */}
            </div>
          </main>
        </div>
      </div>
    ),
  },
  {
    id: 'mi',
    title: 'Sciences Mathématiques et Informatique',
    content: (
      <div id="primary" className="py-6">
        <div className="container mx-auto">
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Sciences Mathématiques et Informatique</h1>
          </header>
          <main id="main" className="site-main">
            <div className="bg-white shadow-md rounded-lg p-6 mb-6">
              <div className="text-gray-800 mb-4">
                <h2 className="text-xl font-semibold text-pink-600">Filières rattachées au département</h2>
                <ul className="list-disc pl-6">
                  <li>
                    <a href="/ensak/wp-content/uploads/2021/01/FI-Génie-Informatique.pdf" className="text-blue-600 hover:underline">
                      Filière ingénieur en - Génie informatique -
                    </a>
                  </li>
                  <li>
                    <a href="/ensak/wp-content/uploads/2021/01/FI-Informatique-et-Ingénierie-des-données.pdf" className="text-blue-600 hover:underline">
                      Filière ingénieur en - Informatique et Ingénierie des données -
                    </a>
                  </li>
                  <li>
                    <a href="/ensak/maths-informatique/" className="text-blue-600 hover:underline">
                      Master - Big Data et Aide à la Décision -
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-gray-800">
                <h2 className="text-xl font-semibold text-pink-600">Membres</h2>
                <table className="min-w-full divide-y divide-gray-200 mt-4">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Nom et Prénom
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Adresse E-mail
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {[
                      { name: 'ABOUELKHIR Imane', email: 'i.abouelkhir@usms.ma' },
                      { name: 'AGHRICHE Ahmed', email: 'a.aghriche@usms.ma' },
                      { name: 'AZOUANI Abderahim', email: 'a.azouani@usms.ma' },
                      { name: 'BOUKHALFA Alaeddine', email: 'a.boukhalfa@usms.ma' },
                      { name: 'DARGHAM Abdelmajid', email: 'a.dargham@usms.ma' },
                      { name: 'ELBANNAY Omar', email: 'o.elbannay@usms.ma' },
                      { name: 'ELHADFI YOUSSEF', email: 'y.elhadfi@usms.ma' },
                      { name: 'ENNAJI Fatimazohra', email: 'f.ennaji@usms.ma' },
                      { name: 'GHAZDALI Abdelghani', email: 'a.ghazdali@usms.ma' },
                      { name: 'GHERABI Noreddine', email: 'n.gherrabi@usms.ma' },
                      { name: 'HAFIDI Imad', email: 'i.hafidi@usms.ma' },
                      { name: 'IDRISSI FATMI Nadia', email: 'n.idrissifatmi@usms.ma' },
                      { name: 'IFZARNE Aziz', email: 'a.ifzarne@usms.ma' },
                      { name: 'KHALFI Hamza', email: 'h.khalfi@usms.ma' },
                      { name: 'LAMGHARI Nidal', email: 'n.lamghari@usms.ma' },
                      { name: 'NASRI Mohammed', email: 'm.nasri@usms.ma' },
                      { name: 'ROCHD Yassir', email: 'y.rochd@usms.ma' },
                      { name: 'SAADI Mostafa', email: 'm.saadi@usms.ma' },
                      { name: 'SOUSSI Nassima', email: 'n.soussi@usms.ma' },
                      { name: 'ABOUTABIT Noureddine', email: 'n.aboutabit@usms.ma' },
                    ].map((member, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{member.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <a href={`mailto:${member.email}`} className="text-blue-600 hover:underline">{member.email}</a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    ),
  },
];

const DepartmentPage = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(departments[0].id);

  return (
    <StaticPageContainer page_title="Nos départements">
      <nav className="bg-gray-800 text-white py-2">
        <div className="container mx-auto flex space-x-4">
          {departments.map((department) => (
            <button
              key={department.id}
              onClick={() => setSelectedDepartment(department.id)}
              className={`px-4 py-2 rounded ${
                selectedDepartment === department.id ? 'bg-gray-600' : 'bg-gray-700'
              }`}
            >
              {department.title}
            </button>
          ))}
        </div>
      </nav>
      {departments.find((department) => department.id === selectedDepartment).content}
    </StaticPageContainer>
  );
};

export default DepartmentPage;
