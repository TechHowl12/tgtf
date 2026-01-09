"use client";
import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import clubmed from "../../images/club-med.webp";
// import immersive from "../../images/immersive.png";
import thailand from "../../images/thailand.png";
import kenya from "../../images/kenya.png";
import CGH from "../../images/CGH.png";
// import kohventure from "../../images/kohventure.png";
import ana from "../../images/ana.png";
// import latitude from "../../images/latitude.png";
import arrow from "../../images/next-arrow.png";
import partnersDesktop from "../../images/partners-desktop.png"; // renamed to avoid name clash
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const PartnersCarousel = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 767px)");

    const handler = (e) => {
      setIsMobile(e.matches);
    };

    // initial value
    setIsMobile(mq.matches);

    if (mq.addEventListener) mq.addEventListener("change", handler);
    else mq.addListener(handler);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", handler);
      else mq.removeListener(handler);
    };
  }, []);

  // category groups
  const destinationPartners = [thailand, ana, kenya];
  const featuredPartners = [clubmed, CGH];
  // const partnerLogos = [latitude, kohventure, immersive];

  // mobile: one logo per slide with title
  const mobileSlides = [
    ...destinationPartners.map((logo) => ({ title: "Destination partner", logo })),
    ...featuredPartners.map((logo) => ({ title: "Featured partner", logo })),
    // ...partnerLogos.map((logo) => ({ title: "Partner", logo })),
  ];

  return (
    <div className="w-full pt-20 pb-10 lg:py-0 lg:pt-20 lg:pb-7 md:px-16 lg:px-10 sm:px-20 bg-grey relative">


      <h1 className="text-pink absolute top-6 xl:top-5 text-center left-1/2 -translate-x-1/2 z-20 whitespace-nowrap">
        <span className="font-bold">partners</span>
      </h1>

      {/* SLIDER: visible only below 1024px */}
      <div className="lg:hidden relative">

        {/* Prev (only for swiper, and only visible <1024px because of lg:hidden below) */}
        <button
          ref={prevRef}
          disabled={isBeginning}
          className={`absolute lg:hidden left-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer ${isBeginning ? "opacity-40" : "opacity-100"
            }`}
          aria-label="Previous"
        >
          <Image src={arrow} alt="Prev Arrow" width={26} height={26} className="rotate-180" />
        </button>

        {/* Next */}
        <button
          ref={nextRef}
          disabled={isEnd}
          className={`absolute lg:hidden max-[600px]:right-2 right-5 top-1/2 -translate-y-1/2 z-20 cursor-pointer ${isEnd ? "opacity-40" : "opacity-100"
            }`}
          aria-label="Next"
        >
          <Image src={arrow} alt="Next Arrow" width={26} height={26} />
        </button>

        <Swiper
          modules={[Navigation, Autoplay]}
          loop={false}
          speed={600}
          autoplay={{
            delay: 2000,         // 3 sec per slide
            disableOnInteraction: false,  // keep autoplay even after user drags
          }}
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
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 text-pink text-sm whitespace-nowrap">
                    {title}
                  </div>
                  <div className="h-full w-full flex items-center justify-center px-4 pt-6">
                    <Image width={200} height={80} src={logo} alt={`${title} Logo`} />
                  </div>
                </div>
              </SwiperSlide>
            ))
          ) : (
            <>
              <SwiperSlide>
                <div className="relative bg-white rounded-lg w-full h-[210px] lg:h-40">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 text-pink text-sm">
                    Destination partners
                  </div>
                  <div className="h-full w-full flex items-center justify-center gap-10 xl:gap-20 px-4 pt-6">
                    {destinationPartners.map((logo, i) => (
                      <Image width={150} height={100} key={i} src={logo} alt="Destination Partner Logo" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>

              {/* Featured partners */}
              <SwiperSlide>
                <div className="relative bg-white rounded-lg w-full h-[210px] lg:h-40">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 text-pink text-sm">
                    partner
                  </div>
                  <div className="h-full w-full flex items-center justify-center gap-10 xl:gap-20 px-4 pt-6">
                    {featuredPartners.map((logo, i) => (
                      <Image width={250} height={50} key={i} src={logo} alt="Featured Partner Logo" />
                    ))}
                  </div>
                </div>
              </SwiperSlide>

              {/* Partners */}
              {/* <SwiperSlide>
                <div className="relative bg-white rounded-lg w-full h-[210px] lg:h-40">
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 text-pink text-sm">
                    Partners
                  </div>
                  <div className="h-full w-full flex items-center justify-center gap-10 xl:gap-20 px-4 pt-6">
                    {partnerLogos.map((logo, i) => (
                      <Image width={150} height={50} key={i} src={logo} alt="Partner Logo" />
                    ))}
                  </div>
                </div>
              </SwiperSlide> */}
            </>
          )}
        </Swiper>
      </div>

      <Image
        width={1280}
        height={100}
        src={partnersDesktop}
        alt="Partners strip"
        className="w-full hidden lg:block"
      />
    </div>
  );
};

export default PartnersCarousel;
