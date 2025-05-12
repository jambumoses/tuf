import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="flex flex-col justify-center m-[5%] max-sm:mx-0 max-sm:rounded-none mb-[10%] bg-white rounded-0 rounded-bl-[30px] h-[50vh]">
      <small className="ml-[40px] uppercase text-[15px] text-orange-400 font-light tracking-[5px]">become a volunteer</small>
      <h1 className="flex max-sm:flex-col sm:flex-col md:flex-row lg:flex-row justify-between max-sm:items-start lg:items-center m-[40px]">
        <span className="max-sm:text-[16px] sm:text-[25px] md:text-[25px] lg:text-[25px] font-medium max-sm:w-[50%] md:w-[50%] lg:w-[50%] capitalize">
          join your hands with us for a better life and beautiful future.
        </span>
        <Link href="" className="flex flex-row max-sm:items-center sm:items-center lg:items-center justify-center capitalize text-[13px] decoration-0 max-sm:rounded-lg sm:rounded-lg md:rounded-[30px] lg:rounded-[30px] rounded-tl-[0px] w-[200px] h-[40px]  bg-orange-400 text-white max-sm:mt-[20px] sm:mt-[20px]">
          <span className=" flex flex-col justify-center items-center bg-transparent text-white border-1 border-white rounded-[50%] h-[25px] w-[25px] text-[11px] mr-[10px]">
            <i className="fa fa-arrow-right"></i>
            <ArrowRight  size={14}/>
          </span>
          contact now
        </Link>
      </h1>
    </section>
  );
}
