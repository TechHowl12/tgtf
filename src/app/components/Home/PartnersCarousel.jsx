"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import ponant from "../../images/ponant.webp";
import saudi from "../../images/saudi.webp";
import qatar from "../../images/qatar.webp";
import seychelles from "../../images/seychelles.webp";
import utah from "../../images/utah.webp";
import clubmed from "../../images/club-med.webp";
import arrow from "../../images/next-arrow.png";
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
  const [isMobile, setIsMobile] = useState(false);

  // detect mobile (<= 767px) and update on resize
  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  const partners = [saudi, ponant, qatar];
  const sponsors = [utah, clubmed, seychelles];

  const mobileSlides = [
    ...partners.map((logo) => ({ title: "Partners", logo })),
    ...sponsors.map((logo) => ({ title: "Sponsor", logo })),
  ];

  return (
    <div className="w-full py-20 px-16 sm:px-20 bg-grey relative">
      {/* Prev */}
      <button
        ref={prevRef}
        disabled={isBeginning}
        className={`absolute lg:hidden left-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer ${
          isBeginning ? "opacity-40" : "opacity-100"
        }`}
        aria-label="Previous"
      >
        <Image src={arrow} alt="Prev Arrow" width={26} height={26} className="rotate-180" />
      </button>

      {/* Next */}
      <button
        ref={nextRef}
        disabled={isEnd}
        className={`absolute lg:hidden right-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer ${
          isEnd ? "opacity-40" : "opacity-100"
        }`}
        aria-label="Next"
      >
        <Image src={arrow} alt="Next Arrow" width={26} height={26} />
      </button>

      <h1 className="text-pink absolute top-6 xl:top-5 text-center left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
        Featured <span className="font-bold">partners</span>
      </h1>
      {/* <a
        className="absolute bottom-4 sm:bottom-8 xl:bottom-7 left-1/2 -translate-x-1/2 bg-pink text-white rounded-xs py-0 uppercase px-2 z-20"
        href="/"
      >
        see more
      </a> */}

      <Swiper
        modules={[Navigation]}
        loop={false}
        speed={600}
        slidesPerView={1}
        spaceBetween={32}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 2 },
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSwiper={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className="w-full"
      >
        {isMobile ? (
          mobileSlides.map(({ title, logo }, i) => (
            <SwiperSlide key={`${title}-${i}`}>
              <div className="relative bg-white rounded-lg w-full h-[210px]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 text-pink text-sm">
                  {title}
                </div>
                <div className="h-full w-full flex items-center justify-center px-4 pt-6">
                  <Image src={logo} alt={`${title} Logo`} />
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          <>
            <SwiperSlide>
              <div className="relative bg-white rounded-lg w-full h-[210px] lg:h-40">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 text-pink text-sm">
                  Partners
                </div>
                <div className="h-full w-full flex items-center justify-center gap-10 xl:gap-20 px-4 pt-6">
                  <Image src={saudi} alt="Saudi Logo" className="" />
                  <Image src={ponant} alt="Ponant Logo" className="" />
                  <Image src={qatar} alt="Qatar Logo" className="" />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative bg-white rounded-lg w-full h-[210px] lg:h-40">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 text-pink text-sm">
                  Sponsors
                </div>
                <div className="h-full w-full flex items-center justify-center gap-10 xl:gap-20 px-4 pt-6">
                  <Image src={utah} alt="Utah Logo" className="" />
                  <Image src={clubmed} alt="Club Med Logo" className="" />
                  <Image src={seychelles} alt="Seychelles Logo" className="" />
                </div>
              </div>
            </SwiperSlide>
          </>
        )}
      </Swiper>
    </div>
  );
};

export default PartnersCarousel;
