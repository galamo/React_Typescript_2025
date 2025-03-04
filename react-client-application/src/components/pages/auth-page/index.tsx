import { Outlet } from "react-router";

export function AuthLayoutPage() {
  return (
    <div>
      <span>
        <p>
          Unauthorized access to this system is forbidden and will be prosecuted
          by law. By accessing this system, you agree that your actions may be
          monitored if unauthorized usage is suspected.
        </p>
      </span>
      <Outlet />
    </div>
  );
}
