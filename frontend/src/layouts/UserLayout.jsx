import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
<<<<<<< lafwan
import Navbar from "../components/Navbar";
=======
import Navbar from "../components/ent/Navbar";
>>>>>>> main

const UserLayout = () => {
    return (
        <>
<<<<<<< lafwan
            <Header/>
            {/* <Navbar/> */}
            <link rel="stylesheet" href="" />
=======
            <Navbar/>
>>>>>>> main
            <main className="grow">
                <Outlet/>
            </main>
            <Footer/>
        </>
    );
}

export default UserLayout;