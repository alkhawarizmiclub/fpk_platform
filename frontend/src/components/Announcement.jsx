import { faCalendar, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnnouncementTag from "./AnnouncementTag";

const Announcement = ({ title, descriptipn, url, img_src }) => {

    let show_first = true;

    return (
        <>
            {show_first ? (
                <div className="relative group w-full flex flex-col gap-2 rounded-lg overflow-hidden overflow">

                    <div className="relative aspect-video overflow-hidden">
                        <a href={url}><img src={img_src} alt={title} className="h-full w-full object-cover bg-slate-300" /></a>
                    </div>

                    <div className="absolute h-full w-full p-3 flex flex-col justify-end items-start gap-2 text-white bg-gradient-to-t from-black">

                        <a href={url} className="text-lg font-semibold line-clamp-2">{title}</a>

                        <div className="flex flex-wrap gap-2">
                            <AnnouncementTag label="Licence" url="#" />
                            <AnnouncementTag label="Master" url="#" />
                            <AnnouncementTag label="Doctorat" url="#" />
                            <AnnouncementTag label="TD" url="#" />
                            <AnnouncementTag label="Cours" url="#" />
                            <AnnouncementTag label="Td" url="#" />
                        </div>

                        <p className="overflow-hidden max-h-0 group-hover:max-h-full transition-all duaration-300 text-gray-300 line-clamp-2">{descriptipn} Choose the approach that best fits your application's architecture and requirements. Both approaches allow you to pass custom props dynamically to the layout component based on each page that uses the layout.</p>

                        <div className="w-full flex justify-between gap-5 text-sm">
                            <span className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faUser} className="text-orange-400" />
                                <a href="#">Achraf Mansari</a>
                            </span>
                            <span className="flex items-center gap-2">
                                <FontAwesomeIcon icon={faCalendar} className="text-orange-400" />
                                <span>July 19, 2024</span>
                            </span>
                        </div>

                    </div>

                </div>
            ) : (
                <div className="w-full h-48 flex gap-2 aspect-square">

                    <div className="h-full aspect-video overflow-hidden bg-slate-300">
                        <a href={url} className="h-full w-full object-cover"><img src={img_src} alt={title} className="h-full w-full" /></a>
                    </div>

                    <div className="p-3 flex flex-col justify-center items-start gap-2">

                        <div className="flex gap-2">
                            <AnnouncementTag label="Licence" url="#" />
                            <AnnouncementTag label="Master" url="#" />
                            <AnnouncementTag label="Doctorat" url="#" />
                            <AnnouncementTag label="TD" url="#" />
                            <AnnouncementTag label="Cours" url="#" />
                            <AnnouncementTag label="Td" url="#" />
                        </div>

                        <a href={url} className="text-lg font-semibold line-clamp-2">{title}</a>

                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit ut elit tellus luctus nec ullamcorper mattis</p>
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
            )}
        </>
    );
}

export default Announcement;