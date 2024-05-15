const StaticPageHeader = ({ page_title }) => {
    return (
        <div className="relative flex">
            <div className="relative z-[1] p-20 w-full h-full flex justify-center items-center bg-gradient-to-tr from-blue-400/50 to-orange-400">
                <span className="text-4xl font-semibold text-white">{page_title}</span>
            </div>
            <div className="absolute z-0 w-full h-full overflow-hidden">
                <img src="/header.png" alt="Header's background" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}

export default StaticPageHeader;