// Import React Router
import { createBrowserRouter } from "react-router-dom";


// Import Required Layout
import { RootLayout } from "../layouts/RootLayout";


// Import Required Components
import { StaticCard } from "src/components/StaticCard";
import { DynamicCards } from "src/components/DynamicCards";
import { Counter } from "src/components/Counter";
import TodoListProject from "src/components/TodoListProject";
import { RBBadges } from "pages/RBBadges";
import { RBBreadcrumbs } from "pages/RBBreadcrumbs";
import { RBButton } from "pages/RBButton";
import { RBButtonGroup } from "pages/RBButtonGroup";
import { RBCard } from "pages/RBCard";
import { RBImages } from "pages/RBImages";
import { RBListGroup } from "pages/RBListGroup";
import { RBFigure } from "pages/RBFigure";
import { RBTables } from "pages/RBTables";
import { RBProgressBars } from "pages/RBProgressBars";
import { RBSpinners } from "pages/RBSpinners";
import { RBPagination } from "pages/RBPagination";
import { RBAccordion } from "pages/RBAccordion";
import { RBCarousel } from "pages/RBCarousel";
import { RBDropdowns } from "pages/RBDropdowns";
import { RBModal } from "pages/RBModal";
import { RBNavbarOffcanvas } from "pages/RBNavbarOffcanvas";
import { RBNavTabs } from "pages/RBNavTabs";
import { RBOverlays } from "pages/RBOverlays";
import { RHFWithoutYup } from "pages/forms/RHFWithoutYup";
import { RHFWithYup } from "pages/forms/RHFWithYup";
import { Products } from "../pages/Products";
import { Wishlist } from "../pages/Wishlist";
import { Blogs } from "../pages/blog/Blogs";
import { BlogDetails } from "../pages/blog/BlogDetails";
import { BlogSearch } from "../pages/blog/BlogSearch";


export const router = createBrowserRouter(
    [{
        element: <RootLayout />,
        children: [
            // Assignment 1 
            {
                path: '/',
                element: <StaticCard />
            },

            // Assignment 2
            {
                path: '/dynamic-profile-card',
                element: <DynamicCards />
            },

            // Assignment 3
            {
                path: '/counter',
                element: <Counter />
            },

            // Assignment 4
            {
                path: '/todo-list',
                element: <TodoListProject />
            },

            // Non Interactive Links
            {
                path: '/rb-badges',
                element: <RBBadges />
            },

            {
                path: '/rb-breadcrumbs',
                element: <RBBreadcrumbs />
            },
            {
                path: '/rb-button',
                element: <RBButton />
            },

            {
                path: '/rb-button-group',
                element: <RBButtonGroup />
            },
            {
                path: '/rb-card',
                element: <RBCard />
            },
            {
                path: '/rb-image',
                element: <RBImages />
            },
            {
                path: '/rb-list-group',
                element: <RBListGroup />
            },
            {
                path: '/rb-figure',
                element: <RBFigure />
            },
            {
                path: '/rb-table',
                element: <RBTables />
            },
            {
                path: '/rb-progress-bars',
                element: <RBProgressBars />
            },
            {
                path: '/rb-spinners',
                element: <RBSpinners />
            },
            {
                path: '/rb-pagination',
                element: <RBPagination />
            },

            // Interactive Links

            {
                path: "/rb-accordion",
                element: <RBAccordion />
            },
            {
                path: "/rb-carousel",
                element: <RBCarousel />
            },
            {
                path: "/rb-dropdowns",
                element: <RBDropdowns />
            },
            {
                path: "/rb-modal",
                element: <RBModal />
            },
            {
                path: "/rb-navbar-offcanvas",
                element: <RBNavbarOffcanvas />
            },
            {
                path: "/rb-nav-tabs",
                element: <RBNavTabs />
            },
            {
                path: "/rb-overlays",
                element: <RBOverlays />
            },



            // Forms Links
            {
                path: "/rhf-without-yup",
                element: <RHFWithoutYup />
            },
            {
                path: "/rhf-with-yup",
                element: <RHFWithYup />
            },

            // Context API

            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/wishlist",
                element: <Wishlist />
            },


            // Context API

            {
                path: "/blogs",
                element: <Blogs />
            },
            {
                path: "/blog/:id",
                element: <BlogDetails />
            },
            {
                path: "/blog-search",
                element: <BlogSearch />
            }
        ]
    }]
)