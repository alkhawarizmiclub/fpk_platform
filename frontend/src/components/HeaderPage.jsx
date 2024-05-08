const HeaderPage = ({ page_title }) => {
    return (
        <header className="relative flex flex-col">

            <h1 className="z-[2] p-20 text-center text-white text-3xl font-semibold capitalize">{page_title}</h1>

            <div className="absolute z-[1] w-full h-full bg-gradient-to-r from-blue-800/80"></div>

            <div className="absolute z-0 w-full h-full overflow-hidden">
                <img src="/header.jpg" className="w-full h-full object-cover " />
            </div>

        </header>
    );
}

export default HeaderPage;