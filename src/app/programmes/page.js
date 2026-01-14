'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import PROGRAMMES from './programmes';

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
        <div className="md:flex md:justify-between md:items-start md:mb-8">
          <h1 className="text-pink">
            ALL <span className="font-bold">progammes</span>
          </h1>
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
    ? 'relative top-2 z-10 border border-pink text-pink px-2 pt-2 pb-3 rounded-t-xl'
    : 'relative top-2 z-10 border border-blue text-blue px-2 pt-2 pb-3 rounded-t-xl';

  const headingClass = isPaid ? 'text-base! text-pink font-semibold' : 'text-base! text-blue font-semibold';

  const cardClass = isPaid ? 'border border-pink mt-2 curve px-4 py-3' : 'border border-blue mt-2 curve px-4 py-3';

  const backCardClass = isPaid
    ? 'bg-bright mt-2 curve px-4 py-3 border-none'
    : 'bg-blue mt-2 curve px-4 py-3 border-none';

  const backHeadingClass = isPaid ? 'text-2xl! text-pink font-semibold' : 'text-2xl! text-white font-semibold'; // White text for back

  const backTextClass = isPaid ? 'mt-6 mb-2 text-black !text-lg' : 'mt-6 mb-2 text-white !text-lg'; // White text for back

  const registerBtnClass = isPaid
    ? 'button bg-pink text-sm! text-white curve font-semibold w-32 py-1'
    : 'button bg-blue text-sm! text-white curve font-semibold w-32 py-1';

  const moreinfoBtnClass = isPaid
    ? 'button border border-pink bg-transparent text-sm! text-pink curve w-22 py-1 font-semibold'
    : 'button border border-blue bg-transparent text-sm! text-blue curve w-22 py-1 font-semibold';

  const textClass = isPaid ? 'mt-1 mb-2 text-black font-semibold' : 'mt-1 mb-2 text-black font-semibold';

  const backRegisterBtnClass = isPaid ? 'button bg-pink  text-xl! text-bright curve font-semibold w-full py-3'
                                      : 'button bg-white text-xl! text-blue curve font-semibold w-full py-3';

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
      <div className="flip h-130 md:h-152 relative z-20 perspective">
        <div className={`flip-inner ${flipped ? 'is-flipped' : ''}`}>
          {/* FRONT */}
          <div className="flip-face flip-front">
            <Image
              src={item.image}
              className="relative z-20 border border-blue rounded-xl"
              alt="programme image"
            />

            <div className={`${cardClass} min-h-[180px] flex flex-col justify-between`}>
              <h2 className={headingClass}>{item.title}</h2>
              <p className={textClass}>by {item.by}</p>

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
          <div className="flip-face flip-back relative">
            <div className={`${backCardClass} h-130 md:h-152 md:mt-0 relative z-20 flex flex-col justify-between`}>
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
                    className={`rounded-full w-10 h-10 flex items-center justify-center text-2xl shrink-0 cursor-pointer ${
                      isPaid
                        ? 'bg-bright text-pink border-pink hover:opacity-60'
                        : 'bg-blue text-white border-white hover:opacity-60'
                    }`}
                    style={{ pointerEvents: 'auto', zIndex: 100 }}
                  >
                    ×
                  </button>
                </div>
               
                <p className={backTextClass}>{item.moreInfo || 'More information coming soon.'}</p>
              </div>

              <div className="flex items-center gap-x-2">
                <button type="button" className={backRegisterBtnClass}>
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