import { BreadcrumbSection } from "../components/common/BreadcrumbSection";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { ProductInfo } from "../components/product-details/ProductInfo";
import { RelatedProducts } from "../components/shop/RelatedProducts";
import { useEffect, useState } from "react";
import { getProducts } from "../api/Services";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";


export const ProductDetails = () => {

    const [products, setProducts] = useState([])

    // const [error, setError] = useState(null)

    const [selectedImage, setSelectedImage] = useState(null)

    const param = useParams()

    const fetchProducs = async () => {
        try {

            const response = await getProducts()

            if (response.status === 404) {
                throw new Error("Error while fetching API endpoint")
            }
            setProducts(response.data.products)
        } catch (error) {
            if (error.response?.status === 404) {
                // setError("Invalid URL or endpoint not found");
            } else {
                // setError(error)
            }
        }
    }

    useEffect(() => {
        fetchProducs()
    }, [])


    const product = products?.find(
        (product) => product.id == param.id
    )

    // console.log("Product:", product)
    // console.log("Images:", product?.images)
    // console.log("Images Length:", product?.images?.length)

    // console.log("Images:", product?.images)

    console.log("Product:", product)

    useEffect(() => {
        if (product?.images?.length > 0) {
            setSelectedImage(product.images[0]);
        }
    }, [product]);

    return (
        <section className="product-details-section mb-7">
            <BreadcrumbSection currentPage="Products" slug={[product?.category, product?.title]} showSlug={true} />
            <Container>
                <Row className="mt-7">

                    <Col lg={6} className="mb-6 mb-md-7 mb-lg-0">

                        {/* <Image
                            src={product?.images?.[0]}
                            alt="Product"
                            className="img-fluid"
                        /> */}


                        <div className="d-flex gap-1">
                            <div className="d-flex flex-column gap-1">
                                {product?.images?.map((image, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`product-thumb ${selectedImage === image ? "active" : ""}`}
                                            onClick={() => {setSelectedImage(image);}}>
                                            <Image
                                                src={image}
                                                alt={product?.title}
                                                className="img-fluid"
                                            />
                                        </div>
                                    );
                                })}
                            </div>

                            <div className="product-main-image flex-grow-1">
                                <Image
                                    src={
                                        selectedImage ||
                                        product?.images?.[0]
                                    }
                                    alt={product?.title}
                                    className="img-fluid w-100"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <ProductInfo product={product} />
                    </Col>
                </Row>
                <div className="border-bottom border-top d-flex justify-content-center gap-2 mt-7">
                    <Button className="border-0 rounded-0 px-4 py-1 text-white">Description</Button>
                </div>
                <p className="text-center fw-normal lh-lg text-black mt-4 mb-6" id="discription-item">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nost exercit ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepte sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit volu accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explica Nemllo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,</p>
            </Container>
            <RelatedProducts />
            <ToastContainer />
        </section>
    );
};