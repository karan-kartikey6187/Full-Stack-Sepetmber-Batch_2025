import { Outlet } from 'react-router-dom'
import { Header } from 'src/components/common/Header'
import { Footer } from 'src/components/common/Footer'
import { BrandPartners } from 'src/components/home/BrandPartners'
import ScrollToTop from '../components/common/ScrollToTop'

export const RootLayout = () => {

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <BrandPartners />
            <Footer />
            <ScrollToTop />
        </>
    )
}
