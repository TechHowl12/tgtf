"use client";
import { useEffect, useState } from "react";
import register from "../images/register.png";
import Image from "next/image";

export default function WhatsAppFloat() {
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const first = document.querySelector("#first-section");
        const footer = document.querySelector("#site-footer");

        // If elements not found, don’t hide
        if (!first && !footer) return;

        const observer = new IntersectionObserver(
            (entries) => {
                // hide if ANY of the watched sections are visible
                const anyVisible = entries.some((e) => e.isIntersecting);
                setHidden(anyVisible);
            },
            {
                threshold: 0.6, // 20% visible = count as "in view"
            }
        );

        if (first) observer.observe(first);
        if (footer) observer.observe(footer);

        return () => observer.disconnect();
    }, []);

    if (hidden) return null;

    return (
        <>
            <a
                href="https://wa.me/919876543210?text=Hi!%20I'm%20interested%20in%20The%20Gypsy%20Travel%20Festival"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] rounded-full w-14 h-14 md:flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Chat on WhatsApp"
            >
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                    alt="WhatsApp"
                    width="28"
                    height="28"
                />
            </a>
            <a
                href="https://www.skillboxes.com/events/the-gypsy-travel-festival"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 md:left-6 z-50"
            >
                <Image src={register} alt="Register Now" width={120} height={50} />
            </a>
        </>
    );
};