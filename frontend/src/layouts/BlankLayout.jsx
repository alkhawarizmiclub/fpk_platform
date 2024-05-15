import { Outlet } from "react-router-dom";

const PlainLayout = () => {
    return (
        <main className="grow">
            <Outlet />
        </main>
    );
}

export default PlainLayout;