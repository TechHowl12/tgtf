"use client";
import Image from "next/image";
import bannerMobile from "./images/banner-mobile.webp"
import Logo from "./images/logo.webp"
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
import { useRouter } from "next/navigation";
import Banner from "./components/Home/Banner";
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const registerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    // Run once: remove existing branding link if present
    function removeElfsightBranding() {
      const el = document.querySelector('a[title="Free Instagram Feed widget"], a[href*="elfsight.com/instagram-feed-instashow"], a[rel="noreferrer"]');
      if (el) el.remove();
    }

    // try immediately (if widget already injected)
    removeElfsightBranding();

    // Observe DOM for later injection and remove on the fly
    const observer = new MutationObserver((mutations) => {
      for (const m of mutations) {
        if (!m.addedNodes) continue;
        m.addedNodes.forEach(node => {
          try {
            if (node.nodeType === 1) {
              // check the node itself
              if (node.matches && (node.matches('a[title="Free Instagram Feed widget"]') ||
                node.matches('a[href*="elfsight.com/instagram-feed-instashow"]') ||
                node.matches('a[rel="noreferrer"]'))) {
                node.remove();
              }
              // check descendants
              const found = node.querySelector && node.querySelector('a[title="Free Instagram Feed widget"], a[href*="elfsight.com/instagram-feed-instashow"], a[rel="noreferrer"]');
              if (found) found.remove();
            }
          } catch (e) { /* ignore cross-origin or other errors */ }
        });
      }
    });

    observer.observe(document.documentElement || document.body, { childList: true, subtree: true });

    // optional: stop observing after some time to save resources
    setTimeout(() => observer.disconnect(), 30_000);

  }, []);

  return (
    <main>

      <Banner />

      {/* Register Section */}
      <section ref={registerRef} className="bg-blue relative w-full pb-3 xl:pb-6 z-10">
        <div className="w-full mx-auto pr-4 md:pr-0 py-7">
          <p className="text-white w-52 md:w-auto ml-auto md:ml-52 lg:ml-[248px] xl:ml-[376px] pr-10">
            <span className="font-bold">The Gypsy Travel Festival</span> is a collective of global-iconic and undiscovered experiences, cuisines, and cultures - powered by a community of explorers who share an insatiable love for discovery.<br /><br />
            Whether you are a seasoned traveller or just catching the travel bug, we’ve got everything you need to go on your next epic journey.
          </p>
        </div>
        <button className="w-[95%] lg:w-[40%] bg-pink text-bright py-4 mx-auto lg:ml-[248px] xl:ml-[376px] flex justify-center items-center gap-1 curve font-bold group active:scale-[0.97] transition-all duration-200">
          <span>REGISTER NOW</span>
          <span className="arrow-wrapper transition-transform duration-300">
            <img src={BtnArrow.src} alt="btn arrow" />
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
      <div className="mb-20">
        {/* <InstagramFeed /> */}
      </div>

      {/* Curious Section */}
      <section className="bg-blue flex justify-between xl:items-center flex-col xl:flex-row rounded-t-[20px] -mt-10 relative">
        <h1 className="text-white font-bold py-6 pl-6">Curious about us?</h1>
        <div className="bg-white w-full xl:w-1/2 rounded-t-[20px] xl:rounded-t-none xl:rounded-tl-[20px] xl:rounded-bl-[20px] flex flex-col gap-y-2 py-3 xl:py-6 xl:gap-y-4">
          <Button onClick={() => (window.location.href = "mailto:info@gtn-india.com")} text="PARTNER WITH US" />
          <Button onClick={() => router.push("/contact")} text="REGISTER" />
        </div>
        <Image width={36} height={50} src={HalfStar} alt="Half Star Icon" className="absolute left-0 -top-7 z-0" />
      </section>

    </main >
  );
}