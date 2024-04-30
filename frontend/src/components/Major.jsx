const Major = ({ label, url, img_src }) => {

    return (
        <div className={`relative group overflow-hidden aspect-video bg-cover bg-norepeat bg-center`}>
            <a href={url} className=" p-5 absolute transition-all duration-300 ease-in-out z-0 h-full w-full flex justify-center items-center text-center capitalize text-white top-1 group-hover:top-0 -translate-y-full group-hover:translate-y-0 bg-orange-500/100 group-hover:bg-orange-500/50 backdrop-blur">{label}</a>
            {img_src && (
                <img src={img_src} />
            )}
        </div>
    );

}

export default Major;