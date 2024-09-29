import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { addToCart } from '../CartService';
import Ratings from './Ratings';
import Loadingscreen from './Loadingscreen';
import ImagesSlider from './ImagesSlider';
import RelatedProducts from './RelatedProducts';
import { addToWish } from './WishList';
import { Helmet } from 'react-helmet';







export default function ProductDetails() {





    let { id, category } = useParams()
    const [productDetails, setProductDetails] = useState(null);
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    let [imgSrc, setImgSrc] = useState('')

    function getProductDetails(id) {
        setIsLoading(true)
        axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
            .then(({ data }) => {
                setProductDetails(data.data)
                setIsLoading(false)
            })
            .catch(({ }) => {

            })
    }


    function getRelatedProducts(category) {
        axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
            .then(({ data }) => {
                let allProducts = data.data
                let related = allProducts.filter((product) => product.category.name == category)
                setRelatedProducts(related)

            })
            .catch(({ }) => {

            })
    }




    function changeSrc(e) {
        setImgSrc(e.target.src)
    }

    useEffect(() => {
        getProductDetails(id)
        getRelatedProducts(category)
    }, [id, category])


    return <>
        <Helmet>
            <title>Details</title>
        </Helmet>


        {
            isLoading ? <Loadingscreen></Loadingscreen> : <main className="my-8 mt-32">
                <div className="container mx-auto px-6">
                    <div className="md:flex md:items-center ">
                        <div className="w-full md:w-3/12 lg:h-96">

                            <ImagesSlider images={productDetails?.images}></ImagesSlider>

                        </div>

                        <div className="w-full max-w-lg mx-auto mt-5 md:ml-8 md:mt-0 md:w-9/12 lg:h-96">
                            <h3 className="text-gray-700 uppercase text-lg">{productDetails?.title}</h3>
                            <span className="text-gray-500 mt-3">{productDetails?.price} EGP</span>
                            <hr className="my-3" />

                            <div className="mt-3">
                                <label className="text-gray-700 text-sm" for="count">Rating:</label>
                                <div className="flex items-center mt-1">
                                    <h3><Ratings ratings={productDetails?.ratingsAverage}></Ratings></h3>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="text-gray-700 text-sm" for="count">Description:</label>
                                <div className="flex items-center mt-1">
                                    <h3>{productDetails?.description}</h3>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="text-gray-700 text-sm" for="count">Category:</label>
                                <div className="flex items-center mt-1">
                                    <h3>{productDetails?.category.name}</h3>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="text-gray-700 text-sm" for="count">SubCategory:</label>
                                <div className="flex items-center mt-1">
                                    <h3>{productDetails?.subcategory[0].name}</h3>
                                </div>
                            </div>
                            <div className="mt-3">
                                <label className="text-gray-700 text-sm" for="count">Brand:</label>
                                <div className="flex items-center mt-1">
                                    <h3>{productDetails?.brand.name}</h3>
                                </div>
                            </div>
                            <div className="flex items-center mt-6">
                                <button onClick={() => addToCart(productDetails?.id)} className="mx-2 text-gray-600 border rounded-md p-2 hover:bg-gray-200 focus:outline-none">
                                    <svg className="h-5 w-5" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                                </button>
                                <button onClick={() => addToWish(productDetails?.id)} className="px-8 py-2 bg-indigo-600 text-white text-sm font-medium rounded hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">Add to wishlist</button>

                            </div>
                        </div>
                    </div>

                    <RelatedProducts products={relatedProducts}></RelatedProducts>





                </div>
            </main>

        }




    </>

}




