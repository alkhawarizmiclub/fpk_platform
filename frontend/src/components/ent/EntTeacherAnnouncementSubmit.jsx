import EntTeacherApi from "../../api/EntTeacherApi";


const EntTeacherAnnouncementSubmit = ({ announcement }) => {

    const { thumbnail, title, message, annoncePhoto, tags } = announcement;

    const handleSubmit = () => {
        EntTeacherApi.submitAnnouncement(title, thumbnail, tags, message, annoncePhoto)
            .then((response) => {

                console.log(response);
                alert('announce successfully submitted!');
            })
            .catch((error) => {
                console.log(error);
                alert('announce failed to be submitted!');
            })
            .finally();
    }

    return (
        <li className="p-4 bg-white shadow rounded-lg">
            {thumbnail && (
                <img
                    src={thumbnail}
                    alt="Thumbnail"
                    className="w-full h-48 object-contain mb-4 rounded-lg"
                />
            )}
            <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            <p className="mt-2 text-gray-600">{message}</p>
            {annoncePhoto && (
                <img
                    src={annoncePhoto}
                    alt="Annonce Photo"
                    className="w-full h-48 object-contain mb-4 rounded-lg"
                />
            )}
            <p className="mt-2 text-gray-600"><strong>Tags:</strong> {tags}</p>
            <button
                onClick={handleSubmit}
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
                Envoyer
            </button>
        </li>
    );
}

export default EntTeacherAnnouncementSubmit;