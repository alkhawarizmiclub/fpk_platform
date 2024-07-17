import { useEffect, useState } from "react";
import EntPageContainer from "../../../../components/ent/EntPageContainer";
import EntTeacherApi from "../../../../api/EntTeacherApi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Paths from "../../../../routers/Paths.json";

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
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">

                        <Link to={Paths.E_TEACHER_ANNOUNCEMENTS_CREATE_PAGE} className="p-5 flex justify-center items-center shadow rounded-lg border border-slate-100"><FontAwesomeIcon icon={faPlus} /></Link>

                    </div>

                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                        <tr>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Image</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Title</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Date de creation</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Tags</th>
                            <th className="px-6 py-3 border-b-2 border-gray-300 bg-gray-100 text-left text-xs leading-4 font-medium text-gray-600 uppercase tracking-wider">Tags</th>
                        </tr>

                        {announcements.map(({ title, thumbnail_path, content, tags, created_at }) => (
                            <tr>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">
                                    <div className="w-full max-w-sm aspect-video flex rounded-lg overflow-hidden bg-slate-100">
                                        <img src={thumbnail_path ? thumbnail_path : "/club_logo.svg"} alt="Post Thumbnail" className="w-full h-full object-cover hover:object-contain" />
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{title}</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{created_at}</td>
                                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{tags}</td>
                                {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-300 text-sm leading-5 text-gray-800 text-center">{content}</td> */}
                            </tr>
                        ))}
                    </table>
                </>

            )}
        </EntPageContainer>
    );
}

export default EntTeacherAnnouncementsPage;