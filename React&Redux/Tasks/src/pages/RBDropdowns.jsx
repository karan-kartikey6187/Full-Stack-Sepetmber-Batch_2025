import React from 'react'
import { Button, Dropdown, Image } from 'react-bootstrap'
import { Bell, BoxArrowRight, CaretDownFill, ChevronDown, Gear, Person, Speedometer2 } from 'react-bootstrap-icons'
import AvatarImg from '../assets/images/user-2.png'

export const RBDropdowns = () => (
    <>
        <div className='d-flex gap-3 justify-content-between my-5 mx-5'>
            <Button className='d-flex align-items-center py-0'>
                <Person className='me-1' />
                Profile
                <CaretDownFill size={12} className='ms-1' />
            </Button>

            <Button className='d-flex align-items-center bg-white text-black py-0'>
                <Person className='me-1' color='blue' />
                Profile
                <ChevronDown className='ms-3'/>
            </Button>

            <Image src={AvatarImg} style={{ height: "45px", width: "45px" }} className='border border-3 border-secondary rounded rounded-circle'/>
        </div>
        <div className='d-flex gap-3 justify-content-between my-5 mx-5'>
            <Dropdown>
                <Dropdown.Toggle variant="primary" id="dropdown-basic" className='d-flex justify-content-center align-items-center'>
                    <Person className='me-1' />
                    Profile
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><Speedometer2 /> Dashboard</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><Bell /> Notification</Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><Gear /> Settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-4"><BoxArrowRight /> Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle
                    variant='white'
                    id="dropdown-basic"
                    className='d-flex justify-content-center align-items-center text-black border border-1 border-primary'
                    bsPrefix=' '
                >
                    <Person className='me-1' color='blue' />
                    Profile
                    <ChevronDown className='ms-3'/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><Speedometer2 /> Dashboard</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><Bell /> Notification</Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><Gear /> Settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-4"><BoxArrowRight /> Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown>
                <Dropdown.Toggle
                    id="dropdown-basic"
                    className='d-flex justify-content-center align-items-center'
                    bsPrefix=' '
                    as="div"
                    role="button"
                >
                    <Image src={AvatarImg} style={{ height: "45px", width: "45px" }} className='border border-3 border-secondary rounded rounded-circle'/>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"><Speedometer2 /> Dashboard</Dropdown.Item>
                    <Dropdown.Item href="#/action-2"><Bell /> Notification</Dropdown.Item>
                    <Dropdown.Item href="#/action-3"><Gear /> Settings</Dropdown.Item>
                    <Dropdown.Item href="#/action-4"><BoxArrowRight /> Logout</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    </>
)
