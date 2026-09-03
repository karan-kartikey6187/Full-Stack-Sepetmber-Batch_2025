import React, { useState } from 'react'
import { Badge, Button, Card, Image } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import WhiteHeart from "src/assets/icons/heart-white.svg"
import WhiteEye from "src/assets/icons/eye-white.svg"
import Bag from "src/assets/icons/bag.svg"
import Star from "src/assets/icons/star.svg"
import { WishlistModal } from 'src/components/modals/WishlistModal'
import { CartModal } from 'src/components/modals/CartModal'
import { QuickView } from 'src/components/modals/QuickView'
import { ConvertToCurrency } from '../../utils/utils'
import { AddToWishlist } from '../common/AddToWishlist'
import AddToCart from '../common/AddToCart'


// export const RelatedProductCard = ({ image, title, price, discount, id }) => {
export const RelatedProductCard = ({ product }) => {

    const [showWishlistModal, setShowWishlistModal] = useState(false);

    const [showCartModal, setShowCartModal] = useState(false);

    const [showQuickViewModal, setshowQuickViewModal] = useState(false);

    return (
        <div className="swiper-slide">
            <div className="new-arrival-card position-relative">
                <Card className="card border-0 rounded-0 position-relative w-100">
                    <Card.Body className="card-image bg-body-secondary p-0 position-relative overflow-hidden">
                        <Badge bg="primary" className="px-3 py-1 rounded-0 position-absolute fw-bold" style={{ top: "18px" }}>{Math.trunc(product?.discountPercentage)}%</Badge>
                        <div className="card-options btn-group position-absolute bg-light-grey-800 w-100 end-0 bottom-0 rounded-0">
                            <AddToWishlist product={product} onClick={() => setShowWishlistModal(true)} />
                            <AddToCart product={product} onClick={() => setShowCartModal(true)} cartIcon={true}/>
                            <Button variant='outline-light' className="rounded-0 py-2" onClick={() => setshowQuickViewModal(true)}><Image src={WhiteEye} alt="" /></Button>
                        </div>
                        <NavLink to={`/product-details/${product?.id}`}><Image src={product?.thumbnail} className="card-img-top" alt="" /></NavLink>
                    </Card.Body>
                    <Card.Footer className="bg-light-subtle bg-white d-flex flex-column ps-0 align-items-start position-relative border-0">
                        <div className="mb-1 position-relative">
                            <Image src={Star} alt="" className="icon--12px me-4px" />
                            <Image src={Star} alt="" className="icon--12px me-4px" />
                            <Image src={Star} alt="" className="icon--12px me-4px" />
                            <Image src={Star} alt="" className="icon--12px me-4px" />
                            <Image src={Star} alt="" className="icon--12px me-4px" />
                        </div>
                        <NavLink to={`/product-details/${product?.id}`} className="card-text d-inline-block text-decoration-none display-5 text-dark fw-normal text-uppercase nav-link fs-14 fw-normal" style={{ marginBottom: "10px" }}>{product?.title}</NavLink>
                        <p className="card-text mb-0 text-light-grey fw-semibold pt-1 border-top w-100">{ConvertToCurrency(product?.price)}</p>
                    </Card.Footer>
                </Card>
                <WishlistModal
                    show={showWishlistModal}
                    handleClose={() => setShowWishlistModal(false)}
                    image={product?.thumbnail}
                    title={product?.title}
                    discount={product?.discountPercentage}
                />
                <CartModal
                    show={showCartModal}
                    handleClose={() => setShowCartModal(false)}
                    image={product?.thumbnail}
                    title={product?.title}
                    discount={product?.discountPercentage}
                />
                <QuickView
                    show={showQuickViewModal}
                    handleClose={() => setshowQuickViewModal(false)}
                    // image={image}
                    // title={title}
                    // price={price}
                    // discount={discount}
                    product={product}
                />
            </div>
        </div>
    )
}
