import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
//import $ from "jquery"

export default function Header() {
  return (
    <header className="flex flex-col justify-center h-[80px] pt-[20px] px-0">
      <nav className="flex flex-row items-center justify-between my-0 mx-[3%] p-0">
        <span className="flex flex-col justify-center items-center h-[50px] w-[250px]">
          <Image src={"/faraja's.png"} alt="faraja's way" width={250} height={50}/>
        </span>
        <ul className="flex flex-row ">
          <li className="flex flex-row list-none">
            <Link className="flex flex-row items-center justify-between decoration-0 text-gray-500 my-0 mx-[10px] h-[40px] py-0 px-[25px] rounded-[5px] capitalize text-[13px]" href="/">
              home
            <ChevronDown size={13} className="ml-2" /* onMouseOver={()=>$('.popover-container').show()} *//>
            </Link>
          </li>
          <li className="flex flex-row list-none">
            <Link className="flex flex-row items-center justify-between decoration-0 text-gray-500 my-0 mx-[10px] h-[40px] py-0 px-[25px] rounded-[5px] capitalize text-[13px]" href="/blog">
              blog
              <ChevronDown size={13} className="ml-2" /* onMouseOver={()=>$('.popover-container').show()} *//>
            </Link>
          </li>
          <li className="flex flex-row list-none">
            <Link className="flex flex-row items-center justify-between decoration-0 text-gray-500 my-0 mx-[10px] h-[40px] py-0 px-[25px] rounded-[5px] capitalize text-[13px]" href="/about">
              about
              <ChevronDown size={13} className="ml-2" /* onMouseOver={()=>$('.popover-container').show()} *//>

            </Link>
          </li>
          <li className="flex flex-row list-none">
            <Link className="flex flex-row items-center justify-between decoration-0 text-gray-500 my-0 mx-[10px] h-[40px] py-0 px-[25px] rounded-[5px] capitalize text-[13px]" href="/contact">
              contact
            <ChevronDown size={13} className="ml-2" /* onMouseOver={()=>$('.popover-container').show()} *//>
            </Link>
          </li>
        </ul>

        <Link role="button" className="flex flex-row items-center decoration-0 h-[40px] py-0 px-[25px] rounded-[5px] capitalize text-[13px] bg-black text-gray-200 transition" href="/donation">
          donate today
        </Link>
      </nav>
    </header>
  );
}
