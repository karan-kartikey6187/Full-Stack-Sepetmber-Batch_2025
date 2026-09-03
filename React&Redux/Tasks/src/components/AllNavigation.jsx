import React, { Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AssignmentLinks, InteractiveLinks, NonInteractiveLinks, FormsLinks, ContextAPI } from '../data/NavigationData'
import { Accordion } from 'react-bootstrap'


const AllNavigation = () => {
    return (
        <div className='pb-3 flex-grow-1'>
            <div className='d-flex flex-column gap-2 flex-grow-1'>
                <Accordion defaultActiveKey="4">
                    <Accordion.Item eventKey="0" className='border-0'>
                        <Accordion.Header className='h6 fw-semibold'>Small Assignments</Accordion.Header>
                        <Accordion.Body>
                            <div className='navigation d-flex flex-column justify-content-center gap-3 flex-grow-1'>
                                {AssignmentLinks.map((menu) => {
                                    return (
                                        <NavLink key={menu.id} to={menu.link} className='text-decoration-none text-black text-start'><i className='bi bi-arrow-right fw-bolder'></i> {menu.menuName}</NavLink>
                                    )
                                })}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item >
                    <Accordion.Item eventKey="1" className='border-0'>
                        <Accordion.Header className='h6 fw-semibold'>Non Interactive Comp</Accordion.Header>
                        <Accordion.Body>
                            <div className='navigation d-flex flex-column justify-content-start gap-3 flex-grow-1'>
                                {NonInteractiveLinks.map((menu) => {
                                    return (
                                        <NavLink key={menu.id} to={menu.link} className='text-decoration-none text-black text-start'><i className='bi bi-arrow-right fw-bolder'></i> {menu.menuName}</NavLink>
                                    )
                                })}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='border-0'>
                        <Accordion.Header className='h6 fw-semibold'>Interactive Comp</Accordion.Header>
                        <Accordion.Body>
                            <div className='navigation d-flex flex-column justify-content-start gap-3 flex-grow-1'>
                                {InteractiveLinks.map((menu) => {
                                    return (
                                        <NavLink key={menu.id} to={menu.link} className='text-decoration-none text-black text-start'><i className='bi bi-arrow-right fw-bolder'></i> {menu.menuName}</NavLink>
                                    )
                                })}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='border-0'>
                        <Accordion.Header className='h6 fw-semibold'>Form</Accordion.Header>
                        <Accordion.Body>
                            <div className='navigation d-flex flex-column justify-content-start gap-3 flex-grow-1'>
                                {FormsLinks.map((menu) => {
                                    return (
                                        <NavLink key={menu.id} to={menu.link} className='text-decoration-none text-black text-start'><i className='bi bi-arrow-right fw-bolder'></i> {menu.menuName}</NavLink>
                                    )
                                })}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='border-0'>
                        <Accordion.Header className='h6 fw-semibold'>Context API</Accordion.Header>
                        <Accordion.Body>
                            <div className='navigation d-flex flex-column justify-content-start gap-3 flex-grow-1'>
                                {ContextAPI.map((menu) => {
                                    return (
                                        <NavLink key={menu.id} to={menu.link} className='text-decoration-none text-black text-start'><i className='bi bi-arrow-right fw-bolder'></i> {menu.menuName}</NavLink>
                                    )
                                })}
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}

export default AllNavigation
