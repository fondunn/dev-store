import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

import img1 from '../../assets/asset1.jpg'
import img2 from '../../assets/asset2.jpg'
import img3 from '../../assets/asset3.jpg'

import { CarouselContainerDiv } from './Carousel.style'

function CarouselContainer() {
    return (
        <CarouselContainerDiv>
            <Carousel stopOnHover={true} autoPlay={true} dynamicHeight={false} showThumbs={false} infiniteLoop={true} showIndicators={false} showStatus={false}>
                <div>
                    <img src={img1} alt="" />
                </div>
                <div>
                    <img src={img2} alt="" />
                </div>
                <div>
                    <img src={img3} alt="" />
                </div>
            </Carousel>
        </CarouselContainerDiv>

    )
}

export default CarouselContainer