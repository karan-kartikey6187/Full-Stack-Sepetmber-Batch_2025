import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

// Bootstrap Components
import { Accordion, Badge, Image } from 'react-bootstrap';
import { HomeNavigation } from 'src/components/home/HomeNavigation';


import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


// Import Required Images and Icons
import BrandLogo from 'src/assets/logos/fiama-logo.webp'
import CartIcon from 'src/assets/icons/cart.svg'
import Search from "src/assets/icons/search.svg"
import Telephone from "src/assets/icons/telephone.svg"
import Heart from "src/assets/icons/heart.svg"
import { Moon, Sun } from 'react-bootstrap-icons';
import Person from 'src/assets/icons/person.svg';
import FacebookGrey from 'src/assets/icons/facebook-grey.svg';
import TwitterGrey from 'src/assets/icons/twitter-grey.svg';
import PinterestGrey from 'src/assets/icons/pinterest-grey.svg';
import InstagramGrey from 'src/assets/icons/instagram-grey.svg';
import { useSelector } from 'react-redux';
import { ConvertToCurrency } from '../../utils/utils';


export const Header = () => {

  const { wishlistItems } = useSelector((state) => state.wishlist)

  const cartState = useSelector((state) => state.cart)

  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark") === "true" ? true : false);

  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleNavClick = () => {
    setShowOffcanvas(false);
  };

  const handleThemeMode = () => {
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    localStorage.setItem("dark", darkMode)
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const navigate = useNavigate()

  return (
    <div>
      <div className='border-bottom'>
        <Container>
          <Navbar expand="lg" className="mb-4 mt-6 justify-content-between align-items-center flex-column flex-sm-row">
            <Navbar.Brand><NavLink to="/"><Image src={BrandLogo} /></NavLink></Navbar.Brand>
            <Navbar.Offcanvas
              id={"offcanvasNavbar-expand-lg"}
              aria-labelledby="offcanvasNavbarLabel-expand-lg"
              placement="start"
              responsive="lg"
              show={showOffcanvas}
              onHide={() => setShowOffcanvas(false)}
              className="header-offcanvas px-5 pt-2 pt-4 pb-5 overflow-y-auto"
            >
              <Offcanvas.Header closeButton className='border-bottom border-2 p-0 pb-1 mb-1'>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg" className='pb-2'>
                  <Image src={BrandLogo} onClick={() => navigate("/")} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className='justify-content-center p-0'>

                <div className="d-flex align-items-center d-none d-lg-flex me-3">
                  <Image src={Telephone} alt="Phone" className="icon--20px me-3" />
                  <div>
                    <p className="mb-0 text-light-grey fs-13 fw-medium mb-4px">PHONE</p>
                    <p className="mb-0"><NavLink to="tel:0123456789" className="text-decoration-none text-black fs-13 fw-normal text-nowrap">+0123-456-789</NavLink></p>
                  </div>
                </div>
                <div className="search-bar p-1 border border-1 d-none d-lg-flex d-flex align-items-center rounded rounded-5">
                  <Form className="d-flex border-0 w-100" role="search">
                    <Form.Control className="me-2 border-0 fw-normal" type="search" placeholder="Search here..." />
                    <Button variant='transparent' className="border-0" type="submit">
                      <Image src={Search} alt="Search" />
                    </Button>
                  </Form>
                </div>
                <div className="search-bar-offcanvas p-1 d-lg-none d-flex align-items-center rounded rounded-1 bg-body-tertiary mt-2">
                  <Form className="d-flex border-0 w-100 justify-content-center" role="search">
                    <Form.Control className="form-control me-2 border-0 bg-body-tertiary fw-normal" type="search" placeholder="Search here..." />
                    <Button variant='transparent' className="border-0 bg-transparent" type="submit">
                      <Image src={Search} alt="Search" />
                    </Button>
                  </Form>
                </div>

                <Accordion className='d-lg-none border-0 mt-3 pb-4 border-bottom'>
                  <Accordion.Item eventKey="0" className='border-0'>
                    <Accordion.Header className='border-0'>HOME</Accordion.Header>
                    <Accordion.Body className='border-0 ps-1 pt-1'>
                      <div className="d-flex flex-column gap-3 ps-0 pe-1">
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="/" onClick={handleNavClick}>Home Style - 01</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">Home Style - 02</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">Home Style - 03</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">Home Style - 04</NavLink>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item >
                  <Nav.Link className="text-nowrap text-light-grey fw-normal py-2" to="/checkout">ABOUT US</Nav.Link>
                  <Accordion.Item eventKey="1" className='border-0'>
                    <Accordion.Header className='border-0'>SHOP</Accordion.Header>
                    <Accordion.Body className='border-0 ps-1 pt-1'>
                      <div className="d-flex flex-column gap-3 ps-0 pe-1">
                        <NavLink className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} to="/shop">Shop</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">Shop Grid</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} to="/shop">Shop Left sidebar</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">Shop right sidebar</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">Shop details</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} to="/cart">Cart</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} to="/wishlist">Wishlist</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} to="/checkout">Checkout</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} to="/account">My Account</NavLink>
                        {/* <NavLink className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} to="/login">Sign in</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" onClick={handleNavClick} to="/register">Register</NavLink> */}
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2" className='border-0'>
                    <Accordion.Header className='border-0'>NEWS</Accordion.Header>
                    <Accordion.Body className='border-0 ps-1 pt-1'>
                      <div className="d-flex flex-column gap-3 ps-0 pe-1">
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">News</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">News Grid</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">News Left sidebar</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">News Right sidebar</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">News details</NavLink>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3" className='border-0'>
                    <Accordion.Header className='border-0'>PAGES</Accordion.Header>
                    <Accordion.Body className='border-0 ps-1 pt-1'>
                      <div className="d-flex flex-column gap-3 ps-0 pe-1">
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">About Us</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">Portfolio</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">Portfolio - 02</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">Portfolio Details</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">FAQ</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">Google Map Locations</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">404</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">Contact</NavLink>
                        <NavLink className="text-decoration-none text-light-grey fw-normal" to="#">Coming Soon</NavLink>
                      </div>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Nav.Link className="text-nowrap text-light-grey fw-normal py-2" to="#">CONTACT</Nav.Link>
                </Accordion>

                <div className="pb-3 border-bottom mb-5 d-lg-none">
                  <div className="icon-box d-flex align-items-center mt-2 position-relative">
                    <div className="icon--50px border d-flex justify-content-center align-items-center me-1"><Image src={Person} className="icon-link" alt="" /></div>
                    <NavLink onClick={handleNavClick} to="/account" className="mb-0 text-light-grey fw-normal stretched-link nav-link">My Account</NavLink>
                  </div>
                  <div className="icon-box d-flex align-items-center mt-2 position-relative">
                    <div className="icon--50px border d-flex justify-content-center align-items-center me-1"><Image src={Heart} className="icon-link" alt="" />&thinsp;<sup className="text-light-grey fw-normal">{wishlistItems.length}</sup></div>
                    <NavLink onClick={handleNavClick} to="/wishlist" className="mb-0 text-light-grey fw-normal stretched-link nav-link">Wishlist</NavLink>
                  </div>
                  <div className="icon-box d-flex align-items-center mt-2 position-relative">
                    <div className="icon--50px border d-flex justify-content-center align-items-center me-1"><Image src={CartIcon} className="icon-link" alt="" />&thinsp;<sup className="text-light-grey fw-normal">{cartState?.totalQuantities}</sup></div>
                    <NavLink onClick={handleNavClick} to="/cart" className="mb-0 text-light-grey fw-normal stretched-link nav-link">Shoping Cart</NavLink>
                  </div>
                </div>
                <div className="d-flex d-lg-none gap-1 mb-1">
                  <div className="icon--40px d-flex justify-content-center align-items-center bg-body-tertiary"><Image src={FacebookGrey} alt="" /></div>
                  <div className="icon--40px d-flex justify-content-center align-items-center bg-body-tertiary"><Image src={TwitterGrey} alt="" /></div>
                  <div className="icon--40px d-flex justify-content-center align-items-center bg-body-tertiary"><Image src={PinterestGrey} alt="" /></div>
                  <div className="icon--40px d-flex justify-content-center align-items-center bg-body-tertiary"><Image src={InstagramGrey} alt="" /></div>
                </div>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <div className='d-flex justify-content-center align-items-center mt-3 mt-lg-0 flex-wrap flex-md-nowrap'>
              <div type="button" onClick={() => navigate("/wishlist")} className="wishlist-toggler-btn position-relative d-flex align-items-center me-4">
                <Image src={Heart} alt="Wishlist" className="icon--20px" />
                {wishlistItems.length === 0 ? " " : <Badge bg='primary' className="position-absolute top-0 badge-icon translate-middle rounded-circle d-flex justify-content-center align-items-center">{wishlistItems.length}</Badge>}
              </div>
              <div role='button' onClick={() => navigate("/cart")} className="cart-toggler-btn position-relative d-flex align-items-center me-1">
                <Image src={CartIcon} alt="Cart" className="icon--20px" />
                {cartState?.totalQuantities === 0 ? " " : <Badge bg="primary" className="position-absolute top-0 badge-icon translate-middle rounded-circle d-flex justify-content-center align-items-center">{cartState?.totalQuantities}</Badge>}
              </div>
              <Button variant=" " onClick={() => navigate("/cart")} className="cart-toggler-btn d-flex flex-column ms-0 position-relative border-0 bg-transparent align-items-start me-1">
                <NavLink to="/cart" className="mb-0 fs-13 fw-medium text-light-grey text-decoration-none stretched-link text-nowrap">YOUR CART</NavLink>
                <p className="mb-0 fs-13 fw-medium text-primary" style={{ marginTop: '4px' }}>{ConvertToCurrency(cartState.subTotal)}</p>
              </Button>
              <Badge onClick={handleThemeMode}
                className={`theme-change-btn me-0 rounded-circle p-1 
                ${darkMode ? "bg-white text-dark" : "bg-dark text-light"}`}
                role="button">
                {darkMode ? <Sun size={18} /> : <Moon size={18} color='white' />}
              </Badge>
              <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" className='border-0' onClick={() => setShowOffcanvas(true)} />
            </div>
          </Navbar>
        </Container>
      </div>
      <HomeNavigation />
    </div>
  );
}
