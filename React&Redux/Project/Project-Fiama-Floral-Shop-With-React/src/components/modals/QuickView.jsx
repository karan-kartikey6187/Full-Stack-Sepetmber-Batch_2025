import { Image, Modal } from 'react-bootstrap'
import YellowStar from "src/assets/icons/star-yellowy.svg"
import RemoveWhite from "src/assets/icons/remove-white.svg"

import FaceBookGrey from "src/assets/icons/facebook-grey.svg";
import TwitterGrey from "src/assets/icons/twitter-grey.svg";
import PinterestGrey from "src/assets/icons/pinterest-grey.svg";
import InstagramGrey from "src/assets/icons/instagram-grey.svg";
import { ConvertToCurrency } from '../../utils/utils'
import AddToCart from 'src/components/common/AddToCart'
import { AddToWishlist } from '../common/AddToWishlist'

export const QuickView = ({show, handleClose, product }) => {

    const discountedPrice = product?.price - (product?.price * product?.discountPercentage / 100)

    return (
        <Modal show={show}
               onHide={handleClose}
               className="ps-0" 
               id="modalQuickView"
               centered 
               tabindex="-1"  
               style={{ zIndex: "10000" }}
               restoreFocus={false}
               size='lg'
               >
            <Modal.Dialog className="custom-modal border-0">
                <div className="modal-content rounded-0 p-5 border-0">
                    <Modal.Body className="row p-0 gap-3">
                        <div className="col-12 col-lg-5 flex-grow-1">
                            <div role="button" type="button" className="quickView-modal-remove-btn mt-2 mb-2 mb-lg-0 bg-primary d-flex justify-content-center align-items-center" style={{ height: "40px", width: "40px" }} onClick={handleClose}><Image src={RemoveWhite} alt="" /></div>
                            <Image src={product?.thumbnail} alt="" className="img-fluid quickViewModalImg" />
                        </div>
                        <div className="col-12 col-lg-6 position-relative flex-grow-1">
                            <h1 className="h3 fw-medium mb-2" style={{ fontSize: "30px" }}>{product?.title}</h1>
                            <div className="d-flex gap-4 mb-5 flex-wrap">
                                <p className="text-primary h4 fw-semibold mb-0 lh-sm" style={{ fontSize: "24px" }}>{ConvertToCurrency(discountedPrice)}&ensp;<del className="fw-semibold text-primary h5" style={{ opacity: "0.6" }}>{ConvertToCurrency(product?.price)}</del></p>
                                <div className="d-flex align-items-center" style={{ gap: "3px" }}>
                                    <Image src={YellowStar} alt="" className="icon--12px" />
                                    <Image src={YellowStar} alt="" className="icon--12px" />
                                    <Image src={YellowStar} alt="" className="icon--12px" />
                                    <Image src={YellowStar} alt="" className="icon--12px" />
                                    <Image src={YellowStar} alt="" className="icon--12px" />
                                    <p className="nav-link mb-0 fs-13 fw-normal text-nowrap" style={{ color: "gold", marginLeft: "2px" }}>( 95 Reviews )</p>
                                </div>
                            </div>
                            <p className="mb-5 fw-light text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repellendus repudiandae incidunt quidem pariatur expedita, quo quis modi tempore non.</p>
                            <div className="d-flex gap-2 mb-5 flex-wrap">
                                {/* <div className="d-flex justify-content-evenly align-items-center" style={{ width: "130px" }}>
                                    <div className="pe-0 fw-normal bg-light-grey d-flex justify-content-center align-items-center cartMinus" role="button" id="cartMinus" style={{ width: "42px", height: "46px" }}>-</div>
                                    <Form.Control type="text" className="form-control text-center rounded-0 border-0 p-0 bg-light-grey fw-normal cartItemQty" value="02" id="cartItemQty" style={{ width: "46px", height: "46px" }} readonly />
                                    <div className=" ps-0 fw-normal bg-light-grey d-flex justify-content-center align-items-center cartPlus" role="button" id="cartPlus" style={{ width: "42px", height: "46px" }}>+</div>
                                </div> */}
                                {/* <NavLink to="/cart" className="proceed-btn btn rounded-0 checkout-btn fw-medium text-center py-2 text-nowrap">
                                    ADD TO CART
                                </NavLink> */}
                                <AddToCart product={product} modal={true}/>
                                {/* <NavLink to="/wishlist" className="btn rounded-0 px-3 py-2 bg-light-grey heart-box" role="button">
                                    <Image src={Heart} alt="" />
                                </NavLink> */}
                                 <AddToWishlist product={product} modal={true}/>
                            </div>
                            <div className="d-flex gap-3 mb-5">
                                <p className="mb-0 fw-medium">Share:</p>
                                <div className="d-flex gap-3 ">
                                    <Image src={FaceBookGrey} alt="" className="icon--12px" style={{ height: "16px", width: "16px" }} />
                                    <Image src={TwitterGrey} alt="" className="icon--12px" style={{ height: "16px", width: "16px" }} />
                                    <Image src={PinterestGrey} alt="" className="icon--12px" style={{ height: "16px", width: "16px" }} />
                                    <Image src={InstagramGrey} alt="" className="icon--12px" style={{ height: "16px", width: "16px" }} />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                </div>
            </Modal.Dialog>
        </Modal>
    )
}
