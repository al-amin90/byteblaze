import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";



const MainLayouts = () => {
    return (
        <div>
            <Nav></Nav>
            <div className="min-h-[calc(100vh-116px)]">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayouts;