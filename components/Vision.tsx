import React from "react";

export default function Vision() {
  return (
    <section className="m-[5%] max-sm:mx-0 bg-zinc-100 sm:rounded-0 md:rounded-[20px] p-10">
      <div className="flex flex-row justify-center items-center mb-[100px]">
        <p className="text-[13px] lg:w-[60%] text-center">
          Faraja’s Way envisions a Tanzania where children with Spina Bifida are
          empowered to lead independent and fulfilling lives, fully integrated
          into communities through access to quality education, <br />
          ... comprehensive continence care and tailored independence training
          ...
        </p>
      </div>

      <div className="text-[13px] max-sm:w-full lg:w-[70%] max-sm:mb-[40px]">
        <h1 className="uppercase my-[3%] max-sm:text-[25px] sm:text-[25px] lg:text-[40px] font-semibold">
          our Vision
        </h1>
        Faraja’s Way envisions a world where children with Spina Bifida thrive
        in inclusive communities, empowered by education, quality continence
        care and essential life skills. We strive to break barriers, promote
        independence and foster a society that values and supports every child’s
        potential, ensuring they lead fulfilling lives.
      </div>

      <div className="mt-[5%]">
        <small className="capitalize ml-2 ">we emphasizes:</small>
        <hr className="text-zinc-300 mx-2" />
        <div className="grid max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-[10px] ">
          <div className="m-[10px] max-sm:w-full sm:w-full md:w-full lg:w-full xl:w-[350px]">
            <h4 className="capitalize text-[20px]">
              Empowerment and independence
            </h4>
            <p className="text-[13px] mt-3">
              Highlighting the goal of enabling children to lead self-sufficient
              lives.
            </p>
          </div>

          <div className="m-[10px] max-sm:w-full sm:w-full md:w-full lg:w-full xl:w-[350px]">
            <h4 className="capitalize text-[20px]">Community inclusion: </h4>
            <p className="text-[13px] mt-3">
              Stressing the importance of societal integration and acceptance.
            </p>
          </div>

          <div className="m-[10px] max-sm:w-full sm:w-full md:w-full lg:w-full xl:w-[350px]">
            <h4 className="capitalize text-[20px]">Comprehensive support:</h4>
            <p className="text-[13px] mt-3">
              Focusing on the specific areas of education, healthcare and life
              skills training that are central to our mission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
