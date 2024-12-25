import React from 'react'
import SideBar from './SideBar/SideBar'

const ProductListing = () => {
  return (
    <div className='py-8'>
      <div className="container flex gap-3">
            <div className="siderbar w-[20%] h-full bg-green-200 p-3">
                <SideBar/>
            </div>
      </div>
    </div>
  )
}

export default ProductListing
