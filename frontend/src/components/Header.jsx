import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="h-screen flex flex-col bg-cover bg-norepeat bg-top bg-[url('/header.jpg')]">
            <Navbar />
            <div className="z-0 pt-5 pb-10 px-10 grow flex flex-col justify-center items-start gap-4 text-white bg-gradient-to-r from-blue-800/70 from-40%">
                <div className="w-1/2 text-6xl font-semibold">Faculté Polydisciplinaire de Khouribga</div>
                <div className="w-1/2 text-xl font-light">An incubator for knowledge, offering a diverse range of scientific, literary, and economic specializations.</div>
            </div>
            
        </header>
    );
}

export default Header;
