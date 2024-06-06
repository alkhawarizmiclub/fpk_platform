import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/context";
import Paths from "../routers/Paths.json";
import Footer from "../components/ent/Footer";
import Sidebar from "../components/ent/Sidebar";
import Navbar from "../components/ent/Navbar";

const EntLayout = ({ EntPagesUrlsList }) => {

    const { authenticated } = useUserContext();
    const navigate = useNavigate();

    useEffect(() => {
        console.log(authenticated, "if (", !authenticated, ")");
        if (!authenticated) {
            navigate(Paths.LOGIN_PAGE)
        }
    }, [authenticated])

    return (
        <>
            <main className="grow overflow-auto min-h-screen flex bg-gray-100">
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