import { Fragment, useState } from 'react'
import { BreadcrumbSection } from 'src/components/common/BreadcrumbSection'
import { Container, Form } from 'react-bootstrap'
import { CartCard } from 'src/components/cards/CartCard'
import { CartTotals } from '../components/cart/CartTotals'
import { useDispatch, useSelector } from 'react-redux'
import { applyCoupon } from '../store/slices/cartSlice'
import { toast, ToastContainer } from 'react-toastify'



export const Cart = () => {

    const cartState = useSelector((state) => state.cart)

    const dispatch = useDispatch()

    const [coupon, setCoupon] = useState()
    const handleApplyCoupon = () => {
        if(!coupon){
            toast.error("Coupon Code can't be empty!")
            return;
        }
        const couponInfo = cartState.couponCodes.find((item) => item.code === coupon)
        if (couponInfo) {
            dispatch(applyCoupon(coupon))
            toast.success("Coupon code is applied successfully!")
            setCoupon('')
        } else {
            toast.error("Invalid coupon code!")
        }
    }

    return (
        <Fragment>
            <BreadcrumbSection currentPage="Cart" />
            <section className="cart-main-section mt-7 mb-6">
                <Container>
                    <div className="cart-items-wrapper">
                        {cartState?.cartItems.length === 0 ?
                            <Fragment>
                                <p className='fs-3 text-danger text-center my-7'>No items available in your Cart</p>
                            </Fragment> :
                            <Fragment>
                                {cartState?.cartItems?.map((item, index) => {
                                    return (
                                        // <CartCard key={index} image={item?.thumbnail} title={item?.title} price={item?.price} totalPrice={item.totalPrice} id={item.id} />
                                        <CartCard key={index} product={item} />
                                    )
                                })}
                            </Fragment>
                        }

                    </div>
                    {cartState?.cartItems.length === 0 ?
                        " " :
                        <Fragment>
                            <div className="cart-item">
                                <div className="w-100 px-1 py-3">
                                    <div className="apply-coupon-input d-flex flex-column flex-sm-row">
                                        <Form.Control
                                            type="text"
                                            className="form-control bg-light-grey rounded-0 border-0 fw-medium pe-6 ps-3 py-2 pe-6 fs-14"
                                            placeholder="Coupon code"
                                            aria-label="Example text with button addon"
                                            aria-describedby="button-addon1"
                                            value={coupon}
                                            onChange={(e) => setCoupon(e.target.value)}
                                        />
                                        <div className="apply-coupon-btn btn rounded-0 bg-light-grey-800 text-nowrap px-6 py-2 mt-1 mt-sm-0 fw-medium" type="button"
                                            onClick={handleApplyCoupon}>
                                            Apply Coupon
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fragment>
                    }
                </Container>
            </section>
            <CartTotals />
            <ToastContainer />
        </Fragment>
    )
}
