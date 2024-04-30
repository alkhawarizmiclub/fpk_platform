const Major = ({ label, url, img_src }) => {

    let bg_img = "";

    if (img_src) {
        bg_img = `bg-[url(${img_src})]`;
    } else {
        bg_img = "bg-slate-300";
    }

    return (
        <div className={`group aspect-video bg-cover bg-norepeat bg-center ${bg_img}`}>
            <a href={url} className="p-5 w-full h-1/3 group-hover:h-full block capitalize text-white bg-orange-400">{label}</a>
        </div>
    );

}

export default Major;