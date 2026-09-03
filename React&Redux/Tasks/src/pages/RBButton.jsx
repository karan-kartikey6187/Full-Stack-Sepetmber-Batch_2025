import { useState } from "react";
import { Button, ButtonGroup } from "react-bootstrap"
import { BiEditAlt } from "react-icons/bi"

export const RBButton = () => {

    const [styles, setStyles] = useState({
        bold: false,
        italic: false,
        underline: false,
        strike: false,
    });

    const toggleStyle = (type) => {
        setStyles((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

    return (
        <div className="py-4 mx-4  mx-md-5">
            <h2 className="text-black">Button Styles</h2>
            <div className="d-flex gap-2 mt-3 mb-5 flex-wrap">
                <Button size="lg">Normal Button</Button>
                <Button variant="primary" size="lg"><BiEditAlt /> Edit Record</Button>
                <Button variant="outline-primary" size="lg">Outline Button</Button>
                <Button variant="primary" size="lg" disabled>Disabled button</Button>
            </div>
            <h2 className="text-black">Button Types</h2>
            <div className="d-flex gap-2 mt-3 mb-5 flex-wrap">
                <Button size="lg" href="#">Link</Button>
                <Button size="lg" type="submit">Button</Button>
                <Button size="lg" as="input" type="button" value="Input" />
                <Button size="lg" as="input" type="submit" value="Submit" />
                <Button size="lg" as="input" type="reset" value="Reset" />
            </div>
            <h2 className="text-black">Toggle Buttons</h2>
            <div className="mt-3">
                <ButtonGroup aria-label="Basic example" size="lg" className="flex-wrap">

                    <Button
                        variant={`${styles.bold ? "primary" : "outline-primary"
                            }`}
                        onClick={() => toggleStyle("bold")}
                    >
                        <strong className="fw-medium">B</strong>
                    </Button>

                    <Button
                        variant={`${styles.italic ? "primary" : "outline-primary"
                            }`}
                        onClick={() => toggleStyle("italic")}
                    >
                        <em>I</em>
                    </Button>

                    <Button
                        variant={`${styles.underline ? "primary" : "outline-primary"
                            }`}
                        onClick={() => toggleStyle("underline")}
                    >
                        <u>U</u>
                    </Button>

                    <Button
                        variant={`${styles.strike ? "primary" : "outline-primary"
                            }`}
                        onClick={() => toggleStyle("strike")}
                    >
                        <s>S</s>
                    </Button>

                </ButtonGroup>

                <div className="h4 mt-3"
                    style={{
                        fontWeight: styles.bold ? "bold" : "normal",
                        fontStyle: styles.italic ? "italic" : "normal",
                        textDecoration: `${styles.underline ? "underline" : ""} ${styles.strike ? " line-through" : ""}`,
                    }}>
                    Here, the actions of the above buttons will be reflected.
                </div>
            </div>
        </div>
    )
}