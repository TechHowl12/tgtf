import React from 'react';
import MasterClass from "../../images/masterclass.webp";
import Itenaries from "../../images/itenaries.webp";
import Festival from "../../images/festival.webp";
import Brand from "../../images/brand.webp";
import Workshop from "../../images/workshop.webp";
import Cuisine from "../../images/cuisine.webp";
import RedSun from "../../images/red-sun.png";

const cards = [
  { id: 1, label: '5300+\nATTENDEES', color: 'bg-pink text-white', image: MasterClass },
  { id: 2, label: '7 CUISINES\nSERVED', color: 'bg-bright text-black', image: Cuisine },
  { id: 3, label: '20+ UNIQUE\nEXPERIENCES', color: 'bg-green text-black', image: Festival },
  { id: 4, label: '30+ TRAVEL\nWORKSHOPS', color: 'bg-orange text-white', image: Workshop },
  { id: 5, label: '35 PARTNER\nBRANDS', color: 'bg-purple text-white', image: Brand },
  { id: 6, label: '7 CONTESTS', color: 'bg-red text-white', image: Itenaries }
];

export default function Collective() {
  return (
    <section className="pt-8 pb-12 bg-blue text-white">
      <div className="py-3 px-6 xl:px-14">
        <div className="relative mb-4 z-0">
          <h1 className="text-white relative z-10 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight">
            <span className="font-bold">THE LAST TIME</span><br />
            THE COLLECTIVE<br />
            came TOGETHER
          </h1>

          <img
            src={RedSun.src}
            alt="red sun"
            className="absolute -left-6 -top-6 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:-left-8 lg:-top-8 z-0"
            aria-hidden
          />
        </div>

        <p className="text-white mb-4 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed">
          In February of 2025, we brought the trailblazers of the travel industry under one roof and further ignited India’s appetite for travel.
        </p>

        <p className="text-white mb-6 text-sm sm:text-base md:text-lg lg:text-lg leading-relaxed">
          In February of 2026, we are expanding our horizons and bringing a bigger, bolder showcase for you.
        </p>
      </div>

      <div className="w-full px-6 xl:px-14 grid grid-cols-2 md:grid-cols-3 gap-4">
        {cards.map((c) => (
          <article
            key={c.id}
            className="relative rounded-xl overflow-hidden"
          >
            <img
              src={c.image.src}
              alt={`card-${c.id}`}
              className="w-full h-56 lg:h-72 xl:h-80 object-cover block"
            />

            <div className={`absolute left-2 bottom-2 lg:left-3 lg:bottom-3 px-1 py-1 rounded-md text-xs font-bold leading-tight ${c.color} shadow-md`}>
              {c.label.split('\n').map((line, i) => (
                <small className="block text-lg xl:text-2xl leading-4 xl:leading-5" key={i}>{line}</small>
              ))}
            </div>

            <div className="absolute inset-0 rounded-xl pointer-events-none" />
          </article>
        ))}
      </div>
    </section>
  );
}
