import React, { useEffect, useState } from 'react'
import { addToWish } from './WishList'
import { addToCart } from '../CartService'
import { Link } from 'react-router-dom';
import Ratings from './Ratings';



export default function HomeProduct({ product }) {

    const [flag, setFlag] = useState(() => {
        const savedFlag = localStorage.getItem(`flag-${product._id}`);
        return savedFlag === 'true';
    });

    useEffect(() => {
        localStorage.setItem(`flag-${product._id}`, flag);
    }, [flag, product._id]);


    return (
        <>

            <div className=' md:w-full px-4'>
                <div className='product py-4'>

                    <div className="max-w-2xl mx-auto">


                        <div className="bg-white shadow-md rounded-lg max-w-sm  dark:border-gray-700">

                            <Link to={`/productdetails/${product.id}/${product.category.name}`} >
                                <img className="rounded-t-lg p-8" src={product.imageCover} alt="product image" />
                            </Link>

                            <div className="px-5 pb-5">
                                <Link to={`/productdetails/${product.id}/${product.category.name}`} >

                                    <h3 className="text-black font-semibold text-xl tracking-tight  line-clamp-1">{product.title}</h3>
                                    <p className='line-clamp-2 text-black pt-2'>{product.description}</p>

                                </Link>

                                <Ratings ratings={product?.ratingsAverage}></Ratings>

                                <div className="  flex items-center justify-between">
                                    <span className="text-xl">{product.price} EGP</span>

                                    <a onClick={() => {  setFlag(!flag); { flag ? '' : addToWish(product?.id) } }}
                                        className={`  text-red-800   cursor-pointer  focus:ring-blue-300 font-medium rounded-lg  px-5 py-2.5 text-center   bg-white   mr-2 mt-3 text-2xl `}><i class="fa-solid fa-heart"></i></a>
                                </div>
                                <div className="flex justify-center"><a onClick={() => addToCart(product?.id)}
                                    className=" w-full mt-9 cursor-pointer  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                                    to cart</a></div>
                            </div>
                        </div>
                    </div>



                </div>

            </div>
        </>
    )
}
