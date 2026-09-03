// Import Required Components
import { Header } from "./Header"
import { Footer } from "./Footer"
import DynamicProfileCard from "./DynamicProfileCard"


// Import Required Images
import AvatarImg1 from '../assets/images/user.png'
import AvatarImg2 from '../assets/images/user-2.png'
import AvatarImg3 from '../assets/images/user-3.png'


export const DynamicCards = () => {
    return (
        <>
            <Header mainHeading="Student Profile Card" subHeading="Dynamic React Component Assignment" />
            <div className='row gy-4 justify-content-center align-items-center'>
                <DynamicProfileCard
                    avatarImg={AvatarImg1}
                    studentName="John Doe"
                    studentRole="Frontend Developement Student"
                    studentMsg="I enjoy building clean and responsive user interfaces using React."
                />
                <DynamicProfileCard
                    avatarImg={AvatarImg2}
                    studentName="Jennifer Martin"
                    studentRole="Backend Development Student"
                    studentMsg="I enjoy building fast api using Python and fastapi."
                />
                <DynamicProfileCard
                    avatarImg={AvatarImg3}
                    studentName="Thomas Smith"
                    studentRole="Full Stack Development Student"
                    studentMsg="I enjoy building clean and responsive user interfaces and api using React."
                />
                <DynamicProfileCard />
            </div>
            <Footer footerText="Created for React practice" />
        </>
    )
}
