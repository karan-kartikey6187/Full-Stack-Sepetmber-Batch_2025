import { Button, Card } from "react-bootstrap"
import { ProductsData } from "../data/CardsData"

export const RBCard = () => {
    return (
        <div className="py-4 mx-3 mx-lg-5">
            <h2 className="text-black fs-2">Cards</h2>
            <div className="d-flex gap-3 flex-wrap">
                {ProductsData.map((product) => {
                    return(<Card key={product.id} style={{ width: '22rem' }}>
                        <Card.Body className="p-0">
                            <Card.Title className="ms-2 mt-2 fs-6">{product.title}</Card.Title>
                            <Card.Img variant="top" src={product.image} style={{ width: "250px", alignSelf: "center", paddingTop: "10px" }} />
                            <Card.Text className="px-2 fw-medium mb-2" style={{ fontSize: "12px" }}>
                                {product.description}
                                <p className="text-black fw-medium mt-3 mb-1" style={{ fontSize: "12px" }}>₹{product.price.toLocaleString("en-IN")} <s className="f fw-normal text-secondary">MRP:₹{product.mrp.toLocaleString("en-IN")}</s></p>
                            </Card.Text>
                            <Card.Footer className="d-flex justify-content-between px-2">
                                <Button size="sm" variant="outline-primary">Add To Cart</Button>
                                <Button size="sm" variant="primary">Buy Now</Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>)
                })}
            </div>
        </div>
    )
}