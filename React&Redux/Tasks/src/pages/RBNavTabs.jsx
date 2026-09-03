import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

export const RBNavTabs = () => {
    return (
        <Tab.Container id="left-tabs-example" defaultActiveKey="1">
            <div className='d-flex flex-column justify-content-center align-items-start px-5'>
                <Nav className="border-bottom border-3 w-100 ">
                    <Nav.Item className='position-relative'>
                        <Nav.Link eventKey="1" className='navlinks'>Overview</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='position-relative'>
                        <Nav.Link eventKey="2" className='navlinks'>Project Scope</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='position-relative'>
                        <Nav.Link eventKey="3" className='navlinks'>Team Members</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='position-relative'>
                        <Nav.Link eventKey="4" className='navlinks'>Tasks</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className='position-relative'>
                        <Nav.Link eventKey="5" className='navlinks'>Chat</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content className='mt-2'>
                    <Tab.Pane eventKey="1">
                        <p className='mb-0 fw-bold fs-3 mt-3 mb-2'>Overview</p>
                        <p className='fw-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugit blanditiis aliquid iusto rerum quidem enim laborum nemo culpa,
                            in, et doloribus dignissimos cupiditate
                            excepturi ab nesciunt praesentium, dicta ducimus sapiente!
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="2">
                        <p className='mb-0 fw-bold fs-3 mt-3 mb-2'>Project Scope</p>
                        <p className='fw-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugit blanditiis aliquid iusto rerum quidem enim laborum nemo culpa,
                            in, et doloribus dignissimos cupiditate
                            excepturi ab nesciunt praesentium, dicta ducimus sapiente!
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="3">
                        <p className='mb-0 fw-bold fs-3 mt-3 mb-2'>Team Members</p>
                        <p className='fw-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugit blanditiis aliquid iusto rerum quidem enim laborum nemo culpa,
                            in, et doloribus dignissimos cupiditate
                            excepturi ab nesciunt praesentium, dicta ducimus sapiente!
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="4">
                        <p className='mb-0 fw-bold fs-3 mt-3 mb-2'>Tasks</p>
                        <p className='fw-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugit blanditiis aliquid iusto rerum quidem enim laborum nemo culpa,
                            in, et doloribus dignissimos cupiditate
                            excepturi ab nesciunt praesentium, dicta ducimus sapiente!
                        </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="5">
                        <p className='mb-0 fw-bold fs-3 mt-3 mb-2'>Chat</p>
                        <p className='fw-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Fugit blanditiis aliquid iusto rerum quidem enim laborum nemo culpa,
                            in, et doloribus dignissimos cupiditate
                            excepturi ab nesciunt praesentium, dicta ducimus sapiente!
                        </p>
                    </Tab.Pane>
                </Tab.Content>
            </div>
        </Tab.Container>
    )
}
