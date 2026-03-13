"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import fallback from "../../images/fallback.webp";
gsap.registerPlugin(ScrollTrigger);
const Banner = () => {
  const mobileVideoRef = useRef(null);
  const desktopVideoRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  // global "video ready" state (mobile or desktop)
  const [isVideoReady, setIsVideoReady] = useState(false);
  const getActiveVideo = useCallback(() => {
    if (typeof window === "undefined") return null;
    const isDesktop = window.innerWidth >= 768;
    return isDesktop ? desktopVideoRef.current : mobileVideoRef.current;
  }, []);
  // autoplay on mount
  useEffect(() => {
    const video = getActiveVideo();
    if (!video) return;
    video.muted = true; // ensure muted before autoplay attempt
    const p = video.play();
    // ✅ ensure we show the video as soon as we attempt to play
    setIsVideoReady(true);
    if (p && typeof p.catch === "function") {
      p.catch(() => {
        setIsPaused(true);
        setShowButton(true);
      });
    }
  }, [getActiveVideo]);
  const togglePlay = () => {
    const video = getActiveVideo();
    if (!video) return;
    if (video.paused) {
      video.play();
      setIsPaused(false);
      setTimeout(() => setShowButton(false), 500);
    } else {
      video.pause();
      setIsPaused(true);
      setShowButton(true);
    }
  };
  const toggleMute = (e) => {
    e.stopPropagation(); // don't trigger play/pause on container click
    const video = getActiveVideo();
    if (!video) return;
    const nextMuted = !isMuted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };
  // handler when video has loaded enough to play
  const handleVideoLoaded = () => {
    if (!isVideoReady) {
      setIsVideoReady(true);
    }
  };
  return (
    <div id="first-section" className="relative w-full mt-12 md:h-auto h-screen">
      {/* FALLBACK IMAGE (shown until video is ready) */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={fallback}
          alt="Banner fallback"
          fill
          className={`object-cover transition-opacity duration-500 ${
            isVideoReady ? "opacity-0" : "opacity-100"
          }`}
        />
      </div>
      {/* MOBILE */}
      <div className="md:hidden w-full h-screen relative" onClick={togglePlay}>
        <video
          ref={mobileVideoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
          playsInline
          loop
          autoPlay
          muted={isMuted}
          preload="auto"
          onLoadedData={handleVideoLoaded}
          onCanPlay={handleVideoLoaded}
          onPause={() => {
            setIsPaused(true);
            setShowButton(true);
          }}
          onPlay={() => {
            setIsPaused(false);
            setTimeout(() => setShowButton(false), 500);
          }}
        >
          <source src="/mobile-banner.mp4" type="video/mp4" />
        </video>
        {/* Play/Pause Overlay */}
        <button
          aria-label={isPaused ? "Play video" : "Pause video"}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500
          ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center">
            {isPaused ? (
              <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
              </svg>
            )}
          </div>
        </button>
      </div>
      {/* DESKTOP */}
      <div
        className="hidden md:block relative w-full"
        onMouseEnter={() => {
          if (!isPaused) setShowButton(true);
        }}
        onMouseLeave={() => {
          if (!isPaused) setShowButton(false);
        }}
      >
        <video
          ref={desktopVideoRef}
          className={`w-full h-auto block transition-opacity duration-500 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
          playsInline
          loop
          autoPlay
          muted={isMuted}
          preload="auto"
          onLoadedData={handleVideoLoaded}
          onCanPlay={handleVideoLoaded}
          onPause={() => {
            setIsPaused(true);
            setShowButton(true);
          }}
          onPlay={() => {
            setIsPaused(false);
            setTimeout(() => setShowButton(false), 500);
          }}
        >
          <source src="/banner_new.mp4" type="video/mp4" />
        </video>
        {/* Play/Pause Overlay */}
        <button
          aria-label={isPaused ? "Play video" : "Pause video"}
          onClick={togglePlay}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500
          ${showButton ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        >
          <div className="w-16 h-16 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center">
            {isPaused ? (
              <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            ) : (
              <svg width="28" height="28" fill="#fff" viewBox="0 0 24 24">
                <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
              </svg>
            )}
          </div>
        </button>
      </div>
      {/* MUTE / UNMUTE BUTTON */}
      <button
        onClick={toggleMute}
        className="absolute bottom-6 right-6 z-30 w-12 h-12 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center"
        aria-label={isMuted ? "Unmute video" : "Mute video"}
      >
        {isMuted ? (
          <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24">
            <path d="M16.5 12a4.5 4.5 0 0 0-1.2-3.1l-1.4 1.4A2.5 2.5 0 0 1 14.5 12c0 .7-.3 1.4-.6 1.7l1.4 1.4A4.5 4.5 0 0 0 16.5 12z" />
            <path d="M19 12a7 7 0 0 0-2-4.9l-1.4 1.4A5 5 0 0 1 17 12a5 5 0 0 1-1.4 3.5l1.4 1.4A7 7 0 0 0 19 12z" />
            <path d="M3 9v6h4l5 4V5L7 9H3z" />
            <path d="M22 2 2 22" stroke="#fff" strokeWidth="2" />
          </svg>
        ) : (
          <svg width="22" height="22" fill="#fff" viewBox="0 0 24 24">
            <path d="M16.5 12a4.5 4.5 0 0 0-1.6-3.4l-1.4 1.4A2.5 2.5 0 0 1 14.5 12c0 .8-.3 1.5-.7 1.9l1.4 1.4A4.5 4.5 0 0 0 16.5 12z" />
            <path d="M19 12a7 7 0 0 0-2.6-5.4l-1.4 1.4A5 5 0 0 1 17 12a5 5 0 0 1-1.9 4l1.4 1.4A7 7 0 0 0 19 12z" />
            <path d="M3 9v6h4l5 4V5L7 9H3z" />
          </svg>
        )}
      </button>
    </div>
  );
};
export default Banner;