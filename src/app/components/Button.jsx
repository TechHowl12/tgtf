"use client";
import React from "react";
import BtnArrow from "../images/btn-arrow.png";

export default function Button({
  text = "CLICK ME",
  widthClass = "w-[95%]",
  onClick = () => {},
  className = "",
  type = "button",
}) {
  return (
    <button
      onClick={onClick}
      className={`
        ${widthClass}
        bg-pink text-bright py-4 mx-auto 
        flex justify-center items-center gap-1 
        curve font-bold
        active:scale-[0.97] 
        transition-all duration-200
        group
        ${className}
      `}
    >
      <span>{text}</span>

      {/* arrow */}
      <span className="transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45">
        <img src={BtnArrow.src} alt="arrow" />
      </span>
    </button>
  );
}
