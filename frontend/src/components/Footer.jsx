import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faFax, faAt } from '@fortawesome/free-solid-svg-icons'
import FooterSection from './FooterSection';

const Footer = () => {
    return (
        <footer className="p-10 text-white space-y-10 bg-slate-800">

            <div className="grid grid-cols-3 gap-10">

                <FooterSection title="Quick Links">
                    <ul>
                        <li><a href="#">College Overview</a></li>
                        <li><a href="#">College Departments</a></li>
                        <li><a href="#">College Programs</a></li>
                        <li><a href="#">College Faculty & staff</a></li>
                    </ul>
                </FooterSection>

                <FooterSection title="Quick Links">
                    <ul>
                        <li><a href="#">College Overview</a></li>
                        <li><a href="#">College Departments</a></li>
                        <li><a href="#">College Programs</a></li>
                        <li><a href="#">College Faculty & staff</a></li>
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

            </div>

            <section className="px-10 text-center space-x-1">
                <span>Designed and developed by</span>
                <a href="#" className="text-orange-400">Al Khawarizmi Club</a>
                <span>©</span>
                <span>2024</span>
            </section>

        </footer>
    );
}

export default Footer;