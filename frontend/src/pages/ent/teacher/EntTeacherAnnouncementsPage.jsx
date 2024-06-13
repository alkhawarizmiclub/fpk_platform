// import { useState } from 'react';
// import EntPageContainer from "../../../components/ent/EntPageContainer";

// const EntTeacherAnnouncementsPage = () => {
//     const [title, setTitle] = useState('');
//     const [message, setMessage] = useState('');
//     const [announcements, setAnnouncements] = useState([]);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newAnnouncement = {
//             id: announcements.length + 1,
//             title,
//             message,
//             date: new Date().toLocaleDateString(),
//         };
//         setAnnouncements([...announcements, newAnnouncement]);
//         setTitle('');
//         setMessage('');
//     };

//     return (
//         <EntPageContainer title="Announcements">
//             <div className="flex flex-col space-y-4">
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//                         <input
//                             type="text"
//                             id="title"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//                         <textarea
//                             id="message"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                     >
//                         Create Announcement
//                     </button>
//                 </form>

//                 <div className="mt-8">
//                     <h2 className="text-lg font-medium text-gray-900">Existing Announcements</h2>
//                     {announcements.length > 0 ? (
//                         <ul className="mt-4 space-y-4">
//                             {announcements.map(announcement => (
//                                 <li key={announcement.id} className="p-4 bg-white shadow rounded-lg">
//                                     <h3 className="text-xl font-semibold text-gray-800">{announcement.title}</h3>
//                                     <p className="mt-2 text-gray-600">{announcement.message}</p>
//                                     <span className="block mt-4 text-sm text-gray-500">Posted on: {announcement.date}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p className="mt-4 text-gray-600">No announcements yet.</p>
//                     )}
//                 </div>
//             </div>
//         </EntPageContainer>
//     );
// };

// export default EntTeacherAnnouncementsPage;


// import { useState } from 'react';
// import EntPageContainer from "../../../components/ent/EntPageContainer";

// const EntTeacherAnnouncementsPage = () => {
//     const [title, setTitle] = useState('');
//     const [message, setMessage] = useState('');
//     const [thumbnail, setThumbnail] = useState(null);
//     const [announcements, setAnnouncements] = useState([]);

//     const handleThumbnailChange = (e) => {
//         if (e.target.files && e.target.files[0]) {
//             const reader = new FileReader();
//             reader.onload = (event) => {
//                 setThumbnail(event.target.result);
//             };
//             reader.readAsDataURL(e.target.files[0]);
//         }
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newAnnouncement = {
//             id: announcements.length + 1,
//             title,
//             message,
//             thumbnail,
//             date: new Date().toLocaleDateString(),
//         };
//         setAnnouncements([...announcements, newAnnouncement]);
//         setTitle('');
//         setMessage('');
//         setThumbnail(null);
//     };

//     return (
//         <EntPageContainer title="Announcements">
//             <div className="flex flex-col space-y-4">
//                 <form onSubmit={handleSubmit} className="space-y-4">
//                     <div>
//                         <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
//                         <input
//                             type="text"
//                             id="title"
//                             value={title}
//                             onChange={(e) => setTitle(e.target.value)}
//                             className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
//                         <textarea
//                             id="message"
//                             value={message}
//                             onChange={(e) => setMessage(e.target.value)}
//                             className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//                         />
//                     </div>
//                     <div>
//                         <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Thumbnail</label>
//                         <input
//                             type="file"
//                             id="thumbnail"
//                             accept="image/*"
//                             onChange={handleThumbnailChange}
//                             className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
//                         />
//                     </div>
//                     <button
//                         type="submit"
//                         className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                     >
//                         Create Announcement
//                     </button>
//                 </form>

//                 <div className="mt-8">
//                     <h2 className="text-lg font-medium text-gray-900">Existing Announcements</h2>
//                     {announcements.length > 0 ? (
//                         <ul className="mt-4 space-y-4">
//                             {announcements.map(announcement => (
//                                 <li key={announcement.id} className="p-4 bg-white shadow rounded-lg">
//                                     {announcement.thumbnail && (
//                                         <img
//                                             src={announcement.thumbnail}
//                                             alt="Thumbnail"
//                                             className="w-full h-48 object-cover mb-4 rounded-lg"
//                                         />
//                                     )}
//                                     <h3 className="text-xl font-semibold text-gray-800">{announcement.title}</h3>
//                                     <p className="mt-2 text-gray-600">{announcement.message}</p>
//                                     <span className="block mt-4 text-sm text-gray-500">Posted on: {announcement.date}</span>
//                                 </li>
//                             ))}
//                         </ul>
//                     ) : (
//                         <p className="mt-4 text-gray-600">No announcements yet.</p>
//                     )}
//                 </div>
//             </div>
//         </EntPageContainer>
//     );
// }

// export default EntTeacherAnnouncementsPage;


import { useState } from 'react';
import EntPageContainer from "../../../components/ent/EntPageContainer";

const EntTeacherAnnouncementsPage = () => {
    const [title, setTitle] = useState('');
    const [message, setMessage] = useState('');
    const [thumbnail, setThumbnail] = useState(null);
    const [announcements, setAnnouncements] = useState([]);

    const handleThumbnailChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setThumbnail(event.target.result);
                console.log(e.target.files[0]);
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newAnnouncement = {
            id: announcements.length + 1,
            title,
            message,
            thumbnail,
            date: new Date().toLocaleDateString(),
        };
        setAnnouncements([...announcements, newAnnouncement]);
        setTitle('');
        setMessage('');
        setThumbnail(null);
    };

    return (
        <EntPageContainer title="Announcements">
            <div className="flex flex-col space-y-4">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="mt-1 p-2 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    <div>
                        <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700">Thumbnail</label>
                        <input
                            type="file"
                            id="thumbnail"
                            accept="image/*"
                            onChange={handleThumbnailChange}
                            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                    </div>
                    <button
                        type="submit"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                    >
                        Create Announcement
                    </button>
                </form>

                <div className="mt-8">
                    <h2 className="text-lg font-medium text-gray-900">Existing Announcements</h2>
                    {announcements.length > 0 ? (
                        <ul className="mt-4 space-y-4">
                            {announcements.map(announcement => (
                                <li key={announcement.id} className="p-4 bg-white shadow rounded-lg">
                                    {announcement.thumbnail && (
                                        <img
                                            src={announcement.thumbnail}
                                            alt="Thumbnail"
                                            className="w-full h-48 object-contain mb-4 rounded-lg"
                                        />
                                    )}
                                    <h3 className="text-xl font-semibold text-gray-800">{announcement.title}</h3>
                                    <p className="mt-2 text-gray-600">{announcement.message}</p>
                                    <span className="block mt-4 text-sm text-gray-500">Posted on: {announcement.date}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="mt-4 text-gray-600">No announcements yet.</p>
                    )}
                </div>
            </div>
        </EntPageContainer>
    );
}

export default EntTeacherAnnouncementsPage;
