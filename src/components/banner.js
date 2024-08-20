import React from 'react'
import {ReactTyped} from "react-typed";

function Banner() {
  return (
    <div className=' bg-blue-400 w-full  py-[100px] '>

      <div className=" max-w-[1240px]  mx-auto text-center">
        <div className="text-3xl font-bold">Learn with us</div>
        <h1 className=" text-white font-bold text-[40px] md:text-[60px] ">
          Grow with us learn with us
        </h1>
        <div className=" text-[30px] md:text-[50px] font-bold text-white ">learn
           <ReactTyped className='px-4' strings={[" Here you can find anything","hete ids the something"]} typeSpeed={100} backSpeed={50} loop={true} />

    
        </div>
      </div>
    </div>
  )
}

export default Banner