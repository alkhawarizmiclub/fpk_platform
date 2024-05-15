import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PageLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default PageLayout;