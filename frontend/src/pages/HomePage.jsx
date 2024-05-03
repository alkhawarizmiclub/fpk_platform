import { faBookOpenReader, faUserGraduate, faPenRuler, faChalkboardTeacher, faUserGear, faPeopleGroup, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import HomeStatsElement from "../components/HomeStatsElement";
import HomeGateElement from '../components/HomeGateElement';
import SectionTitle from '../components/SectionTitle';
import Activity from '../components/Activity';
import Major from '../components/Major';
import Staff from '../components/Staff';
import MajorCategory from '../components/MajorCategory';
import Announcement from '../components/Announcement';

const HomePage = () => {
    return (
        <>

            <section className='px-10'>
                <div className="-translate-y-5 grid grid-cols-4 gap-10 text-center">
                    <HomeGateElement icon={faBookOpenReader} label="espace étudiants" url="/" />
                    <HomeGateElement icon={faChalkboardTeacher} label="espace enseignants" url="/" />
                    <HomeGateElement icon={faBullhorn} label="avis et announces" url="/" />
                    <HomeGateElement icon={faPeopleGroup} label="clubs et organisations" url="/" />
                </div>
            </section>

            <section className="p-10">
                <div className="w-full grid grid-cols-2 gap-5">
                    <div className="flex flex-col justify-center gap-5">
                        <h1 className="text-3xl font-semibold">Présentation</h1>
                        <p>La Faculté Polydisciplinaire de Khouribga (FPK) a été créée en 2005 dans le cadre de la politique de décentralisation et de régionalisation que connait le Maroc.</p>
                        <p>La FPK est consciente du rôle qu'elle doit jouer pour être à la hauteur des attentes de la population de cette Province, établissement universitaire relevant de l'Université Sultan Moulay Sliman et ayant pour vocation la formation sous toutes ces formes (initiale et continue).</p>
                        <p>De par sa vocation la Faculté Polydisciplinaire de Khouribga offre des formations diversifiées couvrant plusieurs champs disciplinaires sous forme de filières à enseignement modulaire.</p>
                    </div>
                    <div>
                        <div className="aspect-video rounded-lg bg-cover bg-norepeat bg-center bg-[url(/map.jpg)]"></div>
                    </div>
                </div>
            </section>

            <section className="p-10 bg-orange-400">
                <div className="text-white grid grid-cols-5 text-center">
                    <HomeStatsElement icon={faBookOpenReader} number="5226" label="étudiants" />
                    <HomeStatsElement icon={faUserGraduate} number="537" label="lauréats" />
                    <HomeStatsElement icon={faPenRuler} number="13" label="filières" />
                    <HomeStatsElement icon={faChalkboardTeacher} number="90" label="enseignants" />
                    <HomeStatsElement icon={faUserGear} number="26" label="personnel" />
                </div>
            </section>

            <section className="p-10">
                <SectionTitle title="staff administratif" />
                <div className="grid grid-cols-4 gap-5">
                    <Staff first_name="Khalid" last_name="Mehdi" occupation="Occupation" img_src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2023/02/doyen-1-scaled-e1677513352365.jpg" />
                    <Staff first_name="Khalid" last_name="Sbiaai" occupation="Vice Doyen chargé à la pédagogie" img_src="http://www.fpk.ac.ma/wp-content/uploads/2022/12/vdoyen-e1670942309390.jpeg" />
                    <Staff first_name="Noureddine" last_name="Barka" occupation="Vice Doyen chargé de la recherche scientifique et de la coopération" img_src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2024/03/Noureddine-Barka.jpg" />
                    <Staff first_name="Omar" last_name="Hansali" occupation="Secrétaire Générale" img_src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2023/03/IMG-20230310-WA0003-e1678463961724.jpg" />
                </div>
            </section>

            <section className="p-10 bg-slate-100">
                <SectionTitle title="filières" />
                <div className="mb-4 flex justify-center gap-5">
                    <MajorCategory label="licences fondamentales" />
                    <MajorCategory label="licences professionnelles" />
                    <MajorCategory label="master" />
                    <MajorCategory label="doctorat" />
                </div>
                <div className="grid grid-cols-5 gap-5">
                    <Major label="science mathématique et informatique" url="#" img_src="/w.jpg" />
                    <Major label="science mathématique et application" url="#" img_src="/w.jpg" />
                    <Major label="science economie et gestion" url="#" img_src="/w.jpg" />
                    <Major label="science de la matière physique" url="#" img_src="/w.jpg" />
                    <Major label="science de la matière chimie" url="#" img_src="/w.jpg" />
                    <Major label="sciences de la Vie" url="#" img_src="/w.jpg" />
                    <Major label="géographie" url="#" img_src="/w.jpg" />
                    <Major label="études arabe" url="#" img_src="/w.jpg" />
                </div>
            </section>

            <section className="p-10">
                <SectionTitle title="avis & announces" />
                <div className='grid grid-cols-2 gap-5'>
                    <Announcement title="college: All the Stats, Facts, and Data You'll Ever Need to Know" url="#" img_src="/w.jpg"/>
                    <Announcement title="Announcement title number two this is a list of the Most Underrated Skills That'll Make You a Rockstar in the college Industry " url="#" img_src="/w.jpg"/>
                    <Announcement title="How to Explain college to Your Mom" url="#" img_src="/w.jpg"/>
                    <Announcement title="An Introduction to college" url="#" img_src="/w.jpg"/>
                    <Announcement title="So You've Bought college ... Now What?" url="#" img_src="/w.jpg"/>
                    <Announcement title="Announcement title #6 Announcement title #6" url="#" img_src="/w.jpg"/>
                    <Announcement title="Announcement title #7" url="#" img_src="/w.jpg"/>
                    <Announcement title="Announcement title #9" url="#" img_src="/w.jpg"/>
                    <Announcement title="Announcement title #10 Announcement title #10 Announcement title #10 Announcement title #10" url="#" img_src="/w.jpg"/>
                </div>
            </section>

            <section className="p-10">
                <SectionTitle title="activités & événements" />
                <div className="grid grid-cols-4 gap-5">
                    <Activity label="The 14 best website builders for small businesses in 2023" url="#" img_src="/w.jpg" date_day="01" date_month="January" date_year="2024"/>
                    <Activity label="The best web design software to use in 2023" url="#" img_src="/w.jpg" date_day="13" date_month="May" date_year="2024"/>
                    <Activity label="10 best freelance digital designers for hire in 2023" url="#" img_src="/w.jpg" date_day="20" date_month="Decemeber" date_year="2024"/>
                    <Activity label="10 best freelance Youtube banner designers for hire in 2023" url="#" img_src="/w.jpg" date_day="08" date_month="April" date_year="2024"/>
                    <Activity label="The 10 best freelance web designers for hire in 2023" url="#" img_src="/w.jpg" date_day="10" date_month="October" date_year="2024"/>
                    <Activity label="8 immersive ecommerce trends for 2023" url="#" img_src="/w.jpg" date_day="29" date_month="August" date_year="2024"/>
                    <Activity label="The 10 best freelance landing page designers for hire in 2023" url="#" img_src="/w.jpg" date_day="06" date_month="June" date_year="2024"/>
                    <Activity label="Activitie number #8" url="#" img_src="/w.jpg" date_day="30" date_month="July" date_year="2024"/>
                </div>
            </section>

        </>
    );
}

export default HomePage;