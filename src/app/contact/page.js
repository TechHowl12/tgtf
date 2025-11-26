import React from "react";
import ContactForm from "../../app/components/Contact/ContactForm";
import FaqList from "../../app/components/Contact/FaqList";
import Image from "next/image";
import HalfStar from "../images/half-star.png";
import Shine from "../images/shine.svg";
import Circle from "../images/circle.png";
import Logo from "../images/logo.webp";
import star from "../images/star.webp";
import MapImage from "../images/map.png";
import Dots from "../images/four-dots.svg";

export const metadata = { title: "Contact Us" };

export default function ContactPage() {

  const googleMapsUrl = "https://www.google.com/maps/place/Jio+World+Drive/";

  return (
    <main className="min-h-screen bg-white flex flex-col items-center pt-[100px]">

      <section className="relative w-full bg-no-repeat bg-top bg-cover md:pt-10 md:pb-10 lg:pt-10 lg:pb-10">

        {/* BLUE BACKGROUND */}
        <div className="absolute inset-0 bg-blue z-0 pointer-events-none" />

        <div className="mx-auto w-full md:max-w-[1500px] px-0 md:px-12 pt-8 pb-2">

          {/* FLEX LAYOUT */}
          <div className="flex flex-col md:flex-row md:items-stretch md:justify-between gap-2 md:gap-12 lg:gap-12">

            {/* LEFT SIDE CONTENT */}
            <div className="w-full relative flex flex-col justify-between md:pl-6">
              <div className="flex flex-col md:flex-row md:items-start pl-7 md:mt-10 md:pl-0 md:gap-6">
                <Image
                  src={Logo}
                  alt="The Gypsy Travel Festival logo"
                  width={140}
                  height={180}
                  priority
                  className="hidden md:block"
                />

                <Image
                  width={36}
                  height={50}
                  src={HalfStar}
                  alt="Half Star Icon"
                  className="absolute left-0 -top-9 z-10 pointer-events-none block md:hidden"
                />

                <div className="flex flex-col">
                  <div className="relative z-20">
                    <h1 className="text-white font-bold relative z-20">
                      curious <br />about us?
                    </h1>
                    <Image width={40} height={40} src={star} alt="Star Icon" className="hidden md:flex absolute right-30 bottom-0 z-10" />
                  </div>

                  <div className="relative">
                    <p className="mt-2 md:mt-4 text-white max-w-[420px]">
                      Our team is just an email away. Whether you want to partner with us or
                      learn more about the festival, we’re here to help you around the clock.
                    </p>
                    <Image width={40} height={40} src={Circle} alt="Circle Icon" className="absolute left-0 -bottom-20 z-0" />
                  </div>
                </div>

              </div>

              <div className="hidden md:block mt-12 relative z-0">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open location in Google Maps"
                >
                  <div className="w-full rounded-2xl overflow-hidden shadow-sm">
                    <Image
                      src={MapImage}
                      alt="Map showing event location"
                      width={560}
                      height={200}
                      className="block w-full h-auto"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                    <Image width={40} height={40} src={Dots} alt="DotsIcon" className="absolute right-2 -top-10 z-0" />
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN — FORM */}
            <div className="w-full flex relative md:justify-end">
              <div className="relative z-10 bg-white rounded-2xl p-7 contact-form-card w-full">
                <ContactForm />
              </div>
              <Image
                width={48}
                height={48}
                src={Shine}
                alt="Shine star"
                className="absolute right-10 -top-6 z-0 pointer-events-none block md:hidden"
              />
            </div>

          </div>
        </div>
      </section>

      <FaqList />
    </main>
  );
}