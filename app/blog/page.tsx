import { CampaignsItem } from "@/components/Campaigns";
import Newsletters from "@/components/Newsletters";
import Socials from "@/components/Socials";
import { Book, MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function BlogPage() {
  return (
    <section>
      <BlogBanner />

      <CampaignTypesOnBlog />

      <div className="mx-[3%] mt-[50px]">
        <h1 className="flex flex-row justify-between items-center bg-orange-400 px-[30px] rounded-sm capitalize text-[13px] h-[30px] text-white">
          trending campaigns{" "}
          <Link href={""} className="hover:text-gray-300">
            see all
          </Link>
        </h1>

        <div className="flex max-sm:flex-col sm:flex-row sm:flex-wrap mg:flex-row lg:flex-row  sm:justify-evenly md:justify-evenly lg:justify-evenly items-center mx-0 my-[5%] mb-[10%] ">
          <CampaignsItem />
          <CampaignsItem />
          <CampaignsItem />
        </div>
      </div>

      <RecentBlogPosts />
      <Socials />
      <Newsletters />
    </section>
  );
}

function BlogItem() {
  return (
    <div className="max-sm:w-full sm:w-full md:w-full lg:w-full xl:w-[400px] max-sm:my-[20px]">
      <Link
        href={""}
        className="flex flex-col justify-center items-center w-full h-[250px] bg-gray-300 rounded-lg mb-3 cursor-pointer"
      >
        img
      </Link>
      <h1 className="font-light mx-5 capitalize text-[20px]">
        Supporting Young People With Self-Acceptance
      </h1>
      <span className="flex flex-row w-full mx-5 my-3 justify-start">
        <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">
          Education
        </small>
        <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">
          Education
        </small>
        <small className="text-[11px] mr-5 bg-black text-white px-3 py-1 rounded-sm">
          Education
        </small>
      </span>
      <p className="text-[13px] mx-5 my-2">
        Most children with Spina Bifida have Neurogenic bladder and bowel and no
        one wants them because of incontinence problems...
      </p>

      <div className="flex flex-row items-center mx-5">
        <span className="flex flex-col justify-center items-center w-[50px] h-[50px] rounded-full bg-zinc-200 text-[10px]">
          img
        </span>
        <span className="flex flex-row items-center text-[12px] capitalize m-3">
          jonathan wills
        </span>
        <span className="block h-[10px] w-[10px] bg-zinc-600 rounded-full"></span>
        <span className="flex flex-row items-center text-[12px] capitalize m-3">
          19 jan 2025
        </span>
      </div>
    </div>
  );
}

function BlogBanner() {
  return (
    <div className="relative flex flex-col h-[80vh] max-sm:mx-0 sm:mx-0 md:mx-0 lg:mx-[3%] max-sm:rounded-0 sm:rounded-0 lg:rounded-[10px] mt-4 bg-zinc-200">
      {/* img */}
      <div className="flex flex-col absolute bottom-0 my-[3%] mx-[5%]">
        <small className="capitalize text-[15px] text-zinc-500 mb-3">
          <Link href="" className="text-inherit">
            featured
          </Link>
        </small>
        <Link
          href={""}
          className="max-sm:text-[25px] sm:text-[30px] md:text-[30px] lg:text-[40px] capitalize font-bold"
        >
          breaking into product design: Advice from untitled founder, frankie
        </Link>
        <p className="mt-[20px] text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          recusandae cum possimus nesciunt deleniti similique consequatur quo
          rem, veniam, odio officiis ab unde? Deleniti harum dolores eaque
          corrupti iste error.
        </p>
        <Link href={""} className="mt-2">
          <MoveRight size={30} />
        </Link>
      </div>
    </div>
  );
}

function RecentBlogPosts() {
  return (
    <div className="mx-[3%] mt-[50px]">
      <h1 className="flex flex-row justify-between items-center bg-black px-[30px] rounded-sm capitalize text-[13px] h-[30px] text-white mb-5">
        our Recent Blog Articles
        <Link href={""} className="hover:text-gray-300">
          see all
        </Link>
      </h1>
      <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </div>
  );
}

function CampaignTypesOnBlog() {
  return (
    <div className="mx-[3%] mt-[20px] flex max-sm:flex-col sm:flex-col md:flex-col lg:flex-row justify-between">
      <h1 className="flex flex-row max-sm:justify-center sm:justify-center md:justify-center lg:justify-between items-center lg:bg-gray-200 md:w-full lg:w-[250px] p-[20px] text-[15px] font-light capitalize rounded-lg max-sm:font-medium">
        checking out avariable campaigns
      </h1>
      <div className="max-sm:w-full sm:w-full md:w-full lg:w-[80%] flex flex-row items-center justify-center overflow-hidden max-sm:mt-10 sm:mt-10 lg:mt-auto">
        <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
          <span>
            <Book size={20} />
          </span>
          <small className="text-center capitalize text-[13px] mt-[10px]">
            Education
          </small>
        </span>

        <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
          <span>
            <Book size={20} />
          </span>
          <small className="text-center capitalize text-[13px] mt-[10px]">
            Health
          </small>
        </span>

        <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
          <span>
            <Book size={20} />
          </span>
          <small className="text-center capitalize text-[13px] mt-[10px]">
            sports
          </small>
        </span>

        <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
          <span>
            <Book size={20} />
          </span>
          <small className="text-center capitalize text-[13px] mt-[10px]">
            food
          </small>
        </span>

        <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
          <span>
            <Book size={20} />
          </span>
          <small className="text-center capitalize text-[13px] mt-[10px]">
            Education
          </small>
        </span>

        <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
          <span>
            <Book size={20} />
          </span>
          <small className="text-center capitalize text-[13px] mt-[10px]">
            Education
          </small>
        </span>

        <span className="flex flex-col justify-center items-center cursor-pointer hover:bg-zinc-200 mx-3 p-3 rounded-lg">
          <span>
            <Book size={20} />
          </span>
          <small className="text-center capitalize text-[13px] mt-[10px]">
            Education
          </small>
        </span>
      </div>
    </div>
  );
}
