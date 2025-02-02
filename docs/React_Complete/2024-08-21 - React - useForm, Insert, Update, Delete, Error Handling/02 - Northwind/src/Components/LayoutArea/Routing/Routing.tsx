import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "../../PagesArea/About/About";
import { Home } from "../../PagesArea/Home/Home";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { Products } from "../../ProductArea/Products/Products";
import { Page404 } from "../Page404/Page404";
import "./Routing.css";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
			<Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />

                <Route path="/products" element={<Products />} />
                <Route path="/products/new" element={<AddProduct />} />
                <Route path="/product-details/:prodId" element={<ProductDetails />} />
                <Route path="/products/edit/:prodId" element={<EditProduct />} />

                <Route path="/about" element={<About />} />
                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
