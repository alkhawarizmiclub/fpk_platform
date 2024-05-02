const Activity = ({ label, url, img_src }) => {
    return (
        <div className="relative group flex justify-center items-center rounded-lg aspect-[4/3] overflow-hidden bg-slate-200">
            <div className="absolute top-0 right-10 group-hover:-right-1/2 p-2 max-w-32 flex flex-col justify-center items-center rounded-b transition-all duration-300 text-white shadow bg-orange-400">
                <span className="text-lg">Jul</span>
                <span className="text-3xl font-semibold">23</span>
                <span>2024</span>
            </div>
            <a href={url} className="absolute bottom-0 p-5 flex flex-col justify-center w-full h-20 group-hover:h-full transition-all duration-300 text-white bg-gradient-to-t from-orange-400 via-orange-300 via-80% group-hover:via-100% backdrop-blur">
                <span className="text-lg truncate group-hover:whitespace-normal">{label}</span>
            </a>
            <img src={img_src} alt={label} className="object-cover h-full w-full" />
        </div>
    );
}

export default Activity;