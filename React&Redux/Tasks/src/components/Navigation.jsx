import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='d-flex justify-content-center gap-3'>
            <NavLink to='/' className='btn btn-primary'>Home</NavLink>
            <Link to='/about' className='btn btn-primary'>About</Link>
        </div>
    )
}

export default Navigation
