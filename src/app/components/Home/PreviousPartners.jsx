"use client";
import React, { useRef, useEffect } from 'react';
import ponant from "../../images/ponant.webp";
import saudi from "../../images/saudi.webp";
import qatar from "../../images/qatar.webp";
import seychelles from "../../images/seychelles.webp";
import utah from "../../images/utah.webp";
import clubmed from "../../images/club-med.webp";
import Sun from '../../images/red-sun.png';
import Flower from '../../images/yellow-flower.png';
import Dots from '../../images/green-dots.png';
import journeys from "../../images/journeys.png";
import fanatic from "../../images/fanatic.png";
import starscape from "../../images/starscape.png";
import once from "../../images/once.png";
import revel from "../../images/revel.png";
import meghalaya from "../../images/meghalaya.png";
import budget from "../../images/budget.png";
import vfsglobal from "../../images/vfsglobal.png";
import cgh from "../../images/cgh-earth.png";
import onevasco from "../../images/one-vasco.png";
import Image from 'next/image';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const PreviousPartners = () => {
  const sectionRef = useRef(null);

  const sunRef = useRef(null);
  const flowerRef = useRef(null);
  const dotsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to([sunRef.current, flowerRef.current], {
        rotate: 360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(dotsRef.current, {
        rotate: -360,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="bg-white py-8 px-8 xl:py-12">
      <div className="bg-pink curve pb-2 w-[319px] md:w-[85%] mx-auto relative">
        <div className="p-8 z-20">
          <h1 className="text-white">
            The <br />
            <span className="font-bold">Curators</span> Of<br /> The Collective
          </h1>
          <p className="bg-white text-pink w-[91px] xl:w-[120px] h-[18px] flex-center rounded-xs mt-3">
            Past Partners
          </p>
        </div>

        {/* LOGO GRID */}
        <div className="bg-white curve grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center h-[324px] overflow-y-auto gap-6 px-6 py-8 mx-1 z-20">
          {/* 1. Saudi */}
          <Image width={118} height={60} src={saudi} alt="Saudi Logo" />

          {/* 2. Qatar */}
          <Image width={101} height={55} src={qatar} alt="Qatar Logo" />

          {/* 3. Seychelles */}
          <Image width={95} height={70} src={seychelles} alt="Seychelles Logo" />

          {/* 4. Club Med */}
          <Image width={102} height={30} src={clubmed} alt="Club Med Logo" />

          {/* 5. Ponant */}
          <Image width={120} height={40} src={ponant} alt="Ponant Logo" />

          {/* 6. CGH Earth */}
          <Image width={120} height={50} src={cgh} alt="CGH Earth Logo" />

          {/* 7. Utah */}
          <Image width={134} height={66} src={utah} alt="Utah Logo" />

          {/* 8. Meghalaya */}
          <Image width={120} height={60} src={meghalaya} alt="Meghalaya Logo" />

          {/* 9. VFS Global */}
          <Image width={130} height={40} src={vfsglobal} alt="VFS Global Logo" />

          {/* 10. Budget */}
          <Image width={110} height={40} src={budget} alt="Budget Logo" />

          {/* 11. Starscape */}
          <Image width={120} height={50} src={starscape} alt="Starscape Logo" />

          {/* 12. One Vasco */}
          <Image width={122} height={70} src={onevasco} alt="One Vasco Logo" />

          {/* 13. Revel */}
          <Image width={110} height={50} src={revel} alt="Revel Logo" />

          {/* 14. Journeys */}
          <Image width={120} height={50} src={journeys} alt="Journeys Logo" />

          {/* 15. Once */}
          <Image width={100} height={40} src={once} alt="Once Logo" />

          {/* 16. Fanatic */}
          <Image width={120} height={50} src={fanatic} alt="Fanatic Logo" />
        </div>

        <Image
          ref={sunRef}
          src={Sun}
          alt="Red Sun"
          className="absolute -top-6 -right-4 z-10 will-change-transform"
        />
        <Image
          ref={flowerRef}
          src={Flower}
          alt="Yellow Flower"
          className="absolute top-30 -left-6 z-10 will-change-transform"
        />
        <Image
          ref={dotsRef}
          src={Dots}
          alt="Green Dots"
          className="absolute -bottom-6 -right-4 z-10 will-change-transform"
        />
      </div>
    </div>
  );
};

export default PreviousPartners;
