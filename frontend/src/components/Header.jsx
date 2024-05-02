import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="h-screen flex flex-col bg-cover bg-norepeat bg-center bg-[url(http://www.fpk.ac.ma/wp-content/uploads/2023/03/IMG-20220525-WA0044.jpg)]">
            <Navbar />
            <div className="z-0 pt-5 pb-10 px-10 grow flex flex-col justify-center items-center gap-4 text-white backdrop-blur backdrop-brightness-50">
                <div className="text-5xl font-semibold">Faculté Polydisciplinaire de Khouribga</div>
                <div className="text-xl font-light">An incubator for knowledge, offering a diverse range of scientific, literary, and economic specializations.</div>
            </div>
        </header>
    );
}

export default Header;