import { v4 as uuid } from "uuid";

// Assignment Links
export const AssignmentLinks = [
  { id: uuid(), link: "/", menuName: "Static Profile Card" },
  { id: uuid(), link: "/dynamic-profile-card", menuName: "Dynamic Profile Card" },
  { id: uuid(), link: "/counter", menuName: "Counter" },
  { id: uuid(), link: "/todo-list", menuName: "Todo List" },
];

// Non Interactive Links
export const NonInteractiveLinks = [
  { id: uuid(), link: "/rb-badges", menuName: "Badges" },
  { id: uuid(), link: "/rb-breadcrumbs", menuName: "Breadcrumbs" },
  { id: uuid(), link: "/rb-button", menuName: "Button" },
  { id: uuid(), link: "/rb-button-group", menuName: "Button Group" },
  { id: uuid(), link: "/rb-card", menuName: "Card" },
  { id: uuid(), link: "/rb-image", menuName: "Images" },
  { id: uuid(), link: "/rb-list-group", menuName: "List Group" },
  { id: uuid(), link: "/rb-figure", menuName: "Figure" },
  { id: uuid(), link: "/rb-pagination", menuName: "Pagination" },
  { id: uuid(), link: "/rb-progress-bars", menuName: "Progress Bars" },
  { id: uuid(), link: "/rb-spinners", menuName: "Spinners" },
  { id: uuid(), link: "/rb-table", menuName: "Table" },
];

// InteractiveLinks
export const InteractiveLinks = [
  { id: uuid(), link: "/rb-accordion", menuName: "Accordion" },
  { id: uuid(), link: "/rb-carousel", menuName: "Carousel" },
  { id: uuid(), link: "/rb-dropdowns", menuName: "Dropdowns" },
  { id: uuid(), link: "/rb-modal", menuName: "Modal" },
  { id: uuid(), link: "/rb-navbar-offcanvas", menuName: "Navbar Offcanvas" },
  { id: uuid(), link: "/rb-nav-tabs", menuName: "Nav Tabs" },
  { id: uuid(), link: "/rb-overlays", menuName: "Overlays" },
];

// Forms Links
export const FormsLinks = [
  { id: uuid(), link: "/rhf-without-yup", menuName: "RHF Without Yup" },
  { id: uuid(), link: "/rhf-with-yup", menuName: "RHF With Yup" },
];


// Context API
export const ContextAPI = [
  { id: uuid(), link: "/products", menuName: "Products" },
  { id: uuid(), link: "/blogs", menuName: "Blogs" },
];
