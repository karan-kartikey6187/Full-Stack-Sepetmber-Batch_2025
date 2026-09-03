import React from 'react'
import { Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import FlowerOfferImg1 from 'src/assets/images/flower-day-card-img-1.webp'
import FlowerOfferImg2 from 'src/assets/images/flower-day-card-img-2.webp'
import FlowerOfferImg3 from 'src/assets/images/flower-day-card-img-3.webp'

export const FlowerDayOffer = () => {
    return (
        <section className="flower-day-offer-section">
            <div className="container">
                <div className="flower-day-cards-wrapper d-flex flex-wrap justify-content-center gap-6 mt-7 mb-7 mt-xl-8">
                    <div className="flower-day-card overflow-hidden  col-md-5 col-lg position-relative">
                        <NavLink to="/shop" className="stretched-link">
                            <Image fluid src={FlowerOfferImg1} alt=""/>
                        </NavLink>
                    </div>
                    <div className="flower-day-card overflow-hidden col-md-5 col-lg position-relative">
                        <NavLink to="/shop" className="stretched-link">
                            <Image fluid src={FlowerOfferImg2} alt=""/>
                        </NavLink>
                    </div>
                    <div className="flower-day-card overflow-hidden col-md-5 col-lg position-relative">
                        <NavLink to="/shop" className="stretched-link">
                            <Image fluid src={FlowerOfferImg3} alt=""/>
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}
