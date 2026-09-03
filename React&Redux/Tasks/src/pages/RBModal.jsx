import React, { useState } from 'react'
import { Button, CloseButton, Form, InputGroup, Modal } from 'react-bootstrap'
import { Envelope } from 'react-bootstrap-icons';

export const RBModal = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='ms-5 my-3'>
            <Button variant="primary" onClick={handleShow} className='d-flex justify-content-between align-items-center' size='lg'>
                <Envelope className='me-2'/>
                Subscribe
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className='d-flex justify-content-between align-items-center px-2'>
                        <h3 className='text-dark fw-medium'>Don,t miss out</h3>
                        <CloseButton onClick={handleClose} />
                    </div>
                    <hr className='mt-0 mb-3'/>
                    <p className='fs-6 fw-medium px-2'>Signup for our newslatter to stay upto date.</p>
                    <InputGroup className="mb-4 px-2">
                        <Form.Control
                            placeholder="Enter your email address"
                            aria-label="Enter your email address"
                            aria-describedby="basic-addon2"
                        />
                        <Button variant="outline-secondary" id="button-addon2" onClick={handleClose}>
                            Subscribe
                        </Button>
                    </InputGroup>
                </Modal.Body>
            </Modal>
        </div>
    )
}
