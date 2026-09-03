import { Fragment } from "react"

export const Header = ({ mainHeading = "Student Profile Cards", subHeading = "React Component Assignment" }) => {

    return (
        <Fragment>
            <h2 className="h4 fw-bold text-black text-center mb-2">{mainHeading}</h2>
            <h3 className="h6 text-center text-light-gray mb-3">{subHeading}</h3>
        </Fragment>
    )
}