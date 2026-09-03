import { Fragment } from "react"
import { DynamicAvatar } from "./DynamicAvatar"

const DynamicProfileCard = ({ avatarImg, studentName = "Student", studentRole = "Web Developer", studentMsg = "Learning, building, and growing every day." }) => {
    return (
        <div className='student-card col-12 col-lg-4 w-auto'>
            <div className="dynamic-profile-card shadow d-flex flex-column justify-content-center align-items-center rounded rounded-3 pt-4 mt-3">
                <DynamicAvatar avatarImg={avatarImg} />
                <h1 className="h4 fw-bolder text-center mt-40 mb-3 text-black">{studentName}</h1>
                <h2 className="text-dark-blue h6 fw-bold text-center mb-2">{studentRole}</h2>
                <p className="text-center fw-normal lh-sm mb-0">{studentMsg}</p>
            </div>
        </div>
    )
}

export default DynamicProfileCard