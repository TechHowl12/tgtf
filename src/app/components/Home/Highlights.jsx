"use client";
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { events } from "../Home/Event";
import arrow from "../../images/next-arrow.png";
import Star2 from "../../images/star.svg";
import Shine from "../../images/shine.svg";
import Dots from "../../images/four-dots.svg";
import Flower from "../../images/flower.svg";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
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

    const [mobileSwiper, setMobileSwiper] = useState(null);
    const [desktopSwiper, setDesktopSwiper] = useState(null);

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

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
                },
            });

            gsap.to([dotsRef.current, flowerRef.current], {
                rotate: -360,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    // Attach navigation to MOBILE swiper once refs are ready
    useEffect(() => {
        if (
            mobileSwiper &&
            prevRefMobile.current &&
            nextRefMobile.current
        ) {
            mobileSwiper.params.navigation.prevEl = prevRefMobile.current;
            mobileSwiper.params.navigation.nextEl = nextRefMobile.current;

            mobileSwiper.navigation.init();
            mobileSwiper.navigation.update();
        }
    }, [mobileSwiper]);

    // Attach navigation to DESKTOP swiper once refs are ready
    useEffect(() => {
        if (
            desktopSwiper &&
            prevRefDesktop.current &&
            nextRefDesktop.current
        ) {
            desktopSwiper.params.navigation.prevEl = prevRefDesktop.current;
            desktopSwiper.params.navigation.nextEl = nextRefDesktop.current;

            desktopSwiper.navigation.init();
            desktopSwiper.navigation.update();
        }
    }, [desktopSwiper]);

    return (
        <div ref={containerRef} className="bg-[#d9d9d964] py-4">
            {/* MOBILE HEADING */}
            <h1 className="text-white md:hidden bg-blue text-center py-3 curve mx-auto w-[80%]">
                2025<span className="font-bold"> highlights</span>
            </h1>

            {/* MOBILE / TABLET */}
            <div className="mx-auto mt-10 md:hidden">
                <div className="mx-auto relative w-[280px] pointer-events-none">
                    <Image
                        ref={starRef}
                        src={Star2}
                        alt="Star Icon"
                        className="absolute -top-8 -right-10 will-change-transform"
                    />
                    <Image
                        ref={shineRef}
                        src={Shine}
                        alt="Shine Icon"
                        className="absolute -top-8 -left-10 will-change-transform"
                    />
                    <Image
                        ref={dotsRef}
                        src={Dots}
                        alt="Dots Icon"
                        className="absolute top-80 -right-4 will-change-transform"
                    />
                    <Image
                        ref={flowerRef}
                        src={Flower}
                        alt="Flower Icon"
                        className="absolute top-60 -left-13 will-change-transform"
                    />
                </div>

                <Swiper
                    modules={[Navigation]}
                    loop={false}
                    speed={600}
                    slidesPerView={"auto"}
                    centeredSlides={true}
                    navigation={{
                        prevEl: prevRefMobile.current,
                        nextEl: nextRefMobile.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRefMobile.current;
                        swiper.params.navigation.nextEl = nextRefMobile.current;
                    }}
                    onSwiper={(swiper) => {
                        setMobileSwiper(swiper);
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    className="w-full px-8"
                >
                    {events.map((ev) => (
                        <SwiperSlide key={ev.id} className="!w-[280px] mr-2">
                            <div className="flex-center flex-col w-full">
                                <Image
                                    width={280}
                                    height={443}
                                    src={ev.mobileImg}
                                    alt={ev.title}
                                    className="object-cover w-[280px] h-[330px] curve cursor-pointer"
                                    onClick={() => {
                                        setLightboxIndex(events.indexOf(ev));
                                        setLightboxOpen(true);
                                    }}
                                />
                                <div className="bg-darkgrey mx-auto w-full mt-6 curve py-4 px-4 h-[230px] flex flex-col justify-between overflow-hidden">
                                    <div>
                                        <small className="inline-block underline decoration-black underline-offset-2 font-semibold text-black">
                                            {ev.subtitle}
                                        </small>
                                        <small className="text-blue font-semibold block leading-5">
                                            {ev.title}
                                        </small>
                                        <small className="tracking-wider block mt-1">
                                            {ev.tag}
                                        </small>
                                    </div>
                                    <p className={`${ev.id === "visit-saudi-x-im-wholesome" ? "mb-6 md:mt-2" : "mt-2"}`}>
                                    {ev.byline}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* MOBILE NAV */}
                <div className="flex w-[300px] mt-4 mx-auto justify-between">
                    <button ref={prevRefMobile} className="cursor-pointer">
                        <Image
                            src={arrow}
                            alt="Prev Arrow"
                            width={26}
                            height={26}
                            className={`rotate-180 ${isBeginning ? "opacity-40" : "opacity-100"
                                }`}
                        />
                    </button>
                    <button ref={nextRefMobile} className="cursor-pointer">
                        <Image
                            src={arrow}
                            alt="Next Arrow"
                            width={26}
                            height={26}
                            className={`${isEnd ? "opacity-40" : "opacity-100"}`}
                        />
                    </button>
                </div>
            </div>

            {/* DESKTOP */}
            <div className="hidden md:block mx-28 xl:mx-20 2xl:mx-32 mt-10 relative">
                <h1 className="text-white hidden md:block bg-blue text-center py-3 mb-6 curve mr-auto md:w-[62%] xl:w-[40%]">
                    2025<span className="font-bold"> highlights</span>
                </h1>

                <Swiper
                    modules={[Navigation]}
                    loop={false}
                    speed={600}
                    slidesPerView={1}
                    spaceBetween={16}
                    breakpoints={{
                        768: { slidesPerView: 1, spaceBetween: 1 },
                        1280: { slidesPerView: 2, spaceBetween: 30 },
                    }}
                    navigation={{
                        prevEl: prevRefDesktop.current,
                        nextEl: nextRefDesktop.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRefDesktop.current;
                        swiper.params.navigation.nextEl = nextRefDesktop.current;
                    }}
                    onSwiper={(swiper) => {
                        setDesktopSwiper(swiper);
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    onSlideChange={(swiper) => {
                        setIsBeginning(swiper.isBeginning);
                        setIsEnd(swiper.isEnd);
                    }}
                    className="w-full flex justify-center"
                >
                    {events.map((ev) => (
                        <SwiperSlide key={`desktop-${ev.id}`}>
                            <Image
                                src={ev.desktopImg || ev.mobileImg}
                                width={665}
                                height={618}
                                alt={ev.title}
                                className="rounded-xl w-full xl:max-w-[665px] h-[550px] object-cover cursor-pointer"
                                onClick={() => {
                                    setLightboxIndex(events.indexOf(ev));
                                    setLightboxOpen(true);
                                }}
                            />
                            <div className="bg-darkgrey w-full xl:max-w-[665px] mt-6 curve py-6 px-6 flex gap-x-4 items-stretch h-[150px] overflow-hidden">
                                <div className="w-3/6 ">
                                    <small className="inline-block underline">
                                        {ev.subtitle}
                                    </small>
                                    <small className="text-blue font-semibold text-lg block leading-5">
                                        {ev.title}
                                    </small>
                                    <small className="tracking-wider block mt-3">
                                        {ev.tag}
                                    </small>
                                </div>
                                <p className="w-3/6 ">{ev.byline}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* DESKTOP NAV — LEFT / RIGHT */}
                <button
                    ref={prevRefDesktop}
                    className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 z-30"
                >
                    <Image
                        src={arrow}
                        alt="Prev Arrow"
                        width={30}
                        height={30}
                        className={`rotate-180 cursor-pointer ${isBeginning ? "opacity-40" : "opacity-100"
                            }`}
                    />
                </button>

                <button
                    ref={nextRefDesktop}
                    className="hidden md:flex absolute md:-right-14 2xl:-right-14 top-1/2 -translate-y-1/2 z-30"
                >
                    <Image
                        src={arrow}
                        alt="Next Arrow"
                        width={30}
                        height={30}
                        className={`cursor-pointer ${isEnd ? "opacity-40" : "opacity-100"
                            }`}
                    />
                </button>
            </div>
            <Lightbox
                open={lightboxOpen}
                close={() => setLightboxOpen(false)}
                index={lightboxIndex}
                slides={events.map((ev) => ({
                    src: (ev.desktopImg?.src || ev.mobileImg?.src) || ev.desktopImg || ev.mobileImg,
                    alt: ev.title,
                }))}
            />
        </div>
    );
};

export default Highlights;
