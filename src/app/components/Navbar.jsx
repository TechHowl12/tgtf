"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import JioLogo from "../images/jio-logo.png";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT US", href: "/about" },
  // { label: "PARTNERS", href: "/partners" },
  // { label: "PROGRAMMING", href: "/programming" },
  { label: "CONTACT US", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const marqueeCount = 18;
  const marqueeText = Array.from({ length: marqueeCount }, (_, i) => (
    <span key={i} className="marquee-text">
      BUY TICKETS
    </span>
  ));

  const closeMenu = () => setOpen(false);

  return (
    <div className="fixed top-0 z-50 w-full">
      <header className="bg-[#242424]">
        <nav className="py-3 flex justify-between items-center px-4">
          {/* Left: Desktop Nav */}
          <ul className="hidden md:flex gap-x-4 text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`transition-colors duration-200 font-semibold ${
                    isActive(link.href) ? "text-bright" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-lg p-2 text-white outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/40"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M6 6l12 12M18 6l-12 12" stroke="#FFFF00" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                <path d="M3 6h18M3 12h18M3 18h18" stroke="#FFFF00" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            )}
          </button>

          <div className="flex items-center gap-x-6">
            <p className="text-bright font-bold date">7th &amp; 8th feb 2026</p>
            <Image
              src={JioLogo}
              alt="Jio Logo"
              width={104}
              height={23.09}
              className="md:w-[135px]"
              priority
            />
          </div>
        </nav>

        {/* Mobile Menu Panel */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height] duration-300 bg-[#242424] z-50 relative ${
            open ? "max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-y-3 px-4 pb-4 text-white">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className={`block py-2 font-semibold ${
                    isActive(link.href) ? "text-bright" : "text-white"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dim overlay when open (tap to close) */}
        {open && (
          <button
            aria-hidden
            tabIndex={-1}
            className="fixed inset-0 bg-black/10 md:hidden z-40"
            onClick={closeMenu}
          />
        )}
      </header>

      {/* MARQUEE (DRY) */}
      <div className="overflow-hidden whitespace-nowrap bg-white text-blue py-1">
        {[0, 1].map((i) => (
          <div key={i} className="marquee" aria-hidden={i === 1}>
            {marqueeText}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
