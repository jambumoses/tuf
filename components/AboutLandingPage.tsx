import Link from "next/link";
import React from "react";

export default function AboutLandingPage() {
  return (
    <section className="flex flex-row items-center h-[80vh] max-sm:px-0 lg:px-[5%] w-full">
      <div className="max-sm:w-full sm:w-full lg:w-[50%] flex flex-col justify-center items-center h-[80%] ">
        <h1 className="font-extralight text-zinc-600 capitalize text-[25px] w-[400px] text-left">
          An inclusive society where children and youngsters with disabilities
          can enjoy their rights in equal conditions and in dignified manner.
        </h1>
        <Link
          href={"/donation"}
          className="w-[400px] text-[13px] underline text-left mt-4 capitalize"
        >
          make your contributions today
        </Link>
      </div>
      <div className="max-sm:hidden sm:hidden lg:flex w-[50%] flex-col justify-center items-center h-[80%] bg-zinc-300 rounded-lg">
        img
      </div>
    </section>
  );
}
