import { useSelector } from "react-redux";
import { AppState, store } from "../../../Redux/Store";
import "./TotalProducts.css";

export function TotalProducts(): JSX.Element {

    // Selects from the entire app state only product count + rerender the component if changed: 
    const count = useSelector<AppState, number>(state => state.products.length);

    if(count === 0) return null;

    return (
        <div className="TotalProducts">
			<span>Total Products: {count}</span>
        </div>
    );
}
