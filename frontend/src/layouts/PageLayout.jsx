import HeaderPage from "../components/HeaderPage";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const PageLayout = ({ page_title, children }) => {
    return (
        <>
            <Navbar />
            <HeaderPage page_title={page_title} />
            <main className="grow">
                {children}
            </main>
            <Footer />
        </>
    );
}

export default PageLayout;