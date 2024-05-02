const Announcement = ({ title, url, img_src }) => {
    return (
        <div>
            <a href={url}>
                <img src={img_src} alt={title} />
                <h1>{title}</h1>
            </a>
        </div>
    );
}

export default Announcement;