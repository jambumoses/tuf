"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { motion, MotionConfig, Variants } from "framer-motion";
import $ from "jquery";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
/* import Slider from "react-slick"; */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function LandingSection() {
  gsap.registerPlugin(ScrollTrigger);

  /*  const [showService, setShowService] = useState(false); */

  const variants: Variants = {};
  function slideToggle(id: string) {
    $("#" + id).scrollLeft();
  }

  useEffect(() => {
    slideToggle("services-headers");
  }, []);

  /* const products = [1, 2, 3]; */

  /*   const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 10000,
  }; */

  /* const sliderRef = useRef(); */

  /*  const gotoNext = () => {
    sliderRef.current.slickNext();
  }; */

  /* gsap.to("#next-ico", {
    y: '10',
    repeat: -1,
    yoyo: true,
  }); */
  return (
    <MotionConfig transition={{ duration: 1.9 }}>
      <div className="flex flex-col max-sm:mx-2 md:m-[3%] lg:m-[3%] max-sm:h-auto sm:h-auto md:h-[80vh] lg:h-[80vh] max-sm:mb-[100px] sm:mb-[100px] lg:mb-[100px]">
        <section className=" flex flex-col h-full">
          <div className="flex flex-row items-center justify-between max-sm:h-[80vh] sm:h-[80vh] md:h-[50%] lg:h-[50%]">
            <span className="cursor-pointer">
              {" "}
              <ChevronLeft size={25} />{" "}
            </span>

            <div>banners</div>

            {/* <motion.div
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
            </motion.div> */}

            <span className="cursor-pointer">
              {" "}
              <ChevronRight size={25} />{" "}
            </span>
          </div>

          <div className="flex max-sm:flex-col sm:flex-col md:flex-row lg:flex-row md:lg:items-center lg:items-center justify-between h-[50%] max-sm:mx-[3%] sm:mx-[3%] md:mx-auto">
            <motion.h1
              initial={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)" }}
              /* animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }} */
              exit={{ clipPath: "polygon(0 0, 0 0, 0 0, 0 0)", opacity: 0 }}
              whileInView={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
              }}
              id="services-headers"
              className="capitalize max-sm:w-full sm:w-[70%] md:w-[40%] lg:w-[40%] max-sm:text-[30px] sm:text-[30px] lg:text-[35px] xl:text-[40px] font-semibold text-zinc-600"
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
              className="flex flex-col max-sm:w-[90%] sm:w-[90%] md:w-[50%] lg:w-[50%] text-[13px] max-sm:mt-[20px] sm:mt-[20px]"
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
