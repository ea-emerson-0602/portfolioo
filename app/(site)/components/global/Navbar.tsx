"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

interface NavItem {
  name: string;
  href: string;
}

const navItems: NavItem[] = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projectss" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavClick = (href: string) => {
  handleClick(href)
    setIsOpen(false);
  };

  useEffect(() => {
    if (pathname === "/") {
      const initialHash = window.location.hash || "";
      setActiveHash(initialHash);

      const handleScroll = () => {
        const sections = document.querySelectorAll("section[id]");
        let currentActiveHash = "";

        sections.forEach((section) => {
          const sectionElement = section as HTMLElement;
          const sectionTop =
            sectionElement.offsetTop -
            (document.querySelector("nav")?.clientHeight || 0);
          if (window.scrollY >= sectionTop) {
            currentActiveHash = `#${section.id}`;
          }
        });

        setActiveHash(currentActiveHash);
      };

      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      setActiveHash("");
    }
  }, [pathname]);

  const handleClick = (href: string) => {
    if (pathname !== "/") {
      router.push(`/${href}`);
    // } else {
      const element = document.querySelector(href);
      if (element) {
        setActiveHash(href);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-[100vw] bg-main text-xl flex items-center justify-between py-4 px-6 md:px-16 lg:px-24 shadow-md z-50">
      {/* Logo Section */}
      <Link href="/">
        <Image src={Logo} width={60} alt="logo" />
      </Link>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center gap-x-8 text-main-grey">
        {navItems.map((item) => {
          const isActive = pathname === "/" && activeHash === item.href;
          return (
            <li key={item.name} className="relative">
              <a
                onClick={() => handleClick(item.href)}
                href={item.href}
                className={`font-semibold duration-300 ${
                  isActive ? "text-primary-yellow" : "hover:text-primary-yellow"
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
      <div className="hidden md:flex bg-[#3D3E42] px-5 py-2 gap-2 items-center rounded-lg">
        <input
          type="search"
          className="bg-transparent w-[10vw] focus:px-2 text-main-grey placeholder:text-main-grey focus:text-primary-yellow focus:outline-none focus:ring-2 focus:ring-primary-yellow focus:border-transparent focus:rounded-md"
          placeholder="Search"
        />
        <FaSearch className="text-primary-yellow" />
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <button
          className="text-white hover:text-[#FEC76A] transition"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <XIcon className="w-8 h-8 text-primary-yellow" />
          ) : (
            <MenuIcon className="w-8 h-8 text-primary-yellow" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`md:hidden ${isOpen ? "block" : "hidden"} w-full bg-main shadow-lg transition-all duration-300 absolute left-0 top-[100%] z-50 border-t-2 border-t-primary-yellow`}
      >
        {navItems.map((item) => {
          const isActive = pathname === "/" && activeHash === item.href;
          return (
            <li
              key={item.name}
              className="relative w-full text-center border-b-1 border-b-primary-yellow px-4 py-2"
            >
              <a
                onClick={() => handleNavClick(item.href)}
                href={item.href}
                className={`font-semibold duration-300 ${
                  isActive ? "text-primary-yellow" : "hover:text-primary-yellow"
                }`}
              >
                {item.name}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
