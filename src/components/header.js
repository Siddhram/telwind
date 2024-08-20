import React, { useState } from 'react'
import { IoMenu } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";
//<FaRegWindowClose />

function Header() {
  let [toggle,settoggle]=useState(true);
  return (
    <div className='bg-blue-500 p-3'>
      <div className="max-w-[1240px] flex  py-[12px] px-[15px]  mx-auto justify-between items-center  ">
        <div className="text-3xl font-bold">
          Hello everyone
        </div>
        {toggle===true?<div className=" text-2xl  md:hidden block" ><IoMenu onClick={()=>{
          console.log(toggle);
          
          return settoggle(!toggle);
        }} />
</div>:<div  className=" text-2xl  md:hidden block" ><  FaRegWindowClose onClick={()=>{
    return settoggle(!toggle);
  }}/>
</div>}
        
  
        <ul className=' hidden md:flex text-white gap-10'>
          <li>home</li>
          <li>company</li>
          <li>resorses</li>
          <li>about</li>
          <li>contact</li>

        </ul>
           <ul className={`h-screen w-full md:hidden fixed bg-black text-white top-[84px] transition-all duration-300 ${toggle?'left-[-100%]':'left-0' } duration-700`}>
          <li className='p-5'>home</li>
          <li  className='p-5'>company</li>
          <li className='p-5'>resorses</li>
          <li className='p-5'>about</li>
          <li className='p-5'>contact</li>

        </ul>
      </div>
    
    </div>
  )
}

export default Header