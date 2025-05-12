import React from "react";

export default function ShortAbout() {
  return (
    <section className="flex max-sm:flex-col sm:flex-col md:flex-col lg:flex-row justify-between items-center mx-[5%] my-[10%] pb-[30px] mb-[150px]">
      <div className="flex flex-col justify-center items-center max-sm:w-full sm:w-full md:w-full lg:w-[45%] h-[400px] bg-gray-400">
        img
      </div>
      <div className="flex flex-col md:w-[80%] lg:w-[50%] max-sm:mt-[40px] sm:mt-[40px] md:mt-[40px]">
        <small className="text-orange-400 text-[15px] uppercase">
          our mission
        </small>
        <h1 className="text-[40px] capitalize font-bold">
          support people in extreme need
        </h1>
        <span className="text-[15px] my-[10px] mx-[0px] capitalize font-bold w-[60%]">
          our promise that your giving is doing what it&apos;s supposed to changing
          lives.
        </span>
        <p className="text-[12px] my-[20px] mx-[0px]">
          Our aim is to ensure that children with Spina Bifida are properly
          included in the community through education, continence care and
          independence training. As we care for our children, we also care for
          mother earth through our tree planting campaign. We intend to plant 50
          trees per year. Or
          <small className="block text-[12px] my-[20px] mx-[0px] text-inherit">
            An inclusive society where children and youngsters with disabilities
            can enjoy their rights in equal conditions and in dignified manner.
          </small>
        </p>

        <div className="flex flex-row">
          <span className="flex flex- flex-col justify-center items-center italic text-[10px] w-[50%]">signature</span>
          <span className="flex flex-row justify-center items-center w-[50%]">
            <span className="flex flex-col justify-center items-center h-[80px] w-[80px] text-[13px] bg-gray-400 rounded-[50%]">img</span>
            <span className="flex flex-col ml-[40px]">
              <h1 className="text-[15px] font-bold">jane j.</h1>
              <small className="text-[11px] text-gray-400 mt-[10px] capitalize">founder</small>
            </span>
          </span>
        </div>
      </div>
    </section>
  );
}
