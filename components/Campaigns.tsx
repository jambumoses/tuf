import { ArrowRight, Video } from "lucide-react";
import React from "react";

export default function Campaigns() {
  return (
    <section className="flex flex-col mx-[5%] my-0">
      <div className="flex flex-col items-center">
        <small className="text-[15px] uppercase">we need your help</small>
        <h1 className="max-sm:text-[25px] sm:text-[30px] md:text-[40px] lg:text-[40px] capitalize">
          featured campaigns
        </h1>
        <p className="text-[13px] w-[400px] text-center mx-0 my-[30px]">
          it&apos;s through mistakes that you actually can grow you get rid of
          everything that is not essential to makihave to get bad.
        </p>
      </div>

      <div className="flex max-sm:flex-col sm:flex-row sm:flex-wrap mg:flex-row lg:flex-row  sm:justify-evenly md:justify-evenly lg:justify-evenly items-center mx-0 my-[5%] mb-[10%] ">
        <CampaignsItem />
        <CampaignsItem />
        <CampaignsItem />
      </div>
    </section>
  );
}

export function CampaignsItem() {
  return (
    <div className="relative flex max-sm:flex-col sm:flex-col md:flex-row lg:flex-col items-center bg-white sm:w-full md:w-full lg:w-[370px] rounded-[50px] rounded-tl-[0px] rounded-br-[0px] m-5 ">
      <span className="absolute flex flex-col justify-center items-center max-sm:top-[20px] sm:top-[20px] md:top-auto md:bottom-[40px] lg:top-[20px] left-[40px] h-[20px] px-[20px] py-[0px] capitalize text-[11px] text-white rounded-[5px] bg-black">
        unsuccessful
      </span>
      <span className="absolute flex flex-col justify-center items-center max-sm:top-[20px] sm:top-[20px] md:top-auto lg:top-[20px] md:bottom-[40px] md:left-[170px] md:right-auto max-sm:right-[40px] sm:right-[40px] lg:right-[40px]  sm:left-[unset] lg:left-auto h-[20px] w-[30px] text-[11px] text-white rounded-[5px] bg-black">
        {" "}
        <Video size={14} />{" "}
      </span>
      <span className="absolute flex flex-col justify-center items-center bottom-[0px] right-[0px] h-[50px] w-[50px] text-white cursor-pointer bg-orange-400 rounded-tl-[35px]">
        {" "}
        <ArrowRight size={15} />{" "}
      </span>

      <div className="h-[250px] w-full bg-gray-200 rounded-tr-[50px] rounded-bl-[50px]"></div>
      <div className="flex flex-col">
        <div className="flex flex-row items-center justify-between mx-[40px] my-[20px]">
          <span className="flex flex-col justify-center">
            <small className="text-[11px] capitalize">current</small>
            <h4 className="text-[13px] font-semibold">$960</h4>
          </span>
          <h1 className="text-[30px] font-black">
            12 <sup>%</sup>
          </h1>
          <span className="flex flex-col justify-center">
            <small className="text-[11px] capitalize">target</small>
            <h4 className="text-[13px] font-semibold">$8,000</h4>
          </span>
        </div>
        <h1 className="my-[20px] mx-[40px] text-[20px] capitalize">
          minivan build match, double your gift, double your fund
        </h1>
        <p className="text-[13px] mx-[40px] my-[0px] mb-[50px]">
          &ldquo;Contribute to October&apos;s Minivan Build in Pahrump, and
          toward another build in 2020. An anonymous donor will match your gift,
          dollar for dollar...&rdquo;
        </p>
      </div>
    </div>
  );
}
