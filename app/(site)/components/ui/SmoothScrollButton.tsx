"use client";

import React from "react";

interface SmoothScrollButtonProps {
  className?: string;
}

const SmoothScrollButton: React.FC<SmoothScrollButtonProps> = ({
  className,
}) => {
  const handleClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`mt-6 text-primary-yellow bg-transparent border-3 border-primary-yellow text-xl font-semibold py-2 px-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:bg-primary-yellow hover:text-white hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-primary-yellow/50 ${className}`}
    >
      Contact Me
    </button>
  );
};

export default SmoothScrollButton;
