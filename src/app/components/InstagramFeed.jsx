"use client";
import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import arrow from "../images/next-arrow.png";
import verified from "../images/verified.png"; 

export default function InstagramFeed() {
  const [profile, setProfile] = useState(null);
  const [posts, setPosts] = useState([]);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    async function fetchAll() {
      try {
        const res = await fetch("/api");

        if (!res.ok) {
          const text = await res.text();
          console.error("API /api failed:", res.status, text);
          return;
        }

        const data = await res.json();

        setProfile(data.profile);
        const uniquePosts = (data.posts.filter((p) => p.id !== "18186942055344754"));        
        setPosts(uniquePosts);
      } catch (err) {
        console.error("Instagram API error:", err);
      }
    }

    fetchAll();
  }, []);

  if (!profile || posts.length === 0) {
    return (
      <div className="flex w-full justify-center py-8">
        <p className="text-sm text-gray-500">Loading Instagram feed...</p>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col flex-center">

      <div
        onClick={() => window.open(profile.link, "_blank")}
        className="flex items-center gap-2 mb-7 cursor-pointer"
      >
        <div className="p-1 rounded-full bg-linear-to-tr from-pink-500 to-yellow-400">
          <div className="bg-white p-1 rounded-full shadow-lg">
            <img
              src={profile.picture}
              alt={profile.username}
              className="w-16 h-16 rounded-full object-cover"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="font-semibold text-sm">{profile.name}</p>

          <div className="flex items-center gap-1 text-xs text-gray-600">
            <span>@{profile.username}</span>
            <Image src={verified} alt="Verified" width={14} height={14} />
          </div>
        </div>
      </div>

      <div className="relative w-full px-5 md:px-14">
        <button
          ref={prevRef}
          className="hidden md:flex absolute left-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer"
        >
          <Image
            src={arrow}
            alt="Prev Arrow"
            width={26}
            height={26}
            className={`rotate-180 ${isBeginning ? "opacity-40" : "opacity-100"}`}
          />
        </button>

        {/* RIGHT BUTTON */}
        <button
          ref={nextRef}
          className="hidden md:flex absolute right-4 top-1/2 z-10 -translate-y-1/2 cursor-pointer"
        >
          <Image
            src={arrow}
            alt="Next Arrow"
            width={26}
            height={26}
            className={`${isEnd ? "opacity-40" : "opacity-100"}`}
          />
        </button>
        <Swiper
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {posts.map((post) => (
            <SwiperSlide key={post.id}>
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="block aspect-square w-full overflow-hidden rounded-xl"
              >
                <img
                  src={
                    post.media_type === "VIDEO"
                      ? post.thumbnail_url
                      : post.media_url
                  }
                  alt={post.caption || ""}
                  className="h-full w-full object-cover"
                />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
