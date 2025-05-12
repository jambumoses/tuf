import { Plus } from "lucide-react";
import React from "react";

export default function Counts() {
  return (
    <section className="max-sm:mx-[3%] sm:mx-0 md:mx-[3%] flex flex-col justify-center items-center mb-[150px]">
      <h1 className="font-bold capitalize text-[30px] text-zinc-500 mb-[20px]">
        Numbers in Operations
      </h1>
      <p className="text-[13px] w-[400px] text-center">
        This project supports children with Spina Bifida and Hydrocephalus to
        attain social continence and education.
      </p>
      <div className="flex flex-row justify-center items-center mt-[20px]">
        <span className="flex flex-col justify-center items-center my-5 mx-[30px]">
          <small className="flex flex-row justify-center items-center font-light text-[25px]">
            325
            <Plus size={15} className="ml-1" />
          </small>
          <h1 className="text-[20px] font-medium text-orange-400 capitalize">
            children
          </h1>
        </span>

        <span className="flex flex-col justify-center items-center my-5 mx-[30px]">
          <small className="flex flex-row justify-center items-center font-light text-[25px]">
            325
            <Plus size={15} className="ml-1" />
          </small>
          <h1 className="text-[20px] font-medium text-orange-400 capitalize">
            adults
          </h1>
        </span>

        <span className="flex flex-col justify-center items-center my-5 mx-[30px]">
          <small className="flex flex-row justify-center items-center font-light text-[25px]">
            325
            <Plus size={15} className="ml-1" />
          </small>
          <h1 className="text-[20px] font-medium text-orange-400 capitalize">
            infants
          </h1>
        </span>
      </div>

      {/* banner */}
      <div className="bg-zinc-300 w-full h-[200px] mt-[50px] md:rounded-lg"></div>
    </section>
  );
}
