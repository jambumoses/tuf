import {
  Youtube,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Copyright,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex flex-col">
      <section className="flex flex-row mx-[5%] py-[30px]">
        <div className="flex flex-col w-[300px]">
          <span className="flex flex-col justify-center items-center w-[80%] h-[100px] b-[30px]">
            logo
          </span>
          <p className="text-[11px] mt-5 mr-6">
            The Urban Foundation envisions a world where children with Spina
            Bifida thrive in inclusive communities, empowered by education,
            quality continence care and essential life skills. We strive to
            break barriers, promote independence and foster a society that
            values and supports every child’s potential, ensuring they lead
            fulfilling lives.
          </p>
        </div>

        <div className="flex flex-row justify-between grow">
          <div className="flex flex-col items-center w-[24%]">
            <h1 className="block text-[25px] font-semibold capitalize text-left w-full text-gray-500">
              quick links
            </h1>
            <ul className="flex flex-col items-center w-full">
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  work with us
                </Link>
              </li>
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  who we are
                </Link>
              </li>
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  resources
                </Link>
              </li>
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  privacy policy
                </Link>
              </li>
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center w-[24%]">
            <h1 className="block text-[25px] font-semibold capitalize text-left w-full text-gray-500">
              explore
            </h1>
            <ul className="flex flex-col items-center w-full">
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  social posts
                </Link>
              </li>
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  blog posts
                </Link>
              </li>
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  contact us
                </Link>
              </li>
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  latest stories
                </Link>
              </li>
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  new campaigns
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center w-[24%]">
            <h1 className="block text-[25px] font-semibold capitalize text-left w-full text-gray-500">
              cantact us
            </h1>
            <ul className="flex flex-col items-center w-full">
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px]  decoration-0">
                  <i className="fa fa-envelope"></i> tuf.foundation00@gmail.com
                </Link>
              </li>
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  {" "}
                  <i className="fa fa-location"></i> P.O. Box 10101
                </Link>
              </li>
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  {" "}
                  <i className="fa fa-map"></i> mwanza Tanzania
                </Link>
              </li>
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  {" "}
                  <i className="fa fa-phone"></i> +255 745 244 043
                </Link>
              </li>
              <li className="block my-[10px] w-full text-left list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  <i className="fa fa-phone-square"></i> +255 683 241 899 / +255
                  767 307 197
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center w-[24%]">
            <h1 className="block text-[25px] font-semibold capitalize text-center w-full text-gray-500">
              connect with us
            </h1>
            <ul className="flex flex-col items-center  w-full">
              <li className="block my-[10px] w-full text-center list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  {" "}
                  events
                </Link>
              </li>
              <li className="block my-[10px] w-full text-center list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  {" "}
                  cause
                </Link>
              </li>
              <li className="block my-[10px] w-full text-center list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  {" "}
                  credits
                </Link>
              </li>
              <li className="block my-[10px] w-full text-center list-none">
                <Link href="" className="text-[12px] capitalize decoration-0">
                  {" "}
                  finanicals
                </Link>
              </li>
              <li className="block my-[10px] w-full text-center list-none">
                <Link
                  href=""
                  className="flex flex-row items-center justify-center bg-black text-white h-[35px] w-[150px] rounded-[30px] m-auto mt-[-10px] text-[12px] capitalize decoration-0"
                >
                  {" "}
                  donate today
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <nav className="flex flex-row justify-between items-center my-0 mx-[5%] h-[50px] border-t-1 border-gray-200 text-[13px]">
        <span className="capitalize flex flex-row items-center">
          2025 <Copyright size={13} className="mx-2" /> copy rights all rights
          reserved
          <Link href="" className="text-[13px] mx-3 inline-block">
            THE URBAN FOUNDATION (TUF)
          </Link>{" "}
          based in Tz
        </span>

        <span className="capitalize flex flex-row items-center">
          <Youtube size={15} className="m-2" />
          <Instagram size={15} className="m-2" />
          <Facebook size={15} className="m-2" />
          <Twitter size={16} className="m-2" />
          <Linkedin size={15} className="m-2" />
        </span>
      </nav>
    </footer>
  );
}
