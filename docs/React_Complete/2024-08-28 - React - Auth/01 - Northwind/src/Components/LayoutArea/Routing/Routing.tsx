import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "../../PagesArea/About/About";
import { Home } from "../../PagesArea/Home/Home";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { Products } from "../../ProductArea/Products/Products";
import { Register } from "../../UserArea/Register/Register";
import { Page404 } from "../Page404/Page404";
import "./Routing.css";
import { Login } from "../../UserArea/Login/Login";
import { TopProducts } from "../../ProductArea/TopProducts/TopProducts";
import { OutOfStockProducts } from "../../ProductArea/OutOfStockProducts/OutOfStockProducts";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
            <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />

                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />

                <Route path="/products" element={<Products />} />
                <Route path="/products/new" element={<AddProduct />} />
                <Route path="/product-details/:prodId" element={<ProductDetails />} />
                <Route path="/products/edit/:prodId" element={<EditProduct />} />
                <Route path="/products/top-three" element={<TopProducts />} />
                <Route path="/products/out-of-stock" element={<OutOfStockProducts />} />

                <Route path="/about" element={<About />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
