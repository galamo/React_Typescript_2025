import { NavLink } from "react-router-dom";
import { TotalProducts } from "../../ProductArea/TotalProducts/TotalProducts";
import "./Menu.css";
import { productService } from "../../../Services/ProductService";
import { MostExpensiveProduct } from "../../ProductArea/MostExpensiveProduct/MostExpensiveProduct";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/Store";
import { UserModel } from "../../../Models/UserModel";

export function Menu(): JSX.Element {

    const user = useSelector<AppState, UserModel>(state => state.user);

    function clearAll() {
        productService.clearAllProducts();
    }

    return (
        <div className="Menu">

            <NavLink to="/home">Home</NavLink>


            <NavLink to="/products" end>Products</NavLink>

            <NavLink to="/products/new">Add Product</NavLink>

            { user && <NavLink to="/products/top-three">Top Three Products</NavLink>}

            { user?.role === "Admin" && <NavLink to="/products/out-of-stock">Out Of Stock Products</NavLink>}


            <NavLink to="/about">About</NavLink>

            <hr />

            <TotalProducts />

            <hr />

            <button onClick={clearAll}>Clear Products</button>

            <hr />

            <MostExpensiveProduct />

        </div>
    );
}
