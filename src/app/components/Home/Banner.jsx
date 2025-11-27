"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Logo from "../../images/logo.webp";
import star from "../../images/star.webp";

gsap.registerPlugin(ScrollTrigger);

const Banner = () => {
    const mobileVideoRef = useRef(null);
    const desktopVideoRef = useRef(null);

    const logoRef = useRef(null);
    const registerRef = useRef(null);
    const starRef = useRef(null);
    const [isPaused, setIsPaused] = useState(true);
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (mediaQuery.matches) return;
        if (window.innerWidth >= 767) return;

        const ctx = gsap.context(() => {
            const logo = logoRef.current;
            const trigger = registerRef.current;
            if (!logo || !trigger) return;

            gsap.to(logo, {
                y: 300,
                ease: "none",
                scrollTrigger: {
                    trigger,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });

            gsap.to(starRef.current, {
                rotate: 360,
                ease: "none",
                scrollTrigger: {
                    trigger,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                },
            });
        });

        return () => ctx.revert();
    }, []);

    const togglePlay = () => {
        if (typeof window === "undefined") return;

        const isDesktop = window.innerWidth >= 768;
        const video = isDesktop ? desktopVideoRef.current : mobileVideoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPaused(false);
            setTimeout(() => setShowButton(false), 500);
        } else {
            video.pause();
            setIsPaused(true);
            setShowButton(true);
        }
    };

    return (
        <div className="relative w-full h-[698px]">
            <div
                className="md:hidden w-full h-full relative"
                onClick={togglePlay}
            >
                <video
                    ref={mobileVideoRef}
                    className="w-full h-full object-cover mt-10"
                    playsInline
                    loop
                    onPause={() => {
                        setIsPaused(true);
                        setShowButton(true);
                    }}
                    onPlay={() => {
                        setIsPaused(false);
                        setTimeout(() => setShowButton(false), 500);
                    }}
                >
                    <source src="/mobile-banner.mp4" type="video/mp4" />
                </video>

                <button
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500
                    ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center">
                        {isPaused ? (
                            <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        ) : (
                            <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                                <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                            </svg>
                        )}
                    </div>
                </button>
            </div>


            <div
                className="hidden md:block relative w-full h-full"
                onClick={togglePlay}
                onMouseEnter={() => {
                    if (!isPaused) setShowButton(true);
                }}
                onMouseLeave={() => {
                    if (!isPaused) setShowButton(false);
                }}
            >
                <video
                    ref={desktopVideoRef}
                    className="w-full h-full object-cover"
                    playsInline
                    loop
                    onPause={() => {
                        setIsPaused(true);
                        setShowButton(true);
                    }}
                    onPlay={() => {
                        setIsPaused(false);
                        setTimeout(() => setShowButton(false), 500);
                    }}
                >
                    <source src="/banner.mp4" type="video/mp4" />
                </video>

                {/* Play/Pause Button */}
                <button
                    onClick={togglePlay}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500
                 ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                >
                    <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center">
                        {isPaused ? (
                            <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                                <path d="M8 5v14l11-7z" />
                            </svg>
                        ) : (
                            <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                                <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                            </svg>
                        )}
                    </div>
                </button>
            </div>

            <div className="flex w-full gap-x-3 md:gap-x-6 xl:gap-x-10 justify-between md:justify-start px-4 md:px-24 xl:px-40 absolute bottom-0">
                <div ref={logoRef} className="will-change-transform z-20">
                    <Image
                        width={123}
                        height={204}
                        src={Logo}
                        alt="TGTF Logo"
                        className="relative top-0 md:w-32 md:top-[30px] lg:top-24 xl:top-[180px] xl:w-44 xl:h-[291px]"
                    />
                </div>

                <div className="w-52 md:w-[700px] relative" ref={registerRef}>
                    <h1 className="text-bright relative top-[100px] md:top-[30px] lg:top-24 xl:top-[180px] z-20">
                        A Destination that’ll <span className="font-bold">start your next journey.</span>
                    </h1>
                    <Image
                        ref={starRef}
                        width={31}
                        height={31}
                        src={star}
                        alt="Star Icon"
                        className="absolute right-8 xl:right-32 xl:bottom-4 xl:w-12 xl:h-12 bottom-6 z-0"
                    />
                </div>
            </div>

        </div>
    );
};

export default Banner;
