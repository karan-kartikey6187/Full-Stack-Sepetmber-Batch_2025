// Import React Router
import { createBrowserRouter, Navigate } from "react-router-dom";


// Import Required Layout
import { RootLayout } from "src/layouts/RootLayout";
import { Home } from "src/pages/Home";
import { Shop } from "src/pages/Shop";
import { ProductDetails } from "src/pages/ProductDetails";
import { Cart } from "src/pages/Cart";
import { Wishlist } from "src/pages/Wishlist";
import { Checkout } from "src/pages/Checkout";
import { Account } from "src/pages/Account";
import { Login } from "src/pages/Login";
import { Register } from "src/pages/Register";
import { NotFound404 } from "src/pages/NotFound404";
import AuthLayout from "../layouts/AuthLayout";
import { ProtectedRoute } from "./ProtectedRoute";
import { ShopProducts } from "../components/shop/ShopProducts";
import { LoginRedirect } from "./LoginRedirect";
import { OrderSuccess } from "../pages/OrderSuccess";
import { OrderDetails } from "../pages/OrderDetails";
import { OrderSuccessRoute } from "./OrderSuccessRoute";


// Import Required Components

export const router = createBrowserRouter(
    [
        {
            element: <AuthLayout />,
            children: [
                {
                    element: <LoginRedirect />,
                    children: [
                        {
                            path: "/login",
                            element: <Login />
                        }
                    ]
                },
                { path: "*", element: <Navigate to="/404" /> },
                { path: "/404", element: <NotFound404 /> },
                // { path: "/login", element: <Login /> },
                { path: "/register", element: <Register /> },
            ]
        },
        {
            element: <RootLayout />,
            children: [
                {
                    element: <ProtectedRoute />,
                    children: [
                        {
                            path: "/account",
                            element: <Account />
                        },
                    ]
                },
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/shop",
                    element: <Shop />,
                    children: [
                        {
                            path: ":slug",
                            element: <ShopProducts />
                        }
                    ]
                },
                {
                    path: "/product-details/:id",
                    element: <ProductDetails />
                },
                {
                    path: "/cart",
                    element: <Cart />
                },
                {
                    path: "/wishlist",
                    element: <Wishlist />
                },
                // {
                //     path: "/order-success/:id",
                //     element: <OrderSuccess />
                // },
                {
                    element: <OrderSuccessRoute />,
                    children: [
                        {
                            path: "/order-success/:id",
                            element: <OrderSuccess />
                        }
                    ]
                },
                
                {
                    path: "/order-details/:id",
                    element: <OrderDetails />
                },

                // {
                //     path: "/order-details",
                //     element: <OrderDetails />
                // },
                {
                    path: "/checkout",
                    element: <Checkout />
                },
                { path: "*", element: <Navigate to="/404" /> },
                { path: "/404", element: <NotFound404 /> }
            ]
        }]
)