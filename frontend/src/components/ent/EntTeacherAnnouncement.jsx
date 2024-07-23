import { Link } from "react-router-dom";
import Paths from "../../routers/Paths.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { dateToString, parseDateTime } from "../../utils/functions";

const EntTeacherAnnouncement = ({ id, thumbnail_path, title, content, tags, created_at }) => {

    const dateObj = parseDateTime(created_at);
    const creationDateTimeString = dateToString(dateObj, "DD MMMM YYYY");
    const tagsList = tags.split(", ");

    return (
        <>
            <div className="relative p-5 w-full flex justify-center items-center gap-5 rounded-lg border-2 border-slate-200">

                <Link to={Paths.E_TEACHER_ANNOUNCEMENTS_DELETE_PAGE.replace(':id', id)} className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3 p-2 h-10 w-10 flex justify-center items-center rounded-full bg-slate-300"><FontAwesomeIcon icon={faTrashCan} className="text-white" /></Link>

                <div className="h-20 aspect-video rounded-lg border border-slate-200 overflow-hidden">
                    <img src={thumbnail_path ? thumbnail_path : "/club_logo.svg"} alt="Post Thumbnail" className="w-full h-full object-cover" />
                </div>

                <div className="grow space-y-2">
                    <h1 className="font-semibold line-clamp-1"><Link >{title}</Link></h1>
                    <div className="flex items-center gap-5 text-slate-400">
                        <div>{creationDateTimeString}</div>
                        <div className="flex gap-2">
                            {tagsList && tagsList.map((elm, i) => (
                                <div key={i} className="px-3 py-1 rounded-full border border-slate-200">{elm}</div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default EntTeacherAnnouncement;