"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import arrow from "../../images/next-arrow.png"
import highlight1 from "../../images/highlight-1.webp"
import highlight2 from "../../images/highlight-2.webp"
import DHighlight1 from "../../images/d-highlight-1.webp"
import Star2 from "../../images/star.svg";
import Shine from "../../images/shine.svg";
import Dots from "../../images/four-dots.svg";
import Flower from "../../images/flower.svg";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {

    // separate refs now
    const prevRefMobile = useRef(null);
    const nextRefMobile = useRef(null);

    const prevRefDesktop = useRef(null);
    const nextRefDesktop = useRef(null);

    const starRef = useRef(null);
    const shineRef = useRef(null);
    const dotsRef = useRef(null);
    const flowerRef = useRef(null);

    const containerRef = useRef(null);

    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);

    const events = [highlight1, highlight2];

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to([starRef.current, shineRef.current], {
                rotate: 360,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

            gsap.to([dotsRef.current, flowerRef.current], {
                rotate: -360,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });
        });

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="bg-[#d9d9d964] py-4">
            <h1 className='text-white xl:hidden bg-blue text-center py-3 curve mx-auto w-[80%]'>event<span className='font-bold'> highlights</span></h1>

            {/* MOBILE + TABLET */}
            <div className="mx-auto mt-10 xl:hidden">

                <div className="mx-auto relative w-[280px] pointer-events-none">
                    <Image ref={starRef} src={Star2} alt="Star Icon" className="absolute -top-8 -right-10 will-change-transform" />
                    <Image ref={shineRef} src={Shine} alt="Shine Icon" className="absolute -top-8 -left-10 will-change-transform" />
                    <Image ref={dotsRef} src={Dots} alt="Dots Icon" className="absolute top-80 -right-4 will-change-transform" />
                    <Image ref={flowerRef} src={Flower} alt="Flower Icon" className="absolute top-60 -left-13 will-change-transform" />
                </div>

                <Swiper
                    modules={[Navigation]}
                    loop={false}
                    speed={600}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    centerInsufficientSlides={true}
                    navigation={{
                        prevEl: prevRefMobile.current,
                        nextEl: nextRefMobile.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRefMobile.current;
                        swiper.params.navigation.nextEl = nextRefMobile.current;
                    }}
                    onSwiper={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    className="w-full px-8"
                >
                    {events.map((logo, i) => (
                        <SwiperSlide key={i} className="!w-[280px] mr-2">
                            <div className="flex-center w-full">
                                <Image
                                    width={280}
                                    height={443}
                                    src={logo.src}
                                    alt="partner logo"
                                    className="object-contain"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex w-[300px] mt-4 mx-auto justify-between">
                    <button ref={prevRefMobile} className="cursor-pointer">
                        <Image src={arrow} alt="Prev Arrow" width={26} height={26} className={`rotate-180 ${isBeginning ? "opacity-40" : "opacity-100"}`} />
                    </button>
                    <button ref={nextRefMobile} className="cursor-pointer">
                        <Image src={arrow} alt="Next Arrow" width={26} height={26} className={`${isEnd ? "opacity-40" : "opacity-100"}`} />
                    </button>
                </div>
            </div>


            {/* DESKTOP */}
            <div className="hidden xl:block w-[85%] mx-auto mt-10 relative">

                <h1 className='text-white hidden xl:block bg-blue text-center py-3 mb-4 curve mr-auto w-[40%]'>event<span className='font-bold'> highlights</span></h1>

                <Swiper
                    modules={[Navigation]}
                    loop={false}
                    speed={600}
                    slidesPerView={1}
                    centeredSlides={true}
                    navigation={{
                        prevEl: prevRefDesktop.current,
                        nextEl: nextRefDesktop.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRefDesktop.current;
                        swiper.params.navigation.nextEl = nextRefDesktop.current;
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
                    <SwiperSlide className="flex justify-center">
                        <Image src={DHighlight1} width={1357} height={618} alt="desktop highlight 1" className="rounded-xl" />
                    </SwiperSlide>

                    <SwiperSlide className="flex justify-center">
                        <Image src={DHighlight1} width={1357} height={618} alt="desktop highlight 2" className="rounded-xl" />
                    </SwiperSlide>
                </Swiper>

                <div className="flex justify-between mt-6">
                    <button ref={prevRefDesktop}>
                        <Image src={arrow} alt="Prev Arrow" width={30} height={30} className={`rotate-180 cursor-pointer ${isBeginning ? "opacity-40" : "opacity-100"}`} />
                    </button>
                    <button ref={nextRefDesktop}>
                        <Image src={arrow} alt="Next Arrow" width={30} height={30} className={`cursor-pointer ${isEnd ? "opacity-40" : "opacity-100"}`} />
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Highlights;
