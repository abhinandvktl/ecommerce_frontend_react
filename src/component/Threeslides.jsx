import React from 'react'
import { CarouselCaption, CarouselItem, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';





function Threeslides() {
    return (
        <>

        

            <div>
                <Carousel controls indicators>
                    <CarouselItem>
                        <Image className="d-block w-100" src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzNiYXRjaDE1LTIxNy0wMS5qcGc.jpg" alt="slide 1" style={{height:"400px"}}/>
                        <CarouselCaption className="d-none d-md-block">
                            <h5>First slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                        <Image className="d-block w-100" src="https://static.vecteezy.com/system/resources/previews/007/773/862/non_2x/blue-capsule-pills-on-blue-background-pharmacy-shop-banner-pharmaceutical-industry-antibiotic-capsule-pills-antibiotic-drug-resistance-pharmaceutical-industry-prescription-drugs-drug-research-free-photo.jpg" alt="slide 2" style={{height:"400px"}}/>
                        <CarouselCaption className="d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CarouselCaption>
                    </CarouselItem>
                    <CarouselItem>
                        <Image className="d-block w-100" src="https://as2.ftcdn.net/v2/jpg/02/02/46/39/1000_F_202463965_eh6kR5LUEKaIpMXyHsUl4X79JRAFhANB.jpg" alt="slide 3" style={{height:"400px"}} />
                        <CarouselCaption className="d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </CarouselCaption>
                    </CarouselItem>
                </Carousel>
            </div>
        </>
    )
}

export default Threeslides