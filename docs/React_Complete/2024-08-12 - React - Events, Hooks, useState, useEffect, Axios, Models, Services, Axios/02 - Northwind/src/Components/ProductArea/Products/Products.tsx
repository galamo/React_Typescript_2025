import { useEffect, useState } from "react";
import "./Products.css";
import { ProductModel } from "../../../Models/ProductModel";
import { productService } from "../../../Services/ProductService";
import { ProductCard } from "../ProductCard/ProductCard";

export function Products(): JSX.Element {

    // Local state for backend products: 
    const [products, setProducts] = useState<ProductModel[]>([]); // [] is the initial value (no products)

    // Fetch data from backend (this is a side-effect, thus we can't do it directly in the component):
    useEffect(() => {
        productService.getAllProducts()
            .then(products => setProducts(products))
            .catch(err => alert(err.message));
    }, []);

    return (
        <div className="Products">
            {products.map(p => <ProductCard product={p} />)}
        </div>
    );
}
