import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnnouncementTag from "./AnnouncementTag";
import Paths from "../routers/Paths.json";
import { Link } from "react-router-dom";


const Announcement = ({ id, title, img_src, author, creation_date }) => {

    const url = Paths.ANNOUNCEMENT_PAGE.replace(":id", id);

    return (
        <>
            <div className="relative group w-full flex flex-col gap-2 rounded-lg overflow-hidden overflow">

                <div className="relative aspect-video overflow-hidden">
                    <Link to={url}><img src={img_src} alt={title} className="h-full w-full object-cover bg-slate-300" /></Link>
                </div>

                <div className="absolute h-full w-full p-3 flex flex-col justify-end items-start gap-2 text-white bg-gradient-to-t from-black">

                    <Link to={url} className="text-lg font-semibold line-clamp-2">{title}</Link>

                    <div className="flex flex-wrap gap-2">
                        <AnnouncementTag label="Licence" url="#" />
                        <AnnouncementTag label="Master" url="#" />
                        <AnnouncementTag label="Doctorat" url="#" />
                        <AnnouncementTag label="TD" url="#" />
                        <AnnouncementTag label="Cours" url="#" />
                        <AnnouncementTag label="Td" url="#" />
                    </div>

                    <div className="w-full flex justify-between gap-5 text-sm">
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faUser} className="text-orange-400" />
                            <a href="#">{author}</a>
                        </span>
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCalendar} className="text-orange-400" />
                            <span>{creation_date}</span>
                        </span>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Announcement;