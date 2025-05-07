import Link from 'next/link'
import React from 'react'

export default function Aims() {
  return (
    <section className="flex flex-row justify-between m-[5%]">
    <div className="w-[50%]">
      <span className="flex flex-row h-[400px] w-full bg-gray-400"></span>
      <span className="flex flex-col mt-[5%]">
        <h2 className='capitalize text-[18px]'>
          aiming
          <br />
          today
        </h2>
        <p className='text-[13px] mt-[30px] mr-[10%]'>
          Our aim is to ensure that children with Spina Bifida are properly
          included in the community through education, continence care and
          independence training
        </p>
        <Link href="" className="flex flex-col justify-center items-center text-[13px] capitalize decoration-0 w-[150px] h-[30px] py-[0px] px-[20px] text-white bg-black mt-[20px] rounded-[5px]">read more</Link>
      </span>
    </div>

    <div className="w-[50%] flex flex-col items-end">
      <h1 className='capitalize text-[35px] text-right ml-[5%]'>Establish sense of unity and common identity among children</h1>
      <small className='mt-[20px] text-[13px] text-right'>with Spina Bifida and Hydrocephalus.</small>
      <p className='mt-[5%] text-[13px] w-[300px] text-right'>
        Most children with Spina Bifida have Neurogenic bladder and bowel
        and no one wants them because of incontinence problems.
      </p>

      <div className="flex flex-row mt-[150px]">
        <div className="flex flex-row mr-[30px]">
            <span className='flex flex-col justify-center items-center w-[50px] h-[50px] rounded-full border border-gray-300 bg-white mr-[-10px] z-10'></span>
            <span className='flex flex-col justify-center items-center w-[50px] h-[50px] rounded-full border border-gray-300 bg-white mr-[-10px] z-10'></span>
            <span className='flex flex-col justify-center items-center w-[50px] h-[50px] rounded-full border border-gray-300 bg-white mr-[-10px] z-10'></span>
        </div>

        <span className="flex flex-col items-start">
          <h1 className='text-[15px] font-bold text-left'>325k</h1>
          <small className='text-left m-0 text-[12px]'>children with Spina Bifida</small>
        </span>
      </div>0vh
    </div>
  </section>
  )
}
