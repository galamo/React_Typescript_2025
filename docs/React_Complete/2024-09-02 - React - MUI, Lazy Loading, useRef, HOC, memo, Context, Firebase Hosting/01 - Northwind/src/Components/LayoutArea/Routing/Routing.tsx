import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { About } from "../../PagesArea/About/About";
import { Home } from "../../PagesArea/Home/Home";
import { AddProduct } from "../../ProductArea/AddProduct/AddProduct";
import { EditProduct } from "../../ProductArea/EditProduct/EditProduct";
import { OutOfStockProducts } from "../../ProductArea/OutOfStockProducts/OutOfStockProducts";
import { ProductDetails } from "../../ProductArea/ProductDetails/ProductDetails";
import { Products } from "../../ProductArea/Products/Products";
import { TopProducts } from "../../ProductArea/TopProducts/TopProducts";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { Login } from "../../UserArea/Login/Login";
import { Register } from "../../UserArea/Register/Register";
import { Page404 } from "../Page404/Page404";
import "./Routing.css";

export function Routing(): JSX.Element {

    // Lazy load ContactUs component - only if needed - user requesting contact-us route: 
    const LazyContactUs = lazy(() => import("../../PagesArea/ContactUs/ContactUs"));

    // Create a suspense component which is going to be presented in the route: 
    const SuspenseContactUs = <Suspense fallback={<Spinner />}><LazyContactUs /></Suspense>

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

                {/* Lazy loading of the ContactUs component: */}
                <Route path="/contact-us" element={SuspenseContactUs} />

                <Route path="*" element={<Page404 />} />
            </Routes>
        </div>
    );
}
