import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';


const HomeGateElement = ({ icon, label, url }) => {
    return (
        <Link to={url} className="p-10 flex justify-center items-center gap-5 rounded-lg shadow-lg text-white bg-orange-400">
            <FontAwesomeIcon icon={icon} className="text-4xl"/>
            <span className="capitalize text-lg font-semibold">{label}</span>
        </Link>
    );
}

export default HomeGateElement;