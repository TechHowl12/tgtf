'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import PROGRAMMES from './programmes';
import Star from "../images/bright-star.png";
import Shine from "../images/half-shine.png";
import Dots from "../images/green-dots.png";
import Circles from "../images/two-circles.png";
import Sun from "../images/red-sun.png";

export default function Page() {
  const [activeDay, setActiveDay] = useState('day1');

  const programmes = useMemo(() => PROGRAMMES[activeDay] || [], [activeDay]);

  const dayButtonClass = (isActive) =>
    isActive
      ? 'bg-blue text-white curve font-bold w-full md:w-40 py-3'
      : 'bg-transparent text-blue curve border border-blue w-full md:w-40 py-3';

  return (
    <main id="programme" className="mt-32 md:px-20 md:py-20">
      <div className="pb-8 pl-8 pr-5 md:pb-0">
        <div className="md:flex md:justify-between md:items-start md:mb-8 relative">
          <h1 className="text-pink relative z-20">
            ALL <span className="font-bold">progammes</span>
          </h1>
          <Image src={Star} alt='star icon' className='hidden md:block w-32 h-32 absolute -top-13 z-10 -left-12' />
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
        <Image src={Dots} alt='icon' className='absolute w-14 top-5 right-[25%] hidden md:block' />
        <Image src={Sun} alt='icon' className='absolute w-14 top-15 right-[45%] hidden md:block' />
        <Image src={Circles} alt='icon' className='absolute w-14 top-[40%] right-[50%] hidden md:block' />
        <Image src={Shine} alt='icon' className='absolute top-10 -right-15 w-50 hidden md:block' />
      </div>
      <div className="programmes px-2 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-2">
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
      'Engagement': 'bg-red',
      'Entertainment': 'bg-orange',
      'Masterclass': 'bg-purple',
      'Wisdom Vault': 'bg-green',
      'Workshop': 'bg-yellow',
    };
    return formatColors[format] || 'bg-gray-500';
  };

  // Pill styling - updated colors
  const pillClass = isPaid
    ? 'relative top-2 z-10 !text-xs md:!text-xs bg-pink text-white px-2 pt-2 pb-3 rounded-t-xl font-semibold'
    : 'relative top-2 z-10 !text-xs md:!text-xs bg-blue text-white px-2 pt-2 pb-3 rounded-t-xl font-semibold';

  const formatPillClass = `relative top-2 z-10 !text-xs md:!text-xs ${getFormatColor(item.format)} text-white px-2 pt-2 pb-3 rounded-t-xl font-semibold`;

  // Card styling
  const headingClass = isPaid
    ? 'text-sm! text-pink font-bold Capitalize'
    : 'text-sm! text-blue font-bold Capitalize';

  const cardClass = isPaid
    ? 'border-2 border-pink mt-2 curve px-4 py-3 bg-white'
    : 'border-2 border-blue mt-2 curve px-4 py-3 bg-white';

  const backCardClass = isPaid
    ? 'bg-bright mt-2 curve px-4 py-3 border-none'
    : 'bg-blue mt-2 curve px-4 py-3 border-none';

  const backHeadingClass = isPaid
    ? 'text-2xl! text-pink font-semibold'
    : 'text-2xl! text-white font-semibold';

  const backTextClass = isPaid
    ? 'mt-6 mb-2 text-black text-sm! lg:text-lg!'
    : 'mt-6 mb-2 text-white text-sm! lg:text-lg!';

  const registerBtnClass = isPaid
    ? 'button bg-pink text-sm! text-white curve font-bold w-auto px-4 py-2'
    : 'button bg-blue text-sm! text-white curve font-bold w-auto px-4 py-2';

  const moreinfoBtnClass = isPaid
    ? 'button border-2 border-pink bg-white text-sm! text-pink curve px-4 py-2 font-bold'
    : 'button border-2 border-blue bg-white text-sm! text-blue curve px-4 py-2 font-bold';

  const textClass = 'mt-2 mb-3 text-black text-xs!';

  const backRegisterBtnClass = isPaid
    ? 'button bg-pink text-xl! text-white curve font-semibold w-full py-3'
    : 'button bg-white text-xl! text-blue curve font-semibold w-full py-3';

  return (
    <main>
      <div className="flex justify-between relative z-10">
        <div className="flex gap-x-1">
          <p className={pillClass}>{isPaid ? 'Paid' : 'Free'}</p>
          <p className={formatPillClass}>{item.format}</p>
          <p className={pillClass}>{item.venue}</p>
        </div>
        <p className={pillClass}>{item.time}</p>
      </div>

      {/* Flip Container */}
      <div className="flip h-130 md:h-152 relative z-20 perspective">
        <div className={`flip-inner ${flipped ? 'is-flipped' : ''}`}>
          {/* FRONT */}
          <div 
            className="flip-face flip-front"
            style={{
              opacity: flipped ? 0 : 1,
              visibility: flipped ? 'hidden' : 'visible',
              transition: flipped ? 'opacity 0s 300ms, visibility 0s 300ms' : 'opacity 0s, visibility 0s'
            }}
          >
            <div style={{
              WebkitTransform: 'translate3d(0,0,0)',
              transform: 'translate3d(0,0,0)'
            }}>
              <Image
                src={item.image}
                className="relative z-20 border-2 border-blue rounded-xl"
                alt="programme image"
                style={{
                  WebkitBackfaceVisibility: 'hidden',
                  backfaceVisibility: 'hidden',
                  WebkitTransform: 'translateZ(0)',
                  transform: 'translateZ(0)'
                }}
              />
            </div>
            <div className={`${cardClass} min-h-40 flex flex-col justify-between`}>
              <div>
                <h2 className={headingClass}>{item.title}</h2>
                {item.by && (
                  <p className={textClass}>
                    by <span className="font-semibold">{item.by}</span>
                  </p>
                )}
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
                  onClick={() => window.open(
                    "https://www.skillboxes.com/events/ticket/the-gypsy-travel-festival",
                    "_blank"
                  )}
                >
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className="flip-face flip-back relative">
            <div className={`${backCardClass} md:mt-0 relative -top-0.5 z-20 flex flex-col gap-y-5 lg:gap-y-10 justify-between`}>
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
                    className={`rounded-full w-10 h-10 flex items-center justify-center text-2xl shrink-0 cursor-pointer ${isPaid
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
                  onClick={() => window.open(
                    "https://www.skillboxes.com/events/ticket/the-gypsy-travel-festival",
                    "_blank"
                  )}
                >
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}