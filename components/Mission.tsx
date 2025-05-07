import { BookCheck, HeartPlus, LeafyGreen } from "lucide-react";
import React from "react";

export default function Mission() {
  return (
    <section className="flex flex-col items-center my-[180px]">
      <div className="flex flex-row w-[80%]">
        <div className="w-[50%]">
          <h1 className="text-[30px] capitalize">mission</h1>
          <p className="flex flex-col">
            <small className="w-[300px] my-5">
              Our aim is to ensure that children with Spina Bifida are properly
              included in the community through...
            </small>
            <div className="flex flex-row items-center justify-between w-[350px] mt-5">
              <span className="flex flex-col justify-center items-center bg-white w-[100px] h-[80px] rounded-[10px]">
                <BookCheck size={20} />
                <small className="text-[11px] px-5 mt-3 capitalize text-center">
                  education
                </small>
              </span>
              <span className="flex flex-col justify-center items-center bg-white w-[100px] h-[80px] rounded-[10px]">
                <HeartPlus size={20} />
                <small className="text-[11px] px-5 mt-3 capitalize text-center">
                  continence care
                </small>
              </span>
              <span className="flex flex-col justify-center items-center bg-white w-[100px] h-[80px] rounded-[10px]">
                <LeafyGreen size={20} />
                <small className="text-[11px] px-5 mt-3 capitalize text-center">
                  independence training
                </small>
              </span>
            </div>

            <div className=" flex flex-col mt-[20px]">
              <small className="font-semibold">As we care for our children, we also care for:</small>
              <span className="block text-[11px] mt-2 mr-8">
                Mother earth through our tree planting campaign. We intend to
                plant 50 trees per year.{" "}
              </span>
            </div>
          </p>
        </div>

        <div className="flex flex-col justify-center items-center w-[50%] bg-zinc-400/30 h-[full]"></div>
      </div>
    </section>
  );
}
