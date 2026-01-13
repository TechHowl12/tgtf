'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import PROGRAMMES from './programmes';

export default function Page() {
  const [activeDay, setActiveDay] = useState('day1');

  const programmes = useMemo(() => PROGRAMMES[activeDay] || [], [activeDay]);

  const dayButtonClass = (isActive) =>
    isActive
      ? 'bg-blue text-white curve font-bold w-full py-3'
      : 'bg-transparent text-blue curve border border-blue w-full py-3';

  return (
    <main id="programme" className="mt-32 mb-10 md:mt-40 md:mb-24 px-0 md:px-14">
      <div className="pb-8 pl-8 pr-5 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-pink">
          all <span className="font-bold">progammes</span>
        </h1>
        <p className="mt-3 md:w-[40%]">
          Please note that while entry is free, select events are ticketed to manage limited seating.
          Book yours early to avoid missing out!
        </p>
      </div>

      <div className="w-full h-8 bg-pink md:hidden" />

      <div className="w-full md:w-96 flex items-center justify-center gap-x-4 py-5 px-5">
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

  const pillClass = isPaid
    ? 'relative top-2 z-10 border border-blue bg-pink text-bright px-2 pt-2 pb-3 rounded-t-xl'
    : 'relative top-2 z-10 border border-blue bg-bright text-blue px-2 pt-2 pb-3 rounded-t-xl';

  const headingClass = isPaid ? 'text-sm! text-bright font-semibold' : 'text-sm! text-blue font-semibold';

  const cardClass = isPaid ? 'bg-pink mt-3 curve px-4 py-3' : 'bg-bright mt-3 curve px-4 py-3';

  const registerBtnClass = isPaid
    ? 'button bg-bright text-sm! text-pink curve font-semibold w-32 py-1'
    : 'button bg-blue text-sm! text-white curve font-semibold w-32 py-1';

  const moreinfoBtnClass = isPaid
    ? 'button border border-bright bg-transparent text-sm! text-bright curve w-22 py-1 font-semibold'
    : 'button border border-blue bg-transparent text-sm! text-blue curve w-22 py-1 font-semibold';

  const textClass = isPaid ? 'mt-1 mb-2 text-white' : 'mt-1 mb-2 text-black ';

  return (
    <div data-aos="zoom-out">
      <div className="flex justify-between relative z-10">
        <p className={pillClass}>{item.time}</p>

        <div className="flex gap-x-1">
          <p className={pillClass}>{isPaid ? 'Paid' : 'Free'}</p>
          <p className={pillClass}>{item.venue}</p>
          <p className={pillClass}>{item.format}</p>
        </div>
      </div>

      {/* Flip Container */}
      <div className="flip h-130 md:h-152 relative z-20 overflow-hidden perspective">
        <div className={`flip-inner ${flipped ? 'is-flipped' : ''}`}>
          {/* FRONT */}
          <div className="flip-face flip-front">
            <Image
              src={item.image}
              className="relative z-20 border border-blue rounded-xl"
              alt="programme image"
            />

            <div className={cardClass}>
              <h2 className={headingClass}>{item.title}</h2>
              <p className={textClass}>{item.by}</p>

              <div className="flex items-center gap-x-2">
                <button type="button" className={moreinfoBtnClass} onClick={() => setFlipped(true)}>
                  More Info
                </button>
                <button type="button" className={registerBtnClass}>
                  REGISTER NOW
                </button>
              </div>
            </div>
          </div>

          {/* BACK */}
          <div className="flip-face flip-back">
            <div className={`${cardClass} h-130 md:h-152 bottom-3 relative z-20 flex flex-col justify-between`}>
                <h1 className={headingClass}>{item.title}</h1>
                <p className={textClass}>{item.moreInfo || 'More information coming soon.'}</p>

              <div className="flex items-center gap-x-2">
                <button type="button" className={moreinfoBtnClass} onClick={() => setFlipped(false)}>
                  Back
                </button>
                <button type="button" className={registerBtnClass}>
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
