import { useEffect, useState } from "react";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import EntTeacherApi from "../../../../api/EntTeacherApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Paths from "../../../../routers/Paths.json";
import EntTeacherAnnouncement from "../../../../components/ent/EntTeacherAnnouncement";

const EntTeacherAnnouncementsPage = () => {

    const [announcements, setAnnouncements] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        setIsLoading(isLoading);

        EntTeacherApi.getOwnAnnouncements()
            .then((response) => {
                setAnnouncements(response.data.data);
            })
            .catch(() => {
                // TODO: Error Handling
            })
            .finally(() => {
                setIsLoading(false);
            })

    }, [])

    return (
        <EntPageContainer title="Announcements">
            {isLoading ? (

                <div className="text-center"><FontAwesomeIcon icon={faSpinner} className="text-lg loader" /></div>

            ) : (

                <>
                    <div className="pb-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                        <Link to={Paths.E_TEACHER_ANNOUNCEMENTS_CREATE_PAGE} className="p-5 flex justify-center items-center shadow rounded-lg border border-slate-100"><FontAwesomeIcon icon={faPlus} /></Link>

                    </div>

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5"> 
                        {announcements.length > 0 ? announcements.map(({ title, thumbnail_path, content, tags, created_at }) => (
                            <EntTeacherAnnouncement title={title} thumbnail_path={thumbnail_path} content={content} tags={tags} created_at={created_at} />
                        )) : (
                            <div>
                                <div colSpan={5} className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">Vous n'avez encore partagé aucune annonce</div>
                            </div>
                        )}
                    </div>

                    {/* <table className="min-w-full table-auto border border-gray-300 rounded-lg bg-white">
                        <tbody>
                            <tr>
                                <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Image</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Title</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Date de creation</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Tags</th>
                                <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-center text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Contenu</th>
                            </tr>

                            {announcements.length > 0 ? announcements.map(({ title, thumbnail_path, content, tags, created_at }) => (
                                <EntTeacherAnnouncement title={title} thumbnail_path={thumbnail_path} content={content} tags={tags} created_at={created_at} />
                            ))
                                : (
                                    <tr>
                                        <td colSpan={5} className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">Vous n'avez encore partagé aucune annonce</td>
                                    </tr>
                                )}
                        </tbody>
                    </table> */}
                </>

            )}
        </EntPageContainer>
    );
}

export default EntTeacherAnnouncementsPage;