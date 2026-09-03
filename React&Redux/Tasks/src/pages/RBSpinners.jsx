import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";

export const RBSpinners = () => {
    const [loading, setLoading] = useState(false);

    const handleSubmit = () => {
        setLoading(true);
    };

    const handleCancel = () => {
        setLoading(false);
    };

    return (
        <div className="py-4 mx-4 mx-md-5">
           
            <h2 className="text-black fw-bold fs-4 mt-1 mb-3">
                Spinners
            </h2>
            <div className="d-flex gap-2 flex-wrap">

                <Button
                    onClick={handleSubmit}
                    disabled={loading}
                    size="lg"
                >
                    {loading ? (
                        <>
                            <Spinner animation="border" role="status" size="sm" className="me-1">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                            Submitting
                        </>
                    ) : (
                        "Click to Submit"
                    )}
                </Button>

                <Button
                    variant="danger"
                    onClick={handleCancel}
                    disabled={!loading}
                    size="lg"
                >
                    Cancel
                </Button>

            </div>

        </div>
    );
};