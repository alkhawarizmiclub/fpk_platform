const Major = ({ label, url, img_src }) => {

    return (
        <div className="relative group overflow-hidden aspect-video rounded-lg">
            <a href={url} className="absolute h-full w-full flex justify-center items-center capitalize text-center text-white text-lg font-bold transition-all duration-300 ease-in-out bg-orange-400/30 group-hover:bg-orange-400/90">{label}</a>
            <img src={img_src} />
        </div>
    );

}

export default Major;