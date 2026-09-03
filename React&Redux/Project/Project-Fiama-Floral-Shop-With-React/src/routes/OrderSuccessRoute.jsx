import { Navigate, Outlet } from "react-router-dom";

export const OrderSuccessRoute = () => {
    const orderId = sessionStorage.getItem("orderId");

    return orderId ? <Outlet /> : <Navigate to="/404" replace />;
};