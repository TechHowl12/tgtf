'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import clubmed from "../images/club-med.webp";
import immersive from "../images/immersive.png";
import thailand from "../images/thailand.png";
import kenya from "../images/kenya.png";
import CGH from "../images/CGH.png";
import kohventure from "../images/kohventure.png";
import ana from "../images/ana.png";
import latitude from "../images/latitude.png";
import H from "../images/H.png";
import temple from "../images/temple.png";
import rajasthan from "../images/rajasthan.png";
import surface from "../images/surface.png";
import twk from "../images/twk.png";
import volunteer from "../images/volunteer.png";
import indulge from "../images/indulge.png";
import rare from "../images/rare.png";
import Star from "../images/bright-star.png";
import Circles from "../images/two-circles.png";
import Dots from "../images/green-dots.png";
import Sun from "../images/red-sun.png";
import Shine from "../images/half-shine.png";

const swiperCommonProps = {
    modules: [Autoplay, Pagination],
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: true,
    },
    loop: true,
    spaceBetween: 40,
    breakpoints: {
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
    },
};

const LogoCard = ({ src, alt, className = '' }) => (
    <div className="flex items-center justify-center h-[140px]">
        <Image src={src} alt={alt} className={`object-contain ${className}`} />
    </div>
);

const PartnersSection = ({ title, items }) => {
    return (
        <div className="border border-blue curve relative py-10 px-6">
            <h2 className="text-blue absolute -top-2 md:-top-3.5 left-1/2 -translate-x-1/2 bg-white px-2 text-xs! sm:text-lg! md:text-xl! whitespace-nowrap">
                {title}
            </h2>

            {/* Mobile: Swiper only */}
            <div className="md:hidden">
                <Swiper {...swiperCommonProps}>
                    {items.map((item) => (
                        <SwiperSlide key={item.alt}>
                            <LogoCard {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Tablet + Desktop: Grid cols-4 */}
            <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-3 gap-y-14">
                {items.map((item) => (
                    <div key={item.alt} className="flex items-center justify-center h-[140px]">
                        <Image
                            src={item.src}
                            alt={item.alt}
                            className={`object-contain ${item.className || ''}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

const Page = () => {
    const destinationPartners = [
        { src: thailand, alt: 'thailand', className: 'w-40' },
        { src: ana, alt: 'ana', className: 'w-80 scale-110' },
        { src: kenya, alt: 'kenya', className: 'w-44' },
    ];

    const premiumPartners = [
        { src: clubmed, alt: 'club-med', className: 'w-72 aspect-square' },
        { src: CGH, alt: 'CGH', className: 'w-56 aspect-square' },
    ];

    const partners = [
        { src: latitude, alt: 'latitude', className: 'w-40' },
        { src: immersive, alt: 'immersive', className: 'w-44' },
        { src: temple, alt: 'temple', className: 'w-44' },
        { src: kohventure, alt: 'kohventure', className: 'w-56' },
        { src: rajasthan, alt: 'rajasthan', className: 'w-44' },
        { src: rare, alt: 'rare', className: 'w-36' },
    ];

    const communityPartners = [
        { src: volunteer, alt: 'volunteer', className: 'w-40' },
        { src: twk, alt: 'twk', className: 'w-32' },
        { src: surface, alt: 'surface', className: 'w-44' },
    ];

    const giftingPartners = [
        { src: indulge, alt: 'indulge', className: 'w-34 object-contain' },
        { src: H, alt: 'H', className: 'w-100 mt-8' },
    ];

    return (
        <main className="mt-32 mb-10 md:mt-40 md:mb-24 px-0 md:px-14">

            <div className="pb-8 pl-8 pr-5 relative flex flex-col justify-between">

                <Image src={Dots} alt='icon' className='absolute w-14 bottom-0 right-[25%] hidden md:block' />
                <Image src={Sun} alt='icon' className='absolute w-14 -top-24 right-[45%] hidden md:block' />
                <Image src={Circles} alt='icon' className='absolute w-14 top-0 right-[6%] hidden md:block' />
                <Image src={Shine} alt='icon' className='absolute -bottom-10 -right-20 w-50 hidden md:block' />

                <div className='relative'>
                    <h1 className="text-pink relative z-20">
                        <span className="font-bold mb-2">CURATORS</span> OF THE<br/> TRAVEL COLLECTIVE
                    </h1>
                    <Image src={Star} alt='star icon' className='hidden md:block w-32 h-32 absolute -top-7 z-10 -left-12' />
                </div>
                <p className="mt-3 md:w-[58%] md:mt-8 relative z-20">
                    Our Partners are the driving force behind TGTF — a curated network of travel brands, creators, and communities coming together to shape unforgettable journeys and experiences.
                </p>
            </div>

            <div className="w-full h-8 bg-pink md:hidden" />

            <div className="px-6 py-10 flex flex-col gap-y-10">
                <PartnersSection title={<><span className="font-bold">Destination</span> partners</>} items={destinationPartners} />
                <PartnersSection title={<><span className="font-bold">Premium</span> partners</>} items={premiumPartners} />
                <PartnersSection title={<><span className="font-bold">Partners</span></>} items={partners} />
                <PartnersSection title={<><span className="font-bold">Community</span> partners</>} items={communityPartners} />
                <PartnersSection title={<><span className="font-bold">Gifting</span> partners</>} items={giftingPartners} />
            </div>
        </main>
    );
};

export default Page;
