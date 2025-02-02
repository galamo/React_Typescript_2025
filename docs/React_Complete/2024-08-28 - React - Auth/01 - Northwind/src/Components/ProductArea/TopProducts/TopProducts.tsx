import { useEffect, useState } from "react";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { notify } from "../../../Utils/Notify";
import { useTitle } from "../../../Utils/UseTitle";
import { Spinner } from "../../SharedArea/Spinner/Spinner";
import { ProductCard } from "../ProductCard/ProductCard";
import "./TopProducts.css";
import { useNavigate } from "react-router-dom";
import { store } from "../../../Redux/Store";

export function TopProducts(): JSX.Element {

    useTitle("Northwind Top Products");
    const [products, setProducts] = useState<ProductModel[]>([]);
    const navigate = useNavigate();

    useEffect(() => {

        if(!store.getState().user) {
            notify.error("You are not logged in.");
            sessionStorage.setItem("targetUrl", "/products/top-three");
            navigate("/login");
            return;
        }

        productService.getTopThreeProducts()
            .then(products => setProducts(products))
            .catch(err => notify.error(err));
    }, []);

    return (
        <div className="TopProducts">
			
            {products.length === 0 && <Spinner />}
            
            {products.map(p => <ProductCard key={p.id} product={p} />)}
            
        </div>
    );
}
