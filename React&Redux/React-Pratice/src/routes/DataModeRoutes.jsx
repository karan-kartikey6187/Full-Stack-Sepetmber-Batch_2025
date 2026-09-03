// Import React Router
import { createBrowserRouter } from "react-router-dom";


// Import Required Layout
import { RootLayout } from "../layouts/RootLayout";


// Import Required Components
import { ComponentA } from "../components/ComponentA";
import { ComponentB } from "../components/ComponentB";
import { ComponentC } from "../components/ComponentC";


export const router = createBrowserRouter(
    [{
        element: <RootLayout />,
        children: [
            {
                path: '/',
                element: <ComponentA />
            },

            {
                path: '/component-b',
                element: <ComponentB />
            },

            {
                path: '/component-c',
                element: <ComponentC />
            }]
    }]
)