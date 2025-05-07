import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function LandingSection() {
  return (
    <div className="flex flex-col m-[3%] h-[80vh]">
    <div className="flex flex-row items-center justify-between h-[50%]">
      <span className='cursor-pointer'> <ChevronLeft size={25}/> </span>
      <span className="flex flex-row w-full h-full "></span>
      <span className='cursor-pointer'> <ChevronRight size={25}/> </span>
    </div>
    <div className="flex flex-row items-center justify-between h-[50%]">
      <h1 className='capitalize w-[40%] text-[40px] font-semibold text-zinc-600'>Small Changes Make A Big Impact On People’s Lives</h1>
      <p className='flex flex-col w-[50%] text-[13px]'>
        The Urban Foundation envisions a Tanzania where children with Spina
        Bifida are empowered to lead independent and fulfilling lives, fully
        integrated into communities through access to quality education,
        comprehensive continence care and tailored independence training...
      <Link href={"/about"} role='button' className='flex flex-col items-center justify-center mt-5 bg-black text-white w-[100px] rounded-sm text-center capitalize h-[35px] hover:bg-black/80'>mission </Link>
      </p>
    </div>
  </div>
  )
}
