import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnnouncementTag from "./AnnouncementTag";
import Paths from "../routers/Paths.json";
import { Link } from "react-router-dom";
import { dateToString } from "../utils/functions";


const Announcement = ({ id, thumbnail, title, content, tags, created_at, author }) => {

    const url = Paths.ANNOUNCEMENT_PAGE.replace(":id", id);

    const dateTimeObj = new Date(created_at);
    const dataString = dateToString(dateTimeObj, "DD MMMM YYYY");
    const tagsList = tags.split(", ");

    return (
        <>
            <div className="relative group w-full flex flex-col gap-2 rounded-lg overflow-hidden overflow">

                <div className="relative aspect-video overflow-hidden">
                    <Link to={url}><img src={thumbnail} alt={title} className="h-full w-full object-cover bg-slate-300" /></Link>
                </div>

                <div className="absolute h-full w-full p-3 flex flex-col justify-end items-start gap-2 text-white bg-gradient-to-t from-black">

                    <Link to={url} className="text-lg font-semibold line-clamp-2">{title}</Link>

                    <div className="flex flex-wrap gap-2">
                        {tagsList && tagsList.map((elm, i) => (
                            <AnnouncementTag label={elm} key={i}/>
                        ))}
                    </div>

                    <div className="w-full flex justify-between gap-5 text-sm">
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faUser} className="text-orange-400" />
                            <span>{author}</span>
                        </span>
                        <span className="flex items-center gap-2">
                            <FontAwesomeIcon icon={faCalendar} className="text-orange-400" />
                            <span>{dataString}</span>
                        </span>
                    </div>

                </div>

            </div>
        </>
    );
}

export default Announcement;