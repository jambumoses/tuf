"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import $ from "jquery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LandingSection() {
  gsap.registerPlugin(ScrollTrigger);

  const [showService, setShowService] = useState(false);

  const variants = {};
  /*   function slideToggle(id) {
    $("#" + id).scrollLeft();
  }

  useEffect(() => {
    slideToggle("services-headers");
  }, []); */

  const products = [1, 2, 3];

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 10000,
  };

  const sliderRef = useRef();

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  /* gsap.to("#next-ico", {
    y: '10',
    repeat: -1,
    yoyo: true,
  }); */
  return (
    <MotionConfig transition={{ duration: 1.9 }}>
      <div className="flex flex-col m-[3%] h-[80vh]">
        <section className=" flex flex-col h-full">
          <div className="flex flex-row items-center justify-between h-[50%]">
            <span className="cursor-pointer">
              {" "}
              <ChevronLeft size={25} />{" "}
            </span>

            <motion.div
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0 0 0)" }}
              whileInView={{ clipPath: "inset(0 0 0 0)" }}
              exit={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
              className="flex flex-row w-[50%] h-full"
            >
              <Slider
                {...settings}
                style={{
                  display: "block",
                }}
                ref={sliderRef}
              >
                <div className="bg-amber-200">img1</div>
                <div>img2</div>
                <div>img3</div>
              </Slider>
            </motion.div>

            <span className="cursor-pointer" onClick={() => gotoNext()}>
              {" "}
              <ChevronRight size={25} />{" "}
            </span>
          </div>

          <div className="flex flex-row items-center justify-between h-[50%]">
            <motion.h1
              initial={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
              /* animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} */
              exit={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)", opacity: 0 }}
              whileInView={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              id="services-headers"
              className="capitalize w-[40%] text-[40px] font-semibold text-zinc-600"
            >
              Small Changes Make A Big Impact On People’s Lives
            </motion.h1>
            <motion.p
              variants={variants}
              initial={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
              /* animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} */
              exit={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)", opacity: 0 }}
              whileInView={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              className="flex flex-col w-[50%] text-[13px]"
            >
              Faraja’s Way envisions a Tanzania where children with Spina Bifida
              are empowered to lead independent and fulfilling lives, fully
              integrated into communities through access to quality education,
              comprehensive continence care and tailored independence
              training...
              <Link
                href={"/about"}
                role="button"
                className="flex flex-col items-center justify-center mt-5 bg-black text-white w-[100px] rounded-sm text-center capitalize h-[35px] hover:bg-black/80"
              >
                mission{" "}
              </Link>
            </motion.p>
          </div>
        </section>
      </div>
    </MotionConfig>
  );
}
