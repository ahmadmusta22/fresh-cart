import React from 'react'
import { ClipLoader } from 'react-spinners'


export default function Loadingscreen() {
  return (
    <div className="min-h-96 flex justify-center items-center ">
        <ClipLoader color='bg-gray-800'></ClipLoader>
    </div>
  )
}
