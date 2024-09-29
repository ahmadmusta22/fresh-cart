import React from 'react'
import mainslider from '../../src/assets/finalProject assets/images/slider-image-3.jpeg'
import mainslider1 from '../../src/assets/finalProject assets/images/grocery-banner-2.jpeg'
import mainslider2 from '../../src/assets/finalProject assets/images/grocery-banner.png'
import slider from '../../src/assets/finalProject assets/images/slider-image-1.jpeg'
import slider1 from '../../src/assets/finalProject assets/images/slider-image-2.jpeg'
import Slider from 'react-slick'


export default function Mainslider() {

    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows:false
    };

    return (
        <div className="row mt-16 ">
            <div className="w-3/4">
                <Slider {...settings} >

                    <img src={mainslider} className='w-full h-[400px]' alt="" />
                    <img src={mainslider1} className='w-full h-[400px]' alt="" />
                    <img src={mainslider2} className='w-full h-[400px]' alt="" />

                </Slider>

            </div>
            <div className="w-1/4">
                <img src={slider} className='w-full h-[200px]' alt="" />
                <img src={slider1} className='w-full h-[200px]' alt="" />

            </div>
        </div>
    )
}
