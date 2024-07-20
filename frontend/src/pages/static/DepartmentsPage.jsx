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
const GG = [
  { nom: 'ALILOU HAKIM', description: 'BIOTECHNOLOGIE VÉGÉTALE' },
  { nom: 'AZAITRAOUI MUSTAPHA', description: 'GEOGRAPHIE' },
  { nom: 'BENZIDIYA KHAILID', description: 'GEOGRAPHIE' },
  { nom: 'CHERRAD BRAHIM', description: 'GEOGRAPHIE' },
  { nom: 'DOUMA MOUNTASSER', description: 'Biodiversité microbienne – écotoxine' },
  { nom: 'EL BOUCHIKHI IHSSANE', description: 'BIOLOGIE MOLÉCULAIRE ET GÉNÉTIQUE' },
  { nom: 'EL FARTATI MOHAMED', description: 'GEORESSOURCES ET GENIE GEOLOGIQUE' },
  { nom: 'EL FILALI ABDELHAKIM', description: 'GEOGRAPHIE' },
  { nom: 'EL KHALLOUFI FATIMA', description: 'Toxicologie environnementale et interactions entre plantes et bactéries' },
  { nom: 'EL-ABBADI MOHAMED', description: 'Géographie humaine' },
  { nom: 'HESSANI BOUCHRA', description: 'GEOGRAPHIE ET AMENAGEMENT DE L’ESPACE' },
  { nom: 'JEBBOUJ RAJAA', description: 'Gestion des ressources naturelles continentales' },
  { nom: 'MALQUI HAFSA', description: 'BIOLOGIE' },
  { nom: 'NAJIB SALIHA', description: 'GEOPHYSIQUE-HYDROGEOLOGIE' },
  { nom: 'SAQRANE SANA', description: 'Microbiologie et toxicologie environnementale' },
  { nom: 'SGHIR SAID', description: 'GEOGRAPHIE ECONOMIQUE' },
  { nom: 'TAGMA TARIK', description: 'GEOLOGIE APPLIQUEE : HYDROGEOLOGIE ET GEOENVIRONNEMENT' },

];
const EE = [
  { nom: 'ATIK MOHAMED', description: 'ECONOMIE ET GESTION' },
  { nom: 'BAOUZIL LHOUSSEIN', description: 'SCIENCES ECONOMIQUE' },
  { nom: 'BOUAYAD AMINE NABIL', description: 'SCIENCES ECONOMIQUES' },
  { nom: 'CHAHBOUNE MOUNYA', description: 'ECONOMIE APPLIQUEES' },
  { nom: 'CHOUHBI ABDERRAHMAN', description: 'SCIENCES ECONOMIQUES' },
  { nom: 'EL YAMLAHI IMANE', description: 'L’INNOVATION ET L’ENTREPRENEURIAT' },
  { nom: 'HABACHI YOUNES', description: 'SCIENCES DE GESTION' },
  { nom: 'IZZA ISSAM', description: 'SCIENCES DE GESTION' },
  { nom: 'LAKHLILI IBTISSAME', description: 'FINANCE COMPTABILITE' },
  { nom: 'OUBRAHIMI MUSTAFA', description: 'STRATEGIE ECONOMIQUE ET ECONOMIE DE L’ENTREPRISE' },
  { nom: 'ROUGGANI KHALID', description: 'SCIENCES ECONOMIQUES' },
  { nom: 'JAOUHAR JINANE', description: 'SCIENCES ECONOMIQUE' }
];
const DD = [
  { nom: 'AITALIOUBRAHIM MYELKEBIR', description: 'ANALYSE CONVEXE' },
  { nom: 'BELAM MOHAMED', description: 'MATHEMATIQUES' },
  { nom: 'BENAISSA HICHAM', description: 'MATHEMATIQUES APPLIQUEES' },
  { nom: 'BIDANI MOSTAPHA', description: 'INFORMATIQUE, RÉSEAUX ET TÉLÉCOMMUNICATION' },
  { nom: 'BOULAYAT BRAHIM', description: 'MATHEMATIQUES' },
  { nom: 'CHAKRAOUI MOHAMED', description: 'INFORMATIQUE' },
  { nom: 'CH-CHAOUI MOHAMED', description: 'MATHEMATIQUES APPLIQUEES' },
  { nom: 'EL ALLIOUI YOUSSOUF', description: 'INFORMATIQUE' },
  { nom: 'EL BOUKHARI NIHALE', description: 'CONTRÔLE OPTIMAL' },
  { nom: 'EL MOUTAWAKIL DRISS', description: 'Analyse fonctionnelle' },
  { nom: 'FAKHAR RACHID', description: 'Recherche pratique et applications' },
  { nom: 'ISKAFI KHALID', description: 'Équations dérivées partielles' },
  { nom: 'KHOURDIFI YOUNESS', description: 'INFORMATIQUE' },
  { nom: 'MOUJABBIR MOHAMMED', description: 'INFORMATIQUE' },
  { nom: 'MRHARDY NAOUAL', description: 'Analyse et probabilité' },
  { nom: 'NAJIB SALAH', description: 'MATHEMATIQUES PURES' },
  { nom: 'TIDLI YOUSSEF', description: 'ANALYSE FONCTIONNELLE' },
  { nom: 'ZAROUALI DARKAOUI MOHSSIN', description: 'MATHEMATIQUES/ALGEBRE' },
  { nom: 'BAKKOURI IBTISSAM', description: 'INFORMATIQUE' }
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
                    <a href="" className="text-blue-600 hover:underline">
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
      <div className="min-h-screen bg-gray-100">
      {/* Section Filières */}
      <section id="filiere-section" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-gray-800 mb-4">
            <h2 className="text-xl font-semibold text-pink-600">Filières rattachées au département</h2>
            <ul className="list-disc pl-6">
              <li><a href=".pdf" className="text-blue-600 hover:underline">GEO - Géographie</a></li>
              <li><a href=".pdf" className="text-blue-600 hover:underline">SV - Sciences de la Vie</a></li>
              <li><a href=".pdf" className="text-blue-600 hover:underline">geology - Sciences de la Terre et de l’Univers</a></li>
              <li><a href=".pdf" className="text-blue-600 hover:underline">LP GÉO-RESSOURCES ET GÉO-MINES</a></li>
              <li><a href=".pdf" className="text-blue-600 hover:underline">MEBA - Master Ecotoxicologie et Biotechnologie Appliquée</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Chef de Département */}
      <section id="chef-section" className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Chef de département</h2>
          <div className="flex justify-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
              <img className="w-full h-70 object-cover" src="/samir.jpg" alt="Samir Ahboucha" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Samir Ahboucha</h3>
                <p className="text-gray-600 mb-4">Physiologie du système nerveux</p>
                <a className="text-blue-500 hover:underline" href="https://www.linkedin.com/in/samir-ahboucha" target="_blank" rel="noopener noreferrer">Profil LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Membres de Département */}
      <section id="membre-section" className="py-12">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold text-center mb-8">Membres de département</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {GG.map((GG, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{GG.nom}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{GG.description}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <a href="#" className="text-blue-600 hover:text-blue-900">Read More</a>
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
    id: 'seg',
    title: 'Sciences Economiques & Gestion',
    content: (
      <div className="min-h-screen bg-gray-100">
      {/* Section Filières */}
      <section id="filiere-section" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-gray-800 mb-4">
            <h2 className="text-xl font-semibold text-pink-600">Filières rattachées au département</h2>
            <ul className="list-disc pl-6">
              <li>
                <a href=".pdf" className="text-blue-600 hover:underline">SEG - Sciences Economiques et Gestion - Licence fondamentale</a>
              </li>
              <li>
                <a href=".pdf" className="text-blue-600 hover:underline">MBF - Banque et finance - Master</a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Chef de Département */}
      <section id="chef-section" className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Chef de département</h2>
          <div className="flex justify-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
              <img className="w-full h-70 object-cover" src="/HK.jpg" alt="HERRADI KHALID" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">HERRADI KHALID</h3>
                <p className="text-gray-600 mb-4">ANALYSE ET PROSPECTION ECONOMIQUES</p>
                <a className="text-blue-500 hover:underline" href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">Profil LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Membres de Département */}
      <section id="membre-section" className="py-12">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold text-center mb-8">Membres de département</h2>
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
                {EE.map((EE, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {EE.nom}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {EE.description}
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
    id: 'mi',
    title: 'Sciences Mathématiques et Informatique',
    content: (
      <div className="min-h-screen bg-gray-100">
      {/* Section des Filières */}
      <section id="filiere-section" className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Filières rattachées au département</h2>
          <div className="text-gray-800 mb-4">
            <ul className="list-disc pl-6">
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  SMA - Sciences Mathématiques et Application (Licence fondamentale)
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  SMI - Filière Sciences Mathématiques et Informatique (Licence fondamentale)
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-600 hover:underline">
                  MMA - Mathématiques et Applications (Master)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section Chef de département */}
      <section id="chef-section" className="py-12 bg-gray-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Chef de département</h2>
          <div className="flex justify-center">
            <div className="bg-white shadow-md rounded-lg overflow-hidden w-80">
              <img className="w-full h-70 object-cover" src="/KM.jpg" alt="KABBAJ MOSTAFA" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">KABBAJ MOSTAFA</h3>
                <p className="text-gray-600 mb-4">MATHEMATIQUES APPLIQUEES</p>
                <a className="text-blue-500 hover:underline" href="#" target="_blank" rel="noopener noreferrer">
                  Profil
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Membres de département */}
      <section id="membre-section" className="py-12">
        <div className="container mx-auto px-4">
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
                {DD.map((DD, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {DD.nom}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {DD.description}
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
