import { Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/context";
import Footer from "../components/ent/Footer";
import Sidebar from "../components/ent/Sidebar";
import Navbar from "../components/ent/Navbar";
import LoginPage from "../pages/LoginPage";

const EntLayout = () => {

    const { authenticated } = useUserContext();

    return (
        authenticated ? (
            <>
                <main className="grow overflow-auto min-h-screen flex bg-gray-100">
                    <Sidebar />
                    <div className="grow flex flex-col">
                        <Navbar />
                        <Outlet />
                    </div>
                </main >
                <Footer />
            </>
        ) : (
            <LoginPage />
        )
    );

}

export default EntLayout;