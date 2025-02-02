import { ProductModel } from "../../../Models/ProductModel";
import "./ProductCard.css";

type ProductCardProps = {
    product: ProductModel;
};

export function ProductCard(props: ProductCardProps): JSX.Element {
    return (
        <div className="ProductCard">
			<span>Name: {props.product.name}</span>
            <span>Price: {props.product.price}</span>
        </div>
    );
}
