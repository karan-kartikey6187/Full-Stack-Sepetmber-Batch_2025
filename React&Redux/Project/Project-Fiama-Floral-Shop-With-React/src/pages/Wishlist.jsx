import { Fragment } from 'react'
import { BreadcrumbSection } from '../components/common/BreadcrumbSection'
import { Container } from 'react-bootstrap'
import { WishlistCard } from '../components/cards/WishlistCard'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'

export const Wishlist = () => {

    const { wishlistItems } = useSelector((state) => state.wishlist)

    return (
        <Fragment>
            <BreadcrumbSection currentPage="Wishlist" />
            <section className="wishlist-main-section mt-7 mb-7">
                <Container>
                    <div className="wishlist-items-wrapper">
                        {wishlistItems.length === 0 ?
                            <Fragment>
                                <p className='fs-3 text-danger text-center'>No items available in your wishlist</p>
                            </Fragment> :
                            <Fragment>
                                {wishlistItems?.map((item) => {
                                    return (
                                        <WishlistCard key={item.id} product={item} />
                                    )
                                })}
                            </Fragment>
                        }
                    </div>
                </Container>
            </section>
            <ToastContainer />
        </Fragment >
    )
}
