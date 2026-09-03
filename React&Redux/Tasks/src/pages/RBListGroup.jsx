import { ListGroup } from "react-bootstrap"
import { Facebook, Instagram, Linkedin, TwitterX, Youtube } from "react-bootstrap-icons"


export const RBListGroup = () => {
    return (
        <div className="border p-3 mx-5" style={{maxWidth:"360px"}}>
            <h2 className="fs-3 mt-1">Social Media Traffic</h2>
            <ListGroup className="mt-3">
                <ListGroup.Item className="border-start-0 border-end-0 border-top-0 d-flex justify-content-between gap-5">
                    <div className="d-flex justify-content-center align-items-center gap-1">
                        <Facebook className="text-primary fs-4" />
                        <p className="mb-0 fs-5 fw-medium">Facebook</p>
                    </div>
                    <p className="mb-0 fs-5 fw-medium">15%</p>
                </ListGroup.Item>
                <ListGroup.Item className="border-start-0 border-end-0 border-top-0 d-flex justify-content-between gap-5">
                    <div className="d-flex justify-content-center align-items-center gap-1">
                        <Instagram className="text-primary fs-4" />
                        <p className="mb-0 fs-5 fw-medium">Instagram</p>
                    </div>
                    <p className="mb-0 fs-5 fw-medium">35%</p>
                </ListGroup.Item>
                <ListGroup.Item className="border-start-0 border-end-0 border-top-0 d-flex justify-content-between gap-5">
                    <div className="d-flex justify-content-center align-items-center gap-1">
                        <Youtube className="text-primary fs-4" />
                        <p className="mb-0 fs-5 fw-medium">YouTube</p>
                    </div>
                    <p className="mb-0 fs-5 fw-medium">30%</p>
                </ListGroup.Item>
                <ListGroup.Item className="border-start-0 border-end-0 border-top-0 d-flex justify-content-between gap-5">
                    <div className="d-flex justify-content-center align-items-center gap-1">
                        <TwitterX className="text-primary fs-4" />
                        <p className="mb-0 fs-5 fw-medium">TwitterX</p>
                    </div>
                    <p className="mb-0 fs-5 fw-medium">10%</p>
                </ListGroup.Item>
                <ListGroup.Item className="border-start-0 border-end-0 border-top-0 border-bottom-0 d-flex justify-content-between gap-5">
                    <div className="d-flex justify-content-center align-items-center gap-1">
                        <Linkedin className="text-primary fs-4" />
                        <p className="mb-0 fs-5 fw-medium">LinkdIn</p>
                    </div>
                    <p className="mb-0 fs-5 fw-medium">10%</p>
                </ListGroup.Item>
            </ListGroup>
        </div>
    )
}
