import {
  BookCheck,
  Code,
  FerrisWheel,
  HelpCircle,
  Hospital,
  Origami,
  ThumbsUp,
  TreeDeciduous,
  Users,
} from "lucide-react";
import React from "react";

export default function GoalObjectives() {
  return (
    <section className="mx-[5%] mb-[100px]">
      <h1 className="text-[30px] capitalize max-sm:text-center sm:text-center md:text-left lg:text-left">
        goals & Core Objectives
      </h1>
      <div className="flex max-sm:flex-col sm:flex-col md:flex-row lg:flex-row justify-between items-center mt-8">
        <p className="text-[13px] max-sm:w-[50%] w-2/5 max-sm:text-center sm:text-center md:text-left lg:text-left max-sm:mb-[20px] sm:mb-[20px] md:mb-auto">
          Most children with Spina Bifida have Neurogenic bladder and bowel and
          no one wants them because of incontinence problems.{" "}
        </p>

        <p className="text-[13px] max-sm:w-[80%] sm:w-[80%] md:w-2/5 lg:w-2/5 max-sm:text-center sm:text-center md:text-left lg:text-left max-sm:mb-[20px] sm:mb-[20px] md:mb-auto">
          {" "}
          We reduce the psychological burden for parents of children with Spina
          Bifida and Hydrocephalus who are not able to find school for their
          children due to incontinence.
        </p>
      </div>

      <div className="grid max-sm:grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-zinc-100 rounded-[20px] p-10 mt-10">
        <span className="flex flex-row items-center justify-between bg-white w-full rounded-lg p-4 h-[100px] m-5 shadow">
          <div className="flex flex-col justify-center items-center w-[100px]  h-full">
            {" "}
            <ThumbsUp />{" "}
          </div>
          <div className="flex flex-col justify-center w-[95%] ml-2 text-[13px] h-full">
            Supporting children with Spina Bifida and Hydrocephalus to attain
            education.
          </div>
        </span>

        <span className="flex flex-row items-center justify-between bg-white w-full rounded-lg p-4 h-[100px] m-5 shadow">
          <div className="flex flex-col justify-center items-center w-[100px]  h-full">
            {" "}
            <FerrisWheel />{" "}
          </div>
          <div className="flex flex-col justify-center w-[95%] ml-2 text-[13px] h-full">
            Establishing a sense of unity and common identity among children
            with Spina Bifida and Hydrocephalus.
          </div>
        </span>

        <span className="flex flex-row items-center justify-between bg-white w-full rounded-lg p-4 h-[100px] m-5 shadow">
          <div className="flex flex-col justify-center items-center w-[100px]  h-full">
            {" "}
            <Hospital />{" "}
          </div>
          <div className="flex flex-col justify-center w-[95%] ml-2 text-[13px] h-full">
            construction private toilet to prevent unnecessary infections like
            UTIs.
          </div>
        </span>

        <span className="flex flex-row items-center justify-between bg-white w-full rounded-lg p-4 h-[100px] m-5 shadow">
          <div className="flex flex-col justify-center items-center w-[100px]  h-full">
            {" "}
            <BookCheck />{" "}
          </div>
          <div className="flex flex-col justify-center w-[95%] ml-2 text-[13px] h-full">
            Educational training. To offer valuable skills and subjects.
            Teachings include nutrition, tree planting and the use of fuel
            saving stoves.
          </div>
        </span>

        <span className="flex flex-row items-center justify-between bg-white w-full rounded-lg p-4 h-[100px] m-5 shadow">
          <div className="flex flex-col justify-center items-center w-[100px]  h-full">
            {" "}
            <Users />{" "}
          </div>
          <div className="flex flex-col justify-center w-[95%] ml-2 text-[13px] h-full">
            The team to lend their vast experience and guidance to students
            especially outside the classroom.
          </div>
        </span>

        <span className="flex flex-row items-center justify-between bg-white w-full rounded-lg p-4 h-[100px] m-5 shadow">
          <div className="flex flex-col justify-center items-center w-[100px]  h-full">
            {" "}
            <TreeDeciduous />{" "}
          </div>
          <div className="flex flex-col justify-center w-[95%] ml-2 text-[13px] h-full">
            Set up a home garden for the children, plant trees and contribute
            towards keeping the environment clean.
          </div>
        </span>

        <span className="flex flex-row items-center justify-between bg-white w-full rounded-lg p-4 h-[100px] m-5 shadow">
          <div className="flex flex-col justify-center items-center w-[100px]  h-full">
            {" "}
            <Code />{" "}
          </div>
          <div className="flex flex-col justify-center w-[95%] ml-2 text-[13px] h-full">
            Help pupils in their emotional and social development and inform the
            teachers about children concerns.
          </div>
        </span>

        <span className="flex flex-row items-center justify-between bg-white w-full rounded-lg p-4 h-[100px] m-5 shadow">
          <div className="flex flex-col justify-center items-center w-[100px]  h-full">
            {" "}
            <HelpCircle />{" "}
          </div>
          <div className="flex flex-col justify-center w-[95%] ml-2 text-[13px] h-full">
            Support teachers when pupils’ behaviour becomes challenging and help
            them to promote positive behaviour.
          </div>
        </span>

        <span className="flex flex-row items-center justify-between bg-white w-full rounded-lg p-4 h-[100px] m-5 shadow">
          <div className="flex flex-col justify-center items-center w-[100px]  h-full">
            {" "}
            <Origami />{" "}
          </div>
          <div className="flex flex-col justify-center w-[95%] ml-2 text-[13px] h-full">
            Organizing and attending social activities for pupils.
          </div>
        </span>
      </div>
    </section>
  );
}
