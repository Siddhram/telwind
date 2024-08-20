import React from 'react'
import laptop from '../assets/image/laptop.jpg'
function Experts() {
  return (
    <div className='max-w-[1240px] mx-auto h-[200px] border border-black grid  grid-cols-2 py-3'>
        <div className="border border-blue-300  col-span-1 flex justify-center">
<img src={laptop} alt="" className='w-full h-auto max-w-[500px] max-h-[200px] object-contain '/>
        </div>
                <div className="border border-blue-300 col-span-1">

                </div>

      </div>
  )
}

export default Experts
