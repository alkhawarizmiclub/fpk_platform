import StaticPageContainer from "../../layouts/StaticPageContainer";
import React, { useState } from 'react';
const formations = {
    SMI: {
      title: 'Licence Fondamentale en Sciences Mathématiques et Informatique',
      objectifs: [
        'Développer les connaissances des étudiants en informatique fondamentale, mathématiques, physique, langues et communication.',
        'Préparer les étudiants à poursuivre leur cursus de formation dans le cadre d’un master en informatique ou d’une école d’ingénieur.',
        'Préparer les étudiants à intégrer la vie professionnelle dans les domaines correspondants à leur formation.',
      ],
      competences: [
        'Base de connaissance académique générale avec un ancrage disciplinaire pendant la première année.',
        'Des enseignements d’approfondissement des connaissances en informatique pendant la deuxième année.',
        'Une formation théorique et pratique spécifique dans un parcours choisi pendant la troisième année, ainsi qu’une acquisition de compétences en méthodologie et en entreprenariat.',
      ],
      debouches: [
        'Poursuivre leurs études en Master ou écoles des ingénieurs.',
        'Intégrer une autre filière au cours de la formation.',
        'Accéder à l’emploi dans les différents secteurs où les mathématiques et l’informatique sont valorisées en tant qu’outils de savoir et savoir faire.',
      ],
      conditions: [
        'Cette formation est destinée aux étudiants titulaires d’un baccalauréat en sciences mathématiques ou un diplôme reconnu équivalent, ou sciences et techniques après étude du dossier.',
        'Diplômes requis : Baccalauréat en sciences mathématiques ou Baccalauréat en sciences et techniques avec une moyenne générale supérieure ou égale à 14/20.',
      ],
      modules: {
        'Semestre 1': [
          'Analyse 1 – Suites Numériques et Fonctions',
          'ALGEBRE 1- Généralités et Arithmétique dans Z',
          'ALGEBRE 2- Structures, Polynômes et Fractions Rationnelles',
          'Physique 1 – Mécanique 1',
          'Physique 2 – Thermodynamique',
          'Informatique 1 – Introduction à l’informatique',
          'LT I',
        ],
        'Semestre 2': [
          'Analyse 2- Intégration',
          'Analyse 3 – Formule de Taylor, Développement Limité et Applications',
          'ALGEBRE 3- Espaces Vectoriels, Matrices et Déterminants',
          'Physique 3 – Electrostatique et Electrocinétique',
          'Physique 4 – Optique 1',
          'Informatique 2 – Algorithmique I',
          'LT II',
        ],
        'Semestre 3': [
          'PROGRAMMATION I',
          'ALGORITHMIQUE II',
          'SYSTEME D’EXPLOITATION I',
          'Probabilités-Statistiques',
          'TECHNOLOGIE DU WEB',
          'ELECTRONIQUE',
        ],
        'Semestre 4': [
          'PROGRAMMATION II',
          'STRUCTURES DE DONNEES',
          'SYSTEME D’EXPLOITATION II',
          'Analyse Numérique 1',
          'ARCHITECTURE DES ORDINATEURS',
          'ELECTROMAGNETISME',
        ],
        'Semestre 5': [
          'BASES DE DONNÉES',
          'COMPILATION',
          'RÉSEAUX',
          'RECHERCHE OPÉRATIONNELLE',
          'CONCEPTION ORIENTÉE OBJETS (UML)',
          'PROGRAMMATION ORIENTEE OBJETS (LANGAGE – C++ ou Java)',
        ],
        'Semestre 6': [
          'WEB DYNAMIQUE (PHP 5 – MYSQL)',
          'BASE DE DONNEES AVANCEES',
          'GESTION DE PROJETS',
          'ADMINISTRATION RESEAUX',
          'PROJET TUTORÉ 1',
          'PROJET TUTORÉ 2',
        ],
      }
    },
    // Ajoutez d'autres formations comme SMA, SMP, etc. ici
    SMA: {
        title: 'Licence Fondamentale en Sciences Mathématiques et Applications',
        objectifs: [
          'Assurer aux étudiants une formation pluridisciplinaire, à dominance Mathématiques axée sur les aspects théoriques et fondamentaux des Mathématiques et sur les applications de l’outil informatique au profit des Mathématiques Appliquées et de la physique.',
          'Donner à l’étudiant les méthodes de travail et les outils de base afin d’acquérir des connaissances scientifiques lui permettant d’élargir ses champs de compétence.',
          'Développer chez l’étudiant un esprit de rigueur, d’initiative et de volonté d’apprentissage et de recherche.',
          'Susciter l’étudiant à poursuivre ses études en Master ou dans des écoles d’ingénieurs ou de s’insérer dans la vie active.',
        ],
        competences: [
          'Acquérir des connaissances scientifiques fondamentales en mathématiques (de S1 à S3) en s’appuyant sur des applications concrètes venant de la physique ou autre domaine en utilisant l’informatique pour traiter ses applications (de S3 à S6).',
          'Acquérir un esprit d’ouverture sur plusieurs domaines et un esprit d’initiative pour aborder des enseignements spécialisés et appliqués en Master ou écoles d’ingénieurs.',
          'Acquérir l’ouverture pratique souhaitable pour intégrer la vie professionnelle.',
        ],
        debouches: [
          'Poursuite des études en Master.',
          'Intégration des écoles d’ingénieurs.',
          'Accès à d’autres filières en cours de formation.',
          'Insertion dans la vie active.',
        ],
        conditions: [
          'Diplômes requis : La filière Sciences Mathématiques et Applications est ouverte aux bacheliers scientifiques.',
          'Sciences mathématiques ou d’un diplôme reconnu équivalent : accès direct.',
          'Sciences physiques ou d’un diplôme reconnu équivalent avec étude du dossier scolaire du candidat.',
          'Accès par passerelles : Sont autorisés à s’inscrire en troisième semestre S3 les étudiants ayant validé les deux premiers semestres S1 et S2 de la filière Sciences Mathématiques et Informatique (SMI) ou ayant réussi la première année des classes préparatoires MPSI ou PCSI d’un établissement public marocain.',
        ],
        modules: {
          'Semestre 1': [
            'Analyse 1 – Suites Numériques et Fonctions',
            'ALGEBRE 1- Généralités et Arithmétique dans Z',
            'ALGEBRE 2- Structures, Polynômes et Fractions Rationnelles',
            'Physique 1 – Mécanique 1',
            'Physique 2 – Thermodynamique',
            'Informatique 1 – Introduction à l’informatique',
            'LT I',
          ],
          'Semestre 2': [
            'Analyse 2- Intégration',
            'Analyse 3 – Formule de Taylor, Développement Limité et Applications',
            'ALGEBRE 3- Espaces Vectoriels, Matrices et Déterminants',
            'Physique 3 – Electrostatique et Electrocinétique',
            'Physique 4 – Optique 1',
            'Informatique 2 – Algorithmique I',
            'LT II',
          ],
          'Semestre 3': [
            'Analyse 4- Séries Numériques, Suites et Séries de Fonctions',
            'Analyse 5- Fonctions de Plusieurs Variables',
            'ALGEBRE 4- Réduction des Endomorphismes et Applications',
            'Probabilités-Statistiques',
            'Physique 5 – Electricité 2',
            'Informatique 3 – Algorithmique et Programmation',
          ],
          'Semestre 4': [
            'Analyse 6 – Calcul Intégral et Formes Différentielles',
            'ALGEBRE 5- Dualité, Espaces Euclidiens, Espaces Hermitiens',
            'ALGEBRE 6- Structures Algébriques',
            'Analyse Numérique 1',
            'Physique 6 – Mécanique du solide',
            'Informatique 4 – Algorithmique et structures de données',
          ],
          'Semestre 5': [
            'Topologie',
            'Intégration',
            'Calcul différentiel',
            'Programmation Mathématique',
            'Analyse numérique 2',
            'Informatique 5 – Programmation orientée objet',
          ],
          'Semestre 6': [
            'Equations différentielles ordinaires',
            'Introduction aux Equations aux dérivées Partielles',
            'Analyse Fonctionnelle',
            'Introduction au Calcul scientifique',
            'Projet tutoré 1',
            'Projet tutoré 2',
          ],
        }
         },
         SMP: {
            title: 'Licence Fondamentale en Sciences de de la Matière Physiques',
            objectifs: [
              'Former des licenciés en physique, spécialisés dans l’une des options proposées à partir du cinquième semestre.',
              'Dispenser à l’étudiant les connaissances scientifiques fondamentales et élargir ses champs de compétences.',
              'Inculquer à l’étudiant des méthodes de travail.',
              'Développer chez l’étudiant un esprit de synthèse, de rigueur et d’initiative.',
              'Susciter en l’étudiant, de par les options offertes, un choix judicieux de la voie ultérieure.',
            ],
            competences: [
              'Offrir un socle de connaissance académique générale avec un ancrage disciplinaire pendant une année.',
              'Offrir des enseignements d’approfondissement des connaissances dans la discipline pendant une année.',
            ],
            debouches: [
              'Intégration de certaines écoles d’ingénieur.',
              'Insertion dans la vie active.',
              'Préparer les étudiants à une future activité de recherche.',
            ],
            conditions: [
              'Diplômes requis : Licence à accès libre pour les bacheliers scientifiques.',
              'Accès par passerelles : Accès aux semestres de la filière sur validation des semestres précédents d’une filière SMP nationale. Accès au cinquième semestre : Bac+2 ou classes préparatoires, après étude de dossier par une commission.',
            ],
            modules: {
              'Semestre 1': [
                'Mécanique du point',
                'Thermodynamique I',
                'Atomistique',
                'Thermochimie',
                'Analyse 1',
                'Algèbre 1',
                'LT I',
              ],
              'Semestre 2': [
                'Electrostatique et Electrocinétique',
                'Optique géométrique',
                'Liaisons chimiques',
                'Chimie des solutions',
                'Analyse 2',
                'Algèbre 2',
                'LT II',
              ],
              'Semestre 3': [
                'Mécanique du solide',
                'Thermodynamique 2',
                'Electromagnétisme dans le vide',
                'Chimie organique générale',
                'Analyse 3',
                'Analyse numérique et algorithme',
              ],
              'Semestre 4': [
                'Electronique de base',
                'Optique physique',
                'Electricité 3',
                'Mécanique quantique',
                'Cristallographie géométrique et cristallochimie',
                'Informatique',
              ],
              'Semestre 5': [
                'Electronique analogique',
                'Mécanique analytique et vibrations',
                'Physique nucléaire',
                'Physique des matériaux',
                'Physique quantique',
                'Physique statistique',
              ],
              'Semestre 6': [
                'Physique numérique',
                'Mécaniques des milieux continus & Elasticité',
                'Physique atomique',
                'Science des matériaux',
                'PFE',
                'PFE',
              ],
            },
          },
          SMC: {
            title: 'Licence Fondamentale en Sciences de la Matière Chimie',
            objectifs: [
              'Assurer une formation dans les deux grandes disciplines de la chimie (organique et inorganique).',
              'Initier l’étudiant aux principales techniques d’analyse chimique et leurs applications.',
              'Mettre en valeur les transitions entre : le fondamental, le pratique - à l’échelle de laboratoire - et l’appliqué.',
            ],
            competences: [
              'Maîtrise des bases fondamentales en chimie (organique et inorganique).',
              'Connaissance des propriétés et applications des grandes familles des composés chimiques organiques et inorganiques.',
              'Formation adéquate en matière de synthèse, analyse et caractérisation.',
              'Initiation au travail de laboratoire (organisation, méthodologie, recherche, prise d’initiative…etc.).',
            ],
            debouches: [
              'Accès aux cycles d’études supérieures (Master, doctorat), instituts et écoles spécialisées.',
              'Accès à la vie active dans les domaines apparentés à la chimie appliquée.',
              'Accéder à la vie active dans les secteurs liés à la chimie.',
            ],
            conditions: [
              'Diplômes requis : Être titulaires d’un baccalauréat en Sciences ou un diplôme équivalent.',
              'Accès par passerelles : Accès aux semestres de la filière sur validation des semestres précédents d’une filière SMC nationale. Être titulaires d’un DEUG en Sciences ou un diplôme équivalent. Obtenir l’accord de la commission pédagogique de la filière après étude du cursus de l’étudiant(e).',
            ],
            modules: {
              'Semestre 1': [
                'Mécanique du point',
                'Thermodynamique I',
                'Atomistique',
                'Thermochimie',
                'Analyse 1',
                'Algèbre 1',
                'LT I',
              ],
              'Semestre 2': [
                'Electrostatique et Electrocinétique',
                'Optique géométrique',
                'Liaisons chimiques',
                'Chimie des solutions',
                'Analyse 2',
                'Algèbre 2',
                'LT II',
              ],
              'Semestre 3': [
                'Chimie organique générale',
                'Chimie descriptive I et Diagramme de phases',
                'Electromagnétisme',
                'Chimie expérimentale (TP)',
                'Chimie des électrolytes',
                'Mathématiques pour la chimie',
              ],
              'Semestre 4': [
                'Hydrocarbures et fonctions monovalentes',
                'Cristallographie géométrique et cristallochimie I',
                'Thermodynamique chimique',
                'Mécanique quantique',
                'Informatique',
                'Probabilités statistiques',
              ],
              'Semestre 5': [
                'Chimie organique fonctionnelle',
                'Radiocristallographie et cristallochimie II',
                'Cinétique chimique',
                'Chimie théorique',
                'Electrochimie',
                'Techniques spectroscopiques d’analyse (UV-IR, RMN, masse)',
              ],
              'Semestre 6': [
                'Les grandes classes des réactions organiques',
                'Chimie descriptive II et chimie de coordination',
                'Chimie organométallique et catalyse homogène',
                'Chimie d’interface et catalyse hétérogène',
                'PT (Encadrement technique-PFE)',
                'PT (Mémoire-PFE)',
              ],
            },
          },
          SV: {
            title: 'Licence Fondamentale en Sciences de la Vie',
            objectifs: [
              'De dispenser à l’étudiant une solide formation de base dans les principales disciplines des Sciences de la vie.',
              'D’élargir ses champs de compétence par des formations complémentaires en communication et langues étrangères.',
              'D’inculquer à l’étudiant des méthodes scientifiques de travail.',
              'De développer chez l’étudiant un esprit de synthèse, de rigueur et d’initiative.',
              'De susciter en l’étudiant un choix judicieux de la voie ultérieure.',
              'La formation est conçue pour permettre aux étudiants d’acquérir une bonne connaissance du fonctionnement de l’entreprise via l’utilisation d’outils traditionnels (contrôle de gestion, fiscalité…), mais aussi à l’aide de nouveaux concepts destinés à familiariser l’étudiant avec les enjeux d’une économie caractérisée par des changements rapides et non prévisibles.',
            ],
            debouches: [
              'Les titulaires de la licence en sciences de la vie + la solide formation en sixième semestre en Biotechnologie peuvent accéder directement aux filières de masters (fondamentaux ou appliqués) et aux débouchés correspondants.',
            ],
            competences: [
              'Des bases solides pour la poursuite des études de master et de doctorat.',
              'Des outils et méthodes de travail.',
              'Des qualifications destinées à faciliter son insertion professionnelle.',
              'Création des entreprises dans le domaine de la Biotechnologie.',
            ],
            conditions: [
              'Diplômes requis : les titulaires d’un Baccalauréat en Sciences Expérimentales, Sciences de la Vie et de la Terre (SVT), Sciences Agricoles (SAG), Sciences Expérimentales Physique–Chimie (SPC), Sciences Mathématiques A et B (SMA/B).',
            ],
            modules: {
              'Semestre 1': [
                'Biologie Cellulaire',
                'Embryologie et Histologie',
                'Géologie générale',
                'Mathématiques',
                'Physique I- Optique- Physique nucléaire & Thermodynamique',
                'Chimie I- Chimie Générale',
                'Langue et Terminologie I',
              ],
              'Semestre 2': [
                'Biologie des organismes animaux',
                'Biologie des organismes végétaux',
                'Géodynamique externe',
                'Géodynamique interne',
                'Physique II- Mécanique & Electricité',
                'Chimie II- Chimie Organique',
                'Langue et Terminologie II',
              ],
              'Semestre 3': [
                'Biochimie Structurale',
                'Microbiologie',
                'Ecologie Générale',
                'Techniques chimiques pour la biologie',
                'Biophysique',
                'Statistiques',
              ],
              'Semestre 4': [
                'Enzymologie & Biochimie Métabolique',
                'Génétique I',
                'Faunistique',
                'Floristique',
                'Physiologie animale',
                'Physiologie végétale',
              ],
              'Semestre 5': [
                'Physiologie des Grandes fonctions',
                'Croissance et développement des plantes',
                'Ecologie Générale II',
                'Immunologie',
                'Génétique II',
                'Biologie moléculaire',
              ],
              'Semestre 6': [
                'Biotechnologie',
                'Génie Microbiologique',
                'Phytopathologie',
                'Bactériologie des eaux',
                'Projet Tutoré',
                'Projet Tutoré',
              ],
            },
          },
          SEG: {
            title: 'Licence Fondamentale en Sciences Économiques et Gestion',
            objectifs: [
              'La formation a pour particularité de combiner de façon équilibrée des enseignements en économie et en gestion. Elle permet donc de donner aux étudiants une vision globale des problèmes économiques, de gestion et de régulation des organisations tant privées que publiques.',
              'Par ailleurs, elle a pour particularité de préparer aux métiers de l’enseignement dans le domaine des sciences économiques et sociales et de la gestion.',
            ],
            debouches: [
              'Les étudiants issus de cette formation seront particulièrement aptes à exercer dans les PME – PMI, et de manière générale dans les organisations de taille moyenne.',
              'Ils pourront occuper des fonctions telles qu\'Assistant de gestion comptable et financière, Assistant Chef de produit, Commercial pour la Licence Générale, Assistant Chef de marché ou Assistant de Responsable Export pour l’option Commerce International, ou Assistant de Responsable Financier pour l’option Finance.',
            ],
            competences: [
              'Capacité d’analyse et de synthèse des données économiques, statistiques comptables et financières.',
              'Maîtrise des outils d’analyse statistique, des logiciels de traitement des données statistiques, des logiciels de conception d’enquête et d’acquisition des données.',
              'Capacité d’analyse et de synthèse des phénomènes économiques contemporains.',
              'Maîtrise des concepts fondamentaux en économie, gestion et sciences humaines.',
              'Capacité à modéliser une situation économique, à traiter et à synthétiser différentes sources d’information.',
            ],
            conditions: [
              'Bac sciences économiques et sciences expérimentales pour le tronc commun à partir du S1 en fonction de la capacité d’accueil de l’établissement.',
              'Les passerelles entre les différentes options seront étudiées en fonction des pré-requis des différents modules pour déterminer les équivalences.',
            ],
            modules: {
              'Semestre 1': [
                'Comptabilité Générale (I)',
                'Management (I)',
                'Introduction à l’économie',
                'Microéconomie (I)',
                'Statistique descriptive',
                'Analyse Mathématique',
                'Langues et Terminologie (I)',
              ],
              'Semestre 2': [
                'Macroéconomie',
                'Microéconomie (II)',
                'Probabilités',
                'Algèbre – Mathématiques Financières',
                'Comptabilité Générale (II)',
                'Management (II)',
                'Langues et Terminologie (II)',
              ],
              'Semestre 3': [
                'Économie Monétaire et Financière (I)',
                'Problèmes Économiques et Sociaux',
                'Comptabilité Analytique',
                'Marketing de Base',
                'Échantillonnage et Estimation',
                'Introduction à l’étude de Droit',
              ],
              'Semestre 4': [
                'Économie Monétaire et Financière (II)',
                'Finances Publiques',
                'Informatique de Gestion',
                'Analyse Financière',
                'Comptabilité des Sociétés',
                'Droit commercial et des sociétés',
              ],
              'Semestre 5': [
                'Fiscalité',
                'Gestion Financière',
                'Marketing Approfondi',
                'Gestion des Ressources Humaines',
                'Droit des Affaires',
                'Informatique de Gestion / Recherche Opérationnelle',
              ],
              'Semestre 6': [
                'Audit Général',
                'Contrôle de Gestion',
                'Management Stratégique',
                'Stratégies Industrielles',
                'P.F.E',
                'P.F.E',
              ],
            },
          },
          GEO: {
            title: 'الإجازة الأساسية في الجغرافيا',
            objectifs: [
              'توجيه تدريس الجغرافيا نحو المجال التطبيقي',
              'ربط التدريس بقضايا التنمية',
              'تزويد الطلاب بالمعارف المناسبة المتعلقة بتطور المجالات',
              'اكتساب المعرفة الجغرافية والسيطرة على الأسس النظرية والمنهجية للجغرافيا',
              'تمكين الطلاب من فهم آليات قوانين الطبيعة والمجالات',
            ],
            debouches: [
              'تكوين أطر قادرة على التدخل في ميدان التهيئة والتدبير المجالي المحلي والجهوي.',
              'تكوين أطر قادرة على التحليل الأولي للبيئة والتشخيص والتحليل في مجال التهيئة سواء في القطاع العمومي أو الخاص.',
              'تكوين أطر قادرة على التدريس.',
              'متابعة البحث الجامعي (الولوج إلى سلك الماستر والدكتوراه).',
            ],
            competences: [
              'توجيه تدريس الجغرافيا نحو المجال التطبيقي.',
              'ربط التدريس بقضايا التنمية.',
              'تزويد الطلاب بالمعارف المناسبة المتعلقة بتطور المجالات.',
              'اكتساب المعرفة الجغرافية والسيطرة على الأسس النظرية والمنهجية للجغرافيا.',
              'تقوية قدرات الطلاب على تحليل الظواهر المجالية وإعداد برامج وسياسات تهيئة الموارد والمجالات.',
            ],
            conditions: [
              'الدبلومات المتطلبة: الباكالوريا أو ما يعادلها.',
              'الجسور: الدبلومات المتطلبة، المعارف البيداغوجية الخاصة، طرق الانتقاء، أعداد الطلبة.',
            ],
            modules: {
              'الفصل الأول': [
                'جيومورفولوجيا عامة (M01)',
                'مناخ (M02)',
                'جغرافيا الأرياف (M03)',
                'جغرافيا السكان (M04)',
                'قراءة الخرائط الطبوغرافية (M05)',
                'تاريخ (M06)',
                'اللغات (M07)',
              ],
              'الفصل الثاني': [
                'جيوبنيوية (M08)',
                'بيوجغرافية (M09)',
                'جغرافيا المدن (M10)',
                'جغرافيا اقتصادية (M11)',
                'قراءة الوثائق وتحليل الخرائط الطبوغرافية (M12)',
                'إحصاء وتعبير بياني (M13)',
                'اللغات (M14)',
              ],
              'الفصل الثالث': [
                'مرفومناخ (M15)',
                'مناخ دينامي (M16)',
                'دينامية المجال الريفي (M17)',
                'دينامية المجال الحضري (M18)',
                'سميولوجيا الخرائط (M19)',
                'علم الاجتماع (M20)',
              ],
              'الفصل الرابع': [
                'تطبيقات مرفوبنيوية (M21)',
                'نبات وتربة (M22)',
                'جغرافيا حوض البحر الأبيض المتوسط (M23)',
                'جغرافيا المغرب العامة (M24)',
                'خرائط موضوعاتية وتحليلية (M25)',
                'أدوات ومناهج البحث الجغرافي (M26)',
              ],
              'الفصل الخامس': [
                'جغرافيا المخاطر (M27)',
                'إعداد التراب الوطني (M28)',
                'نظم المعلومات الجغرافية (M29)',
                'تهيئة الأحواض المنجمية (M30)',
                'مناهج البحث في الجغرافيا البشرية (M31)',
                'البنيات التحتية وهيكلة المجال (M32)',
              ],
              'الفصل السادس': [
                'التدبير البيئي (M33)',
                'الجغرافية السياسية (M34)',
                'إعداد المجال الريفي (M35)',
                'تهيئة المجال الحضري (M36)',
                'تدريب جماعي (M37)',
                'مشروع بحث نهاية الدراسة (M38)',
              ],
            },
          },
          EA: {
            title: 'الإجازة في الدراسات العربية',
            objectifs: [
              'العمل على الارتقاء بالدرس اللغوي والأدبي والفني في الجامعة المغربية، وباللغة العربية، إلى مستوى أعلى.',
              'جعل الدراسة الأدبية منفتحة على الفنون وعلى مختلف أشكال التعبير الشفوية والكتابية والرقمية.',
              'تعميق صلات اللغة العربية وآدابها وفنونها المختلفة بالحياة الاجتماعية والثقافية وتوسيع مجالها ليشمل المظاهر الشعبية واليومية، وتأهيل المشتغلين بها للعب دور تحليلي ونقدي ومعرفي في المجتمع.',
            ],
            debouches: [
              'تكوين مجازين مؤهلين في اللغة والأدب والفن لمواصلة الدراسات العليا في اللغة والأدب والفن، والانخراط في البحث العلمي والأكاديمي.',
              'الانخراط في تدريس اللغة والأدب في أسلاك التعليم.',
              'الانخراط في المؤسسات العامة والخاصة في مجالات تدريس اللغة والأدب وتنشيط الأدب والفن.',
            ],
            competences: [
              'جعل الطالب ملماً بالمادة اللغوية والأدبية عبر العصور.',
              'جعل الطالب ملماً بالفكر الأدبي ومناهجه قديماً وحديثاً، وفي الإنجازات العربية والغربية على السواء.',
              'تمكين الطالب من أدوات ومناهج قراءة النص الأدبي والفني والتمكن من استخلاص قيمه الفنية والجمالية وتذوقها.',
            ],
            conditions: [
              'الدبلومات المتطلبة: الباكالوريا أو ما يعادلها.',
              'الجسور (الدبلومات المتطلبة، المعارف البيداغوجية الخاصة، طرق الانتقاء، أعداد الطلبة).',
            ],
            modules: {
              'الفصل الأول': [
                'نحو 1 (M01)',
                'مدخل إلى اللسانيات (M02)',
                'مدخل إلى الأدب العربي (M03)',
                'بلاغة (M04)',
                'عروض (M05)',
                'حضارة إسلامية (M06)',
                'لغة أجنبية 1 (M07)',
              ],
              'الفصل الثاني': [
                'نحو 2 (M08)',
                'فقه اللغة (M09)',
                'شعر قديم (M10)',
                'شعر حديث (M11)',
                'صوتيات (M12)',
                'فلسفة (M13)',
                'لغة أجنبية 2 (M14)',
              ],
              'الفصل الثالث': [
                'نحو 3 (M15)',
                'صوتيات وصواتة (M16)',
                'سرد قديم (M17)',
                'سرد حديث (M18)',
                'نقد قديم (M19)',
                'معجم (M20)',
              ],
              'الفصل الرابع': [
                'صرف (M21)',
                'تركيب (M22)',
                'أدب مغربي أندلسي (M23)',
                'مسرح (M24)',
                'مناهج النقد الأدبي الحديث (M25)',
                'دلالة (M26)',
              ],
              'الفصل الخامس': [
                'قضايا نحوية (M27)',
                'سيميائيات (M28)',
                'تحليل الخطاب (M29)',
                'سرد مغربي حديث (M30)',
                'الثقافة الشعبية وفنون الأداء (M31)',
                'محترفات (M32)',
              ],
              'الفصل السادس': [
                'الترجمة (M33)',
                'التلقي والتأويل (M34)',
                'الأسلوبية والبلاغة الجديدة (M35)',
                'الأدب المقارن (M36)',
                'تداوليات (M37)',
                'مشروع نهاية الدراسة (M38)',
              ],
            },
          },
  };
