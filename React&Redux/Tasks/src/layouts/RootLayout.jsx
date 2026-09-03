import React, { useContext, useEffect, useState } from 'react'
import Navigation from '../components/Navigation'
import { NavLink, Outlet } from 'react-router-dom'
import AllNavigation from '../components/AllNavigation'
import { Heart, Moon, Sun } from 'react-bootstrap-icons'
import { Badge } from 'react-bootstrap'
import { WishlistContext } from '../context/Context'

export const RootLayout = () => {

   const { wishlistState, wishlistDispatch } = useContext(WishlistContext);

   const wishlistItemsCount = wishlistState.wishlistItems.length;

  const [darkMode, setDarkMode] = useState(localStorage.getItem("dark") === "true" ? true : false);

  const handleThemeMode = () => {
    setDarkMode(!darkMode)
  }
  useEffect(() => {
    localStorage.setItem("dark", darkMode)
    const htmlElement = document.querySelector("html");
    htmlElement.setAttribute("data-bs-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className='justify-content-center align-items-start px-4 pb-2 bg-body-tertiary'>
      <h1 className='pt-3 fs-1 fw-semibold'>React Assignments</h1>
      <div className='row mt-3 col-12 d-flex justify-content-center'>
        {/* <Navigation/> */}
        <div className='Navigation col-12 col-xxl-2 d-flex justify-content-center align-items-start pt-3 rounded rounded-4 bg-body' >
          <AllNavigation />
        </div>
        <div className='col-12 col-xxl-10'>
          <NavLink to="/wishlist" className="wishlist-icon text-decoration-none position-absolute">
            <Heart size={24} />
            <Badge
              bg="danger"
              pill
              className="position-absolute top-0 start-100 translate-middle"
            >{wishlistItemsCount}</Badge>
          </NavLink>
          <div className='rounded rounded-4 py-3 me-0 bg-body'>
            <Badge onClick={handleThemeMode}
              className={`theme-change-btn me-2 rounded-circle p-2 
                ${darkMode ? "bg-light text-dark" : "bg-dark text-light"}`}
              role="button">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Badge>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
