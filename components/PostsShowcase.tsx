import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PostsShowcase() {
  return (
    <section className="flex flex-col mx-[5%] my-[10px] mb-[150px]">
      <div className="flex flex-col max-sm:items-center">
        <h1 className="flex flex-row justify-between items-center capitalize text-[20px] max-sm:text-center">
          Latest Blog Post & Articles
          <Link href="" className="max-sm:hidden sm:hidden md:flex flex-row items-center text-[13px] capitalize decoration-0">
            see all post <Eye size={13} className="ml-[10px]"/>
          </Link>
        </h1>
        <small className="max-sm:w-[70%] sm:w-[70%] md:w-[70%] lg:w-[50%] mt-[20px] text-[13px] max-sm:text-center">
          Most children with Spina Bifida have Neurogenic bladder and bowel and
          no one wants them because of incontinence problems.
        </small>
      </div>

      <section className="flex max-sm:flex-col sm:flex-col md:flex-row flex-wrap justify-between mt-[5%] ">
        <div className="flex max-sm:flex-col sm:flex-row md:flex-col lg:flex-col  items-center sm:w-full md:w-[45%] lg:w-[45%] max-sm:my-[20px] sm:my-[20px]  max-sm:w-full">
          <span className="flex flex-col justify-center items-center max-sm:h-[300px] sm:h-[200px] md:h-[200px] lg:h-[300px] max-sm:w-full sm:w-[300px] md:w-full lg:w-full border-1 border-gray-200 rounded-[10px]">img</span>
          <span className="flex flex-col justify-between ml-[7%] max-sm:mx-[7%] max-sm:my-[7%] sm:my-[7%]">
            <small className="text-[13px] italic">Education</small>
            <h3 className="text-[20px] capitalize max-sm:my-[15px] sm:my-[15px]">Supporting Young People With Self-Acceptance</h3>
            <p className="text-[13px] max-sm:mb-[15px] sm:mb-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt..
            </p>
            <Link href="" className="flex flex-row items-center text-[11px] capitalize decoration-0">
              read more <ArrowRight size={13} className="ml-[10px]"/>
            </Link>
          </span>
        </div>

        <div className="flex max-sm:flex-col sm:flex-row md:flex-col lg:flex-col  items-center sm:w-full md:w-[45%] lg:w-[45%] max-sm:my-[20px] sm:my-[20px]  max-sm:w-full">
          <span className="flex flex-col justify-center items-center max-sm:h-[300px] sm:h-[200px] md:h-[200px] lg:h-[300px] max-sm:w-full sm:w-[300px] md:w-full lg:w-full border-1 border-gray-200 rounded-[10px]">img</span>
          <span className="flex flex-col justify-between ml-[7%] max-sm:mx-[7%] max-sm:my-[7%] sm:my-[7%]">
            <small className="text-[13px] italic">Education</small>
            <h3 className="text-[20px] capitalize max-sm:my-[15px] sm:my-[15px]">Supporting Young People With Self-Acceptance</h3>
            <p className="text-[13px] max-sm:mb-[15px] sm:mb-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt..
            </p>
            <Link href="" className="flex flex-row items-center text-[11px] capitalize decoration-0">
              read more <ArrowRight size={13} className="ml-[10px]"/>
            </Link>
          </span>
        </div>

        <div className="flex max-sm:flex-col sm:flex-row md:flex-col lg:flex-col  items-center sm:w-full md:w-[45%] lg:w-[45%] max-sm:my-[20px] sm:my-[20px]  max-sm:w-full">
          <span className="flex flex-col justify-center items-center max-sm:h-[300px] sm:h-[200px] md:h-[200px] lg:h-[300px] max-sm:w-full sm:w-[300px] md:w-full lg:w-full border-1 border-gray-200 rounded-[10px]">img</span>
          <span className="flex flex-col justify-between ml-[7%] max-sm:mx-[7%] max-sm:my-[7%] sm:my-[7%]">
            <small className="text-[13px] italic">Education</small>
            <h3 className="text-[20px] capitalize max-sm:my-[15px] sm:my-[15px]">Supporting Young People With Self-Acceptance</h3>
            <p className="text-[13px] max-sm:mb-[15px] sm:mb-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt..
            </p>
            <Link href="" className="flex flex-row items-center text-[11px] capitalize decoration-0">
              read more <ArrowRight size={13} className="ml-[10px]"/>
            </Link>
          </span>
        </div>

        <div className="flex max-sm:flex-col sm:flex-row md:flex-col lg:flex-col  items-center sm:w-full md:w-[45%] lg:w-[45%] max-sm:my-[20px] sm:my-[20px]  max-sm:w-full">
          <span className="flex flex-col justify-center items-center max-sm:h-[300px] sm:h-[200px] md:h-[200px] lg:h-[300px] max-sm:w-full sm:w-[300px] md:w-full lg:w-full border-1 border-gray-200 rounded-[10px]">img</span>
          <span className="flex flex-col justify-between ml-[7%] max-sm:mx-[7%] max-sm:my-[7%] sm:my-[7%]">
            <small className="text-[13px] italic">Education</small>
            <h3 className="text-[20px] capitalize max-sm:my-[15px] sm:my-[15px]">Supporting Young People With Self-Acceptance</h3>
            <p className="text-[13px] max-sm:mb-[15px] sm:mb-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt..
            </p>
            <Link href="" className="flex flex-row items-center text-[11px] capitalize decoration-0">
              read more <ArrowRight size={13} className="ml-[10px]"/>
            </Link>
          </span>
        </div>
      </section>
    </section>
  );
}
