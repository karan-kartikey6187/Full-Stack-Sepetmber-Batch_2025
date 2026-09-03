import React from 'react'
import { ProductCard } from '../components/ProductCard'
import { ProductsData } from '../data/ProductsData'
import { Col, Row } from 'react-bootstrap'
import { ToastContainer } from "react-toastify";

export const Products = () => {
    return (
        <div><h2 className='ms-4'>Products</h2><hr />
            <Row className='justify-content-center px-4'>
                {ProductsData.map((product) => {
                    return (
                        <Col key={product.id} className='mb-4' lg={3}>
                            <ProductCard  product={product} />
                        </Col>
                    )
                })}
            </Row>
            <ToastContainer />
        </div>
    )
}
