'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import PROGRAMMES from './programmes';
import Star from "../images/bright-star.png";
import fshine from "../images/f-shine.png";
import Dots from "../images/green-dots.png";
import Circles from "../images/two-circles.png";

export default function Page() {
  const [activeDay, setActiveDay] = useState('day1');

  const programmes = useMemo(() => PROGRAMMES[activeDay] || [], [activeDay]);

  const dayButtonClass = (isActive) =>
    isActive
      ? 'bg-blue text-white curve font-bold w-full md:w-40 py-3'
      : 'bg-transparent text-blue curve border border-blue w-full md:w-40 py-3';

  return (
    <main id="programme" className="mt-32 mb-20 md:px-20 md:py-20">
      <div className="pb-8 pl-8 pr-5 md:pb-0">
        <div className="md:flex md:justify-between md:items-start md:mb-8 relative">
          <h1 className="text-pink relative z-20">
            ALL <span className="font-bold">progammes</span>
          </h1>
          <Image src={Star} alt='star icon' className='hidden md:block w-32 h-32 absolute -top-15 z-10 left-90' />
          <p className="mt-3 md:mt-0 md:max-w-xl">
            Please note that while entry is free, select events are ticketed to manage limited seating.
            Book yours early to avoid missing out!
          </p>
        </div>
      </div>

      <div className="w-full h-8 bg-pink md:hidden" />

      <div className="w-full flex items-center justify-center gap-x-4 py-5 px-5 md:px-4 md:justify-start md:mb-8">
        <button
          type="button"
          className={dayButtonClass(activeDay === 'day1')}
          onClick={() => setActiveDay('day1')}
        >
          DAY 1
        </button>
        <button
          type="button"
          className={dayButtonClass(activeDay === 'day2')}
          onClick={() => setActiveDay('day2')}
        >
          DAY 2
        </button>
        <Image src={Circles} alt='icon' className='absolute w-14 top-25 right-25 hidden md:block' />
        <Image src={Dots} alt='icon' className='absolute w-14 top-80 left-0 hidden md:block' />
        <Image src={fshine} alt='icon' className='absolute top-80 right-135 w-25 hidden md:block' />
      </div>
      <div className="programmes px-4 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-6">
        {programmes.map((item) => (
          <ProgrammeCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

function ProgrammeCard({ item }) {
  const [flipped, setFlipped] = useState(false);
  const isPaid = item.priceType === 'paid';

  // Format color mapping
  const getFormatColor = (format) => {
    const formatColors = {
      'Engagement': 'bg-red-500',
      'Entertainment': 'bg-orange-500',
      'Masterclass': 'bg-purple-600',
      'Wisdom Vault': 'bg-green-600'
    };
    return formatColors[format] || 'bg-gray-500';
  };

  // Pill styling - updated colors
  const pillClass = isPaid 
    ? 'relative top-2 z-10 text-xs! sm:text-sm! bg-pink text-white px-2 pt-2 pb-3 rounded-t-xl font-semibold' 
    : 'relative top-2 z-10 text-xs! sm:text-sm! bg-blue text-white px-2 pt-2 pb-3 rounded-t-xl font-semibold';
  
  const formatPillClass = `relative top-2 z-10 text-xs! sm:text-sm! ${getFormatColor(item.format)} text-white px-2 pt-2 pb-3 rounded-t-xl font-semibold`;

  // Card styling
  const headingClass = isPaid 
    ? 'text-sm! sm:text-base! text-pink font-bold uppercase' 
    : 'text-sm! sm:text-base! text-blue font-bold uppercase';

  const cardClass = isPaid 
    ? 'border-2 border-pink mt-2 curve px-4 py-3 bg-white' 
    : 'border-2 border-blue mt-2 curve px-4 py-3 bg-white';

  const backCardClass = isPaid 
    ? 'bg-bright mt-2 curve px-4 py-3 border-none' 
    : 'bg-blue mt-2 curve px-4 py-3 border-none';

  const backHeadingClass = isPaid 
    ? 'text-xl! sm:text-2xl! text-pink font-semibold' 
    : 'text-xl! sm:text-2xl! text-white font-semibold';

  const backTextClass = isPaid 
    ? 'mt-6 mb-2 text-black !text-lg' 
    : 'mt-6 mb-2 text-white !text-lg';

  const registerBtnClass = isPaid 
    ? 'button bg-pink text-sm! text-white curve font-bold w-auto px-4 py-2' 
    : 'button bg-blue text-sm! text-white curve font-bold w-auto px-4 py-2';

  const moreinfoBtnClass = isPaid 
    ? 'button border-2 border-pink bg-white text-sm! text-pink curve px-4 py-2 font-bold' 
    : 'button border-2 border-blue bg-white text-sm! text-blue curve px-4 py-2 font-bold';

  const textClass = 'mt-2 mb-3 text-black text-sm';

  const backRegisterBtnClass = isPaid 
    ? 'button bg-pink text-xl! text-white curve font-semibold w-full py-3' 
    : 'button bg-white text-xl! text-blue curve font-semibold w-full py-3';

  return (
    <div data-aos="zoom-out">
      <div className="flex justify-between relative z-10">
        <div className="flex gap-x-1">
          <p className={pillClass}>{isPaid ? 'Paid' : 'Free'}</p>
          <p className={formatPillClass}>{item.format}</p>
          <p className={pillClass}>{item.venue}</p>
        </div>
        <p className={pillClass}>{item.time}</p>
      </div>

      {/* Flip Container */}
      <div className="flip h-130 md:h-150 relative z-20 perspective">
        <div className={`flip-inner ${flipped ? 'is-flipped' : ''}`}>
          {/* FRONT */}
          <div className="flip-face flip-front">
            <Image 
              src={item.image} 
              className="relative z-20 border-2 border-blue rounded-xl" 
              alt="programme image" 
            />
            <div className={`${cardClass} flex flex-col justify-between`}>
              <div>
                <h2 className={headingClass}>{item.title}</h2>
                <p className={textClass}>
                  by <span className="font-semibold">{item.by}</span>
                </p>
              </div>
              <div className="flex items-center gap-x-2 mt-3">
                <button 
                  type="button" 
                  className={moreinfoBtnClass}
                  onClick={() => setFlipped(true)}
                >
                  More info
                </button>
                <button 
                  type="button" 
                  className={registerBtnClass}
                >
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className="flip-face flip-back relative">
            <div className={`${backCardClass} h-130 md:h-140 relative -top-2 z-30 flex flex-col justify-between`}>
              <div>
                <div className="flex justify-between items-start mt-2">
                  <h1 className={backHeadingClass}>{item.title}</h1>
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setFlipped(false);
                    }}
                    className={`rounded-full w-10 h-10 flex items-center justify-center text-4xl! shrink-0 cursor-pointer ${
                      isPaid 
                        ? 'bg-bright text-pink border-pink hover:opacity-60' 
                        : 'bg-blue text-white border-white hover:opacity-60'
                    }`}
                    style={{ pointerEvents: 'auto', zIndex: 100 }}
                  >
                    ×
                  </button>
                </div>
                <p className={backTextClass}>
                  {item.moreInfo || 'More information coming soon.'}
                </p>
              </div>
              <div className="flex items-center gap-x-2">
                <button 
                  type="button" 
                  className={backRegisterBtnClass}
                >
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}