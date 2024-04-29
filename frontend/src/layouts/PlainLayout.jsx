import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const PlainLayout = () => {
    return (
        <>
            <main className="grow flex">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default PlainLayout;