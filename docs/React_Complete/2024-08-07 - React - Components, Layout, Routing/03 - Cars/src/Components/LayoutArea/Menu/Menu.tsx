import { NavLink } from "react-router-dom";
import "./Menu.css";

export function Menu(): JSX.Element {
    return (
        <div className="Menu">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/cars">Cars</NavLink>
            <NavLink to="/sales-and-discount">Sales</NavLink>
            <NavLink to="/about-us">About</NavLink>
        </div>
    );
}
