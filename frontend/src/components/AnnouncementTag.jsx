const AnnouncementTag = ({ label, url }) => {
    return (
        <a href={url} className="py-0.5 px-2 text-nowrap text-xs text-orange-400 rounded-full border border-orange-400">{label}</a>
    );
}

export default AnnouncementTag;