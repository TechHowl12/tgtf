"use client";
import Image from "next/image";
import bannerMobile from "./images/banner-mobile.webp"
import Logo from "./images/logo.svg"
import BtnArrow from "./images/btn-arrow.png"
import Circles from "./images/circles.webp"
import HalfStar from "./images/half-star.png"
import star from "./images/star.webp"
import ExploreCarousel from "./components/Home/ExploreCarousel";
import PartnersCarousel from "./components/Home/PartnersCarousel";
import PreviousPartners from "./components/Home/PreviousPartners";
import Highlights from "./components/Home/Highlights";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";
import InstagramFeed from "./components/InstagramFeed";
import Banner from "./components/Home/Banner";
gsap.registerPlugin(ScrollTrigger);
export default function Home() {
  const registerRef = useRef(null);
  const logoRef = useRef(null);
  const starRef = useRef(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    if (window.innerWidth >= 767) return;
    const ctx = gsap.context(() => {
      const logo = logoRef.current;
      const trigger = registerRef.current;
      if (!logo || !trigger) return;
      gsap.to(logo, {
        y: 250,
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

  return (
    <main>
      <Banner />
      {/* Register Section */}
      <section ref={registerRef} className="bg-blue relative w-full pb-3 xl:pb-6 z-10">
        <div className="w-full mx-auto pr-4 md:pr-0 py-7">
          <div className="flex items-center gap-x-3 md:gap-x-6 xl:gap-x-10 px-4 md:px-24 xl:px-40">
            {/* TGTF Logo — left aligned with paragraph text */}
            <div ref={logoRef} className="will-change-transform z-20 flex-shrink-0">
              <Image
                width={123}
                height={204}
                src={Logo}
                alt="TGTF Logo"
                className="w-20 md:w-32 xl:w-44 xl:h-[291px]"
              />
            </div>
            {/* Paragraph text + button (button inline on desktop) */}
            <div className="flex flex-col pt-1 w-full">
              <p className="text-white">
                <span className="font-bold">The Gypsy Travel Festival</span> is a collective of global-iconic and undiscovered experiences, cuisines, and cultures - powered by a community of explorers who share an insatiable love for discovery.<br /><br />
                Whether you are a seasoned traveller or just catching the travel bug, we've got everything you need to go on your next epic journey.
              </p>
              {/* Button: hidden on mobile (rendered below), visible on desktop */}
              <button
                id="register-now-desktop"
                type="button"
                onClick={() =>
                  window.open(
                    "https://www.skillboxes.com/events/the-gypsy-travel-festival?utm_source=website&utm_medium=registernow_fold1",
                    "_blank"
                  )
                }
                className="hidden md:flex mt-6 w-full bg-pink text-bright py-4 justify-center items-center gap-1 curve font-bold group active:scale-[0.97] transition-all duration-200"
              >
                <span>REGISTER NOW</span>
                <span className="arrow-wrapper transition-transform duration-300" aria-hidden="true">
                  <img src={BtnArrow.src} alt="" />
                </span>
              </button>
            </div>
          </div>
        </div>
        {/* Button: mobile only (full width, below everything) */}
        <button
          id="register-now"
          type="button"
          onClick={() =>
            window.open(
              "https://www.skillboxes.com/events/the-gypsy-travel-festival?utm_source=website&utm_medium=registernow_fold1",
              "_blank"
            )
          }
          className="md:hidden w-[95%] bg-pink text-bright py-4 mx-auto flex justify-center items-center gap-1 curve font-bold group active:scale-[0.97] transition-all duration-200"
        >
          <span>REGISTER NOW</span>
          <span
            className="arrow-wrapper transition-transform duration-300"
            aria-hidden="true"
          >
            <img src={BtnArrow.src} alt="" />
          </span>
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
      {/* Instagram Section */}
      <div id="instagram" className="mb-20">
        <InstagramFeed />
      </div>
      {/* Curious Section */}
      <section className="bg-blue flex justify-between xl:items-center flex-col xl:flex-row rounded-t-[20px] -mt-10 relative">
        <h1 className="text-white font-bold py-6 pl-6">Curious about us?</h1>
        <div className="bg-white w-full xl:w-1/2 rounded-t-[20px] xl:rounded-t-none xl:rounded-tl-[20px] xl:rounded-bl-[20px] flex flex-col gap-y-2 py-3 xl:py-6 xl:gap-y-4">
          <Button onClick={() => (window.location.href = "/contact")} text="PARTNER WITH US" />
          <Button id="register-now" onClick={() => window.open(
            "https://www.skillboxes.com/events/the-gypsy-travel-festival?utm_source=website&utm_medium=registernow_lastfold",
            "_blank"
          )} text="REGISTER" />
        </div>
        <Image width={36} height={50} src={HalfStar} alt="Half Star Icon" className="absolute left-0 -top-7 z-0" />
      </section>
    </main >
  );
}