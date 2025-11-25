import React from 'react';
import Threads from "../images/threads.png";
import Instagram from "../images/instagram.png";
import Facebook from "../images/facebook.png";
import X from "../images/x.png";
import Youtube from "../images/youtube.png";
import Whatsapp from "../images/whatsapp.png";
import Linkedin from "../images/linkedin.png";
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {

    const socialLinks = [
        { icon: Threads, url: "https://www.threads.com/@thegypsytravelfestival" },
        { icon: Instagram, url: "https://www.instagram.com/thegypsytravelfestival" },
        { icon: Facebook, url: "https://www.facebook.com/gypsytravelnetwork" },
        { icon: X, url: "https://x.com/TGTF__" },
        { icon: Youtube, url: "https://www.youtube.com/@TheGypsyTravelFestival" },
        { icon: Whatsapp, url: "https://wa.me/918657511329" },
        { icon: Linkedin, url: "https://www.linkedin.com/company/thegypsytravelfestival/" },
    ];

    return (
        <div className="bg-[#242424] py-8 xl:py-6 px-4 xl:px-8 flex flex-col gap-y-20">

            {/* Top Section */}
            <div className="flex flex-col md:flex-row gap-y-6 w-full justify-between">
                <h1 className="text-white">
                    <span className="font-bold">Join</span> India's foremost<br /> celebration of travel
                </h1>

                {/* Center-align the items */}
                <div className="text-white text-xs md:text-sm lg:text-lg grid grid-cols-4 md:grid-cols-2 gap-y-2 md:gap-x-2 lg:gap-x-4 xl:gap-x-6 place-items-center md:place-items-start">
                    <Link href="/contact" className="hover:opacity-80">Contact Us</Link>
                    <Link href="/terms.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">T&C</Link>
                    <Link href="/contact" className="hover:opacity-80">FAQs</Link>
                    <Link href="/" className="hover:opacity-80">Privacy Policy</Link>
                </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-x-4">
                {socialLinks.map(({ icon, url }, index) => (
                    <Link
                        key={index}
                        href={url}
                        target="_blank"
                        className="transition-transform duration-300 hover:-translate-y-1"
                    >
                        <Image src={icon.src} width={34} height={34} alt="social-icon" />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Footer;
