import { useParams } from "react-router-dom";
import EntPageContainer from "../../components/ent/EntPageContainer";
import { useEffect, useState } from "react";
import EntPublicApi from "../../api/EntPublicApi";
import StaticPageContainer from "../../layouts/StaticPageContainer";

const AnnouncementPage = () => {

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
        <StaticPageContainer page_title={announcementData.title}>

            <div className="mx-auto w-full max-w-xl flex">
                <img src={announcementData.thumbnail} className="w-full h-full" />
            </div>

            <div className="">
                {announcementData.content}
            </div>
        </StaticPageContainer>
    );
}

export default AnnouncementPage;