import React from 'react'
import { Image, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'


// Images 
import FaceBookGrey from "src/assets/icons/facebook-grey.svg"
import TwitterGrey from "src/assets/icons/twitter-grey.svg"
import PinterestGrey from "src/assets/icons/pinterest-grey.svg"
import InstagramGrey from "src/assets/icons/instagram-grey.svg"
import FooterPaymentImg from "src/assets/images/footer-payment-img.webp"
import LocationGrey from "src/assets/icons/location-grey.svg"
import TelephoneGrey from "src/assets/icons/telephone-grey.svg"
import EnvelopeGrey from "src/assets/icons/envelope-grey.svg"



export const Footer = () => {
  return (
    <footer>
     <section className="footer-top bg-light-dark pt-4 pt-md-5 pt-lg-6 pt-xl-7">
      <div className="footer-top-container container pb-5 pb-lg-6 pb-xl-7">
        <div className="footer-wrapper row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          <div className="footer-links col-md-4 col-xl-2 mt-6 mt-xxl-0 d-flex flex-column align-items-start ps-3 ps-sm-0">
             <strong className="text-white fw-medium text-uppercase mb-4 pe-7 text-nowrap">My Accoout</strong>
             <Nav className="d-flex flex-column gap-4 mt-2">
                 <NavLink to="/account" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">My account</NavLink>
                 <NavLink to="/checkout" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Checkout</NavLink>
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Contact us</NavLink>
                 <NavLink to="/cart" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Shopping Cart</NavLink>
                 <NavLink to="/wishlist" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Wishlist</NavLink>
             </Nav>
         </div>
          <div className="footer-links col-md-4 col-lg-3 col-xl-2 mt-6 mt-xxl-0 d-flex flex-column align-items-start ps-3 ps-sm-0">
             <strong className="text-white fw-medium text-uppercase mb-4 pe-7 text-nowrap">Quick Links</strong>
             <Nav className="d-flex flex-column gap-4 mt-2">
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Store Location</NavLink>
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Orders Tracking</NavLink>
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Size Guide</NavLink>
                 <NavLink to="/account" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">My account</NavLink>
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">FAQs</NavLink>
             </Nav>
         </div>
          <div className="footer-links col-md-4 col-lg-3 col-xl-2 mt-6 mt-xxl-0 d-flex flex-column align-items-start ps-3 ps-sm-0">
             <strong className="text-white fw-medium text-uppercase mb-4 pe-7 text-nowrap">Information</strong>
             <Nav className="d-flex flex-column gap-4 mt-2">
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Privacy Page</NavLink>
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">About us</NavLink>
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Careers</NavLink>
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Delivery Inforamtion</NavLink>
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Term & Conditions</NavLink>
             </Nav>
         </div>
          <div className="footer-links col-md-4 col-lg-3 col-xl-2 mt-6 mt-xxl-0 d-flex flex-column align-items-start ps-3 ps-sm-0">
             <strong className="text-white fw-medium text-uppercase mb-4 pe-7 text-nowrap">Customer Service</strong>
             <Nav className="d-flex flex-column gap-4 mt-2">
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Shipping Policy</NavLink>
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Help & Contact Us</NavLink>
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Returns & Refunds</NavLink>
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Online Stores</NavLink>
                 <NavLink to="#" className="text-light-grey-800 p-0 fs-14 text-decoration-none nav-link fw-normal footer-link-hover text-sm-start">Terms and Conditions</NavLink>
             </Nav>
         </div>
          <div className="footer-links col-md-7 col-lg-7 col-xl-4 mt-6 mt-xxl-0 d-flex flex-column align-items-start ps-3 ps-sm-0">
             <strong className="text-white fw-medium text-uppercase mb-4 pe-7 text-nowrap">About Our Shop</strong>
             <Nav className="d-flex flex-column gap-3 mt-2">
                 <p className="text-light-grey-800 fs-14 text-decoration-none fw-normal text-sm-start text-wrap mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmo incididunt ut labore et dolore</p>
                 <div className="d-flex align-items-center gap-1"><Image src={LocationGrey} alt=""/><address className="text-light-grey-800 fs-14 fw-normal text-sm-start mb-0">Brooklyn, New York, United States</address></div>
                 <div className="d-flex align-items-center gap-1"><Image src={TelephoneGrey} alt=""/><NavLink to="tel:+88015-88888-9999" className="text-light-grey-800 p-0 nav-link fw-normal text-decoration-none">+88015-88888-9999</NavLink></div>
                 <div className="d-flex align-items-center gap-1"><Image src={EnvelopeGrey} alt=""/><NavLink to="mailto: example@gmail.com" className="text-light-grey-800 p-0 nav-link fw-normal text-decoration-none">example@example.com</NavLink></div>
                 <Image src={FooterPaymentImg} alt="" style={{width:" 197px", height: "20px"}}/>
             </Nav>
         </div>
        </div>
      </div>
     </section>
     <section className="footer-bottom bg-light-dark">
      <div className="container px-0">
        <div className="d-flex flex-column align-items-center justify-content-center flex-md-row justify-content-md-between py-2 gap-2 gap-md-0">
          <p className="text-light-grey-800 mb-0 fs-13 fw-light">© 2026 - Just For You</p>
          <div className="d-flex gap-3 ">
            <Image src={FaceBookGrey} alt="" className="icon--12px"/>
            <Image src={TwitterGrey} alt="" className="icon--12px"/>
            <Image src={PinterestGrey} alt="" className="icon--12px"/>
            <Image src={InstagramGrey} alt="" className="icon--12px"/>
          </div>
          <div className="d-none d-md-block"></div>
        </div>
      </div>
     </section>
    </footer>
  )
}
