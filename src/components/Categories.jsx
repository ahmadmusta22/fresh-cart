
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import Loadingscreen from './Loadingscreen';
import  { Helmet } from 'react-helmet';




export default function Categories() {

  const [showModal, setShowModal] = React.useState(false);

  function getCategories() {




    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)




  }

  let { data, isError, isFetching, isLoading, error } = useQuery({
    queryKey: ['recentCategories'],
    queryFn: getCategories,
  }

  )




 if(isLoading){
<Loadingscreen></Loadingscreen>
}

  return (
    <>
     <Helmet>
        <title>Categories</title>
      </Helmet>
     
        <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      
           <h1 className=" mt-28 text-center text-2xl font-bold">All categories</h1>
      {  <div className="flex flex-wrap mt-14 justify-center ">
        {data?.data?.data.map((cat) =>

         <>
           
          <div className=" md:w-1/4 sm:w-1/2 p-8">
            <div className="  bg-white   ">
            <img className='categoryH w-full object-contain' src={cat?.image} alt="" />
            <div className="p-5">

              <p className='text-center text-xl py-5'>{cat?.name}</p>




            </div>
          </div>
          </div>
         </>


        )
        }
      </div>}

    </>
  )
}





