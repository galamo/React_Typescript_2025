import { useSelector } from "react-redux";
import { ProductModel } from "../../../Models/ProductModel";
import { AppState } from "../../../Redux/Store";
import { ProductCard } from "../ProductCard/ProductCard";
import "./MostExpensiveProduct.css";

export function MostExpensiveProduct(): JSX.Element {

    const maxPriceProduct = useSelector<AppState, ProductModel>(state => {
        if (state.products.length === 0) return null;
        return state.products.reduce((p1, p2) => p1.price > p2.price ? p1 : p2);
    });

    if(!maxPriceProduct) return null;

    return (
        <div className="MostExpensiveProduct">
            <h4>Most Expensive Product: </h4>
            <ProductCard product={maxPriceProduct} />
        </div>
    );
}
