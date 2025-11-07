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
import Star2 from "../../images/star.svg";
import Shine from "../../images/shine.svg";
import Dots from "../../images/four-dots.svg";
import Flower from "../../images/flower.svg";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ExploreCarousel = () => {

    const cards = [Explore, Engage, Plan, Book, Explore, Engage, Plan, Book];

    const starRef = useRef(null);
    const shineRef = useRef(null);
    const dotsRef = useRef(null);
    const flowerRef = useRef(null);

    const rotatediv = useRef(null); // MAIN TRIGGER REF

    useEffect(() => {

        const ctx = gsap.context(() => {

            // clockwise rotation
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

            // anti clockwise rotation
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
            <h1 className="text-blue mx-6 mb-2">Helping Indians travel <span className="font-bold">smarter, better, and farther</span></h1>

            <div ref={rotatediv} className="relative w-[359px] h-[500px] flex-center mx-auto overflow-hidden">

                <Swiper
                    effect="cards"
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper w-[319px] h-[444px]"
                    loop={true}
                    loopAdditionalSlides={cards.length}
                    speed={600}
                    resistanceRatio={0}          // IMPORTANT
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
    )
}

export default ExploreCarousel;
