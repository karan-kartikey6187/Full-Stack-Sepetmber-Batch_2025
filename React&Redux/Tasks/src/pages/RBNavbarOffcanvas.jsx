import React, { useState } from 'react'
import { Button, CloseButton, Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'
import { Envelope, Globe, Phone } from 'react-bootstrap-icons';

export const RBNavbarOffcanvas = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-body-tertiary px-0 py-2 border border-2 mx-2 rounded rounded-3">
      <Container className=''>
        <Navbar.Brand href="#home" className=' bg-dark text-white px-2 fw-bold'>RB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="d-flex justify-content-start w-100">
            <Nav.Link href="#home" className='fw-medium' >Home</Nav.Link>
            <Nav.Link href="#services" className='fw-medium' >Services</Nav.Link>
            <NavDropdown className='fw-medium' title="Company" id="basic-nav-dropdown">
              <NavDropdown.Item className='fw-medium' href="#action/3.1">About Us</NavDropdown.Item>
              <NavDropdown.Item className='fw-medium' href="#action/3.2">
                Our Team
              </NavDropdown.Item>
              <NavDropdown.Item className='fw-medium' href="#action/3.3">Infrastructure</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='fw-medium py-1' href="#action/3.4">
                Testimonials
              </NavDropdown.Item>
            </NavDropdown>
            <div className='ms-0 ms-lg-auto d-flex gap-2 flex-wrap'>
              <Button className='fw-medium' variant="primary">Login</Button>
              <Button className='fw-medium' variant="outline-primary">Sign Up</Button>
              <Button className='fw-medium' variant="dark" onClick={handleShow}>
                Contact
              </Button>

              <Offcanvas show={show} onHide={handleClose} placement='end' backdrop={true}>
                <Offcanvas.Body>
                  <div className='d-flex justify-content-between align-items-center mb-3'>
                    <p className='fw-medium mb-0 fs-5'>Contact Us</p>
                    <CloseButton onClick={handleClose} style={{fontSize:"14px"}} />
                  </div>
                  <p className='fs-3 fw-medium'>We are here to help you!</p>
                  <hr />
                  <p className='fs-5 fw-semibold text-black'>Indixpert</p>
                  <p className='text-secondary fw-medium mb-1'><Globe /> Our Offices :</p>
                  <p className='fw-medium mb-0'>1: Hyderabad, Telangana, India</p>
                  <p className='fw-medium'>2: Gurugram, Haryana, India</p>
                  <p className='text-secondary fw-medium mb-1'><Envelope className='me-1' />Email</p>
                  <p className='fw-medium'>contact@indixpert.com</p>
                  <p className='text-secondary fw-medium mb-1'><Phone className='me-1' />Phone</p>
                  <p className='fw-medium mb-0'>(+91)778 899 2897</p>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
