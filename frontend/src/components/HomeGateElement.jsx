import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const HomeGateElement = ({ icon, label, url }) => {
    return (
        <a href={url} className="p-10 flex justify-center items-center gap-5 rounded-lg text-white bg-orange-400">
            <FontAwesomeIcon icon={icon} className="text-4xl"/>
            <span className="capitalize text-lg font-semibold">{label}</span>
        </a>
    );
}

export default HomeGateElement;