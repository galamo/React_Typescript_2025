import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductModel } from "../../../Models/ProductModel";
import { store } from "../../../Redux/Store";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { ProductCard } from "../ProductCard/ProductCard";
import "./OutOfStockProducts.css";

export function OutOfStockProducts(): JSX.Element {

    useTitle("Northwind Out Of Stock Products");
    const [products, setProducts] = useState<ProductModel[]>([]);
    const navigate = useNavigate();

    useEffect(() => {

        const user = store.getState().user;
        if(user?.role !== "Admin") {
            notify.error("You are not authorized.");
            sessionStorage.setItem("targetUrl", "/products/out-of-stock");
            navigate("/login");
            return;
        }

        productService.getOutOfStockProducts()
            .then(products => setProducts(products))
            .catch(err => notify.error(err));
    }, []);

    return (
        <div className="OutOfStockProducts">
			
            {products.length === 0 && <Spinner />}
            
            {products.map(p => <ProductCard key={p.id} product={p} />)}
            
        </div>
    );
}
