import { Fragment } from "react"
import { Stack } from "react-bootstrap"
import { NavLink, Outlet } from "react-router-dom"

export const RootLayout = () => {

    return (
        <div className="p-5">
            <div className="d-flex gap-3" >
                <NavLink className='text-decoration-none text-black text-start' to="/">Component A</NavLink>
                <NavLink className='text-decoration-none text-black text-start' to="/component-b">Component B</NavLink>
                <NavLink className='text-decoration-none text-black text-start' to="/component-c">Component C</NavLink>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

