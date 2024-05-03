import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Announcement = ({ title, url, img_src }) => {
    return (
        <div className="w-full h-48 flex gap-2 aspect-square shadow rounded-lg">

            <div className="aspect-video">
                <a href={url}><img src={img_src} alt={title} className="h-full w-full object-cover rounded-l bg-slate-300" /></a>
            </div>

            <div className="p-3 flex flex-col justify-center gap-2">

                <a href={url} className="text-lg font-semibold line-clamp-2">{title}</a>

                <div className="flex gap-5 text-sm text-slate-500">
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faUser} />
                        <a href="#">Author's Name Here</a>
                    </div>
                    <div className="flex items-center gap-2">
                        <FontAwesomeIcon icon={faCalendar} />
                        <span>July 19, 2024</span>
                    </div>
                </div>

                <div className="flex gap-2">
                    <a href="#" className="py-0.5 px-2 text-sm text-white rounded-xl bg-orange-300">Tag Number #1</a>
                    <a href="#" className="py-0.5 px-2 text-sm text-white rounded-xl bg-orange-300">Tag #2</a>
                    <a href="#" className="py-0.5 px-2 text-sm text-white rounded-xl bg-orange-300">Tag Num #3</a>
                    <a href="#" className="py-0.5 px-2 text-sm text-white rounded-xl bg-orange-300">Tag 4</a>
                </div>

            </div>

        </div>
    );
}

export default Announcement;