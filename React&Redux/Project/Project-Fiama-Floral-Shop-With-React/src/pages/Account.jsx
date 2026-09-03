import { Fragment } from "react"
import { BreadcrumbSection } from "../components/common/BreadcrumbSection"
import { Col, Container, Image, Nav, Row, Tab } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

import HouseFill from "src/assets/icons/house-fill.svg"
import FileEarmarkTextFill from "src/assets/icons/file-earmark-text-fill.svg"
import PersonFillDark from "src/assets/icons/person-fill-dark.svg"
import BoxArrowRight from "src/assets/icons/box-arrow-right.svg"
import { DashboardTab } from "src/components/account/DashboardTab"
import { OrdersTab } from "src/components/account/OrdersTab"
import { AccountDetailsTab } from "src/components/account/AccountDetailsTab"

export const Account = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("login")
    localStorage.removeItem("id")
    // navigate("/signin")
    navigate("/login")
  }

  return (
    <Fragment>
      <BreadcrumbSection currentPage="My Account" showSlug={false} />
      <section className="my-account-section my-7">
        <Container>
          <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <Row className='align-items-start ps-0'>
              <Col lg={4}>
                <Nav className="account-nav border-bottom border-3 w-100 d-flex flex-column">
                  <Nav.Item className='position-relative'>
                    <Nav.Link eventKey="1" className='navlinks p-0'>
                      <div role="button" className="my-account-tab-btn px-3 py-3 border d-flex justify-content-between align-items-center my-account-tabs-active active-acount-tab">
                        <p className="mb-0 fw-normal">Dashboard</p>
                        <Image src={HouseFill} alt="" />
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='position-relative'>
                    <Nav.Link eventKey="2" className='navlinks p-0'>
                      <div role="button" className="my-account-tab-btn px-3 py-3 border d-flex justify-content-between align-items-center my-account-tabs">
                        <p className="mb-0 fw-normal">Orders</p>
                        <Image src={FileEarmarkTextFill} alt="" />
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='position-relative'>
                    <Nav.Link eventKey="3" className='navlinks p-0'>
                      <div role="button" className="my-account-tab-btn px-3 py-3 border d-flex justify-content-between align-items-center my-account-tabs">
                        <p className="mb-0 fw-normal">Account Details</p>
                        <Image src={PersonFillDark} alt="" />
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item className='position-relative'>
                    <Nav.Link eventKey="4" className='navlinks p-0'>
                      <div role="button" onClick={handleLogout} className="navlinks text-decoration-none text-dark px-3 py-3 border d-flex justify-content-between align-items-center my-account-tabs">
                        <p className="mb-0 fw-normal">Logout</p>
                        <Image src={BoxArrowRight} alt="" />
                      </div>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col lg={8}>
                <Tab.Content className='mt-2'>
                  <DashboardTab />
                  <OrdersTab />
                  <AccountDetailsTab />
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </section>
    </Fragment>
  )
}
