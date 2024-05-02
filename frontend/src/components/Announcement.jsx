import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Announcement = ({ title, url, img_src }) => {
    return (
        <div className="p-2 w-full flex flex-col gap-2 aspect-square shadow rounded-lg">
            
                <img src={img_src} alt={title} className="w-full aspect-video rounded bg-slate-300" />
                <h1 className="text-lg font-semibold"><a href={url}>{title}</a></h1>
                <div className="flex gap-5 text-sm text-slate-600">
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
                    <a href="#" className="py-0.5 px-2 text-sm rounded-xl bg-orange-200">Tag Number #1</a>
                    <a href="#" className="py-0.5 px-2 text-sm rounded-xl bg-orange-200">Tag #2</a>
                    <a href="#" className="py-0.5 px-2 text-sm rounded-xl bg-orange-200">Tag Num #3</a>
                    <a href="#" className="py-0.5 px-2 text-sm rounded-xl bg-orange-200">Tag 4</a>
                </div>
        </div>
    );
}

export default Announcement;