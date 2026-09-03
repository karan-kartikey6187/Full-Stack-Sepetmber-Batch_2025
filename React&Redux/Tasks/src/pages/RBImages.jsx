import { Col, Container, Image, OverlayTrigger, Row, Tooltip } from "react-bootstrap"

export const RBImages = () => {
    return (
        <div className="py-4 ps-3">
            <Row className="justify-content-center ps-3 mx-5 gap-5">
                <Col xs={12} md={2} className="pe-0 flex-grow-1">
                    <h3 className="fw-semibold text-black">Avatar With Name</h3>
                    <div className="d-flex gap-1 justify-content-start align-items-center mb-2">
                        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZMmZtO0jp0G8lG6x4g0SNL1f2tntQFfMs5L9yjxyNQ&s=10" rounded width={30} />
                        <p className="fs-6 fw-semibold mb-0">Radhika Parmar</p>
                    </div>
                    <div className="d-flex gap-1 justify-content-start align-items-center">
                        <Image src="https://cdn-icons-png.flaticon.com/512/6858/6858569.png" rounded width={30} />
                        <p className="fs-6 fw-semibold mb-0">Rajkuumar Jadeja</p>
                    </div>
                </Col>
                <Col xs={12} md={3} className="ps-0 flex-grow-1">
                    <h3 className="fw-semibold text-black">Avatar Sizes</h3>
                    <div className="d-flex justify-content-start align-items-center flex-wrap">
                        <Image src="https://cdn-icons-png.flaticon.com/512/6858/6858569.png" rounded width={30} height={30} />
                        <Image src="https://cdn-icons-png.flaticon.com/512/6858/6858569.png" rounded width={40} height={40} />
                        <Image src="https://cdn-icons-png.flaticon.com/512/6858/6858569.png" rounded width={50} height={50} />
                        <Image src="https://cdn-icons-png.flaticon.com/512/6858/6858569.png" rounded width={60} height={60} />
                        <Image src="https://cdn-icons-png.flaticon.com/512/6858/6858569.png" rounded width={75} height={70} />
                        <Image src="https://cdn-icons-png.flaticon.com/512/6858/6858569.png" rounded width={80} height={80} />
                    </div>
                </Col>
                <Col xs={12} md={3} className="flex-grow-1">
                    <h3 className="fw-semibold text-black">Avatar Group</h3>
                    <div className="avatar-group d-flex justify-content-start align-items-center">
                        <OverlayTrigger placement="top" overlay={<Tooltip>Avatar 1</Tooltip>}>
                            <Image src="https://cdn.iconscout.com/icon/free/png-256/free--icon-svg-download-png-20177.png" className="rounded rounded-circle" width={40} height={40} />
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip>Avatar 2</Tooltip>}>
                            <Image src="https://cdn.iconscout.com/icon/free/png-256/free--icon-svg-download-png-20177.png" className="rounded rounded-circle" width={40} height={40} />
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip>Avatar 3</Tooltip>}>
                            <Image src="https://cdn.iconscout.com/icon/free/png-256/free--icon-svg-download-png-20177.png" className="rounded rounded-circle" width={40} height={40} />
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip>Avatar 4</Tooltip>}>
                            <Image src="https://cdn.iconscout.com/icon/free/png-256/free--icon-svg-download-png-20177.png" className="rounded rounded-circle" width={40} height={40} />
                        </OverlayTrigger>
                        <OverlayTrigger placement="top" overlay={<Tooltip>Avatar 5</Tooltip>}>
                            <Image src="https://cdn.iconscout.com/icon/free/png-256/free--icon-svg-download-png-20177.png" className="rounded rounded-circle" width={40} height={40} />
                        </OverlayTrigger>
                    </div>
                </Col>
            </Row>
        </div>
    )
}