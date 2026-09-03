import { useEffect, useState } from 'react'
import { ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { getCategory } from '../../api/Services'

export const Sidebar = () => {

    const [categories, setCategories] = useState()

    const fetchCategories = async () => {
        try {

            const response = await getCategory()

            if (response.status === 404) {
                throw new Error("Error while fetching API endpoint")
            }
            setCategories(response.data)
        } catch (error) {
            if (error.response.status === 404) {
                // setError("Invalid URL or endpoint not found");
            } else {
                // setError(error)
            }
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])


    return (
        <div className='px-2'>
            {/* <div className="d-flex align-items-center py-1 px-2 border">
                <Form.Control
                    placeholder="Search your keyword..."
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    className='border-0 text-light'
                />
                <Search />
            </div> */}
            <p className='m-0 p-0 pb-1 mt-0 fs-4 fw-medium border-bottom mb-3'>Categories</p>

            {categories?.map((category, index) => {
                return (
                    <ListGroup variant="flush" key={index}>
                        <ListGroup.Item className='d-flex justify-content-between'>
                            <NavLink to={"/shop/" + category.slug} className="text-decoration-none nav-link">{category.name}</NavLink>
                        </ListGroup.Item>
                    </ListGroup>
                )
            })}
        </div>
    )
}
