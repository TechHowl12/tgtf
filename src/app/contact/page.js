import React from "react";
import ContactForm from "../../app/components/Contact/ContactForm";
import FaqList from "../../app/components/Contact/FaqList";
import Image from "next/image";
import HalfStar from "../images/half-star.png";
import Shine from "../images/shine.svg";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center pt-[100px]">

      <section className="relative w-full bg-no-repeat bg-top bg-cover md:pt-10 md:pb-10 lg:pt-10 lg:pb-10">

        <div className="absolute inset-0 bg-blue z-0 pointer-events-none" />

        <div className="mx-auto w-full md:max-w-[1500px] px-0 md:px-12 pt-8 pb-2">

          {/* FLEX LAYOUT - mobile stacked, md+ 2:3 split (no grid) */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-12 lg:gap-12">

            {/* LEFT: heading + optional paragraph */}
            <div className="w-full md:w-2/5 relative">
              {/* HalfStar: visible on mobile only */}
              <Image
                width={36}
                height={50}
                src={HalfStar}
                alt="Half Star Icon"
                className="absolute left-0 top-2 z-10 pointer-events-none block md:hidden"
              />

              <h1 className="relative z-20 text-white text-3xl font-bold leading-tight tracking-tight mt-6 mb-6 md:mt-0 md:mb-0 ml-9 md:ml-9">
                curious <span className="block">about us?</span>
              </h1>

              {/* paragraph: hidden on mobile, visible on md+ */}
              <p className="hidden md:block mt-3 text-white/90 md:mt-6 md:ml-9">
                Our team is just an email away. Whether you want to partner with us or learn more about the festival, we’re here to help you around the clock.
              </p>

              {/* Shine: visible on mobile only */}
              <Image
                width={48}
                height={48}
                src={Shine}
                alt="Shine star"
                className="absolute right-10 top-12 z-0 pointer-events-none block md:hidden"
              />
            </div>

            {/* RIGHT: form - spans 3/5 of width on md+, centered on mobile */}
            <div className="w-full md:w-3/5 flex md:justify-end">
              <div className="relative z-10 bg-white rounded-2xl p-7 contact-form-card w-full max-w-full md:max-w-[520px]">
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      <FaqList />
    </main>
  );
}