"use client";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import ponant from "../../images/ponant.webp"
import saudi from "../../images/saudi.webp"
import qatar from "../../images/qatar.webp"
import seychelles from "../../images/seychelles.webp"
import utah from "../../images/utah.webp"
import clubmed from "../../images/club-med.webp"
import arrow from "../../images/next-arrow.png"

// styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";
import Image from "next/image";

const PartnersCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const logos = [ponant, saudi, qatar, seychelles, utah, clubmed];

  return (
    <div className="w-full py-2 bg-pink relative">

      <button
        ref={prevRef}
        disabled={isBeginning}
        className={`absolute left-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer ${
          isBeginning ? "opacity-40" : "opacity-100"
        }`}
      >
        <Image src={arrow} alt="Prev Arrow" width={26} height={26} className="rotate-180" />
      </button>

      <button
        ref={nextRef}
        disabled={isEnd}
        className={`absolute right-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer ${
          isEnd ? "opacity-40" : "opacity-100"
        }`}
      >
        <Image src={arrow} alt="Next Arrow" width={26} height={26} />
      </button>

      <a className="absolute bottom-4 left-1/2 -translate-x-1/2 text-pink text-center z-20 underline" href="/">see more</a>

      <Swiper
        modules={[Navigation]}
        loop={false}
        speed={600}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="w-full"
      >
        {logos.map((logo, i) => (
          <SwiperSlide key={i}>
            <div className="flex-center bg-white h-[210px] w-full">
              <img
                src={logo.src}
                alt="partner logo"
                className="object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PartnersCarousel;
