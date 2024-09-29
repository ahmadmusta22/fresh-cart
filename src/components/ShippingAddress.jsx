import React, { useState } from 'react'
import { useFormik } from 'formik'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import Loadingscreen from './Loadingscreen';






export default function ShippingAddress() {

  let { cartId } = useParams()
  let [isLoading, setIsLoading] = useState(false)


  function handleSubmit(values) {
    setIsLoading(true)


    axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/` + cartId, { shippingAddress: values },

      {
        headers: { token: localStorage.getItem("userToken") },

        params: {
          url: 'http://localhost:5173'
        }
      }

    )
      .then(({ data }) => {
        setIsLoading(false)
        location.href = data.session.url
      })
      .catch((err) => {
        setIsLoading(false)
      })


  }









  let formik = useFormik({
    initialValues: {
      city: '',
      phone: '',
      details: '',

    },


    onSubmit: handleSubmit
  })
  if (isLoading) {
    <Loadingscreen></Loadingscreen>
  }
  return (
    <div className='mt-40 mb-10'>


      {<div className=" w-1/2 mx-auto p-4 mb-4 text-sm " role="alert">
        <span className="font-medium"></span>
      </div>}
      <form className="max-w-md mx-auto text-black" onSubmit={formik.handleSubmit}>

        <div className="relative z-0 w-full mb-5 group">
          <input type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.city} id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="city" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">City</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type='text' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.details} id="details" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="details" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Details</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type='tel' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} id="phone" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:border-gray-600 dark:focus:border-green-500 focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
          <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-green-600 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone </label>
        </div>
        {formik.errors.email && formik.touched.email ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.email}</span>
        </div> : ''}

        {formik.errors.password && formik.touched.password ? <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
          <span className="font-medium">{formik.errors.password}</span>
        </div> : ''}
        <button type="submit" className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Check Out</button>
      </form>


    </div>
  )
}
