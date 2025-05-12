import Link from 'next/link'
import React from 'react'

export default function Aims() {
  return (
    <section className="flex max-sm:flex-col sm:flex-col md:flex-row lg:flex-row justify-between m-[5%] mb-[150px]">
    <div className="max-sm:w-full md:w-[50%] sm:w-full  lg:w-[50%] max-sm:mb-[100px] sm:mb-[100px]">
      <span className="flex flex-row max-sm:h-[400px] sm:h-[400px] md:h-[300px] lg:h-[400px] w-full bg-gray-400"></span>
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

    <div className="max-sm:w-full md:w-[50%] lg:w-[50%] flex flex-col max-sm:items-start sm:items-start md:items-start lg:items-end">
      <h1 className='capitalize text-[35px] text-right ml-[5%] max-sm:text-left sm:text-left lg:text-right max-sm:text-[25px] sm:text-[25px]'>Establish sense of unity and common identity among children</h1>
      <small className='max-sm:ml-[5%] sm:ml-[5%] mt-[20px] text-[13px] max-sm:text-right sm:text-right md:text-left lg:text-right'>with Spina Bifida and Hydrocephalus.</small>
      <p className='max-sm:text-left sm:text-left max-sm:ml-[5%] sm:ml-[5%] mt-[5%] text-[13px] w-[300px] md:text-left lg:text-right'>
        Most children with Spina Bifida have Neurogenic bladder and bowel
        and no one wants them because of incontinence problems.
      </p>

      <div className="flex flex-row max-sm:mt-[50px] sm:mt-[50px] max-sm:ml-[5%] sm:ml-[5%] md:mt-[150px] lg:mt-[150px]">
        <div className="flex flex-row mr-[30px]">
            <span className='flex flex-col justify-center items-center w-[50px] h-[50px] rounded-full border border-gray-300 bg-white mr-[-10px] z-10'></span>
            <span className='flex flex-col justify-center items-center w-[50px] h-[50px] rounded-full border border-gray-300 bg-white mr-[-10px] z-10'></span>
            <span className='flex flex-col justify-center items-center w-[50px] h-[50px] rounded-full border border-gray-300 bg-white mr-[-10px] z-10'></span>
        </div>

        <span className="flex flex-col items-start">
          <h1 className='text-[15px] font-bold text-left'>325k</h1>
          <small className='text-left m-0 text-[12px]'>children with Spina Bifida</small>
        </span>
      </div>
    </div>
  </section>
  )
}
