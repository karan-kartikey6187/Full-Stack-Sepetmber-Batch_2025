import { useRef, useState } from "react";
import { Button, Carousel, Image, Stack } from "react-bootstrap"
import { ArrowLeft, ArrowLeftCircle, ArrowRight, ArrowRightCircle } from "react-bootstrap-icons";
import { FcPrevious } from "react-icons/fc";
import { GrNext } from "react-icons/gr";
import { v4 as uuid } from "uuid";

export const RBCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    const sliderImage = [
        {
            id: uuid(),
            image: "https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg",
            heading: "First Slide",
            content: "This is the first slide."
        },
        {
            id: uuid(),
            image: "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
            heading: "Second Slide",
            content: "This is the second slide."
        },
        {
            id: uuid(),
            image: "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
            heading: "Third Slide",
            content: "This is the third slide."
        },
    ]
    
    const refSlider = useRef()

    return (
        <div>
            <Carousel
                ref={refSlider}
                activeIndex={index}
                onSelect={handleSelect}
                prevIcon={<ArrowLeftCircle size={35}/>}
                nextIcon={<ArrowRightCircle size={35}/>}
                indicators={false}
                >   
                {sliderImage.map((item) => {
                    return (
                        <Carousel.Item key={item.id} className="text text-center px-5">
                            <Image src={item.image} className="w-100 rounded-5" />
                            <Carousel.Caption>
                                <h3>{item.heading}</h3>
                                <p>{item.content}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
            <Stack direction="horizontal" className="justify-content-center mt-3" gap={3}>
                {sliderImage.map((item, i) => {
                    return (
                        <div key={item.id}
                            role="button"
                            className="indicators-btn rounded rounded-circle"
                            style={{ backgroundColor: index === i ? "#3c87f7" : "#c1c1c3" }}
                            onClick={() => { setIndex(i) }}>
                        </div>
                    )
                })}
            </Stack>
            <Stack className="justify-content-center mt-4 mb-2" direction="horizontal" gap={3}>
                <Button variant="primary" onClick={()=>{refSlider.current.prev()}}><ArrowLeft/> Prev</Button>
                <Button variant="primary" onClick={()=>{refSlider.current.next()}}>Next <ArrowRight/></Button>
            </Stack>
        </div>
    )
}
