"use client";

import { MoveUp } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!showButton) return null;
  return (
    <Link
      className="p-2.5 flex justify-center bg-linear-to-r from-mulearn-trusty-blue to-mulearn-duke-purple rounded-[140px] fixed bottom-3 right-6 md:bottom-10 md:right-10  cursor-pointer"
      href="#home"
    >
      <MoveUp className="w-10 h-9 text-mulearn-whitish" />
    </Link>
  );
}
