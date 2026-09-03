import { Button } from "react-bootstrap"
import { FaLongArrowAltLeft } from "react-icons/fa"
import { useNavigate } from "react-router-dom"



export const NotFound404 = () => {
  const navigate = useNavigate()
  return (
    <div className="error-page d-flex flex-column justify-content-center align-items-center text-center">
         <h2 className="error-text text-primary fw-semibold text-center">404</h2>
         <h3 className="mb-0 fw-semibold text-black text-center">Page Not Found!</h3>
         <p className="mb-0 fw-normal mt-2 text-black text-center">Oops! The page you are looking for does not exist. It might have been moved or deleted.</p>
         <Button variant="light" onClick={()=>navigate("/")} className="go-to-home-btn text-uppercase px-6 py-3 rounded-0 mt-6 border-0 shadow"><FaLongArrowAltLeft /> Back to Home</Button>
    </div>
  )
}
