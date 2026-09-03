import React from 'react'
import { Button, Image} from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { ConvertToCurrency } from '../../utils/utils'
import { useDispatch } from 'react-redux'
import { Trash } from 'react-bootstrap-icons'
import { removeFromWishlist } from '../../store/slices/wishlistSlice'
import { MoveToCart } from '../common/MoveToCart'

export const WishlistCard = ({ product }) => {

    const dispatch = useDispatch()

    return (
        <div className="wishlist-item d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-around align-items-center mb-6 mb-md-0">
            <div className="mx-1 py-3 w-100 d-flex justify-content-center align-items-center">
                <NavLink to="/product-details">
                    <Image fluid src={product?.thumbnail} alt="" className="cart-img" />
                </NavLink>
            </div>
            <h2 className="display-3 px-1 py-3 mb-0 w-100 text-center"><p className="mb-0 nav-link fw-medium text-dark">{product?.title}</p></h2>
            <p className="mb-0 fw-normal text-light-grey px-1 py-3 w-100 text-center">{ConvertToCurrency(product?.price)}</p>
            <div className='me-2 mt-2  my-md-0'>
                <Button size='md' variant='outline-danger' className='d-flex justify-content-center align-items-center'
                    onClick={() => dispatch(removeFromWishlist(product?.id))}
                >
                    <Trash style={{marginRight:"5px"}}/> Delete
                </Button>
            </div>
            <MoveToCart product={product}/>
        </div>
    )
}
