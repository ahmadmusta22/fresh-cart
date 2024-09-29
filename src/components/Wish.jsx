import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { addToCart } from '../CartService';
import { Bounce, toast } from 'react-toastify';
import Loadingscreen from './Loadingscreen';
import { Helmet } from 'react-helmet';








export default function Wish() {

  let [wish, setWish] = useState(null)
  const [isLoading, setIsLoading] = useState(false)




  async function getUserWish() {
    setIsLoading(true)
    let { data } = await axios.get('https://ecommerce.routemisr.com/api/v1/wishlist/', {
      headers: {

        token: localStorage.getItem('userToken')
      }
    }).finally(() => {
      setIsLoading(false)
    })

    setIsLoading(false)

    setWish(data)

  }

  useEffect(() => {
    getUserWish()
  }, [])






    async function removeWish(productId) {
    setIsLoading(true);
    try {
      await axios.delete('https://ecommerce.routemisr.com/api/v1/wishlist/' + productId, {
        headers: {
          token: localStorage.getItem('userToken')
        }
      });


      setWish(prevWish => ({
        ...prevWish,
        data: prevWish.data.filter(item => item._id !== productId)
      }));

      toast.success("Product has been removed successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      console.error('Error removing wish:', error);
    } finally {
      setIsLoading(false);
    }
  }

  


  if (isLoading) {
    return <Loadingscreen></Loadingscreen>
  }




  return (

<>
<Helmet>
        <title>Wishlist</title>
      </Helmet>
    <div className=" mt-24">
      <h1 className="mb-10 text-center text-2xl font-bold">Wishlist Items</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
          {wish?.data.map((ele, index) => {

            return <div key={index} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
              <img src={ele?.imageCover} alt="product-image" className="w-full rounded-lg sm:w-40" />
              <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 sm:mt-0">
                  <h2 className=" text-lg font-bold text-gray-900">{ele?.title.split(' ').slice(0, 2).join(' ')}</h2>
                </div>
                <div className="mt-4 flex justify-between im sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">

                  <a onClick={() => addToCart(ele?._id)}
                    className=" cursor-pointer  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add
                    to cart</a>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm">{ele?.price} EGP</p>
                    <svg onClick={() => removeWish(ele?._id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          })}
          {wish?.data.length == 0 && <h1 className='text-black mt-28 text-center font-bold'>No products in your wishlist</h1>}

        </div>


      </div>
    </div>
    </>

  )
}
