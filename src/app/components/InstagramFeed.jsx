"use client";

import { useEffect } from "react";

export default function InstagramFeed() {
  useEffect(() => {
    // Load the Elfsight script once
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // optional cleanup
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className="elfsight-app-7ce129d5-0fc0-46d8-9e92-6456c5b4127b"
      data-elfsight-app-lazy
    ></div>
  );
}
