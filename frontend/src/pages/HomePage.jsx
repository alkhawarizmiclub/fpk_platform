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
                    <Staff first_name="Omar" last_name="Hansali" occupation="Secrétaire Générale" img_src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2023/03/IMG-20230310-WA0003-e1678463961724.jpg" />
                    <Staff first_name="Khalid" last_name="Sbiaai" occupation="Vice Doyen chargé à la pédagogie" img_src="http://www.fpk.ac.ma/wp-content/uploads/2022/12/vdoyen-e1670942309390.jpeg" />
                    <Staff first_name="Noureddine" last_name="Barka" occupation="Vice Doyen chargé de la recherche scientifique et de la coopération" img_src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2024/03/Noureddine-Barka.jpg" />
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
                    <Major label="science mathématique et informatique" url="/smi" img_src="https://fpk-biblio.netlify.app/img/smi.jpg" />
                    <Major label="science mathématique et application" url="#" img_src="https://fpk-biblio.netlify.app/img/sma.jpg" />
                    <Major label="science economie et gestion" url="#" img_src="https://fpk-biblio.netlify.app/img/seg.jpg" />
                    <Major label="science de la matière physique" url="#" img_src="https://fpk-biblio.netlify.app/img/smp.jpg" />
                    <Major label="science de la matière chimie" url="#" img_src="https://fpk-biblio.netlify.app/img/smc.jpg" />
                    <Major label="sciences de la Vie" url="#" img_src="https://fpk-biblio.netlify.app/img/sv.jpg" />
                    <Major label="géographie" url="#" img_src="https://fpk-biblio.netlify.app/img/geo.jpg" />
                    <Major label="études arabe" url="#" img_src="https://fpk-biblio.netlify.app/img/ea.jpg" />
                </div>
            </section>

            <section className="p-10">
                <SectionTitle title="avis & announces" />
                <div className='grid grid-cols-2 gap-5'>
                    <Announcement title="Announcement title #1 Announcement title #1" url="#" img_src="https://picsum.photos/200/300?random=9"/>
                    <Announcement title="Announcement title #2 Announcement title #2 Announcement title #2 Announcement title #2" url="#" img_src="https://picsum.photos/200/300?random=10"/>
                    <Announcement title="Announcement title #3" url="#" img_src="https://picsum.photos/200/300?random=11"/>
                    <Announcement title="Announcement title #4" url="#" img_src="https://picsum.photos/200/300?random=12"/>
                    <Announcement title="Announcement title #5" url="#" img_src="https://picsum.photos/200/300?random=13"/>
                    <Announcement title="Announcement title #6 Announcement title #6" url="#" img_src="https://picsum.photos/200/300?random=14"/>
                    <Announcement title="Announcement title #7" url="#" img_src="https://picsum.photos/200/300?random=15"/>
                    <Announcement title="Announcement title #9" url="#" img_src="https://picsum.photos/200/300?random=16"/>
                    <Announcement title="Announcement title #10 Announcement title #10 Announcement title #10 Announcement title #10" url="#" img_src="https://picsum.photos/200/300?random=17"/>
                </div>
            </section>

            <section className="p-10">
                <SectionTitle title="activités & événements" />
                <div className="grid grid-cols-4 gap-5">
                    <Activity label="Activitie number #1 Activitie number #1Activitie number #1" url="#" img_src="https://picsum.photos/200/300?random=1" />
                    <Activity label="Activitie number #2 Activitie number #2Activitie number #2" url="#" img_src="https://picsum.photos/200/300?random=2" />
                    <Activity label="Activitie number #3" url="#" img_src="https://picsum.photos/200/300?random=3" />
                    <Activity label="Activitie number #4 Activitie number #4Activitie number #4" url="#" img_src="https://picsum.photos/200/300?random=4" />
                    <Activity label="Activitie number #5" url="#" img_src="https://picsum.photos/200/300?random=5" />
                    <Activity label="Activitie number #6" url="#" img_src="https://picsum.photos/200/300?random=6" />
                    <Activity label="Activitie number #7 Activitie number #7Activitie number #7" url="#" img_src="https://picsum.photos/200/300?random=7" />
                    <Activity label="Activitie number #8" url="#" img_src="https://picsum.photos/200/300?random=8" />
                </div>
            </section>

        </>
    );
}

export default HomePage;