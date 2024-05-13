import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faFax, faAt } from '@fortawesome/free-solid-svg-icons'
import FooterSection from './FooterSection';
import Paths from "../routers/Paths.json";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="p-10 text-white space-y-10 bg-slate-800">

            <div className="grid grid-cols-3 gap-10">

                <FooterSection title="Quick Links">
                    <ul>
                        <li><Link to={Paths.PRESENTATION_PAGE}>Présentation</Link></li>
                        <li><Link to={Paths.DEPARTMENTS_PAGE}>Départements</Link></li>
                        <li><Link to={Paths.TRACKS_PAGE}>Formations</Link></li>
                        <li><Link to={Paths.LABOLATORIES_PAGE}>Laboratoire</Link></li>
                    </ul>
                </FooterSection>

                <FooterSection title="Contact Info">
                    <ul>
                        <li className="space-x-2">
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span><span className="font-semibold">Boîte Postale :</span> BP N° 145 Khouribga principale, 25000, Maroc</span>
                        </li>
                        <li className="space-x-2">
                            <FontAwesomeIcon icon={faAt} />
                            <span><span className="font-semibold">Email :</span> contactfpk@usms.ma</span>
                        </li>
                        <li className="space-x-2">
                            <FontAwesomeIcon icon={faPhone} />
                            <span><span className="font-semibold">Tele :</span> +212 523 490359</span>
                        </li>
                        <li className="space-x-2">
                            <FontAwesomeIcon icon={faFax} />
                            <span><span className="font-semibold">Fax :</span> +212 523 490354</span>
                        </li>
                    </ul>
                </FooterSection>

                <FooterSection>
                    <iframe
                        className="w-full h-full rounded-lg border border-slate-300"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1140.7043195271508!2d-6.905736303784177!3d32.869769894863275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda427000bc5899f%3A0xba7e39743b7a569b!2sFacult%C3%A9%20Polydisciplinaire%20de%20Khouribga!5e0!3m2!1sen!2sma!4v1714438474595!5m2!1sen!2sma"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </FooterSection>

            </div>

            <section className="px-10 text-center space-x-1">
                <span>Designed and developed by</span>
                <a href={Paths.AL_KHAWARIZMI_CLUB_URL} className="text-orange-400">Al Khawarizmi Club</a>
                <span>©</span>
                <span>2024</span>
            </section>

        </footer>
    );
}

export default Footer;