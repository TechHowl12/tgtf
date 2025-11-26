"use client";
import React, { useState } from "react";
import faqs from "../Contact/faq";

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState(0); // default open first

  return (
    <section className=" w-full px-5 py-8 md:py-20 md:max-w-[1550px] md:px-12 mx-auto">
      <h1 className="text-pink text-2xl mb-4">
        frequently asked <span className="font-bold">questions</span>
      </h1>

      {/* first item (open by default) */}
      {faqs.map((item, idx) => (
        <div key={idx} className={idx === 0 ? "text-sm faq-item" : "faq-item"}>
          <div className="flex items-start justify-between w-full">
            <button
              type="button"
              className="text-left flex-1 faq-header"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-expanded={openIndex === idx}
              aria-controls={`faq-${idx}`}
            >
              <p
                className="font-semibold text-gray-900"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600 }}
              >
                {item.q}
              </p>
            </button>

            <button
              type="button"
              className={`ml-3 text-[#242424] text-[20px] leading-none font-semibold faq-toggle transform transition-transform duration-300 ${
                openIndex === idx ? "rotate-180" : "rotate-0"
              }`}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              aria-hidden="true"
              tabIndex={-1}
            >
              {openIndex === idx ? "−" : "+"}
            </button>
          </div>

          <div
            id={`faq-${idx}`}
            className={`faq-answer-wrapper overflow-hidden transition-all duration-300 ${
                openIndex === idx ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
            >
            <p className="text-gray-600 text-[12px] leading-relaxed">{item.a}</p>
          </div>

          {/* divider: show except after last item */}
          {idx !== faqs.length - 1 && (
            <hr className="border-t border-[#2E31FF] my-4" />
            )}
        </div>
      ))}
    </section>
  );
}