import { Container, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import BestOfferBannerImg from "src/assets/images/best-offer-banner-img.webp"

export const BestOfferBanner = () => {
    return (
        <section className="best-offer-banner-section">
            <Container>
                <div className="best-offer-cards-wrapper d-flex flex-wrap justify-content-center gap-6 mt-7 mt-md-6 mb-7 position-relative">
                    <div className="best-offer-card overflow-hidden col">
                        <NavLink to="/shop" className="stretched-link"><Image fluid src={BestOfferBannerImg} alt="" /></NavLink>
                    </div>
                </div>
            </Container>
        </section>
    )
}
