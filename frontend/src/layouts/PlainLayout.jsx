import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const PlainLayout = () => {
    return (
        <>
            <main className="grow">
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default PlainLayout;