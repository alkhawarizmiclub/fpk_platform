import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const UserLayout = () => {
    return (
        <>
            <Header/>
            {/* <Navbar/> */}
            <link rel="stylesheet" href="" />
            <main className="grow">
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default UserLayout;