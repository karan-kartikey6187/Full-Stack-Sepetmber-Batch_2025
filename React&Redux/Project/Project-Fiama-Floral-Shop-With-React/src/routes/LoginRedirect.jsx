import { Navigate, Outlet } from "react-router-dom";

export const LoginRedirect = () => {
    const login = localStorage.getItem("login");

    return login === "true"
        ? <Navigate to="/account" replace />
        : <Outlet />;
};