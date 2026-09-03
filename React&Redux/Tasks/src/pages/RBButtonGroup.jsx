import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap"
import { FaAlignCenter, FaAlignLeft, FaAlignRight } from "react-icons/fa";

export const RBButtonGroup = () => {

    const [align, setAlign] = useState("left");

    return (
        <div className="py-4 mx-3 mx-lg-5">
            <h2 className="text-black fs-4">Button Groups</h2>
            <ButtonGroup className="mt-2 flex-wrap">

                <Button
                    variant={align === "left" ? "primary" : "outline-primary"}
                    onClick={() => setAlign("left")}
                >
                    <FaAlignLeft className="me-2" />
                    Left
                </Button>

                <Button
                    variant={align === "center" ? "primary" : "outline-primary"}
                    onClick={() => setAlign("center")}
                >
                    <FaAlignCenter className="me-2" />
                    Center
                </Button>

                <Button
                    variant={align === "right" ? "primary" : "outline-primary"}
                    onClick={() => setAlign("right")}
                >
                    <FaAlignRight className="me-2" />
                    Right
                </Button>

            </ButtonGroup>

            <div
                className="border mt-2 p-4 fs-5"
                style={{
                    textAlign: align,
                    minHeight: "80px",
                }}
            >
                Here, the actions of the above buttons will be reflected.
            </div>
        </div>
    )
}