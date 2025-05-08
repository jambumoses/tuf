import React from "react";
import {
  Youtube,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Copyright,
  ArrowRight,
  Map,
  Phone,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function ContactForm() {
  return (
    <section className="flex flex-row justify-between rounded-sm my-[5%]">
      <form className="w-[45%] flex flex-col">
        <div className="grid grid-cols-2 gap-4 mb-5">
          <span className="flex flex-col">
            <label
              htmlFor=""
              className="text-[13px] text-zinc-600 font-medium capitalize mb-4"
            >
              Your Name *
            </label>
            <input
              className="w-full bg-white border-1 rounded-lg p-3 text-[12px] outline-none"
              type="text"
              placeholder="Ex. John Doe"
            />
          </span>
          <span className="flex flex-col">
            <label
              htmlFor=""
              className="text-[13px] text-zinc-600 font-medium capitalize mb-4"
            >
              Email *
            </label>
            <input
              type="text"
              placeholder="example@gmail.com"
              className="w-full bg-white border-1 rounded-lg p-3 text-[12px] outline-none"
            />
          </span>
        </div>
        <span className="flex flex-col mb-5">
          <label
            htmlFor=""
            className="text-[13px] text-zinc-600 font-medium capitalize mb-4"
          >
            subject *
          </label>
          <input
            type="text"
            placeholder="Enter Subject"
            className="bg-white border-1 rounded-lg p-3 text-[12px] outline-none"
          />
        </span>
        <span className="flex flex-col mb-5">
          <label
            htmlFor=""
            className="text-[13px] text-zinc-600 font-medium capitalize mb-4"
          >
            your message *
          </label>
          <textarea
            name=""
            id=""
            className="min-h-[200px] max-h-[200px] bg-white border-1 rounded-lg p-3 text-[12px] outline-none"
            placeholder="Enter Here ..."
          ></textarea>
        </span>

        <div className="flex flex-row items-center justify-between w-[220px] rounded-[30px] bg-white p-1">
          <span className="flex flex-col justify-center items-center w-[40px] h-[40px] rounded-full bg-amber-400">
            <ArrowRight size={17} className="text-white" />
          </span>
          <button
            type="submit"
            className="flex flex-col justify-center items-center h-full text-[13px] font-medium px-[20px] ml-5 rounded-[30px] bg-amber-400 text-white capitalize cursor-pointer"
          >
            send message
          </button>
        </div>
      </form>

      <div className="w-[50%] flex flex-col items-center justify-center">
        <div className="bg-white rounded-lg p-5">
          <span className="flex flex-col">
            <h1 className="text-[15px] my-4 capitalize font-medium text-zinc-500">
              Address
            </h1>
            <span className="flex flex-row">
              <span className="w-[70px] flex flex-col items-center justify-center">
                <Map />
              </span>
              <p className="text-[12px] capitalize">
                mwanza <br />
                Tanzania
              </p>
            </span>
          </span>

          <span className="mt-5">
            <h1 className="text-[15px] my-4 capitalize font-medium text-zinc-500">
              contact
            </h1>
            <span className="flex flex-row">
              <span className="w-[70px] flex flex-col items-center justify-center">
                <Phone />
              </span>
              <div className="flex flex-col text-[12px] capitalize">
                <span>+255 683 241 899 /</span>
                <span> +255 767 307 197</span>
              </div>
            </span>

            <span className="flex flex-row mt-5">
              <span className="w-[70px] flex flex-col items-center justify-center">
                <Mail />
              </span>
              <div className="text-[12px]">
                <span>tuf.foundation00@gmail.com</span>
              </div>
            </span>
          </span>

          <span className="flex flex-col mt-5">
            <h1 className="text-[15px] my-4 capitalize font-medium text-zinc-500">
              stay connected
            </h1>
            <div className="flex flex-row">
              <Link
                href=""
                className="flex flex-col rounded-full items-center justify-center h-[40px] w-[40px] bg-orange-400 m-2"
              >
                <Youtube size={15} className="text-white" />
              </Link>
              <Link
                href=""
                className="flex flex-col rounded-full items-center justify-center h-[40px] w-[40px] bg-orange-400 m-2"
              >
                <Instagram size={15} className="text-white" />
              </Link>
              <Link
                href=""
                className="flex flex-col rounded-full items-center justify-center h-[40px] w-[40px] bg-orange-400 m-2"
              >
                <Facebook size={15} className="text-white" />
              </Link>
              <Link
                href=""
                className="flex flex-col rounded-full items-center justify-center h-[40px] w-[40px] bg-orange-400 m-2"
              >
                <Twitter size={16} className="text-white" />
              </Link>
              <Link
                href=""
                className="flex flex-col rounded-full items-center justify-center h-[40px] w-[40px] bg-orange-400 m-2"
              >
                <Linkedin size={15} className="text-white" />
              </Link>
            </div>
          </span>
        </div>
      </div>
    </section>
  );
}
