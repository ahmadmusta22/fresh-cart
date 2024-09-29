import { useQuery } from '@tanstack/react-query';
import axios from 'axios'
import React, {  useState } from 'react'
import Loadingscreen from './Loadingscreen';
import { Helmet } from 'react-helmet';
import HomeProduct from './HomeProduct';







export default function RecentProducts() {

    const [search, setSearch] = useState([])
    


    function getRecent() {

        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)

    }


    let { data, isError, isFetching, isLoading, error } = useQuery({
        queryKey: ['recentProducts'],
        queryFn: getRecent
    })




    if (isLoading) {
        return <div className='flex justify-center '>

            <Loadingscreen />
        </div>
    }
    if (isError) {
        return <div className='flex justify-center '>

            <h3>{error}</h3>
        </div>
    }

    function searchFun(e) {
        let term = e.target.value

        setSearch(data.data.data.filter(ele => ele.title.toLowerCase().includes(term.trim().toLowerCase())))



    }

    
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



    return <>

        <Helmet>
            <title>Home</title>
        </Helmet>

        <div class="max-w-2xl my-10 mx-auto">

<form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-black  sr-only">Search</label>
    <div class="relative">
        <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input onChange={searchFun} type="search" id="default-search" class="block p-4 pl-10 w-full text-sm  text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500   dark:border-gray-600 dark:placeholder-gray-400 " placeholder="Search products ...." required/>
       
    </div>
</form>


</div>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-center gap-3">

            {search.length ? search.map((product) =>

                <HomeProduct product={product} ></HomeProduct>) : data?.data.data.map((product) =>

                    <HomeProduct product={product} ></HomeProduct>)}


        </div>

    </>


}





