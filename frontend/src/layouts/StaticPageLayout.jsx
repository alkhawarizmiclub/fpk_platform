import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import HeaderPage from "../components/HeaderPage";
import Navbar from "../components/Navbar";

const StaticPageLayout = () => {
    return (
        <>
            <Navbar />
            <main className="grow">
                {<Outlet />}
            </main>
            <Footer />
        </>
    );
}

export default StaticPageLayout;