import { Fragment } from "react"
import { Avatar } from "./Avatar"


const StaticProfileCard = ()=>{
    return(
        <div className="profile-card shadow d-flex flex-column justify-content-center align-items-center rounded rounded-3 pt-4 pb-4 ">
            <Avatar/>
            <h1 className="h4 fw-bolder text-center mt-40 mb-3 text-black">John Doe</h1>
            <h2 className="text-dark-blue h6 fw-bold text-center mb-2">Frontend Developement Student</h2>
            <p className="text-center fw-normal lh-sm mb-0">I enjoy building clean and responsive user</p>
            <p className="text-center fw-normal lh-sm">interfaces using React.</p>
        </div>
    )
}

export default StaticProfileCard