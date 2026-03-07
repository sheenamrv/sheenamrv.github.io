import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import NavbarLink from "./NavbarLink";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const navbarLinks = [
  { title: "About Me", path: "#about" },
  { title: "Experiences", path: "#experiences" },
  // { title: "Projects", path: "#projects" },
  { title: "Contact", path: "mailto:smrverana@gmail.com" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto mb-4">
        <Link href={"/"}>
          <Image
            src={`${basePath}/images/logo.svg`}
            alt="Sheena Verana website logo"
            width={80}
            height={80}
            className="w-[80px] h-[80px] transition-all hover:scale-110 "
          />
        </Link>
        <button
          className="md:hidden flex items-center justify-center text-2xl text-[#577BE6]"
          id="hamburger-btn"
          onClick={toggleMobileMenu}
        >
          <img
            src={
              isMobileMenuOpen
                ? `${basePath}/images/xmark.svg`
                : `${basePath}/images/menu.svg`
            }
            alt={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="w-8 h-auto transition-all hover:scale-110"
          />
          {/* <span className="material-icons">
            {isMobileMenuOpen
              ? `${basePath}/images/xmark.svg`
              : `${basePath}/images/menu.svg`}
          </span> */}
        </button>

        <div className="hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-4 md:mt-0">
            {navbarLinks.map((link, index) => (
              <li key={index} className="text-[#ffffff]">
                <NavbarLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div
          className="menu md:hidden bg-white shadow-lg p-4 rounded-[15px]"
          id="mobile-navbar"
        >
          <ul className="flex flex-col items-center space-y-4">
            {navbarLinks.map((link, index) => (
              <li key={index} className="text-[#000000]">
                <NavbarLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
