"use client"
import Image from "next/image";
import Link from "next/link";
import Logo from "../../icons/logo.png";
import { usePathname } from "next/navigation"; 
import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  const pathname = usePathname();  

  const navItems = ["About", "Projects", "Contact"];

  return (
    <nav className="text-xl flex items-center justify-between py-6 md:py-8 lg:py-10 md:px-16 lg:px-24 px-6">
      {/* Logo Section */}
      <Link href="/">
        <Image src={Logo} width={60} alt="logo" />
      </Link>

      {/* Navigation Links */}
      <ul className="flex items-center gap-x-8 text-main-grey">
        {navItems.map((text) => {
          const isActive = pathname === `/${text.toLowerCase()}`;
          return (
            <li key={text} className="relative">
              <Link
                href={`/${text.toLowerCase()}`}
                className={`font-semibold duration-300 ${
                  isActive
                    ? "text-primary-yellow  border-primary-yellow"
                    : "hover:text-primary-yellow"
                }`}
              >
                {text}
              </Link>
              {isActive && (
                <span className="absolute left-0 right-0 bottom-[-8px] h-[4px] bg-primary-yellow"></span>
              )}
            </li>
          );
        })}
      </ul>

      {/* Search Bar */}
      <div className="bg-[#3D3E42] px-5 py-2 gap-2 flex items-center rounded-lg">
        <input
          type="search"
          className="bg-transparent w-[10vw] text-main-grey"
          placeholder="Search"
        />
        <FaSearch className="text-main-grey" />
      </div>
    </nav>
  );
}
