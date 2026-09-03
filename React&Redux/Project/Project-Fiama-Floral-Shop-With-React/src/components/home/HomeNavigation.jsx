import React, { useRef, useState } from "react";
import { Container, Image, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BrandLogo from 'src/assets/logos/fiama-logo.webp'



export const HomeNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const [navBar, setNavBar] = useState(false)

  const closeTimer = useRef(null);

  const handleMouseEnter = (dropdown) => {

    clearTimeout(closeTimer.current);

    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    clearTimeout(closeTimer.current);

    closeTimer.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 700);
  };

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      setNavBar(true)
    }
    else {
      setNavBar(false)
    }
  })

  return (
    <div className="p-0 m-0">
      <div className={`custom-nav-item position-relative d-flex justify-content-center align-items-center pt-5 border-bottom pb-2 w-100 d-none d-lg-flex  ${navBar ? "position-fixed fixed-top justify-content-between bg-white" : "position-relative"}`}>
        <Container className={`d-flex justify-content-center align-items-center w-100  ${navBar ? "justify-content-between" : ""}`}>
          {navBar && <Image src={BrandLogo} />}
          <Nav className="d-flex gap-5 mt-1 pb-1 justify-content-evenly">

            {/* <Nav.Item
              className="me-3"
              onMouseEnter={() => handleMouseEnter("home")}
              onMouseLeave={handleMouseLeave}
            > */}
            <NavLink
              to="/"
              className="nav-link p-0 text-light-grey fw-medium ms-3"
            >
              HOME
            </NavLink>
            {/* {activeDropdown === "home" && (
                <div
                  className="custom-dropdown d-flex flex-column gap-1 bg-white pt-4 ps-6 pe-7 pb-5 translate-middle-x justify-content-between"
                  onMouseEnter={() => handleMouseEnter("home")}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink to="/" className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal">Home Style - 01</NavLink> */}
            {/* <NavLink to="/home-02" className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal">Home Style - 02</NavLink>
                  <NavLink to="/home-03" className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal">Home Style - 03</NavLink>
                  <NavLink to="/home-04" className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal">Home Style - 04</NavLink> */}
            {/* </div>
              )}
            </Nav.Item> */}

            <Nav.Item
              className="me-3"
              onMouseEnter={() => handleMouseEnter("pages")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink className="nav-link p-0 text-light-grey fw-medium ms-2">
                PAGES
              </NavLink>

              {activeDropdown === "pages" && (
                <div
                  className="custom-dropdown position-absolute pages-dropdown bg-white pt-4 ps-5 pe-4 d-flex translate-middle-x"
                  onMouseEnter={() => handleMouseEnter("pages")}
                  onMouseLeave={handleMouseLeave}
                >
                  {/* <div className="d-flex flex-column gap-1">
                    <div className="text-light-grey text-nowrap fw-medium ps-2 pe-7 py-2 bg-body-secondary">Inner Pages</div>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">About Us</NavLink>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">Portfolio</NavLink>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">Portfolio-2</NavLink>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">Portfolio Details</NavLink>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">FAQ</NavLink>
                  </div> */}
                  {/* <div className="d-flex flex-column gap-1">
                    <div className="text-light-grey text-nowrap fw-medium ps-2 pe-7 py-2 bg-body-secondary">Inner Pages</div>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">Google Map Locations</NavLink>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">404</NavLink>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">Contact</NavLink>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">Coming Soon</NavLink>
                  </div> */}
                  <div className="d-flex flex-column gap-1">
                    {/* <div className="text-light-grey text-nowrap fw-medium ps-2 pe-7 py-2 bg-body-secondary">Pages</div> */}
                    {/* <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="/shop">Shop</NavLink> */}
                    {/* <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">Shop Grid</NavLink> */}
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="/shop">Shop Left sidebar</NavLink>
                    <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="/cart">Cart</NavLink>
                    <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="/wishlist">Wishlist</NavLink>
                    <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="/checkout">Checkout</NavLink>
                    <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="/account">My Account</NavLink>
                    {/* <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">Shop right sidebar</NavLink> */}
                    {/* <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">Shop details</NavLink> */}
                  </div>
                  {/* <div className="d-flex flex-column gap-1">
                    <div className="text-light-grey text-nowrap fw-medium ps-2 pe-7 py-2 bg-body-secondary">Blog Pages</div>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">News</NavLink>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">News Grid</NavLink>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">News Left sidebar</NavLink>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">News Right sidebars</NavLink>
                    <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">News details</NavLink>
                  </div> */}
                </div>
              )}
            </Nav.Item>

            {/* <Nav.Item
              className="me-3"
              onMouseEnter={() => handleMouseEnter("shop")}
              onMouseLeave={handleMouseLeave}
            > */}
            <NavLink to="/shop" className="nav-link p-0 text-light-grey fw-medium">
              SHOP
            </NavLink>

            {/* {activeDropdown === "shop" && (
                <div
                  className="custom-dropdown nav-shop-options-list z-3 d-flex flex-column gap-1 bg-white pt-4 ps-6 pe-7 pb-5 overflow-x-auto translate-middle-x"
                  onMouseEnter={() => handleMouseEnter("shop")}
                  onMouseLeave={handleMouseLeave}
                  style={{ height: "273px" }}
                > */}
            {/* <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="/shop">Shop</NavLink> */}
            {/* <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="#">Shop Grid</NavLink> */}
            {/* <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="/shop">Shop Left sidebar</NavLink> */}
            {/* <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="#">Shop right sidebar</NavLink> */}
            {/* <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="#">Shop details</NavLink> */}
            {/* <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="#">Order Tracking</NavLink> */}
            {/* <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="/cart">Cart</NavLink>
                  <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="/wishlist">Wishlist</NavLink>
                  <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="/checkout">Checkout</NavLink>
                  <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="/account">My Account</NavLink> */}
            {/* <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="/login">Sign in</NavLink>
                  <NavLink className="text-nowrap py-8px text-decoration-none text-nowrap text-light-grey fw-normal" to="/register">Register</NavLink> */}
            {/* </div>
              )}
            </Nav.Item> */}

            {/* <Nav.Item
              className="me-3"
              onMouseEnter={() => handleMouseEnter("portfolio")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink className="nav-link p-0 text-light-grey fw-medium">
                PORTFOLIO
              </NavLink>

              {activeDropdown === "portfolio" && (
                <div
                  className="custom-dropdown d-flex flex-column gap-1 bg-white pt-4 ps-6 pe-7 pb-5 translate-middle-x"
                  onMouseEnter={() => handleMouseEnter("portfolio")}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">Portfolio</NavLink>
                  <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">Portfolio - 02</NavLink>
                  <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">Portfolio Details</NavLink>
                </div>
              )}
            </Nav.Item> */}

            {/* <Nav.Item
              className="me-3"
              onMouseEnter={() => handleMouseEnter("news")}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink className="nav-link p-0 text-light-grey fw-medium">
                NEWS
              </NavLink>

              {activeDropdown === "news" && (
                <div
                  className="custom-dropdown d-flex flex-column gap-1 bg-white pt-4 ps-6 pe-7 pb-5 translate-middle-x"
                  onMouseEnter={() => handleMouseEnter("news")}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">News</NavLink>
                  <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">News Grid</NavLink>
                  <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">News Left sidebar</NavLink>
                  <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">News Right sidebar</NavLink>
                  <NavLink className="text-light-grey py-8px text-decoration-none text-nowrap fw-normal" to="#">News details</NavLink>
                </div>
              )}
            </Nav.Item> */}

            <Nav.Item className="me-3">
              <NavLink
                to="/account"
                className="nav-link p-0 text-light-grey fw-medium ms-2"
              >
                MY ACCOUNT
              </NavLink>
            </Nav.Item>

          </Nav>
        </Container>
      </div>
    </div>
  );
};
