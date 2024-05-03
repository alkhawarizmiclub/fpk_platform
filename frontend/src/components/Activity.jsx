const Activity = ({ label, url, img_src, date_day, date_month, date_year }) => {
    return (
        // <div className="relative group flex justify-center items-center rounded-lg aspect-[4/3] overflow-hidden bg-slate-200">
        //     <div className="absolute z-[1] top-0 right-5 group-hover:-right-20 p-2 max-w-32 flex flex-col justify-center items-center rounded-b transition-all duration-300 text-white shadow bg-orange-400">
        //         <span className="text-lg">Jul</span>
        //         <span className="text-3xl font-semibold">23</span>
        //         <span>2024</span>
        //     </div>
        //     <a href={url} className="absolute z-0 bottom-0 p-5 flex flex-col justify-center w-full h-20 group-hover:h-full transition-all duration-300 text-white bg-orange-400">
        //         <span className="text-lg truncate group-hover:whitespace-normal">{label}</span>
        //     </a>
        //     <img src={img_src} alt={label} className="object-cover h-full w-full" />
        // </div>
        <div className="relative flex flex-col gap-2">
            <div className="absolute z-[1] top-0 right-5 group-hover:right-5 p-2 max-w-32 flex flex-col justify-center items-center rounded-b transition-all duration-300 text-white shadow bg-orange-400">
                <span className="text-lg">Jul</span>
                <span className="text-3xl font-semibold">23</span>
                <span>2024</span>
            </div>
            <div className="w-full aspect-video flex overflow-hidden border-b-4 border-orange-400 bg-slate-200">
                <img src={img_src} alt={label} className="w-full h-full object-cover" />
            </div>
            <a href={url} className="text-lg font-semibold">{label}</a>
            {/* <div className="text-slate-600">{date_day} {date_month} {date_year}</div> */}
        </div>
    );
}

export default Activity;