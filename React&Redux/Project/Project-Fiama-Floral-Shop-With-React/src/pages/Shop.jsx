import { Fragment } from 'react'
import { BreadcrumbSection } from '../components/common/BreadcrumbSection'
import { ShopProducts } from '../components/shop/ShopProducts'
import { Col, Container, Row } from 'react-bootstrap'
import { Sidebar } from '../components/shop/Sidebar'
import { useParams } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export const Shop = () => {
  const param = useParams()

  console.log("Slug", param.slug)
  return (
    <Fragment>
      <BreadcrumbSection currentPage="Shop" slug={param.slug} showSlug={true} />
      <Container>
        <Row>
          <Col lg={3} className='mt-7 p-0 order-0'>
            <Sidebar />
          </Col>
          <Col lg={9} className='order-1'>
            <ShopProducts />
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </Fragment>
  )
}
