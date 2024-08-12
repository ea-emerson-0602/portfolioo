"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    // Set initial active state based on URL hash
    const initialHash = window.location.hash || "";
    setActiveHash(initialHash);

    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let currentActiveHash = "";

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop;
        if (window.scrollY >= sectionTop - 100) {
          // Adjust offset as needed
          currentActiveHash = `#${section.id}`;
        }
      });

      setActiveHash(currentActiveHash);
      if (currentActiveHash && window.location.hash !== currentActiveHash) {
        window.history.pushState(null, "", currentActiveHash);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveHash(href);
      window.history.pushState(null, "", href);
    }
  };

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-main text-xl flex items-center justify-between py-4 md:px-16 lg:px-24 px-6 shadow-md z-50">
      {/* Logo Section */}
      <Link href="/">
        <Image src={Logo} width={60} alt="logo" />
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-x-8 text-main-grey">
        {navItems.map((item) => {
          const isActive = activeHash === item.href;
          return (
            <li key={item.name} className="relative">
              <a
                onClick={() => handleClick(item.href)}
                href={item.href}
                className={`font-semibold duration-300 ${
                  isActive
                    ? "text-primary-yellow "
                    : "hover:text-primary-yellow"
                }`}
              >
                {item.name}
              </a>
              {isActive && (
                <span className="absolute left-0 right-0 rounded-full bottom-[-8px] h-[4px] bg-primary-yellow"></span>
              )}
            </li>
          );
        })}
      </ul>

      {/* Search Bar */}
      <div className="bg-[#3D3E42] px-5 py-2 gap-2 flex items-center rounded-lg">
  <input
    type="search"
    className="bg-transparent w-[10vw] focus:px-2 text-main-grey placeholder:text-main-grey focus:text-primary-yellow focus:outline-none focus:ring-2 focus:text-sm focus:ring-primary-yellow focus:border-transparent focus:rounded-md"
    placeholder="Search"
  />
  <FaSearch className="text-primary-yellow" />
</div>

    </nav>
  );
}
