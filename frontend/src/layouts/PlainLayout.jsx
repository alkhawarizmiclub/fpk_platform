import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const PlainLayout = () => {
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
}

export default PlainLayout;