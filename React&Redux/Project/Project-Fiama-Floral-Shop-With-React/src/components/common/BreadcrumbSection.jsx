import { Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { toTitleCase } from '../../utils/utils'

export const BreadcrumbSection = ({ currentPage, hide = false, slug, showSlug = false }) => {
    return (
        <section className={`breadcrumb-section bg-light-grey ${hide ? "d-none" : "d-block"}`}>
            <Container className="py-6 d-flex justify-content-start align-items-center flex-column">
                <h1 className="fs-32 fw-bolder lh-sm text-black">{currentPage}</h1>
                <Nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item d-flex justify-content-center align-items-start"><NavLink to="/" className="p-0 text-decoration-none text-reset nav-link fs-14 fw-medium text-dark">Home</NavLink></li>
                        <li className="breadcrumb-item active fs-14 fw-medium text-dark" aria-current="page">{currentPage}</li>
                        {showSlug && Array.isArray(slug)
                            ? slug.map((item, index) => (
                                <li
                                    key={index}
                                    className="breadcrumb-item active fs-14 fw-medium text-dark"
                                    aria-current="page"
                                >{toTitleCase(item)}</li>
                            ))
                            :
                            showSlug ?
                                <li 
                                className="breadcrumb-item active fs-14 fw-medium text-dark"
                                aria-current="page"
                                >{slug ? toTitleCase(slug) : "Beauty"}
                                </li> : " "
                        }
                    </ol>
                </Nav>
            </Container>
        </section>
    )
}
