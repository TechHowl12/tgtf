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
gsap.registerPlugin(ScrollTrigger);

export default function Home() {

  const logoRef = useRef(null);
  const registerRef = useRef(null);
  const starRef = useRef(null);
  const router = useRouter();
  const videoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(true);
  const [showButton, setShowButton] = useState(true);


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

    // start observing the whole document
    observer.observe(document.documentElement || document.body, { childList: true, subtree: true });

    // optional: stop observing after some time to save resources
    setTimeout(() => observer.disconnect(), 30_000);

  }, []);

  useEffect(() => {

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;
    if (window.innerWidth >= 800) return;

    const ctx = gsap.context(() => {
      const logoEl = logoRef.current;
      const targetSection = registerRef.current;
      if (!logoEl || !targetSection) return;
      const computeDistance = 170;
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

    return () => ctx.revert();
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPaused(false);
      // fade out shortly after playing
      setTimeout(() => setShowButton(false), 500);
    } else {
      video.pause();
      setIsPaused(true);
      setShowButton(true); // keep visible when paused
    }
  };

  return (
    <main>

      {/* Banner Section */}
      {/* Banner Section */}
      <div className="relative w-full h-[698px]">

        {/* MOBILE IMAGE */}
        <div className="md:hidden w-full h-full">
          <Image
            src={bannerMobile}
            alt="Mobile Banner"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* DESKTOP VIDEO WITH CUSTOM PLAY BUTTON + HOVER BEHAVIOR */}
        <div
          className="hidden md:block relative w-full h-full"
          onMouseEnter={() => {
            if (!isPaused) setShowButton(true);
          }}
          onMouseLeave={() => {
            if (!isPaused) setShowButton(false);
          }}
        >
          <video
            ref={videoRef}
            className="w-full h-full object-cover mt-20"
            playsInline
            loop={true}          // no autoplay, no loop
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

          {/* PLAY / PAUSE BUTTON (center, fades, shows on hover) */}
          <button
            onClick={togglePlay}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500
        ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}
          >
            <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center">
              {isPaused ? (
                // ▶ PLAY ICON
                <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                // ⏸ PAUSE ICON
                <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                  <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
                </svg>
              )}
            </div>
          </button>
        </div>

        {/* OVERLAY CONTENT */}
        <div className="flex w-full gap-x-3 md:gap-x-6 xl:gap-x-10 justify-between md:justify-start px-4 md:px-24 xl:px-40 absolute bottom-0">
          <div ref={logoRef} className="will-change-transform z-20">
            <Image
              width={123}
              height={204}
              src={Logo}
              alt="TGTF Logo"
              className="relative top-[100px] md:w-32 md:top-[30px] lg:top-24 xl:top-[180px] xl:w-44 xl:h-[291px]"
            />
          </div>

          <div className="w-52 md:w-[700px] relative">
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



      {/* Register Section */}
      <section ref={registerRef} className="bg-blue relative w-full pb-3 xl:pb-6 z-10">
        <div className="w-full mx-auto pr-4 md:pr-0 py-7">
          <p className="text-white w-52 md:w-auto ml-auto md:ml-52 lg:ml-[248px] xl:ml-[376px] pr-10">
            <span className="font-bold">The Gypsy Travel Festival</span> is a collective of global-iconic and undiscovered experiences, cuisines, and cultures - powered by a community of explorers who share an insatiable love for discovery.<br /><br />
            Whether you are a seasoned traveller or just catching the travel bug, we’ve got everything you need to go on your next epic journey.
          </p>
        </div>
        <button className="w-[95%] lg:w-[40%] bg-pink text-bright py-4 mx-auto lg:ml-[248px] xl:ml-[376px] flex justify-center items-center gap-1 curve font-bold group active:scale-[0.97] transition-all duration-200">
          <span>BOOK YOUR TICKETS</span>
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
        <InstagramFeed />
      </div>

      {/* Curious Section */}
      <section className="bg-blue flex justify-between xl:items-center flex-col xl:flex-row rounded-t-[20px] -mt-10 relative">
        <h1 className="text-white font-bold py-6 pl-6">Curious about us?</h1>
        <div className="bg-white w-full xl:w-1/2 rounded-t-[20px] xl:rounded-t-none xl:rounded-tl-[20px] xl:rounded-bl-[20px] flex flex-col gap-y-2 py-3 xl:py-6 xl:gap-y-4">
          <Button onClick={() => router.push("/contact")} text="PARTNER WITH US" />
          <Button onClick={() => router.push("/contact")} text="REGISTER" />
        </div>
        <Image width={36} height={50} src={HalfStar} alt="Half Star Icon" className="absolute left-0 -top-7 z-0" />
      </section>

    </main >
  );
}