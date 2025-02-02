import { useEffect, useState } from "react";
import "./Products.css";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { ProductCard } from "../ProductCard/ProductCard";
import { useTitle } from "../../../Utils/UseTitle";
import { notify } from "../../../Utils/Notify";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/Store";
import { Spinner } from "../../SharedArea/Spinner/Spinner";

export function Products(): JSX.Element {

    useTitle("Northwind Products");
    
    // Local state for backend products: 
    const [products, setProducts] = useState<ProductModel[]>([]); // [] is the initial value (no products)

    // Fetch data from backend (this is a side-effect, thus we can't do it directly in the component):
    useEffect(() => {
        productService.getAllProducts()
            .then(products => setProducts(products))
            .catch(err => notify.error(err));
    }, []);

    // const products = useSelector<AppState, ProductModel[]>(state => state.products);

    return (
        <div className="Products">
            
            {products.length === 0 && <Spinner />}
            
            {products.map(p => <ProductCard key={p.id} product={p} />)}
            
        </div>
    );
}
