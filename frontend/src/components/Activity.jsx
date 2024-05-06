import { faCalendar, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Activity = ({ label, url, img_src, date_day, date_month, date_year, location }) => {
    return (
        <div className="relative group h-min overflow-hidden rounded-lg shadow bg-white">

            <div className="absolute z-[1] top-0 right-5 p-2 max-w-32 flex flex-col justify-center items-center rounded-b text-white shadow bg-orange-400/80">
                <span className="text-lg">{date_month.slice(0, 3)}</span>
                <span className="text-3xl font-semibold">{date_day}</span>
            </div>

            <div className="w-full aspect-video">
                <img src={img_src} alt={label} className="object-cover h-full w-full" />
            </div>

            <div className="p-5 space-y-4">

                <a href={url} className="text-lg font-bold">{label}</a>

                <div className="flex justify-between text-slate-60 text-sm">
                    <div className="flex justify-center items-center gap-2">
                        <FontAwesomeIcon icon={faCalendar} className="text-orange-400"/>
                        <span>{date_day} {date_month} {date_year}</span>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <FontAwesomeIcon icon={faMapPin} className="text-orange-400"/>
                        <span>{location}</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Activity;