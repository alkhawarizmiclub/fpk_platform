import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const StaticPageLayout = () => {
    return (
        <>
            <Navbar />
            <main className="grow flex flex-col justify-start bg-gray-100">
                {<Outlet />}
            </main>
            <Footer />
        </>
    );
}

export default StaticPageLayout;