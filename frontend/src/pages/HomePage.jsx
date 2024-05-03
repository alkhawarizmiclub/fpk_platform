import { faBookOpenReader, faUserGraduate, faPenRuler, faChalkboardTeacher, faUserGear, faPeopleGroup, faBullhorn } from '@fortawesome/free-solid-svg-icons'
import HomeStatsElement from "../components/HomeStatsElement";
import HomeGateElement from '../components/HomeGateElement';
import SectionTitle from '../components/SectionTitle';
import Activity from '../components/Activity';
import Major from '../components/Major';
import Staff from '../components/Staff';
import MajorCategory from '../components/MajorCategory';

const HomePage = () => {
    return (
        <>

            <section className='px-10'>
                <div className="-translate-y-5 grid grid-cols-4 gap-10 text-center">
                    <HomeGateElement icon={faBookOpenReader} label="Espace étudiants" url="" />
                    <HomeGateElement icon={faChalkboardTeacher} label="Espace enseigants" url="" />
                    <HomeGateElement icon={faBullhorn} label="Avis et announces" url="" />
                    <HomeGateElement icon={faPeopleGroup} label="Clubs et activities" url="" />
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
                        {/* <iframe
                            className="w-full aspect-video rounded-lg border border-slate-300"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1140.7043195271508!2d-6.905736303784177!3d32.869769894863275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda427000bc5899f%3A0xba7e39743b7a569b!2sFacult%C3%A9%20Polydisciplinaire%20de%20Khouribga!5e0!3m2!1sen!2sma!4v1714438474595!5m2!1sen!2sma"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe> */}
                        <div className="aspect-video rounded-lg bg-cover bg-norepeat bg-center bg-[url(/map.jpg)]"></div>
                    </div>
                </div>
            </section>

            <section className="py-20 px-10 text-white bg-orange-400">
                <div className="grid grid-cols-5 text-center">
                    <HomeStatsElement icon={faBookOpenReader} number="5226" label="étudiants" />
                    <HomeStatsElement icon={faUserGraduate} number="537" label="lauréats" />
                    <HomeStatsElement icon={faPenRuler} number="13" label="filières" />
                    <HomeStatsElement icon={faChalkboardTeacher} number="90" label="enseignants" />
                    <HomeStatsElement icon={faUserGear} number="26" label="personnel" />
                </div>
            </section>

            <section className="p-10">
                <SectionTitle title="staff administratif" />
                <div className="p-10 grid grid-cols-4 gap-5">
                    <Staff first_name="Khalid" last_name="Mehdi" occupation="Occupation" img_src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2023/02/doyen-1-scaled-e1677513352365.jpg" />
                    <Staff first_name="Omar" last_name="Hansali" occupation="Secrétaire Générale" img_src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2023/03/IMG-20230310-WA0003-e1678463961724.jpg" />
                    <Staff first_name="Khalid" last_name="Sbiaai" occupation="Vice Doyen chargé à la pédagogie" img_src="http://www.fpk.ac.ma/wp-content/uploads/2022/12/vdoyen-e1670942309390.jpeg" />
                    <Staff first_name="Noureddine" last_name="Barka" occupation="Vice Doyen chargé de la recherche scientifique et de la coopération" img_src="https://i0.wp.com/www.fpk.ac.ma/wp-content/uploads/2024/03/Noureddine-Barka.jpg" />
                </div>
            </section>

            <section className="p-10">
                <SectionTitle title="filières" />
                <div className="p-4 flex justify-center gap-5">
                    <MajorCategory label="licences fondamentales"/>
                    <MajorCategory label="licences professionnelles"/>
                    <MajorCategory label="master"/>
                    <MajorCategory label="doctorat"/>
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
                To Be Filled
            </section>

            <section className="p-10">
                <SectionTitle title="activités & événements" />
                <Activity />
                <Activity />
                <Activity />
            </section>

        </>
    );
}

export default HomePage;