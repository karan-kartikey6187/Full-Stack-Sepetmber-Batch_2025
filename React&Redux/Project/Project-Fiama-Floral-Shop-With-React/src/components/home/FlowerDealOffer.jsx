import React from 'react'
import { Container, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import FlowerDealOfferImg1 from "src/assets/images/flower-deal-card-img-1.webp"
import FlowerDealOfferImg2 from "src/assets/images/flower-deal-card-img-2.webp"

export const FlowerDealOffer = (image) => {
    return (
        <section className="flower-deal-offer-section">
            <Container>
                <div className="flower-deal-cards-wrapper d-flex flex-wrap justify-content-center gap-6 mt-2 mb-7 mt-7">
                    <div className="flower-deal-card overflow-hidden  col-md-5 col-lg position-relative">
                         <NavLink to="/shop" className="stretched-link">
                            <Image fluid src={FlowerDealOfferImg1} alt=""/>
                        </NavLink>
                    </div>
                    <div className="flower-deal-card overflow-hidden col-md-5 col-lg position-relative">
                         <NavLink to="/shop" className="stretched-link">
                            <Image fluid src={FlowerDealOfferImg2} alt=""/>
                        </NavLink>
                    </div>
                </div>
            </Container>
        </section>
    )
}
