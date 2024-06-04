import { Outlet } from "react-router-dom";
import Footer from "../components/ent/Footer";
import Sidebar from "../components/ent/Sidebar";
import Navbar from "../components/ent/Navbar";

const EntLayout = ({ EntPagesUrlsList }) => {
    return (
        <>
            <main className="grow min-h-screen flex bg-gray-100">
                <Sidebar EntPagesUrlsList={EntPagesUrlsList} />
                <div className="grow flex flex-col">
                    <Navbar />
                    <Outlet />
                </div>
            </main>
            <Footer />
        </>
    );
}

export default EntLayout;