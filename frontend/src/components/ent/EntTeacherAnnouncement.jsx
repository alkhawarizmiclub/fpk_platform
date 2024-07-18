import { parseDateTime } from "../../utils/functions";

const EntTeacherAnnouncement = ({ thumbnail_path, title, content, tags, created_at }) => {

    const dateObj = parseDateTime(created_at);
    const creationDateTimeString = `${dateObj.getHours()}:${dateObj.getMinutes()} ${dateObj.getDay()}/${dateObj.getMonth()}/${dateObj.getFullYear()}`

    return (
        <tr>
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
        </tr>
    );
}

export default EntTeacherAnnouncement;