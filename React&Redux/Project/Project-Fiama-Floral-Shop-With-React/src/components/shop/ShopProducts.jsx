import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Grid from "src/assets/icons/grid.svg"
import List from "src/assets/icons/list.svg"
import { ShopProductCard } from 'src/components/cards/ShopProductCard'
import { PageNavigation } from './PageNavigation'
import { useEffect, useState } from 'react'
import { getListProducts, getProducts } from '../../api/Services'
import { useParams } from 'react-router-dom'


export const ShopProducts = () => {

    const param = useParams()

    const [listProducts, setListProducts] = useState([])

    const [currentPage, setCurrentPage] = useState(1)

    const productsPerPage = 9

    const categorySlug = param?.slug || 'beauty'


    const fetchListProducts = async () => {

        try {

            const response = await getListProducts(categorySlug)

            if (response.status === 404) {
                throw new Error("Error while fetching API endpoint")
            }

            setListProducts(response.data.products)

        } catch (error) {

            if (error.response?.status === 404) {
                // setError("Invalid URL or endpoint not found");
            } else {
                // setError(error)
            }

        }
    }


    useEffect(() => {
        fetchListProducts()
        setCurrentPage(1)
    }, [param.slug])

    const totalPages = Math.ceil(
        listProducts.length / productsPerPage
    )

    const startIndex = (
        currentPage - 1
    ) * productsPerPage

    const currentProducts = listProducts.slice(
        startIndex,
        startIndex + productsPerPage
    )

    const handlePageChange = (page) => {

        setCurrentPage(page)

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })

    }


    return (

        <section className="shop-products-section mt-7 mb-0 mb-lg-7">

            <Container>
                
                <div className="shop-products-header d-flex flex-column flex-md-row justify-content-start align-items-start align-items-md-center mb-6 justify-content-md-between pb-1">
                    <p className="mb-0 display-4 text-light-grey fw-medium">
                        Showing {currentProducts.length} of {listProducts.length} results
                    </p>

                    {/* <div className="d-flex gap-3 mt-3 mt-md-0">
                        <select
                            className="shop-search-options text-light-grey form-select fs-14 fw-medium"
                            aria-label="Default select example"
                            defaultValue=""
                        >
                            <option
                                className="text-light-grey fs-14 fw-medium"
                                value=" "
                                disabled
                            >
                                Default sorting
                            </option>
                            <option
                                className="text-light-grey fs-14 fw-medium"
                                value="1"
                            >
                                Sort by popularity
                            </option>
                            <option
                                className="text-light-grey fs-14 fw-medium"
                                value="2"
                            >
                                Sort by new arrivals
                            </option>
                            <option
                                className="text-light-grey fs-14 fw-medium"
                                value="3"
                            >
                                Sort by price: low to high
                            </option>
                            <option
                                className="text-light-grey fs-14 fw-medium"
                                value="4"
                            >
                                Sort by price: high to low
                            </option>
                        </select>
                        <div className="d-flex gap-3">
                            <Button
                                variant=' '
                                className="rounded-0 border p-1 view-btn active"
                                role="button"
                                id="shopGridBtn"
                            >
                                <Image
                                    src={Grid}
                                    alt=""
                                    className="icon--20px"
                                />
                            </Button>
                            <Button
                                variant=' '
                                className="rounded-0 border p-1 view-btn"
                                role="button"
                                id="shopListBtn"
                            >
                                <Image
                                    src={List}
                                    alt=""
                                    className="icon--20px"
                                />
                            </Button>
                        </div>
                    </div> */}
                </div>

                <Row className="g-4" id="shop-products">
                    {currentProducts.map((product) => {
                        return (
                            <ShopProductCard
                                key={product.id}
                                product={product}
                            />
                        )
                    })}
                </Row>

                {listProducts.length > productsPerPage && (
                    <PageNavigation
                        currentPage={currentPage}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                    />
                )}
            </Container>

        </section>

    )
}