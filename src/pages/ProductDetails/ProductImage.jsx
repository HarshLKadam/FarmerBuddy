import React from 'react'
import pd1 from '../../assets/pd3.webp'

//product page where page  contains the image if product page 
const ProductImage = () => {
    return (
        <>
            <div className="img rounded-lg w-full">
                <img src={pd1} className='w-[800px] h-[500px] rounded-2xl ' alt="" />
            </div>
        </>
    )
}

export default ProductImage
