import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnnouncelentTag from "./AnnouncelentTag";

const Announcement = ({ title, url, img_src }) => {
    return (
        <div className="w-full h-36 flex gap-2 aspect-square shadow rounded-lg">

            <div className="aspect-video">
                <a href={url}><img src={img_src} alt={title} className="h-full w-full object-cover rounded-l bg-slate-300" /></a>
            </div>

            <div className="p-3 flex flex-col justify-center items-start gap-2">

                <div className="flex gap-2">
                    <AnnouncelentTag label="Licence" url="#" />
                    <AnnouncelentTag label="Master" url="#" />
                    <AnnouncelentTag label="Doctorat" url="#" />
                    <AnnouncelentTag label="TD" url="#" />
                    <AnnouncelentTag label="Cours" url="#" />
                    <AnnouncelentTag label="Td" url="#" />
                </div>

                <a href={url} className="text-lg font-semibold line-clamp-2">{title}</a>

                <div className="flex gap-5 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faUser} />
                        <a href="#">Achraf Mansari</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>July 19, 2024</span>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Announcement;