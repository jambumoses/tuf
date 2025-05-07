import React from "react";

export default function Vision() {
  return (
    <section className="m-[5%] bg-zinc-100 rounded-[20px] p-10">
      <div className="flex flex-row justify-center items-center mb-[100px]">
        <p className="text-[13px] w-[60%] text-center">
          The Urban Foundation envisions a Tanzania where children with Spina
          Bifida are empowered to lead independent and fulfilling lives, fully
          integrated into communities through access to quality education, <br />
          ... comprehensive continence care and tailored independence training ...
        </p>
      </div>

      <div className="text-[13px] w-[50%]">
        <h1 className="uppercase my-[3%] text-[40px] font-semibold">
          our Vision
        </h1>
        The Urban Foundation envisions a world where children with Spina Bifida
        thrive in inclusive communities, empowered by education, quality
        continence care and essential life skills. We strive to break barriers,
        promote independence and foster a society that values and supports every
        child’s potential, ensuring they lead fulfilling lives.
      </div>

      <div className="mt-[5%]">
        <small className="capitalize ml-2 ">we emphasizes:</small>
        <hr className="text-zinc-300 mx-2"/>
        <div className="flex flex-row mt-[10px] justify-between">
          <div className="m-[10px] w-[350px]">
            <h4 className="capitalize text-[20px]">
              Empowerment and independence
            </h4>
            <p className="text-[13px] mt-3">
              Highlighting the goal of enabling children to lead self-sufficient
              lives.
            </p>
          </div>

          <div className="m-[10px] w-[350px]">
            <h4 className="capitalize text-[20px]">Community inclusion: </h4>
            <p className="text-[13px] mt-3">
              Stressing the importance of societal integration and acceptance.
            </p>
          </div>

          <div className="m-[10px] w-[350px]">
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
