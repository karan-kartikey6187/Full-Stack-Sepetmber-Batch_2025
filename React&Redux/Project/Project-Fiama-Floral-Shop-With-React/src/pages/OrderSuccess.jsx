import { Button, Container } from "react-bootstrap";
import { CheckCircleFill } from "react-bootstrap-icons";
import { Navigate, useNavigate, useParams } from "react-router-dom";

export const OrderSuccess = () => {

    const navigate = useNavigate();

    const { id } = useParams();

    const savedOrderId = sessionStorage.getItem("orderId");

    if (id !== savedOrderId) {
        return <Navigate to="/404" replace />;
    }

    return (
        <section className="order-success-section py-7">
            <Container className="text-center">
                <h1 className="text-success fs-2 mb-2">
                    <CheckCircleFill className="text-success fs-2" /> Order Placed Successfully!
                </h1>
                <p className="fs-3 mb-2">Thank you for your order.</p>
                <p className="fs-4 mb-3">Your Order ID: <strong>{id}</strong></p>
                <Button
                    variant="outline-primary"
                    className="py-2"
                    size="lg"
                    onClick={() => {
                        sessionStorage.removeItem("orderId");
                        navigate("/")
                    }}
                >
                    Continue Shopping
                </Button>
            </Container>
        </section>
    );
};