const LFS_PAGE = () => {
    const [selectedFormation, setSelectedFormation] = useState('SMI');

    const formation = formations[selectedFormation];
    return (
<StaticPageContainer page_title="licence-fondamentale">
<div className="min-h-screen bg-gray-100">
      {/* En-tête */}
      

      {/* Barre de Navigation avec Onglets */}
      <nav className="bg-gray-800 text-white py-2   ">
        <div className="container mx-auto flex space-x-2">
          {Object.keys(formations).map((key) => (
            <button
              key={key}
              onClick={() => setSelectedFormation(key)}
              className={`px-4 py-2 rounded ${
                selectedFormation === key ? 'bg-white-600' : 'bg--700'
              }`}
            >
              {key}
            </button>
          ))}
        </div>
      </nav>

      {/* Contenu Principal */}
      <main className="container mx-auto p-6">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">{formation.title}</h2>

          {/* Objectifs */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Objectifs de la formation</h3>
            <ul className="list-disc list-inside text-gray-700">
              {formation.objectifs.map((obj, index) => (
                <li key={index}>{obj}</li>
              ))}
            </ul>
          </div>

          {/* Compétences */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Compétences à acquérir</h3>
            <ul className="list-disc list-inside text-gray-700">
              {formation.competences.map((comp, index) => (
                <li key={index}>{comp}</li>
              ))}
            </ul>
          </div>

          {/* Débouchés */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Débouchés de la formation</h3>
            <ul className="list-disc list-inside text-gray-700">
              {formation.debouches.map((deb, index) => (
                <li key={index}>{deb}</li>
              ))}
            </ul>
          </div>

          {/* Conditions d’Accès */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Conditions d’accès</h3>
            <ul className="list-disc list-inside text-gray-700">
              {formation.conditions.map((cond, index) => (
                <li key={index}>{cond}</li>
              ))}
            </ul>
          </div>

          {/* Modules */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Modules</h3>
            {Object.keys(formation.modules).map((semester, index) => (
              <div key={index} className="mb-4">
                <h4 className="text-md font-semibold mb-2">{semester}</h4>
                <table className="min-w-full bg-white border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="py-2 px-4 text-left">Module</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formation.modules[semester].map((module, modIndex) => (
                      <tr key={modIndex} className="border-b">
                        <td className="py-2 px-4">{module}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ))}
          </div>
        </section>
      </main>
</div>
</StaticPageContainer>
    );
}
export default LFS_PAGE;