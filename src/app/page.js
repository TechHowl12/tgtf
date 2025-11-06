"use client";
import Image from "next/image";
import banner from "./images/banner-mobile.webp"
import Logo from "./images/logo.webp"
import BtnArrow from "./images/btn-arrow.png"
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
      <div style={{ backgroundImage: `url(${banner.src})` }} className="w-full bg-cover relative bg-center h-[698px]">
        <div className="flex w-full gap-x-3 justify-between px-4 absolute bottom-0">
          <div
            ref={logoRef}
            className="will-change-transform"
          >
            <Image
              width={123}
              height={204}
              src={Logo}
              alt="TGTF Logo"
              className="relative top-[100px]"
            />
          </div>
          <div className="w-52 relative">
            <h1 className="text-bright relative top-[100px] z-20">A Destination that’ll <span className="font-bold">start your next journey.</span></h1>
            <Image ref={starRef} width={31} height={31} src={star} alt="Star Icon" className="absolute right-8 bottom-6 z-0" />
          </div>
        </div>
      </div>

      {/* Register Section */}
      <div ref={registerRef} className="bg-blue w-full pb-3">
        <div className="max-w-6xl w-full mx-auto pr-4 py-7">
          <p className="text-white w-52 ml-auto">
            <span className="font-bold">The Gypsy Travel Festival</span> is a collective comprising some of the most celebrated and underrated global experiences, cuisines, and cultures. An ever expanding community of like-minded explorers and enthusiasts.<br /><br />
            Whether you are a seasoned traveller or just catching the travel bug, we’ve got everything you need to go on your next epic journey.
          </p>
        </div>
        <button className="w-[95%] bg-pink text-bright py-4 mx-auto flex justify-center items-center gap-1 curve font-bold">
          <span>LEARN MORE</span>
          <img src={BtnArrow.src} alt="btn arrow" />
        </button>

      </div>

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
      <div className="bg-blue rounded-t-[20px] -mt-10">
        <h1 className="text-white font-bold p-8">Curious <br /> about us?</h1>
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
      </div>

    </main>
  );
}