import { useTitle } from "../../../Utils/UseTitle";
import { Clock } from "../../SharedArea/Clock/Clock";
import "./About.css";

export function About(): JSX.Element {

    useTitle("Northwind - About");

    
    return (
        <div className="About">
			<Clock />
        </div>
    );
}
