import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import EntPublicApi from "../../api/EntPublicApi";
import StaticPageContainer from "../../layouts/StaticPageContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const AnnouncementPage = () => {

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);

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

        setIsLoading(true);

        EntPublicApi.getAnnouncement(id)
            .then((response) => {
                setAnnouncementData(response.data.data)
                console.log(response.data.data);
            }).catch(() => {

            }).finally(() => {
                setIsLoading(false);
            })

    }, [])

    return (
        <StaticPageContainer page_title={announcementData.title}>

            {isLoading ? (

                <div className="text-center"><FontAwesomeIcon icon={faSpinner} className="text-lg loader" /></div>

            ) : (
                <>
                    <div className="mx-auto w-full max-w-xl flex">
                        <img src={announcementData.thumbnail} className="w-full h-full" />
                    </div>

                    <div className="">
                        {announcementData.content}
                    </div>
                </>
            )}
        </StaticPageContainer>
    );
}

export default AnnouncementPage;