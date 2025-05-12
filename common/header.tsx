import { ChevronDown, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
//import $ from "jquery"

export default function Header() {
  return (
    <header className="flex flex-col justify-center h-[80px] pt-[20px] px-0 sm:bg-zinc-200 max-sm:bg-zinc-200 md:bg-transparent md:border-zinc-200 md:border-b-1 lg:bg-transparent">
      <nav className="flex flex-row items-center justify-between my-0 mx-[3%] p-0 ">
        <span className="flex flex-col justify-center items-start h-[50px] w-auto max-sm:w-[70px]">
          <Image
            className="max-sm:block sm:hidden md:hidden lg:hidden h-[50px] object-contain"
            src={"/faraja's plane.png"}
            alt="faraja's way blank"
            width={250}
            height={50}
          />
          <Image
            className="max-sm:hidden sm:w-[200px] md:w-[200px] lg:w-[300px] h-[50px] object-contain"
            src={"/faraja's.png"}
            alt="faraja's way"
            width={250}
            height={50}
          />
        </span>
        <ul className="lg:flex flex-row sm:hidden md:hidden max-sm:hidden">
          <li className="flex flex-row list-none">
            <Link
              className="flex flex-row items-center justify-between decoration-0 text-gray-500 my-0 mx-[10px] h-[40px] py-0 px-[25px] rounded-[5px] capitalize text-[13px]"
              href="/"
            >
              home
              <ChevronDown
                size={13}
                className="ml-2" /* onMouseOver={()=>$('.popover-container').show()} */
              />
            </Link>
          </li>
          <li className="flex flex-row list-none">
            <Link
              className="flex flex-row items-center justify-between decoration-0 text-gray-500 my-0 mx-[10px] h-[40px] py-0 px-[25px] rounded-[5px] capitalize text-[13px]"
              href="/blog"
            >
              blog
              <ChevronDown
                size={13}
                className="ml-2" /* onMouseOver={()=>$('.popover-container').show()} */
              />
            </Link>
          </li>
          <li className="flex flex-row list-none">
            <Link
              className="flex flex-row items-center justify-between decoration-0 text-gray-500 my-0 mx-[10px] h-[40px] py-0 px-[25px] rounded-[5px] capitalize text-[13px]"
              href="/about"
            >
              about
              <ChevronDown
                size={13}
                className="ml-2" /* onMouseOver={()=>$('.popover-container').show()} */
              />
            </Link>
          </li>
          <li className="flex flex-row list-none">
            <Link
              className="flex flex-row items-center justify-between decoration-0 text-gray-500 my-0 mx-[10px] h-[40px] py-0 px-[25px] rounded-[5px] capitalize text-[13px]"
              href="/contact"
            >
              contact
              <ChevronDown
                size={13}
                className="ml-2" /* onMouseOver={()=>$('.popover-container').show()} */
              />
            </Link>
          </li>
        </ul>

        <Link
          role="button"
          className="sm:hidden max-sm:hidden md:hidden lg:flex flex-row items-center justify-center decoration-0 h-[40px] py-0 w-[140px] text-center rounded-[5px] capitalize text-[13px] bg-black text-gray-200 transition"
          href="/donation"
        >
          donate today
        </Link>

        <button
          role="button"
          type="button"
          className="lg:hidden flex flex-row items-center justify-center decoration-0 h-[40px] py-0 w-[50px] text-center rounded-[5px] capitalize text-[13px] bg-black text-gray-200 transition cursor-pointer"
        >
          <Menu size={17} />
        </button>
      </nav>
    </header>
  );
}
