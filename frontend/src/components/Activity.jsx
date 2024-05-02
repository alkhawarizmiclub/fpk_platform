const Activity = ({ label, url, img_src }) => {
    return (
        <div className="rounded-lg aspect-[4/3] bg-slate-200">
            <a href={url}>{label}</a>
        </div>
    );
}

export default Activity;