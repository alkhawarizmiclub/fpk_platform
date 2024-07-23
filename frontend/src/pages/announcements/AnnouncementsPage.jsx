import { useEffect, useState } from "react";
import EntPublicApi from "../../api/EntPublicApi";
import StaticPageContainer from "../../layouts/StaticPageContainer";
import Announcement2 from "../../components/Announcement2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const AnnouncementsPage = () => {

    const [isLoading, setIsLoading] = useState(true);

    const [announcements, setAnnouncements] = useState([]);

    useEffect(() => {

        setIsLoading(true);

        EntPublicApi.getAllAnnounceements()
            .then((response) => {
                setAnnouncements(response.data.data);
            }).catch(() => {

            }).finally(() => {
                setIsLoading(false);
            })

    }, []);

    return (
        <StaticPageContainer page_title="Announces">

            {isLoading ? (
                
                <div className="text-center"><FontAwesomeIcon icon={faSpinner} className="text-lg loader" /></div>

            ) : (

                <div className="flex flex-col gap-5">

                    {announcements.map(({ id, thumbnail, title, content, tags, created_at, author }) => (
                        <Announcement2 key={id} id={id} thumbnail={thumbnail} title={title} content={content} tags={tags} created_at={created_at} author={author} />
                    ))}

                </div>
            )
            }

        </StaticPageContainer>
    );
}

export default AnnouncementsPage;