import { UserMenu } from "../UserMenu/UserMenu";
import "./Header.css";

export function Header(): JSX.Element {
    return (
        <div className="Header">

            <UserMenu />

			<h1> ❤ Northwind Traders ❤</h1>

        </div>
    );
}
