import { ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function PostsShowcase() {
  return (
    <section className="flex flex-col mx-[5%] my-[10px] mb-[150px]">
      <div className="flex flex-col">
        <h1 className="flex flex-row justify-between items-center capitalize text-[20px]">
          Latest Blog Post & Articles
          <Link href="" className="flex flex-row items-center text-[13px] capitalize decoration-0">
            see all post <Eye size={13} className="ml-[10px]"/>
          </Link>
        </h1>
        <small className="w-[50%] mt-[20px] text-[13px]">
          Most children with Spina Bifida have Neurogenic bladder and bowel and
          no one wants them because of incontinence problems.
        </small>
      </div>

      <section className="flex flex-row flex-wrap justify-between mt-[5%]">
        <div className="flex flex-row w-[45%] mb-[50px]">
          <span className="flex flex-col justify-center items-center h-[200px] w-[300px] border-1 border-gray-200 rounded-[10px]">img</span>
          <span className="flex flex-col justify-between ml-[7%]">
            <small className="text-[13px] italic">Education</small>
            <h3 className="text-[20px] capitalize">Supporting Young People With Self-Acceptance</h3>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt..
            </p>
            <Link href="" className="flex flex-row items-center text-[11px] capitalize decoration-0">
              read more <ArrowRight size={13} className="ml-[10px]"/>
            </Link>
          </span>
        </div>

        <div className="flex flex-row w-[45%] mb-[50px]">
          <span className="flex flex-col justify-center items-center h-[200px] w-[300px] border-1 border-gray-200 rounded-[10px]">img</span>
          <span className="flex flex-col justify-between ml-[7%]">
            <small className="text-[13px] italic">Education</small>
            <h3 className="text-[20px] capitalize">Supporting Young People With Self-Acceptance</h3>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt..
            </p>
            <Link href="" className="flex flex-row items-center text-[11px] capitalize decoration-0">
              read more <ArrowRight size={13} className="ml-[10px]"/>
            </Link>
          </span>
        </div>

        <div className="flex flex-row w-[45%] mb-[50px]">
          <span className="flex flex-col justify-center items-center h-[200px] w-[300px] border-1 border-gray-200 rounded-[10px]">img</span>
          <span className="flex flex-col justify-between ml-[7%]">
            <small className="text-[13px] italic">Education</small>
            <h3 className="text-[20px] capitalize">Supporting Young People With Self-Acceptance</h3>
            <p className="text-[13px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt..
            </p>
            <Link href="" className="flex flex-row items-center text-[11px] capitalize decoration-0">
              read more <ArrowRight size={13} className="ml-[10px]"/>
            </Link>
          </span>
        </div>

        <div className="flex flex-row w-[45%] mb-[50px]">
          <span className="flex flex-col justify-center items-center h-[200px] w-[300px] border-1 border-gray-200 rounded-[10px]">img</span>
          <span className="flex flex-col justify-between ml-[7%]">
            <small className="text-[13px] italic">Education</small>
            <h3 className="text-[20px] capitalize">Supporting Young People With Self-Acceptance</h3>
            <p className="text-[13px]">
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
