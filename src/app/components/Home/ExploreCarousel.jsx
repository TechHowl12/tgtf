"use client";
import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import Image from "next/image";
import Explore from "../../images/explore.webp";
import Engage from "../../images/engage.webp";
import Plan from "../../images/plan.webp";
import Book from "../../images/book.webp";
import DExplore from "../../images/d-explore.webp";
import DEngage from "../../images/d-engage.webp";
import DPlan from "../../images/d-plan.webp";
import DBook from "../../images/d-book.webp";
import Star2 from "../../images/star.svg";
import Shine from "../../images/shine.svg";
import Dots from "../../images/four-dots.svg";
import Flower from "../../images/flower.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ExploreCarousel = () => {

    const cards = [Explore, Engage, Plan, Book, Explore, Engage, Plan, Book];
    const desktopCards = [
        {
            img: DExplore,
            tagText: "EXPLORE",
            tagBg: "bg-pink",
            desc: "some of the most sought after travel destinations, cultural, and cuisines from around the world.",
        },
        {
            img: DEngage,
            tagText: "ENGAGE",
            tagBg: "bg-blue",
            desc: "with like-minded travellers and experts for information and inspiration you won’t find anywhere else. ",
        },
        {
            img: DPlan,
            tagText: "PLAN",
            tagBg: "bg-orange",
            desc: "to turn your ideas into itineraries with help from the country’s best travel planners.",
        },
        {
            img: DBook,
            tagText: "BOOK",
            tagBg: "bg-red",
            desc: "and seal your next travel experience with exclusive offers and unbeatable value.",
        },
    ];

    const starRef = useRef(null);
    const shineRef = useRef(null);
    const dotsRef = useRef(null);
    const flowerRef = useRef(null);

    const rotatediv = useRef(null);

    useEffect(() => {

        // disable animation on desktop
        if (window.innerWidth >= 1024) return;

        const ctx = gsap.context(() => {

            gsap.to([starRef.current, shineRef.current], {
                rotate: 360,
                ease: "none",
                scrollTrigger: {
                    trigger: rotatediv.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

            gsap.to([dotsRef.current, flowerRef.current], {
                rotate: -360,
                ease: "none",
                scrollTrigger: {
                    trigger: rotatediv.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

        });

        return () => ctx.revert();

    }, []);

    return (
        <div className="bg-white py-10">
            {/* Heading Mobile */}
            <h1 className="text-blue md:hidden mx-6 mb-2">Helping Indians travel <span className="font-bold">smarter, better, and farther</span></h1>

            {/* Heading Desktop */}
            <h1 className="text-blue hidden md:flex w-fit flex-col mb-2 mx-auto">Helping Indians travel<br /> <span className="font-bold">smarter, better, and farther</span></h1>

            {/* MOBILE TABLET SWIPER */}
            <div className="md:hidden">
                <div ref={rotatediv} className="relative w-[359px] h-[500px] flex-center mx-auto overflow-hidden">

                    <Swiper
                        effect="cards"
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper w-[319px] h-[444px]"
                        loop={true}
                        loopAdditionalSlides={cards.length}
                        speed={600}
                        resistanceRatio={0}
                        allowTouchMove={true}
                    >
                        {cards.map((img, i) => (
                            <SwiperSlide key={i} className="relative bg-transparent flex-center rounded-xl">
                                <Image width={319} height={444} src={img.src} alt="Explore Carousel" className="mx-auto z-10 rounded-xl" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    <Image ref={starRef} src={Star2} alt="Star Icon" className="absolute bottom-18 left-0 z-0 will-change-transform" />
                    <Image ref={shineRef} src={Shine} alt="Shine Icon" className="absolute top-20 right-0 z-20 will-change-transform" />
                    <Image ref={dotsRef} src={Dots} alt="Dots Icon" className="absolute top-2 left-0 z-0 will-change-transform" />
                    <Image ref={flowerRef} src={Flower} alt="Flower Icon" className="absolute bottom-4 right-2 z-20 will-change-transform" />
                </div>
            </div>

            {/* DESKTOP STATIC */}
            <div className="hidden md:flex flex-wrap justify-center gap-10 w-full mt-10">
                {desktopCards.map((card, i) => (
                    <div key={i} className="relative hover:scale-105 duration-300">
                        <Image
                            width={319}
                            height={444}
                            src={card.img.src}
                            alt={card.tagText}
                            className="rounded-xl md:w-[340px] lg:w-[410px] xl:w-[280px] 2xl:w-[319px]"
                        />
                        <div className="absolute bottom-4 left-3 h-20 max-w-[85%]">
                            <small
                                className={`${card.tagBg} text-lg font-bold text-white px-2 py-0.5 rounded-xs`}
                            >
                                {card.tagText}
                            </small>
                            <small className="text-white mt-2 text-xs block">
                                {card.desc}
                            </small>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ExploreCarousel;
