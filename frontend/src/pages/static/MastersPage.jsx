import StaticPageContainer from "../../layouts/StaticPageContainer";
import React, { useState } from 'react';
const masters = {
    
    mma: {
        id:"M-MA",
      title: "Mathématiques et Applications",
      description: 
      <div>
      <h2 className="text-xl font-semibold mb-2">Objectifs de la filière</h2>
      <p>Formation approfondie en mathématiques, ouverte tant vers les mathématiques appliquées que les mathématiques fondamentales.</p>
      <p>Développer  les connaissances acquises en licence de la filière science mathématique.</p>
      <p>Préparer l’étudiant à une carrière d’enseignants chercheurs en mathématiques appliquées ou fondamentales, publique ou privée à l’issue d’un doctorat.</p>

      <h2 className="text-xl font-semibold mb-2 mt-4">Compétences à acquerir</h2>
      <ul className="list-disc pl-5">
        <li>Acquérir des compétences dans l’analyse des problèmes mathématiques et l’acquisition des connaissances et des outils de traitement et de résolution de problèmes scientifiques.</li>
        <li>Initiation aux techniques de recherche bibliographique, de synthèse et de recherche scientifique.</li>
        <li>Gestion des possibilités de financements et de la politique d’investissement d’une entreprise; élaboration d’un plan d’affaires pour un projet de création, de reprise, d’innovation ou de développement d’une entreprise.</li>
        <li>Doter l’étudiant des outils nécessaires lui permettant de s’intégrer dans une équipe ou laboratoire de recherche ou bien dans les secteurs socio-économiques.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-4">Débouchés de la formation</h2>
      <p>Les débouchés de la formation peuvent s’orienter vers la préparation d’une thèse en mathématiques théoriques ou appliquées comme ils peuvent s’intégrer dans la vie professionnelle.</p>

      <h2 className="text-xl font-semibold mb-2 mt-4">Conditions et modalités d’admission</h2>
      <h3 className="text-lg font-semibold mb-2">Diplômes requis</h3>
      <p>Licence en mathématiques</p>
      <h3 className="text-lg font-semibold mb-2">Procédures de sélection</h3>
      <p>Sélection sur dossier selon les critères suivants:</p>
      <ul className="list-disc pl-5">
        <li>Notes et mentions obtenues au cours des années de Licence</li>
        <li>Nombre des années d’étude de S1 à S6</li>
        <li>Notes des matières estimées fondamentales par la commission d’examen</li>
      </ul>
      <h3 className="text-lg font-semibold mb-2">Prérequis pédagogiques spécifiques</h3>
      <ul className="list-disc pl-5">
        <li>Tous les modules d’analyse et d’algèbre programmés en Licence.</li>
        <li>Calcul différentiel.</li>
        <li>Analyse Numérique.</li>
        <li>Mesure et Intégration.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-4">Modules</h2>
      <h3 className="text-lg font-semibold mb-2">Semestre 1</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Module</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Analyse Fonctionnelle</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Algèbre commutatif et algèbre de Lie</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Probabilité approfondie / Processus stochastique</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Inéquations variationnelle</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Entrepreneuriat</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Anglais scientifique</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">Semestre 2</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Module</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Analyse convexe et théorie de multifonctions</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Informatique et programmation</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Introduction à la théorie de Galois</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Théorie spectrale</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Degré topologique et théorie du point fixe</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Mécanique des milieux continues et élasticité</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">Semestre 3</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Module</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Méthodes Numériques pour les EDP</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Distributions et EDP</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Systèmes Elliptiques et Méthodes de Résolution</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Modélisation stochastique des EDP</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Modélisation mathématique et systèmes dynamiques</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Gestion du projet</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">Semestre 4</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Module</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Projet de fin d’études</td>
          </tr>
        </tbody>
      </table>
    </div>
    },
    mmr: {
        id:"M-MR",
      title: "Matière et rayonnement",
      description:
      <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Master Matière et Rayonnement</h1>

      <section>
        <h2 className="text-xl font-semibold mb-2">Objectifs de la filière</h2>
        <p>Le master est à finalité recherche. Il se définit comme une formation approfondie graduée de haut niveau scientifique, dont le but principal est d’offrir aux étudiants un ensemble de spécialités présentant la physique dans toutes ses diversités modernes : physique fondamentale (transition de phase, mécanique quantique, …) et physique appliquée (Physique des semi-conducteurs, imagerie, RDM, …). La formation implique aussi l’utilisation des méthodes de simulation en physique qui sont devenues incontournables dans l’étude et la fabrication des matériaux fonctionnels touchant plusieurs technologies.</p>
        <p>Cette formation constitue également une initiation à la recherche scientifique afin de conduire les étudiants à une insertion dans un laboratoire de recherche institutionnel ou industriel, en vue d’y préparer une thèse. Grâce à une formation solide & approfondie, les lauréats ont la possibilité d’être insérés dans le tissu socioéconomique ou de poursuivre leurs recherches en vue d’obtenir un doctorat. Une partie de l’enseignement au sein du master pourrait être dispensée en commun avec d’autres masters relevant du même département.</p>
        <p>Enfin, il faut souligner que la proposition du master doit s’inscrire dans la politique innovante promue actuellement par l’Etat, et qui vise une dualité entre la formation et la recherche, dans le but de mettre l’espèce humaine au centre du développement durable.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Débouchés et retombés de la formation</h2>
        <p>Les étudiants titulaires du diplôme de Master « matière et rayonnement » auront une multitude de choix pour poursuivre leurs études doctorales au Maroc ou à l’étranger en raison du bon encadrement reçu au sein de cette filière. Certains pourront s’intégrer directement en tant que cadre moyen, dans une société privée ou publique ayant pour activité l’un des domaines suivants : Matériaux et leur utilisation dans l’industrie, modélisation, Techniques d’analyse des matériaux, Physique nucléaire et son utilité dans la vie.</p>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Conditions d’accès</h2>
        <h3 className="text-lg font-semibold mb-2">Diplômes requis</h3>
        <p>Ce master s’adresse aux étudiants titulaires d’une licence en physique ou diplôme reconnu équivalent ou d’un diplôme national du niveau au moins égal à la licence en physique et satisfaisant aux critères d’admission mentionnés dans le cahier des normes pédagogiques du master.</p>
        <h3 className="text-lg font-semibold mb-2">Procédures de sélection</h3>
        <ul className="list-disc pl-5">
          <li>Étude du dossier : Les candidats seront sélectionnés selon les critères suivants :</li>
          <ul className="list-disc pl-5">
            <li>Notes de S1 à S5</li>
            <li>Session d’obtention (normale ou rattrapage)</li>
            <li>Nombres d’années d’obtention de la licence</li>
          </ul>
          <li>Test écrit</li>
          <li>Entretien</li>
        </ul>
        <h3 className="text-lg font-semibold mb-2">Pré-requis pédagogiques spécifiques</h3>
        <ul className="list-disc pl-5">
          <li>Avoir une bonne assimilation des cours de physique générale, chimie générale, Physique Statistique, Mécanique quantique, Mathématiques et Informatique dispensés dans les cycles antérieurs.</li>
          <li>Avoir un esprit d’ouverture, de communication et d’analyse.</li>
          <li>Avoir une bonne maîtrise de langues étrangères (Français, Anglais).</li>
        </ul>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Modules</h2>

        <h3 className="text-lg font-semibold mb-2">Semestre 1</h3>
        <table className="table-auto w-full mb-4 border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Module</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Transition de phase</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Défauts et diffusions dans les matériaux</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Physique des semi-conducteurs</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Informatique et programmation</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Anglais</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Mécanique quantique avancée</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-semibold mb-2">Semestre 2</h3>
        <table className="table-auto w-full mb-4 border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Module</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Physique statistique hors équilibre</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Interaction rayonnement-matière et laser</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Méthodes de simulation quantique</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Mathématiques pour la physique</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Résistance des matériaux</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Physique de l’état solide</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-semibold mb-2">Semestre 3</h3>
        <table className="table-auto w-full mb-4 border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Module</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">Distributions</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Méthodes de simulation microscopiques</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Transfert de chaleur et de matière</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Méthodes numériques</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Traitement de signal et imagerie</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border">Surface-interface et nanoparticules</td>
            </tr>
          </tbody>
        </table>

        <h3 className="text-lg font-semibold mb-2">Semestre 4</h3>
        <table className="table-auto w-full mb-4 border-collapse border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border">Module</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border">STAGE et MEMOIRE</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Coordinateur du Master</h2>
        <p>Prof. Abdellatif Hasnaoui</p>
        <p>Département Sciences de la matière Physique-Chimie</p>
      </section>
    </div>
      
    },
    mbf: {
        id:"M-BF",
      title: "BANQUE ET FINANCE",
      description: 
      <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-2">Objectifs de la filière</h2>
      <p>Le Master Banque et finance (BEF) est destiné aux étudiants provenant des filières Droit – Economie – Gestion et souhaitant s’orienter vers des responsabilités de management et des métiers liés au monde de la banque et des finances. Le Master dispense les connaissances requises pour gérer une entreprise bancaire (gestion, économie, droit, sociologie, comptabilité…) avec la possibilité d’acquérir des compétences dans les grandes fonctions financières (communication, juridique, stratégie, marketing, ressources humaines, contrôle de gestion…).</p>
      <p>Le Master BEF est aussi une formation particulièrement adaptée à un public universitaire ayant un parcours dans d’autres disciplines que la gestion (scientifique et technologique) et souhaitant développer une double compétence en banque et finance. La formation est adaptée à un public d’étudiants visant de continuer ses études doctorales ou recherchant une formation d’approfondissement banque et finance.</p>
      <p>Le Master BEF offre un parcours complet avec une approche fonctionnelle et transversale basée sur des connaissances théoriques approfondies et des acquis professionnels.</p>

      <h2 className="text-xl font-semibold mb-2 mt-4">Compétences à acquérir</h2>
      <ul className="list-disc pl-5">
        <li>Réalisation d’un diagnostic financier pour le banquier et définition de choix stratégiques.</li>
        <li>Identification d’opportunités stratégiques et analyse de l’environnement concurrentiel bancaire.</li>
        <li>Étude faisabilité, montage et suivi d’un projet dans ses dimensions budgétaires, opérationnelles et humaines pour convaincre le banquier.</li>
        <li>Mener des missions d’audit, de contrôle de gestion et d’inspection d’une entreprise bancaire et financière.</li>
        <li>Gestion des possibilités de financements et de la politique d’investissement d’une entreprise.</li>
        <li>Élaboration d’un plan d’affaires pour un projet de création, de reprise, d’innovation ou de développement d’une entreprise.</li>
        <li>Capacité à s’exprimer en anglais bancaire et financier à l’écrit et à l’oral.</li>
        <li>Maitriser les aspects juridiques et réglementaires du monde de la banque et des finances.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-4">Débouchés de la formation</h2>
      <ul className="list-disc pl-5">
        <li>Directeur d’agence (DA)</li>
        <li>Directeur de Centre d’Affaires (CAF)</li>
        <li>Responsable financier</li>
        <li>Inspecteur de banque</li>
        <li>Chef comptable</li>
        <li>Chargé de clientèle</li>
        <li>Chargé d’affaires d’entreprises</li>
        <li>Analyste financier</li>
        <li>Contrôleur de gestion</li>
        <li>Responsable d’analyse de risque</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-4">Conditions et modalités d’admission</h2>
      <h3 className="text-lg font-semibold mb-2">Diplômes requis</h3>
      <p>BAC + 3 économie, management et finance ou BAC + 4 économie, management et finance ou tout diplôme équivalent.</p>
      
      <h3 className="text-lg font-semibold mb-2">Procédures de sélection</h3>
      <ul className="list-disc pl-5">
        <li>Étude du dossier : Mentions, nature de la session ; nombre d’années d’études, notes des matières principales.</li>
        <li>Test écrit : connaissances économiques, bancaires et financières.</li>
        <li>Entretien oral : Culture générale en connaissances économiques et de gestion et force de caractère.</li>
      </ul>
      
      <h3 className="text-lg font-semibold mb-2">Prérequis pédagogiques spécifiques</h3>
      <ul className="list-disc pl-5">
        <li>BAC + 3 ou BAC + 4 en économie, management et finance ou diplôme équivalent.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-4">Modules</h2>
      
      <h3 className="text-lg font-semibold mb-2">Semestre 1</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Module</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Gestion des ressources humaines bancaires</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Environnement du secteur bancaire marocain</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Gestion financière bancaire</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Techniques bancaires I</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Techniques quantitatives de gestion</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Anglais bancaire et des affaires</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">Semestre 2</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Module</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Droit bancaire et financier</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Fiscalité</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Techniques bancaires II</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Systèmes d’information de gestion</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Gestion des risques I : risque de crédit</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Business plan et gestion de projets</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">Semestre 3</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Module</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Marketing bancaire et études de marché</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Finance internationale</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">RSE : finance durable et verte</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Contrôle de gestion bancaire</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Gestion des risques II : risque de marché et opérationnel</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Finance islamique</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">Semestre 4</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Module</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Stage ou mémoire</td>
          </tr>
        </tbody>
      </table>
    </div>
    },
    meba: {
        id:"M-EBA",
      title: "Ecotoxicologie et Biotechnologie Appliquée",
      description: 
      <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-2">Objectifs de la formation</h2>
      <p>Formation approfondie dans les domaines de biotechnologies appliquées au monde animal, microbien et végétal dans une optique de production et/ou d’amélioration.</p>
      <p>Connaissance en profondeur du champ toxicologique large et interdisciplinaire.</p>
      <p>Préparation de l’étudiant à une carrière d’enseignant chercheur en écotoxicologie et biotechnologie fondamentale et appliquée, publique ou privée à l’issue d’un doctorat.</p>

      <h2 className="text-xl font-semibold mb-2 mt-4">Débouchés de la formation</h2>
      <p>Les débouchés de la formation peuvent s’orienter vers la préparation d’une thèse en écotoxicologie et biotechnologie théorique ou appliquée comme ils peuvent s’intégrer dans la vie professionnelle.</p>

      <h2 className="text-xl font-semibold mb-2 mt-4">Conditions d’accès</h2>
      <p>La présélection des candidats se fera sur la base de l’étude de dossiers. Les candidats présélectionnés seront convoqués à passer un test écrit.</p>

      <h2 className="text-xl font-semibold mb-2 mt-4">Prérequis pédagogiques spécifiques</h2>
      <ul className="list-disc pl-5">
        <li>Tous les modules de biologie et de physiologie (animale et végétale)</li>
        <li>Microbiologie générale</li>
        <li>Biotechnologie</li>
        <li>Toxicologie</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-4">Procédure de sélection</h2>
      <ul className="list-disc pl-5">
        <li>Notes de S1 à S5</li>
        <li>Session d’obtention (normale ou rattrapage)</li>
        <li>Nombres d’années d’obtention de la licence</li>
        <li>Nombre de mentions des semestres</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-4">Modules</h2>
      
      <h3 className="text-lg font-semibold mb-2 mt-4">Semestre 1</h3>
      <table className="table-auto w-full mb-4 border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Module</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Biodiversité</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Ecotoxicologie et Evaluation des Risques</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Toxicologie et Santé</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Mécanique des Fluides</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Techniques de Séparation Analytique</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Techniques d’Expression et de Communication</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2 mt-4">Semestre 2</h3>
      <table className="table-auto w-full mb-4 border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Module</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Contaminants Emergents et Enjeux Environnementaux</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Biotechnologie Végétale</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Systèmes d’Information Géographique S.I.G</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Microbiologie / Biotechnologie Microbienne</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Outils Mathématiques pour la Biologie</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Management de projets</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2 mt-4">Semestre 3</h3>
      <table className="table-auto w-full mb-4 border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Module</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">Etude d’impact / Gestion des Ressources Naturelles</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Ingénierie Tissulaire et Biotechnologie Animale</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Gouvernance et Management de l’Environnement</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Anglais Scientifique</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Biocapteurs et Métrologie</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">Bio-informatique</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2 mt-4">Semestre 4</h3>
      <table className="table-auto w-full mb-4 border-collapse border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border">Module</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">STAGE et MEMOIRE</td>
          </tr>
        </tbody>
      </table>
    </div>
    },
    ea: {
   
    id:"M-آليات تحليل الخطاب الأدبي",
      title: "آليات تحليل الخطاب الأدبي",
      description:
      <div className="container mx-auto p-6">
      <h2 className="text-xl font-semibold mb-2">أهداف التكوين</h2>
      <p>تعميق مهارات الطلبة في التخصصات المحددة في الماستر.</p>
      <p>انفتاح الطلبة على نظريات معرفية جديدة ذات صلة باللغة: تحليل الخطاب ـ مناهج نقدية حديثة.</p>
      <p>فسح المجال أمام الطلبة للتفكير في إشكاليات الخطاب وكيفية تحليله.</p>
      <p>تمثل أسئلة النماذج المدروسة واستخراج العلامات والأيقونات وملاءمتها لأسئلة الخطاب في تعدده واختلافه.</p>
      <p>تعزيز البنيات المنهجية والتصورات المعرفية.</p>
      <p>سبر أغوار العلامات والرموز التي تميز مختلف الخطابات الإنسانية.</p>
      <p>المزج بين اللغة العربية واللغات الحية في البحث والتكوين.</p>
      <p>تمكين الطالب من اكتساب آليات البحث العلمي.</p>

      <h2 className="text-xl font-semibold mb-2 mt-4">المهارات المراد تحصيلها</h2>
      <ul className="list-disc pl-5">
        <li>التدرج في اكتساب المعرفة في هذا التخصص من خلال مرحلة أولية تشمل في السنة الأولى بفصليها الدراسات الأساسية، والتي تمكن من فهم وتملك مسارات الفكر في الحقل الثقافي العربي والعالمي.</li>
        <li>السنة الثانية (الفصلين الثالث والرابع) فهي للتعمق في المعارف والإعداد للبحث بكل مقوماته العلمية.</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2 mt-4">منافذ التكوين</h2>
      <p>إعداد طلبة باحثين وأطر مكونة تكوينا عاليا في الأدب (آليات تحليل الخطاب) تهيئا لإعداد الدكتوراه.</p>
      <p>تكوين شخصية الطالب وتقويتها من أجل ولوج أسلاك التعليم، بحيث يمكن للمتخرج أن يمتلك أهم المبادئ المنهجية والعلمية لتؤهله للعمل في هذه الواجهة.</p>

      <h2 className="text-xl font-semibold mb-2 mt-4">شروط القبول</h2>
      <h3 className="text-lg font-semibold mb-2">الدبلومات المطلوبة</h3>
      <p>الإجازة في الدراسات الأساسية: الدراسات العربية (أدب)، والإجازة في علوم التربية في اللغة العربية</p>
      <h3 className="text-lg font-semibold mb-2">إجراءات الانتقاء</h3>
      <ol className="list-decimal pl-5">
        <li>دراسة الملف: تنتقى ملفات المترشحين بناء على عدد الميزات خلال سنوات الإجازة ودرجاتها، وعدد السنوات التي قضاها الطالب في سلك الإجازة، حيث تعطى الأولوية للحاصلين على الإجازة في الحد الأدنى من سنوات الدراسة: مع مراعاة احتساب النقط المحصل عليها في المواد الأساسية.</li>
        <li>امتحان كتابي</li>
        <li>مقابلة شفوية.</li>
      </ol>

      <h2 className="text-xl font-semibold mb-2 mt-4">الوحدات</h2>

      <h3 className="text-lg font-semibold mb-2">الفصل الأول</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">وحدة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">الخطـاب الشــعـري الحديث</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">نظريات الخطاب</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">لسانيات النص</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">خطاب الثقافة الشعبية</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">المناهج الأدبية الحديثة</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">الخطاب الروائي العربي</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">الفصل الثاني</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">وحدة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">الأنساق السردية القديمة</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">سيميولوجيا الصورة</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">النقد الأدبي بين القديم والحديث</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">إعلاميات</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">أدوات البحث العلمي</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">التخييل الروائي المغربي</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-lg font-semibold mb-2">الفصل الثالث</h3>
      <table className="table-auto w-full mb-4">
        <thead>
          <tr>
            <th className="px-4 py-2 border">وحدة</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">الخطاب الإشهاري</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">الترجمة</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">سيميولوجية الثقافة</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">تأويل الخطاب الأدبي</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">الخطاب السينمائي</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">اللغة الأجنبية الثانية</td>
          </tr>
        </tbody>
      </table>
    </div>
    },
    tbd : {
       id:"MS-التواصل البيداغوجي وديداكتيك اللغة العربية",
       title:"التواصل البيداغوجي وديداكتيك اللغة العربية",
       description:
       <div className="container mx-auto p-6">
       
       
       <div>
         <h2 className="text-xl font-semibold mb-2">أهداف التكوين</h2>
         <ul className="list-disc pl-5 mb-6">
           <li>توفير تكوين عال ومتخصص في التواصل البيداغوجي وديداكتيك اللغة العربية؛</li>
           <li>تمكين الطالب من آليات البحث البيداغوجي، والبحث في طرق التدريس، وتدريس اللغة العربيةّ؛</li>
           <li>تعزيز كفايات الطالب التواصلية والمعرفية والمنهجية؛</li>
           <li>تدريب الطالب على تحليل الخطاب البيداغوجي، وتحليل الوضعيات التعلمية، واقتراح حلول لمختلف المشكلات المتعلقة بتعليم وتعلم اللغة العربية؛</li>
           <li>تأهيل الطالب للانخراط في مشاريع الإصلاح الوطنية، والمشاركة الميدانية في الشق المتعلق بالتواصل البيداغوجي؛</li>
           <li>تنمية القوة الاقتراحية لدى الطلبة في كل ما يتعلق بالتواصل البيداغوجي وديداكتيك اللغة العربية؛</li>
           <li>تأهيل الطالب لإعداد بحوث نظرية وتطبيقية في التواصل عموما، والتواصل البيداغوجي خصوصا؛</li>
           <li>الإعداد لمباريات الولوج للمراكز الجهوية لمهن التربية والتكوين، ولمباريات توظيف الأساتذة المبرزين؛</li>
           <li>تعميق تكوين الطالب في اللغة باعتبارها أداة فاعلة في التواصل بشكل عام، وفي المنظومة التربوية بشكل خاص؛</li>
           <li>فتح آفاق جديدة أمام الطلبة للمزاوجة بين النظري والتطبيقي في مجالات التواصل؛</li>
         </ul>
 
         <h2 className="text-xl font-semibold mb-2">المهارات المراد تحصيلها</h2>
         <ul className="list-disc pl-5 mb-6">
           <li>التمكن من الديداكتيك العام ومن الديداكتيك الخاص بتدريس مختلف مكونات مادة اللغة العربية؛</li>
           <li>التعرف عن قرب على أهم نظريات التعلم الحديثة؛</li>
           <li>التمكن من تقنيات التواصل والتواصل البيداغوجي؛</li>
           <li>التمكن من علوم التربية ومن علم النفس التربوي الحديث؛</li>
           <li>مهارات في تحليل الخطابات: الشعري والسردي…</li>
           <li>الكتابة والقراءة والنقد؛</li>
           <li>القدرة على التواصل والتفاعل في الحياة اليومية والمهنية والسياسية والإعلامية.</li>
         </ul>
 
         <h2 className="text-xl font-semibold mb-2">منافذ التكوين</h2>
         <p className="mb-6">تأهيل باحثين لتحضير شهادة الدكتوراه في التواصل البيداغوجي ومهن التربية والتكوين وديداكتيك اللغة العربية. تأهيل الطلبة للتدريس والعمل في القطاعين العام أو الخاص في التعليم، والتواصل المهني، والاستشارة وتكوين المكونين.</p>
 
         <h2 className="text-xl font-semibold mb-2">شروط القبول</h2>
         <h3 className="text-lg font-semibold mb-2">الدبلومات المطلوبة</h3>
         <p className="mb-4">الإجازة في الدراسات الأساسية: الدراسات العربية (لسانيات – أدب وفنون)؛ الإجازة في التربية في اللغة العربية؛ الإجازة المهنية في اللغة العربية وديداكتيكها أو ما يعادلها.</p>
         
         <h3 className="text-lg font-semibold mb-2">إجراءات الانتقاء</h3>
         <ul className="list-disc pl-5 mb-4">
           <li>دراسة الملف: تنتقى ملفات المترشحين بناء على عدد الميزات خلال سنوات الإجازة ودرجاتها، وعدد السنوات التي قضاها الطالب في سلك الإجازة، حيث تعطى الأولوية للحاصلين على الإجازة في الحد الأدنى من سنوات الدراسة؛ مع مراعاة احتساب النقط المحصل عليها في المواد الأساسية؛</li>
           <li>امتحان كتابي.</li>
           <li>مقابلة شفوية.</li>
         </ul>
 
         <h2 className="text-xl font-semibold mb-2">الوحدات</h2>
         
         <h3 className="text-lg font-semibold mb-2">الفصل الثالث</h3>
         <table className="table-auto w-full mb-4">
           <thead>
             <tr>
               <th className="px-4 py-2 border">Module</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td className="px-4 py-2 border">تحليل الخطاب الشعري والسردي</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">المقاربات البيداغوجية الحديثة وطرائق التدريس</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">تقويم التعلمات في درس اللغة العربية وتقنيات المعالجة التربوية</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">التواصل البيداغوجي ونظريات التعلم</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">Techniques d’expression et de communication</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">منهجية البحث العلمي والتربوي</td>
             </tr>
           </tbody>
         </table>
         
         <h3 className="text-lg font-semibold mb-2">الفصل الثاني</h3>
         <table className="table-auto w-full mb-4">
           <thead>
             <tr>
               <th className="px-4 py-2 border">Module</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td className="px-4 py-2 border">القراءة المقطعية وتعليم وتعلم القراءة</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">تقنيات التعبير الشفهي والكتابي والكفاية التواصلية</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">ديداكتيك الصورة: الصورة البصرية- الصورة الشعرية</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">اللسانيات النظرية و التطبيقية</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">الديداكتيك العامة وديداكتيك اللغة العربية</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">تكنولوجيا الإعلام والاتصال والتعليم عن بعد</td>
             </tr>
           </tbody>
         </table>
         
         <h3 className="text-lg font-semibold mb-2">الفصل الأول</h3>
         <table className="table-auto w-full mb-4">
           <thead>
             <tr>
               <th className="px-4 py-2 border">Module</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td className="px-4 py-2 border">نظرية الأدب وقراءة وإقراء النصوص</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">ديداكتيك الدرس اللغوي</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">ديداكتيك التعبير والإنشاء</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">مدخل إلى علوم التربية</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">التربية الدامجة</td>
             </tr>
             <tr>
               <td className="px-4 py-2 border">التنشيط التربوي والحياة المدرسية</td>
             </tr>
           </tbody>
         </table>
       </div>
     </div>
    },
  };


const MASTERS_PAGE = () => {
    const [selectedMaster, setSelectedMaster] = useState(null);
    return (
<StaticPageContainer page_title="Masters">
<div className="container mx-auto p-6">
     
      <nav className="bg-gray-800 text-white p-4 rounded mb-6">
        <ul className="flex space-x-4">
          {Object.keys(masters).map((key) => (
            <li key={key}>
              <button
                className={`py-2 px-4 rounded ${selectedMaster === key ? 'bg-gray-600' : 'bg-gray-800 hover:bg-gray-600'}`}
                onClick={() => setSelectedMaster(key)}
              >
                {masters[key].id}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {selectedMaster && (
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4">{masters[selectedMaster].title}</h2>
          <p>{masters[selectedMaster].description}</p>
        </div>
      )}
    </div>
</StaticPageContainer>
    );
}
export default MASTERS_PAGE;