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
import H1 from "../images/H1.webp";
import temple from "../images/temple.png";
import rajasthan from "../images/rajasthan.png";
import surface from "../images/surface.png";
import twk from "../images/twk.png";
import volunteer from "../images/volunteer.png";
import indulge from "../images/indulge.png";
import rare from "../images/rare.png";
import ibis from "../images/ibis.png";
import Star from "../images/bright-star.png";
import Circles from "../images/two-circles.png";
import Dots from "../images/green-dots.png";
import Sun from "../images/red-sun.png";
import Shine from "../images/half-shine.png";
import Link from 'next/link';
import homeex from "../images/homeex.webp";
import topo from "../images/topo.webp";
import wholetruth from "../images/wholetruth.png";
import shwaas from "../images/shwaas.webp";
import tripfactory from "../images/Tripfactory.png";
import evokeex from "../images/evokeex.png";
import sharepal from "../images/sharepal.png";
import dcp from "../images/dcp.png";
import haldiram from "../images/hr-logo.webp";
import fujifilm from "../images/fujifil-logo.webp";
import sotc from "../images/SOTC-logo (2).png";
import toehold from "../images/toehold-logo.webp";
import kuda from "../images/kv-logo.webp";
import beyondX from "../images/BX-logo.webp";
import holidaysbox from "../images/hb-logo.webp";
import gotrippy from "../images/gotrippy-logo.webp";
import trippo from "../images/tripo-logo.webp";
import brownli from "../images/brown-living-logo.webp";
import scentedjourney from "../images/scentedjourneys-logo.webp";
import tripxoxo from "../images/tripxoxo.webp";
import aspirit from "../images/aspirit-logo.webp";
import create from "../images/create-logo.webp";
import scarters from "../images/scarters-logo.webp";
import zwr from "../images/ZWR_logo.webp";
import lacigale from "../images/La_cigale_Logo.webp";
import tdlogo from "../images/TD_logo.webp";
import thewestin from "../images/the_westin.webp";
import bt from "../images/bt_logo.webp";

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

