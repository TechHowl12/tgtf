"use client";
import React from "react";
import BtnArrow from "../images/btn-arrow.png";

export default function Button({
  text = "CLICK ME",
  widthClass = "w-[95%]",
  onClick = () => { },
  className = "",
  type = "button",
  ariaLabel,
  }) {
    
  const hasCustomLabel = typeof ariaLabel === "string" && ariaLabel.length > 0;

  return (
    <button
      type={type}
      onClick={onClick}
      {...(hasCustomLabel ? { "aria-label": ariaLabel } : {})}
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
      {/* visible label for sighted users */}
      {text && <span>{text}</span>}

      {/* decorative arrow */}
      <span
        className="transition-transform duration-300 group-hover:rotate-45 group-active:rotate-45"
        aria-hidden="true"
      >
        <img src={BtnArrow.src} alt="" />
      </span>
    </button>
  );
}
