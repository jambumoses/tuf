import { Mail, Map, Phone } from 'lucide-react'
import React from 'react'

export default function Newsletters() {
  return (
    <section className="flex flex-row justify-evenly items-center m-[5%] mb-[150px]">
    <div className="flex flex-col">
      <h1 className='text-[25px] capitalize'>newsletter</h1>
      <small className='text-[13px] capitalize'>get latest news & updates</small>
    </div>

    <div className="flex flex-row">
      <span className='flex flex-row items-center h-[40px] bg-white rounded-tr-[30px] rounded-br-[30px] rounded-bl-[30px] rounded-tl-[0px] pl-[15px] border-1 border-gray-300'>
        <Mail size={20} className='mr-[10px]'/>
        <input className='outline-none bg-transparent border-none h-full w-[200px] text-[11px]' type="text" placeholder="Your Email" />
        <button className='outline-none bg-black text-white border-none h-full w-[150px] rounded-[30px] rounded-tl-[0px] text-[11px]' type="submit">subscribe</button>
      </span>
    </div>

    <div className="flex flex-row items-center">
      <span className="flex flex-col justify-center items-center mr-[15px] text-[20px]"> <Phone size={25}/> </span>
      <span className="flex flex-col items-center">
        <h3 className='text-[20px] capitalize'>+255 683 241 899</h3>
        <small className='text-[11px]'>tuf.foundation00@gmail.com</small>
      </span>
    </div>

    <div className="flex flex-row items-center">
      <span className="flex flex-col justify-center items-center mr-[15px] text-[20px]"> <Map size={25}/> </span>
      <span className="flex flex-col items-center">
        <small className='text-[11px]'>mwanza</small>
        <small className='text-[11px]'>Tanzania</small>
      </span>
    </div>
  </section>
  )
}
