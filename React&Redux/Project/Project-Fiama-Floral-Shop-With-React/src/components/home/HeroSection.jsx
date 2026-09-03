import React from 'react'
import { Button, Carousel, Container, Image } from 'react-bootstrap'
import { ArrowLeftCircle, ArrowRightCircle } from 'react-bootstrap-icons'
import { BsArrowLeftSquare, BsArrowRightSquare } from 'react-icons/bs';
import RightArrow from "src/assets/icons/angle-right-solid-full.svg"
import LeftArrow from "src/assets/icons/angle-left-solid-full.svg"
import { NavLink } from 'react-router-dom';


const NextBtn = () => {
  return (
    <Container className='d-flex justify-content-end justify-content-xxl-start ms-6'>
      <Button variant=' ' className="carousel-control-next-btn carousel-control-btn position-absolute bg-transparent p-1 d-none d-xl-block rounded-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-next-icon carousel-icon" aria-hidden="true"><Image src={RightArrow} alt="" className='hero-carousel-btn' /></span>
        <span className="visually-hidden">Next</span>
      </Button>
    </Container>
  )
};

const PrevBtn = () => {
  return (
    <Container className='d-flex justify-content-start justify-content-xxl-end me-6 pe-6'>
      <Button variant='primary' className="carousel-control-prev-btn carousel-control-btn position-absolute bg-transparent p-1 d-none d-xl-block rounded-0" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-prev-icon carousel-icon" aria-hidden="true"><Image src={LeftArrow} alt="" className='hero-carousel-btn'/></span>
        <span className="visually-hidden">Previous</span>
      </Button>
    </Container>
  )
};


export const HeroSection = () => {
  return (
      <Carousel
        prevIcon={<PrevBtn />}
        nextIcon={<NextBtn />}
        indicators={false}
        // controls={false}
        fade
      >
        <Carousel.Item className="text text-center hero-image-1">
          <Carousel.Caption bsPrefix=' ' className='my-6 mb-sm-7 mb-xl-6 mt-xl-7'>
            <Container className="my-8 text-start">
              <h1 className="fw-bold mb-3 text-grey-normal">Fresh Flower</h1>
              <h2 className="underline-start fw-medium h3 text-light-grey mb-5 ">Natural & Beautiful Flower Here</h2>
              <p className="mb-0 mt-6 fw-lighter text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Quibusdam earum tempora consequuntur.</p>
              <Button variant='primary' className="shop-now-btn  rounded rounded-pill px-4 py-1 mt-4 position-relative"><NavLink to="/shop" className="text-white text-decoration-none stretched-link">Shop Now</NavLink></Button>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="text text-center hero-image-2">
          <Carousel.Caption bsPrefix=' ' className='my-6 mb-sm-7 mb-xl-6 mt-xl-7'>
            <Container className="my-8 text-start">
              <h1 className="fw-bold mb-3 text-grey-normal">Fresh Flower</h1>
              <h2 className="underline-start fw-medium h3 text-light-grey mb-5 0">Natural & Beautiful Flower Here</h2>
              <p className="mb-0 mt-6 fw-lighter text-dark">Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br /> Quibusdam earum tempora consequuntur.</p>
              <Button variant='primary' className="shop-now-btn  rounded rounded-pill px-4 py-1 mt-4 position-relative"><NavLink to="/shop" className="text-white text-decoration-none stretched-link">Shop Now</NavLink></Button>
            </Container>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
};
