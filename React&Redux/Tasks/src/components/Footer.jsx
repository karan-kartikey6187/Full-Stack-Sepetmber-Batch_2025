import { Fragment } from "react"

export const Footer = ({ footerText = "Created for React practice" }) => {
    return (
        <Fragment>
            <h2 className="h6 text-center text-light-gray mt-4 mb-5">{footerText}</h2>
        </Fragment>
    )
}