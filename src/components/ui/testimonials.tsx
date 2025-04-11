import { ReviewData } from "../../db/mockdata";
import ReviewCard from "../shared/card/reviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { HiArrowNarrowRight } from "react-icons/hi";
import { HiArrowNarrowLeft } from "react-icons/hi";
import { ArrowProps } from "../../types/react-slick";
import { motion } from "motion/react";

const Testimonials = () => {
  function SampleNextArrow({ onClick }: ArrowProps) {
    return (
      <div
        className="bg-primary carousel-arrow absolute p-3 md:p-5 right-0 sm:right-[20%] top-[10vw] cursor-pointer rounded-full bg-new text-center text-black z-20 group"
        onClick={onClick}
      >
        <HiArrowNarrowRight className=" text-white text-sm md:text-xl" />
      </div>
    );
  }
  function SamplePrevArrow({ onClick }: ArrowProps) {
    return (
      <div
        className="bg-primary carousel-arrow absolute z-20 p-3 md:p-5  left-0 sm:left-[20%] top-[10vw] cursor-pointer rounded-full bg-new text-center text-black group"
        onClick={onClick}
      >
        <HiArrowNarrowLeft className=" text-white text-sm md:text-xl" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    // fade: true,
    slidesToScroll: 1,
    waitForAnimate: false,
    speed: 1000,
    slidesToShow: 1,
    arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <div className="overflow-hidden mt-20">
        <div className="bg-[#e7cb95] w-full  h-[60vh] bg-bg lg:h-[80vh] mx-auto pt-10 md:pt-20">
          <div className="mb-6 ">
            <motion.p
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 100 }}
              transition={{ type: "spring", duration: 1 }}
              className="text-6xl text-new text-center font-ursb capitalize "
            >
              What our Clients Say?
            </motion.p>
          </div>
          <div className="relative">
            <div className="">
              <img
                className="absolute opacity-10 z-10 -top-[12vw] left-[50%] -translate-x-1/2 -rotate-10 "
                src="/homepage/options-coffee-cup.svg"
                alt=""
              />
            </div>
            <Slider className="" {...settings}>
              {ReviewData.map((key, index) => (
                <div className="relative" key={index}>
                  <ReviewCard
                    reviewDesc={key.reviewDesc}
                    reviewName={key.reviewName}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        <div className="w-full relative h-[50vh] md:h-[80vh] ">
          <iframe
            className="relative z-10"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2496.0274525468753!2d85.30010771138151!3d27.781566141068375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1f7f007e709b%3A0xd1396d5b6400cec3!2sBhairabi%20Kastha%20And%20Furniture%20Udhyog!5e0!3m2!1sen!2snp!4v1742025186384!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
