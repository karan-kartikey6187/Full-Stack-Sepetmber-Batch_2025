import { useState } from "react";
import { Badge, Button, Card, Col, ProgressBar, Row } from "react-bootstrap";

export const RBProgressBars = () => {
    const [progress, setProgress] = useState(0);

    const increaseProgress = () => {
        setProgress((prev) => {
            if (prev >= 100) {
                return prev;
            }
            return prev + 5;
        });
    };

    const decreaseProgress = () => {
        setProgress((prev) => {
            if (prev <= 0) {
                return prev;
            }
            return prev - 5;
        });
    };

    return (
        <div className="py-4 mx-4 mx-md-5">
            <h2 className="text-black fw-bold mb-4">
                Progress Bars
            </h2>

            <div className="d-flex gap-3 mb-5">
                <Button onClick={increaseProgress}>Progress + 5%</Button>
                <Button onClick={decreaseProgress}>Progress - 5%</Button>
            </div>

            <h3 className="fs-6">Completed {progress}%</h3>

            <ProgressBar
                now={progress}
                label={`${progress}%`}
                className="mb-2"
                style={{ height: "15px" }}
                variant="success"
                striped
                animated
            />
            <ProgressBar
                className="mb-5"
                striped
                variant="danger"
                now={progress}
                key={1}
                style={{ height: "10px" }}
                animated
            />

            <hr className="mb-3" />

            <Card style={{ width: "22rem" }}>
                <Card.Body>
                    <Card.Title className="fs-4 fw-bold">
                        Bootstrap Dashboard Application
                    </Card.Title>

                    <Card.Subtitle className="mb-3 text-muted fs-5">
                        Web Development
                    </Card.Subtitle>

                    <Card.Text className="fs-5 fw-medium">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </Card.Text>

                    <Badge className="bg-info fs-6 mb-3">
                        In Progress
                    </Badge>

                    <ProgressBar
                        now={progress}
                        label={`${progress}%`}
                        variant="info"
                        className="mb-1"
                        striped
                        animated
                    />
                </Card.Body>

                <Card.Footer className="p-0">
                    <Row className="g-0 text-center">
                        <Col className="border-end p-3">
                            <h4 className="fs-6 mb-0 text-secondary pe-2">Due Date:</h4>
                            <p className="mb-0 fw-medium">1 Jan, 2022</p>
                        </Col>

                        <Col className="p-3">
                            <h4 className="fs-6 mb-0 text-secondary pe-2">Budget:</h4>
                            <p className="mb-0 fw-medium">$123,000</p>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </div>
    );
};
