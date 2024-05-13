import Paths from "../../routers/Paths.json";

const Footer = () => {
    return (
        <footer className="p-5 text-white space-y-10 bg-slate-800">

            <section className="px-10 text-center space-x-1">
                <span>Designed and developed by</span>
                <a href={Paths.AL_KHAWARIZMI_CLUB_URL} className="text-orange-400">Al Khawarizmi Club</a>
                <span>©</span>
                <span>2024</span>
            </section>

        </footer>
    );
}

export default Footer;