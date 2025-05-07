import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section className="flex flex-col justify-center m-[5%] mb-[10%] bg-white rounded-0 rounded-bl-[30px] h-[50vh]">
      <small className="ml-[40px] uppercase text-[15px] text-orange-400 font-black tracking-[5px]">become a volunteer</small>
      <h1 className="flex flex-row justify-between items-center m-[40px]">
        <span className="text-[30px] w-[50%] capitalize">
          join your hands with us for a better life and beautiful future.
        </span>
        <Link href="" className="flex flex-row items-center justify-center capitalize text-[13px decoration-0 rounded-[30px] rounded-tl-[0px] w-[200px] h-[40px] bg-orange-400 text-white">
          <span className="flex flex-col justify-center items-center bg-transparent text-white border-1 border-white rounded-[50%] h-[25px] w-[25px] text-[11px] mr-[10px]">
            <i className="fa fa-arrow-right"></i>
            <ArrowRight size={15}/>
          </span>
          contact now
        </Link>
      </h1>
    </section>
  );
}
