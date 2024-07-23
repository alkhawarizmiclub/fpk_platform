import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import EntPublicApi from "../../../../api/EntPublicApi";

const EntTeacherAnnouncementViewPage = () => {

    const { id } = useParams();

    const [announcementData, setAnnouncementData] = useState({
        author: "",
        content: "",
        created_at: "",
        id: 1,
        poster_image: null,
        tags: "",
        thumbnail: "",
        title: "",
    });

    useEffect(() => {
        EntPublicApi.getAnnouncement(id)
            .then((response) => {
                setAnnouncementData(response.data.data)
                console.log(response.data.data);
            })
    }, [])

    return (
        <EntPageContainer title="Announcement">
            <div className="flex flex-col gap-5">
                <div className="mx-auto w-full max-w-lg aspect-video flex overflow-hidden">
                    <img src={announcementData.thumbnail} className="w-full h-full object-contain" />
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-5">
                        <h1 className="font-bold text-lg">{announcementData.title}</h1>
                        <div className="flex items-center gap-5">
                            <Link>Edit</Link>
                            <Link>Delete</Link>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <div>{announcementData.created_at}</div>
                        <div>{announcementData.tags}</div>
                    </div>
                    <p>{announcementData.content}</p>
                </div>
            </div>
        </EntPageContainer>
    );
}

export default EntTeacherAnnouncementViewPage;