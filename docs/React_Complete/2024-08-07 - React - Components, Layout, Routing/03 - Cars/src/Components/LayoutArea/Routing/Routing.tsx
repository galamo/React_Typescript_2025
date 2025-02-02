import { Navigate, Route, Routes } from "react-router-dom";
import { Cars } from "../../CarArea/Cars/Cars";
import { About } from "../../Pages/About/About";
import { Home } from "../../Pages/Home/Home";
import { Sales } from "../../Pages/Sales/Sales";
import { Page404 } from "../Page404/Page404";
import "./Routing.css";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route path="/sales-and-discount" element={<Sales />} />
                <Route path="/about-us" element={<About />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
