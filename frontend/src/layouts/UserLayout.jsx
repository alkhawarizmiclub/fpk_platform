import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/ent/Navbar";

const UserLayout = () => {
    return (
        <>
            <Navbar/>
            <main className="grow">
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default UserLayout;