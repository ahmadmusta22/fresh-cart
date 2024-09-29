import React from 'react'
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { addToCart } from '../CartService';




export default function RelatedProducts({ products }) {
    var settings = {
        dots: false,
        infinite: false,
        speed: 200,
        slidesToShow: 5,
        slidesToScroll: 3,
        margin: 20,
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
        <div className="mt-52">
            <h3 className=" text-2xl font-medium">More Products :</h3>

            <Slider  {...settings}>
                {products.map((product) => {

                    return <div className=" py-20 w-full max-w-sm mx-auto rounded-md  p-2 overflow-hidden">
                        <div className="shadow-md">
                            <div className="flex items-end justify-end h-56 w-full bg-cover" style={{ "background-image": `url('${product.imageCover}')` }}>
                                <button onClick={() => addToCart(product?.id)} className="p-2  rounded-full bg-blue-600 text-white mx-5 -mb-4 hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                                    <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                </button>
                            </div>
                            <Link to={`/productdetails/${product.id}/${product.category.name}`} >
                                <div className="px-5 py-3">
                                    <h3 className="text-gray-700 uppercase">{product.title}</h3>
                                    <span className="text-gray-500 mt-2">{product.price} EGP</span>
                                </div>
                            </Link>

                        </div>
                    </div>



                })}
            </Slider>

        </div>
    )
}


