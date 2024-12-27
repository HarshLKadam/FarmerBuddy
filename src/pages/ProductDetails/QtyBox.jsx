import React from 'react'

const QtyBox = () => {
  return (
    <div className='qtybox'>
        <span className='text-[20px] font-bold'>Quantity:</span>
     <input type="number" defaultValue={1} className=' ml-2 w-[70px] h-[50px] border border-black text-center text-[18px]'/>
    </div>
  )
}

export default QtyBox
