import React, { Fragment, useState } from 'react'
import { Header } from 'src/components/common/Header'
import { HeroSection } from 'src/components/home/HeroSection'
import { Services } from 'src/components/home/Services'
import { FlowerDayOffer } from 'src/components/home/FlowerDayOffer'
import { NewArrival } from 'src/components/home/NewArrival'
import { FlowerDealOffer } from 'src/components/home/FlowerDealOffer'
import { TopProducts } from 'src/components/home/TopProducts'
import { BestOfferBanner } from 'src/components/home/BestOfferBanner'
import { LatestNews } from 'src/components/home/LatestNews'
import { ToastContainer } from 'react-toastify'



export const Home = () => {


    return (
        <Fragment>
            <HeroSection />
            <Services />
            <FlowerDayOffer />
            <NewArrival />
            <FlowerDealOffer />
            <TopProducts />
            <BestOfferBanner />
            <LatestNews />
            <ToastContainer />
        </Fragment>
    )
}
