import { faBookOpenReader, faUserGraduate, faPenRuler, faChalkboardTeacher, faUserGear, faPeopleGroup, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import HomeStatsElement from "../components/HomeStatsElement";
import HomeGateElement from '../components/HomeGateElement';
import Section from "../components/Section";
import Activity from '../components/Activity';
import Major from '../components/Major';
import Staff from '../components/Staff';
import MajorCategory from '../components/MajorCategory';
import Announcement from '../components/Announcement';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Paths from "../routers/Paths.json";
import Header from '../components/Header';
import Footer from '../components/Footer';

const HomePage = () => {
    return (
        <>

            <Header />

            <main className="grow">

                <section className='px-10'>
                    <div className="-translate-y-5 grid grid-cols-4 gap-10 text-center">
                        <HomeGateElement icon={faBookOpenReader} label="espace étudiants" url={Paths.E_STUDENT_DASHBOARD_PAGE} />
                        <HomeGateElement icon={faChalkboardTeacher} label="espace enseignants" url={Paths.E_TEACHER_PAGE} />
                        <HomeGateElement icon={faBullhorn} label="avis et announces" url={Paths.ANNOUNCEMENTS_PAGE} />
                        <HomeGateElement icon={faPeopleGroup} label="clubs et organisations" url={Paths.CLUBS_PAGE} />
                    </div>
                </section>

                <Section>
                    <div className="w-full grid grid-cols-2 gap-5">
                        <div className="flex flex-col justify-center gap-5">
                            <h1 className="text-3xl font-semibold">Présentation</h1>
                            <p>La Faculté Polydisciplinaire de Khouribga (FPK) a été créée en 2005 dans le cadre de la politique de décentralisation et de régionalisation que connait le Maroc.</p>
                            <p>La FPK est consciente du rôle qu'elle doit jouer pour être à la hauteur des attentes de la population de cette Province, établissement universitaire relevant de l'Université Sultan Moulay Sliman et ayant pour vocation la formation sous toutes ces formes (initiale et continue).</p>
                            <p>De par sa vocation la Faculté Polydisciplinaire de Khouribga offre des formations diversifiées couvrant plusieurs champs disciplinaires sous forme de filières à enseignement modulaire.</p>
                            <div>
                                <Button plain_bg={true} >
                                    <Link className="py-3 px-6 block" to={Paths.PRESENTATION_PAGE}>Show More</Link>
                                </Button>
                            </div>
                        </div>
                        <div>
                            <div className="aspect-video rounded-lg bg-cover bg-norepeat bg-center bg-[url(/map.jpg)]"></div>
                        </div>
                    </div>
                </Section>

                <Section className="bg-orange-400">
                    <div className="text-white grid grid-cols-5 text-center">
                        <HomeStatsElement icon={faBookOpenReader} number="5226" label="étudiants" />
                        <HomeStatsElement icon={faUserGraduate} number="537" label="lauréats" />
                        <HomeStatsElement icon={faPenRuler} number="13" label="filières" />
                        <HomeStatsElement icon={faChalkboardTeacher} number="90" label="enseignants" />
                        <HomeStatsElement icon={faUserGear} number="26" label="personnel" />
                    </div>
                </Section>

                <Section title="staff administratif">
                    <div className="grid grid-cols-4 gap-5">
                        <Staff first_name="Khalid" last_name="Mehdi" occupation="Occupation" img_src="/dean.jpg" />
                        <Staff first_name="Khalid" last_name="Sbiaai" occupation="Vice Doyen chargé à la pédagogie" img_src="/vide_dean_1.jpeg" />
                        <Staff first_name="Noureddine" last_name="Barka" occupation="Vice Doyen chargé de la recherche scientifique et de la coopération" img_src="/vice_dean_2.jpg" />
                        <Staff first_name="Omar" last_name="Hansali" occupation="Secrétaire Générale" img_src="/secretary_general.jpg" />
                    </div>
                </Section>

                <Section title="filières" className="p-10 bg-slate-100">
                    <div>
                        <div className="mb-4 flex justify-center gap-5">
                            <MajorCategory label="licences fondamentales" />
                            <MajorCategory label="licences professionnelles" />
                            <MajorCategory label="master" />
                            <MajorCategory label="doctorat" />
                        </div>
                        <div className="grid grid-cols-4 gap-5">
                            <Major label="science mathématique et informatique" url="/smi" img_src="https://fpk-biblio.netlify.app/img/smi.jpg" />
                            <Major label="science mathématique et application" url="/sma" img_src="https://fpk-biblio.netlify.app/img/sma.jpg" />
                            <Major label="science economie et gestion" url="seg" img_src="https://fpk-biblio.netlify.app/img/seg.jpg" />
                            <Major label="science de la matière physique" url="smp" img_src="https://fpk-biblio.netlify.app/img/smp.jpg" />
                            <Major label="science de la matière chimie" url="smc" img_src="https://fpk-biblio.netlify.app/img/smc.jpg" />
                            <Major label="sciences de la Vie" url="sv" img_src="https://fpk-biblio.netlify.app/img/sv.jpg" />
                            <Major label="géographie" url="geo" img_src="https://fpk-biblio.netlify.app/img/geo.jpg" />
                            <Major label="études arabe" url="ea" img_src="https://fpk-biblio.netlify.app/img/ea.jpg" />
                        </div>

                    </div>

                </Section>

                <Section title="avis & announces" className="p-10">
                    <div className='grid grid-cols-4 gap-5'>
                        <Announcement title="Avis aux étudiants SV S6" url="#" img_src="/w.jpg" />
                        <Announcement title="TC PC : Séances de rattrapage du TD de Module Algèbre" url="#" img_src="/w.jpg" />
                        <Announcement title="دليل الدخول لمنصة روزيتا عبر منصة موودل" url="#" img_src="/w.jpg" />
                        <Announcement title="P.E GMS/S5, Examen de rattrapage du module: réhabilitation des sites miniers" url="#" img_src="/w.jpg" />
                        <Announcement title="Colloque International sur le thème : Résilience Entrepreneuriale en Situation de Crise" url="#" img_src="/w.jpg" />
                        <Announcement title="Session d’information « FutureSkills4all »" url="#" img_src="/w.jpg" />
                        <Announcement title="Formation en méthodologie de recherche FD SEG" url="#" img_src="/w.jpg" />
                        <Announcement title="Announcement title #9" url="#" img_src="/w.jpg" />
                        <Announcement title="Announcement title #10 Announcement title #10 Announcement title #10 Announcement title #10" url="#" img_src="/w.jpg" />
                    </div>
                    <div className="text-center">
                        <Button plain_bg={true} >
                            <Link className="py-3 px-6 block" to={Paths.ANNOUNCEMENTS_PAGE} >Show More</Link>
                        </Button>
                    </div>
                </Section>

                <Section title="activités & événements" className="p-10 bg-slate-100">
                    <div className="grid grid-cols-4 gap-5">
                        <Activity label="The 14 best website builders for small businesses in 2023" url="#" img_src="/w.jpg" date_day="01" date_month="January" date_year="2024" location="Casablanca" />
                        <Activity label="The best web design software to use in 2023" url="#" img_src="/w.jpg" date_day="13" date_month="May" date_year="2024" location="Casablanca" />
                        <Activity label="10 best freelance digital designers for hire in 2023" url="#" img_src="/w.jpg" date_day="20" date_month="Decemeber" date_year="2024" location="Casablanca" />
                        <Activity label="10 best freelance Youtube banner designers for hire in 2023" url="#" img_src="/w.jpg" date_day="08" date_month="April" date_year="2024" location="Casablanca" />
                        <Activity label="The 10 best freelance web designers for hire in 2023" url="#" img_src="/w.jpg" date_day="10" date_month="October" date_year="2024" location="Casablanca" />
                        <Activity label="8 immersive ecommerce trends for 2023" url="#" img_src="/w.jpg" date_day="29" date_month="August" date_year="2024" location="Casablanca" />
                        <Activity label="The 10 best freelance landing page designers for hire in 2023" url="#" img_src="/w.jpg" date_day="06" date_month="June" date_year="2024" location="Casablanca" />
                        <Activity label="Activitie number #8" url="#" img_src="/w.jpg" date_day="30" date_month="July" date_year="2024" location="Casablanca" />
                    </div>
                    <div className="text-center">
                        <Button plain_bg={true} >
                            <Link className="py-3 px-6 block" to={Paths.EXTRACURRICULAR_ACTIVITIES_PAGE}>Show More</Link>
                        </Button>
                    </div>
                </Section>
            </main>

            <Footer />

        </>
    );
}

export default HomePage;