import { Figure } from "react-bootstrap"
import Tiger from '../assets/images/tiger.jpg'

export const RBFigure = () => {
    return (
        <Figure className="my-2 mx-3 mx-md-5">
            <Figure.Image
                thumbnail
                width={500}
                alt="171x180"
                src={Tiger}
            />
            <Figure.Caption className="fs-6 fw-bold">
                 Image Source: https://www.magnific.com
            </Figure.Caption>
        </Figure>
    )
}
