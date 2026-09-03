import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = () => {

    const login = localStorage.getItem("login");

    return login === "true" ? <Outlet /> : <Navigate to="/login" />;
}
