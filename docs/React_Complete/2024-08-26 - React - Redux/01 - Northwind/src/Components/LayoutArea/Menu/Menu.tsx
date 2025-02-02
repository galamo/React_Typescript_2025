import { NavLink } from "react-router-dom";
import { TotalProducts } from "../../ProductArea/TotalProducts/TotalProducts";
import "./Menu.css";
import { productService } from "../../../Services/ProductService";
import { MostExpensiveProduct } from "../../ProductArea/MostExpensiveProduct/MostExpensiveProduct";

export function Menu(): JSX.Element {

    function clearAll() {
        productService.clearAllProducts();
    }

    return (
        <div className="Menu">

            <NavLink to="/home">Home</NavLink>

            <NavLink to="/products" end>Products</NavLink>

            <NavLink to="/products/new">Add Product</NavLink>

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
