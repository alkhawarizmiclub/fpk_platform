import { dateToString, parseDateTime } from "../../utils/functions";

const EntTeacherAnnouncement = ({ thumbnail_path, title, content, tags, created_at }) => {

    const dateObj = parseDateTime(created_at);
    const creationDateTimeString = dateToString(dateObj, "DD MMMM YYYY");
    const tagsList = tags.split(", ");

    console.log(tagsList);

    return (
        <>
            <div className="p-5 w-full flex justify-center items-center gap-5 rounded-lg border-2 border-slate-200">
                <div className="h-20 aspect-video rounded-lg border border-slate-200 overflow-hidden">
                    <img src={thumbnail_path ? thumbnail_path : "/club_logo.svg"} alt="Post Thumbnail" className="w-full h-full object-cover" />
                </div>
                <div className="grow space-y-2">
                    <h1 className="font-semibold line-clamp-1">{title}</h1>
                    <div className="flex items-center gap-5 text-slate-400">
                        <div>{creationDateTimeString}</div>
                        <div className="flex gap-2">
                            {tagsList && tagsList.map((elm, i) => (
                                <div className="px-3 py-1 rounded-full border border-slate-200">{elm}</div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">
                    <div className="w-[100px] aspect-video flex rounded-lg overflow-hidden bg-slate-100">
                        <img src={thumbnail_path ? thumbnail_path : "/club_logo.svg"} alt="Post Thumbnail" className="w-full h-full object-cover" />
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">
                    <h1 className="line-clamp-3">{title}</h1>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{creationDateTimeString}</td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">
                    <p className="line-clamp-3">{tags}</p>
                </td>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">
                    <p className="line-clamp-2">{content.slice(0, 300)}</p>
                </td>
            </tr> */}
        </>
    );
}

export default EntTeacherAnnouncement;