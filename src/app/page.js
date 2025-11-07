"use client";
import Image from "next/image";
import bannerMobile from "./images/banner-mobile.webp"
import bannerDesktop from "./images/banner-desktop.webp"
import Logo from "./images/logo.webp"
import BtnArrow from "./images/btn-arrow.png"
import Circles from "./images/circles.webp"
import HalfStar from "./images/half-star.png"
import star from "./images/star.webp"
import ExploreCarousel from "./components/Home/ExploreCarousel";
import PartnersCarousel from "./components/Home/PartnersCarousel";
import PreviousPartners from "./components/Home/PreviousPartners";
import Frames from "./components/Home/Frames";
import Highlights from "./components/Home/Highlights";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const logoRef = useRef(null);
  const registerRef = useRef(null);
  const starRef = useRef(null);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    if (window.innerWidth >=800) return;

    const ctx = gsap.context(() => {
      const logoEl = logoRef.current;
      const targetSection = registerRef.current;
      if (!logoEl || !targetSection) return;
      const computeDistance = 150;
      gsap.to(logoEl, {
        y: computeDistance,
        ease: "none",
        scrollTrigger: {
          trigger: targetSection,
          start: "top bottom",
          end: "bottom center",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(starRef.current, {
        rotate: 360,
        ease: "none",
        scrollTrigger: {
          trigger: targetSection,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert(); // cleanup on unmount
  }, []);

  return (
    <main>

      {/* Banner Section */}
      <div style={{
        "--mobileBG": `url(${bannerMobile.src})`,
        "--desktopBG": `url(${bannerDesktop.src})`
      }} className="hero-bg w-full bg-cover relative bg-center h-[698px]">
        <div className="flex w-full gap-x-3 xl:gap-x-10 justify-between md:justify-start px-4 xl:px-40 absolute bottom-0">
          <div
            ref={logoRef}
            className="will-change-transform z-20"
          >
            <Image
              width={123}
              height={204}
              src={Logo}
              alt="TGTF Logo"
              className="relative top-[100px] xl:top-[180px] xl:w-44 xl:h-[291px]"
            />
          </div>
          <div className="w-52 md:w-[700px] relative">
            <h1 className="text-bright relative top-[100px] xl:top-[180px] z-20">A Destination that’ll <span className="font-bold">start your next journey.</span></h1>
            <Image ref={starRef} width={31} height={31} src={star} alt="Star Icon" className="absolute right-8 bottom-6 z-0" />
          </div>
        </div>
      </div>

      {/* Register Section */}
      <section ref={registerRef} className="bg-blue relative w-full pb-3 xl:pb-6 z-10">
        <div className="w-full mx-auto pr-4 py-7">
          <p className="text-white w-52 xl:w-auto ml-auto xl:ml-[376px] pr-10">
            <span className="font-bold">The Gypsy Travel Festival</span> is a collective comprising some of the most celebrated and underrated global experiences, cuisines, and cultures. An ever expanding community of like-minded explorers and enthusiasts.<br /><br />
            Whether you are a seasoned traveller or just catching the travel bug, we’ve got everything you need to go on your next epic journey.
          </p>
        </div>
        <button className="w-[95%] xl:w-[665px] bg-pink text-bright py-4 mx-auto xl:ml-[376px] flex justify-center items-center gap-1 curve font-bold">
          <span>LEARN MORE</span>
          <img src={BtnArrow.src} alt="btn arrow" />
        </button>
                    
        <Image width={22} height={31} src={Circles} alt="Star Icon" className="absolute right-0 bottom-1/2 z-0" />
          
      </section>

      {/* Partners Carousel Section */}
      <PartnersCarousel />

      {/* Explore More Section */}
      <ExploreCarousel />

      {/* Highlights Section */}
      <Highlights />

      {/* Previous Partners Section */}
      <PreviousPartners />

      {/* Frames Section */}
      <Frames />

      {/* Curious Section */}
      <div className="bg-blue rounded-t-[20px] -mt-10 relative">
        <h1 className="text-white font-bold py-6 pl-6">Curious about us?</h1>
        <div className="bg-white rounded-t-[20px] flex flex-col gap-y-2 py-3">
          <button className="w-[95%] bg-pink text-bright py-4 mx-auto flex justify-center items-center gap-1 curve font-bold">
            <span>PARTNER WITH US</span>
            <img src={BtnArrow.src} alt="btn arrow" />
          </button>
          <button className="w-[95%] bg-pink text-bright py-4 mx-auto flex justify-center items-center gap-1 curve font-bold">
            <span>REGISTER</span>
            <img src={BtnArrow.src} alt="btn arrow" />
          </button>
        </div>
        <Image width={36} height={50} src={HalfStar} alt="Half Star Icon" className="absolute left-0 -top-7 z-0" />
      </div>

    </main>
  );
}