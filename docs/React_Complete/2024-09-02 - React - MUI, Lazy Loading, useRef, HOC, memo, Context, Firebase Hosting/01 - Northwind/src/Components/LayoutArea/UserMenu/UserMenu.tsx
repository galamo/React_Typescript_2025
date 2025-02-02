import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { UserModel } from "../../../Models/UserModel";
import { AppState } from "../../../Redux/Store";
import { userService } from "../../../Services/UserService";
import "./UserMenu.css";
import { notify } from "../../../Utils/Notify";

export function UserMenu(): JSX.Element {

    const user = useSelector<AppState, UserModel>(state => state.user);

    function logout() {
        userService.logout();
        notify.success("Bye bye");
    }

    return (
        <div className="UserMenu">

            {!user && <div>
                <span>Hello Guest | </span>
                <NavLink to="/login">Login</NavLink>
                <span> | </span>
                <NavLink to="/register">Register</NavLink>
            </div>}

            {user && <div>
                <span>Hello {user.firstName} {user.lastName} | </span>
                <NavLink to="/home" onClick={logout}>Logout</NavLink>
            </div>}

        </div>
    );
}