const LogoCard = ({ src, alt, className = '', url }) => (
    <div className="flex items-center justify-center h-[140px]">
        {url ? (
            <Link href={url} target="_blank" rel="noopener noreferrer">
                <Image 
                    src={src} 
                    alt={alt} 
                    className={`object-contain cursor-pointer hover:opacity-80 transition-opacity ${className}`} 
                />
            </Link>
        ) : (
            <Image src={src} alt={alt} className={`object-contain ${className}`} />
        )}
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

            {/* Tablet + Desktop: Grid cols-3 or centered for single item */}
            <div className={`hidden md:grid gap-y-14 gap-x-8 justify-items-center ${items.length === 1 ? 'grid-cols-1' : 'grid-cols-3'}`}>
                {items.map((item) => (
                    <div key={item.alt} className="flex items-center justify-center h-[140px]">
                        {item.url ? (
                            <Link href={item.url} target="_blank" rel="noopener noreferrer">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    className={`object-contain cursor-pointer hover:opacity-80 transition-opacity ${item.className || ''}`}
                                />
                            </Link>
                        ) : (
                            <Image
                                src={item.src}
                                alt={item.alt}
                                className={`object-contain ${item.className || ''}`}
                            />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const Page = () => {
    const destinationPartners = [
        { src: thailand, alt: 'thailand', className: 'w-40', url: "https://www.tourismthailand.org/" },
        { src: ana, alt: 'ana', className: 'w-80 scale-110', url:"https://visit.sapporo.travel/" },
        { src: kenya, alt: 'kenya', className: 'w-44', url:"https://ktb.go.ke/" },
    ];

    const premiumPartners = [
        { src: clubmed, alt: 'club-med', className: 'w-72 aspect-square', url:"https://www.clubmed.asia/" },
        { src: CGH, alt: 'CGH', className: 'w-56 aspect-square', url:"https://www.cghearth.com/" },
        { src: homeex, alt: 'homeex', className: 'w-52', url:"https://www.homeexchange.com/" },
        { src: haldiram, alt: 'haldiram', className: 'w-40', url:"https://www.haldirams.com/" },
        { src: fujifilm, alt: 'fujifilm', className: 'w-40', url:"https://www.fujifilm.com/in/en" },
        { src: sotc, alt: 'sotc', className: 'w-40', url:"https://www.sotc.in/" },
    ];

    const partners = [
        { src: latitude, alt: 'latitude', className: 'w-40', url:"https://onelatitude.in/" },
        { src: immersive, alt: 'immersive', className: 'w-44', url:"https://www.immersivetrails.com/" },
        { src: temple, alt: 'temple', className: 'w-44', url:"https://www.templepilots.com/" },
        { src: kohventure, alt: 'kohventure', className: 'w-56', url:"https://kohventure.com/" },
        { src: rajasthan, alt: 'rajasthan', className: 'w-44', url:"https://rajasthanstudio.com/" },
        { src: rare, alt: 'rare', className: 'w-36' , url:"https://www.rareindia.com/"},
        { src: topo, alt: 'topo', className: 'w-46', url:"https://www.toponomad.co/"},
        { src: wholetruth, alt: 'wholetruth', className: 'w-56', url:"https://thewholetruthfoods.com/"},
        { src: tripfactory, alt: 'tripfactory', className: 'w-40', url:"https://www.tripfactory.com/" },
        { src: toehold, alt: 'toehold', className: 'w-40', url:"https://www.toehold.in/"},
        { src: kuda, alt: 'kuda', className: 'w-55', url:"https://www.kudavillingili.com/"},
        { src: beyondX, alt: 'beyondX', className: 'w-48', url:"https://beyondxpeditions.com/"},
        { src: holidaysbox, alt: 'holidaysbox', className: 'w-40', url:"https://www.holidaysbox.com/"},
        { src: scentedjourney, alt: 'scentedjourney', className: 'w-40', url:"https://thescentedjourneys.com/"},
        { src: scarters, alt: 'scarters', className: 'w-50', url:"https://scarters.com/"},
    ];

    const communityPartners = [
        { src: volunteer, alt: 'volunteer', className: 'w-40', url:"https://volunteeryatra.com/" },
        { src: twk, alt: 'twk', className: 'w-32', url:"https://travelwithkids.co.in/" },
        { src: surface, alt: 'surface', className: 'w-44', url:"https://surface-interval.com/?srsltid=AfmBOor3FdtvrzdPmPoag0nDrxFfbNnx0iG84XwIppRCde_rm6BgDnf6" },
    ];

    const giftingPartners = [
        { src: indulge, alt: 'indulge', className: 'w-34 object-contain', url:"https://www.indulge.house/"},
        { src: H1, alt: 'H1', className: 'w-30', url:"https://www.hostelbird.com/" },
        { src: ibis, alt: 'ibis', className: 'w-30 mt-4' },
        { src: shwaas, alt: 'shwaas', className: 'w-40 mt-4', url:"https://www.shwaas.in/"},
        { src: evokeex, alt: 'evoke', className: 'w-40 ', url:"http://evokeexperiences.in/"} ,
        { src: sharepal, alt: 'sharepal', className: 'w-48   mt-4', url:"https://sharepal.in/"},
        { src: dcp , alt: 'dcp', className: 'w-40', url:"https://dcpexpeditions.com/"},
        { src: gotrippy, alt: 'gotrippy', className: 'w-50', url:"https://www.gotrippy.ai/"},
        { src: trippo, alt: 'trippo', className: 'w-40', url:"https://www.tripo.co/"},
        { src: brownli, alt: 'brownliving', className: 'w-60', url:"https://brownliving.in/"},
        { src: tripxoxo, alt: 'tripxoxo', className: 'w-50', url:"https://tripxoxo.com/"},
        { src: zwr, alt: 'zwc', className: 'w-34', url:"https://zulal.com/en/"},
        { src: lacigale, alt: 'la-cigale', className: 'w-30', url:"https://www.lacigalehotel.com/"},
        { src: tdlogo, alt: 'td', className: 'w-64', url:"https://www.traveldesigner.qa/"},
        { src: thewestin, alt: 'the-westin', className: 'w-48', url:"https://www.marriott.com/en-us/hotels/dohwi-the-westin-doha-hotel-and-spa/overview/"},
        { src: bt, alt: 'bt', className: 'w-60', url:"https://www.banyantree.com/qatar/doha/accommodation" },
    ];

    const siphPartners = [
        { src: aspirit, alt: 'aspirit', className: 'w-40', url:"https://www.instagram.com/batchesblends/?hl=en" },
    ];

    const creatorNetworkPartners = [
        { src: create, alt: 'create', className: 'w-50', url:"https://create.wtf/" },
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
                
                {/* Mobile: Stacked layout */}
                <div className="flex flex-col gap-y-10 md:hidden">
                    <PartnersSection title={<><span className="font-bold">Sips</span> partner</>} items={siphPartners} />
                    <PartnersSection title={<><span className="font-bold">Creator Network</span> partner</>} items={creatorNetworkPartners} />
                </div>

                {/* Desktop: Side by side layout */}
                <div className="hidden md:grid md:grid-cols-2 md:gap-x-10">
                    <PartnersSection title={<><span className="font-bold">Sips</span> partner</>} items={siphPartners} />
                    <PartnersSection title={<><span className="font-bold">Creator Network</span> partner</>} items={creatorNetworkPartners} />
                </div>
            </div>
        </main>
    );
};

export default Page;
