"use client";
import React, { useRef, useEffect } from 'react';
import ponant from "../../images/ponant.webp"
import saudi from "../../images/saudi.webp"
import qatar from "../../images/qatar.webp"
import seychelles from "../../images/seychelles.webp"
import utah from "../../images/utah.webp"
import clubmed from "../../images/club-med.webp"
import Sun from '../../images/red-sun.png';
import Flower from '../../images/yellow-flower.png';
import Dots from '../../images/green-dots.png';
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

        if (window.innerWidth >= 1024) return; // desktop no animation

        const ctx = gsap.context(() => {

            gsap.to([sunRef.current, flowerRef.current], {
                rotate: 360,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

            gsap.to(dotsRef.current, {
                rotate: -360,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true,
                }
            });

        });

        return () => ctx.revert();

    }, []);

    return (
        <div ref={sectionRef} className='bg-white p-8'>
            <div className='bg-pink curve pb-2 w-[319px] mx-auto relative'>
                <div className='p-8 z-20'>
                    <h1 className='text-white'>The <br /><span className='font-bold'>Curators</span> Of<br /> The Collective</h1>
                    <p className='bg-white text-pink w-[111px] h-[18px] flex-center rounded-xs mt-3'>Previous Partners</p>
                </div>
                <div className='bg-white curve grid grid-cols-2 place-items-center h-[324px] overflow-y-auto gap-6 px-6 py-8 mx-1 z-20'>
                    <Image width={118} height={70} src={saudi.src} alt="Saudi Logo" />
                    <Image width={95} height={70} src={seychelles.src} alt="Seychelles Logo" />
                    <Image width={101} height={55} src={qatar.src} alt="Qatar Logo" />
                    <Image width={134} height={66} src={utah.src} alt="Utah Logo" />
                    <Image width={102} height={20} src={clubmed.src} alt="Club Med Logo" />
                    <Image width={112} height={62} src={ponant.src} alt="Ponant Logo" />
                    <Image width={118} height={70} src={saudi.src} alt="Saudi Logo" />
                    <Image width={95} height={70} src={seychelles.src} alt="Seychelles Logo" />
                    <Image width={101} height={55} src={qatar.src} alt="Qatar Logo" />
                    <Image width={134} height={66} src={utah.src} alt="Utah Logo" />
                    <Image width={102} height={20} src={clubmed.src} alt="Club Med Logo" />
                    <Image width={112} height={62} src={ponant.src} alt="Ponant Logo" />
                </div>

                <Image ref={sunRef} src={Sun} alt="Red Sun" className='absolute -top-6 -right-4 z-10 will-change-transform' />
                <Image ref={flowerRef} src={Flower} alt="Yellow Flower" className='absolute top-30 -left-6 z-10 will-change-transform' />
                <Image ref={dotsRef} src={Dots} alt="Green Dots" className='absolute -bottom-6 -right-4 z-10 will-change-transform' />

            </div>
        </div>
    )
}

export default PreviousPartners;
