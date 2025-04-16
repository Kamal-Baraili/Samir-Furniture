import Slider from "react-slick";
import { motion } from "motion/react";

const Hero = () => {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "easeInOut",
    arrows: false,
    waitForAnimate: false,
  };
  return (
    <>
      <div className="h-[79vh] relative">
        <div className="">
          <Slider {...settings}>
            <img
              className="w-full h-[75vh] object-cover"
              src="/homepage/hero-img1.jpg"
              alt=""
            />
            <img
              className="w-full h-[75vh] object-cover"
              src="/homepage/hero-img2.jpg"
              alt=""
            />
            <img
              className="w-full h-[75vh] object-cover"
              src="/homepage/hero-img3.jpg"
              alt=""
            />
          </Slider>
        </div>
        <div className="w-full h-[75vh] bg-[black] opacity-60 absolute inset-0"></div>
        <div className="w-full h-[75vh] absolute inset-0 flex justify-center items-center">
          <div className="flex flex-col gap-10">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ type: "spring" }}
              className="text-secondary text-4xl md:text-6xl lg:text-8xl text-center"
            >
              Elevate Your Space
            </motion.h1>
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ type: "linear", delay: 1 }}
              className="text-white text-center text-md md:text-xl lg:text-2xl"
            >
              Choose a piece of decor as your need
            </motion.p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
