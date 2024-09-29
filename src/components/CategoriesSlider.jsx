import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

export default function CategoriesSlider() {


    let [categories, setCategories] = useState([])

    function getCategories() {
        axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
            .then(({ data }) => {

                setCategories(data.data)


            })
            .catch((errors) => {

            })
    }


    useEffect(() => {

        getCategories()
    }, [])

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <>
            <div className="py-5 ">
                <h2 className='py-4 text-gray-800 font-light text-xl'>Shop popular category</h2>
                <Slider {...settings}>

                    {categories.map((cat) => <div className=''>
                        <img className='w-full catH' src={cat.image} alt={cat.name} />
                        
                    </div>)}


                </Slider>
            </div>
        </>
    )
}
