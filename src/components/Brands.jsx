
import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React from 'react'
import Loadingscreen from './Loadingscreen';
import { Helmet } from 'react-helmet';





export default function Brands() {



  function getBrands() {



    return axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)




  }

  let { data, isError, isFetching, isLoading, error } = useQuery({
    queryKey: ['recentBrands'],
    queryFn: getBrands,
  }

  )








  return (
    <>
      <Helmet>
        <title>Brands</title>
      </Helmet>
      {isLoading ? <Loadingscreen></Loadingscreen> :

        <div className=" mt-20 ">
          <h1 className=" text-center text-2xl font-bold">All brands</h1>
          <div className="row justify-center">

            {data?.data.data.map((brand) =>


              <div className=' md:w-1/4 sm:w-1/2   '>

                <div className='py-3'>
                  <img src={brand?.image} alt="" />


                </div>

              </div>


            )
            }
          </div>
        </div>


      }

    </>
  )
}
