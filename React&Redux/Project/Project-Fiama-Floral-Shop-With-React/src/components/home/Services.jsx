import React from 'react'
import { Container, Image } from 'react-bootstrap'
import BrandLogo1 from "src/assets/icons/trolley.svg"
import BrandLogo2 from "src/assets/icons/money.svg"
import BrandLogo3 from "src/assets/icons/credit-card.svg"
import BrandLogo4 from "src/assets/icons/gift-card.svg"

export const Services = () => {
    return (
        <section className="service-section">
            <Container className="position-relative">
                <div className="serivce-cards-wrapper border d-flex gap-3 justify-content-center justify-content-xl-evenly flex-wrap mb-6 mt-7 my-xl-0 w-100 z-3 service-banner">
                    <div className="serivce-card d-flex gap-2 py-6 px-2 col-12 col-md-5 col-lg-3 col-xl justify-content-center">
                        <Image src={BrandLogo1} alt="" className="icon--50px" />
                        <div className="d-flex flex-column justify-content-evenly">
                            <h2 className="fw-normal text-light-grey display-4">Free shipping</h2>
                            <p className="fw-light text-light-grey display-5 mb-0">On all orders over $49.00</p>
                        </div>
                    </div>
                    <div className="serivce-card d-flex gap-2 py-6 px-2 col-12 col-md-5 col-lg-3 col-xl justify-content-center">
                        <Image src={BrandLogo2} alt="" className="icon--50px" />
                        <div className="d-flex flex-column justify-content-evenly">
                            <h2 className="fw-normal text-light-grey display-4">15 days returns</h2>
                            <p className="fw-light text-light-grey display-5 mb-0">Moneyback guarantee</p>
                        </div>
                    </div>
                    <div className="serivce-card d-flex gap-2 py-6 px-2 col-12 col-md-5 col-lg-3 col-xl justify-content-center">
                        <Image src={BrandLogo3} alt="" className="icon--50px" />
                        <div className="d-flex flex-column justify-content-evenly">
                            <h2 className="fw-normal text-light-grey display-4">Secure checkout</h2>
                            <p className="fw-light text-light-grey display-5 mb-0">Protected by Paypal</p>
                        </div>
                    </div>
                    <div className="serivce-card d-flex gap-2 py-6 px-2 col-12 col-md-5 col-lg-5 col-xl justify-content-center">
                        <Image src={BrandLogo4} alt="" className="icon--50px" />
                        <div className="d-flex flex-column justify-content-evenly">
                            <h2 className="fw-normal text-light-grey display-4">Offer & gift here</h2>
                            <p className="fw-light text-light-grey display-5 mb-0">On all orders over</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
