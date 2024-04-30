import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HomeStatsElement = ({ icon, number, label }) => {
    return (
        <div>
            <FontAwesomeIcon icon={icon}  className="mb-2 text-4xl"/>
            <div className="text-3xl font-bold text-white">{number}</div>
            <div className="text-white capitalize">{label}</div>
        </div>
    );
}

export default HomeStatsElement;