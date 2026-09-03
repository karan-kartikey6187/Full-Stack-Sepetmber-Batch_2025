// Import Required Components
import { Header } from "./Header"
import StaticProfileCard from "./StaticProfileCard"
import { Footer } from "./Footer"

export const StaticCard = () => {
    return (
        <div className="d-flex flex-column align-items-center">
            <Header mainHeading="Student Profile Card" subHeading="Static React Components Assignment"/>
            <StaticProfileCard />
            <Footer footerText="Created for React practice" />
        </div>
    )
}
