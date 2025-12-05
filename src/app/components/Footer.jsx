"use client"
import React from "react";
import Threads from "../images/threads.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import X from "../images/x.png";
import Youtube from "../images/youtube.png";
import Whatsapp from "../images/whatsapp.png";
import Linkedin from "../images/linkedin.png";
import skillbox from "../images/skillbox.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      icon: Instagram,
      url: "https://www.instagram.com/thegypsytravelfestival",
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/company/thegypsytravelfestival/",
    },
    { icon: Youtube, url: "https://www.youtube.com/@TheGypsyTravelFestival" },
    { icon: Whatsapp, url: "https://wa.me/918657511329" },
    { icon: Facebook, url: "https://www.facebook.com/gypsytravelnetwork" },
    { icon: Threads, url: "https://www.threads.com/@thegypsytravelfestival" },
    { icon: X, url: "https://x.com/TGTF__" },
  ];

  return (
    <div id="site-footer" className="bg-[#242424] py-8 xl:py-6 px-4 xl:px-8 flex flex-col gap-y-4 md:gap-y-10"
    >
      {/* Top Section */}
      <div className="flex flex-col md:flex-row gap-y-6 w-full justify-between">
        <h1 className="text-white">
          <span className="font-bold">Join</span> India's foremost
          <br /> celebration of travel
        </h1>

        {/* Center-align the items */}
        <div className="text-white text-xs md:text-sm lg:text-lg grid grid-cols-4 md:grid-cols-2 gap-y-2 md:gap-x-2 lg:gap-x-4 xl:gap-x-6 place-items-start md:place-items-start">
          <Link href="/contact" className="hover:opacity-80">
            Contact Us
          </Link>
          <Link
            href="/terms.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 ml-3 md:ml-0"
          >
            T&C
          </Link>
          <Link href="/contact/#faq" className="hover:opacity-80">
            FAQs
          </Link>
          <Link href="/" className="hover:opacity-80">
            Privacy Policy
          </Link>
        </div>
      </div>

      {/* Social Icons */}
      <div className="flex flex-col-reverse md:flex-row justify-between items-start md:items-end">
        <div className="flex items-center gap-x-4">
          {socialLinks.map(({ icon, url }, index) => (
            <Link
              key={index}
              href={url}
              target="_blank"
              className="transition-transform duration-300 hover:-translate-y-2"
            >
              <Image src={icon.src} width={34} height={34} alt="social-icon" />
            </Link>
          ))}
        </div>
        <div
          onClick={() =>
            window.open(
              "https://www.skillboxes.com/events/the-gypsy-travel-festival",
              "_blank"
            )
          }
          className="flex flex-col items-start mr-0 md:mr-7 mt-4 md:mt-0 cursor-pointer"
        >
          <p className="text-white">Ticketing Partner</p>
          <Image
            className="mb-4 md:-mb-4 -ml-3"
            src={skillbox.src}
            width={250}
            height={50}
            alt="skillbox-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
