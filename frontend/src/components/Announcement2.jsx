import { dateToString } from "../utils/functions";
import { Link } from "react-router-dom";
import Paths from "../routers/Paths.json";

const Announcement2 = ({ id, thumbnail, title, content, tags, created_at, author }) => {

    const dateTimeObj = new Date(created_at);
    const dataString = dateToString(dateTimeObj, "DD MMMM YYYY");
    const tagsList = tags.split(", ");

    return (
        <div className="flex gap-5">

            <div className="w-[30%] aspect-video overflow-hidden rounded-lg border border-slate-200">
                <Link to={Paths.ANNOUNCEMENT_PAGE.replace(":id", id)}>
                    <img src={thumbnail} alt={title} className="h-full w-full object-cover" />
                </Link>
            </div>

            <div className="w-[70%] flex flex-col justify-center">
                <h1 className="font-bold text-xl">
                    <Link to={Paths.ANNOUNCEMENT_PAGE.replace(":id", id)}>{title}</Link>
                </h1>
                <div className="flex items-center gap-5">

                    <div className="font-medium text-slate-500">{dataString}</div>

                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>

                    <div className="font-medium text-slate-500">{author}</div>

                    <div className="h-1.5 w-1.5 rounded-full bg-slate-400"></div>

                    <div className="flex gap-2">
                        {tagsList && tagsList.map((elm, i) => (
                            <div key={i} className="px-3 py-1 rounded-full border border-slate-200 text-sm">{elm}</div>
                        ))}
                    </div>
                </div>
                <p className="line-clamp-4">{content}</p>
            </div>

        </div>
    );
}

export default Announcement2;