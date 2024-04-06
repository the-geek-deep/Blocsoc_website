"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import banner from "@/assets/banner.svg";
import logo from "@/assets/logo.svg";
import "@/styles/navbar.css";

const Header = ({ active }: { active: string }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = navRef.current as HTMLDivElement;
    if (target.classList.contains("overlay-open"))
      target.classList.remove("overlay-open");
    else target.classList.add("overlay-open");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" my-32 py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-6">
          <Image src={banner} alt="BlocSoc IITR" height={73} />
          {/* <h1 className="text-5xl font-bold tracking-tight">BlocSoc</h1> */}
        </div>
        <nav ref={navRef} className={`flex flex-col md:block text-xl overlay `}>
          <div className="mx-auto pt-8 md:hidden">
          <Image alt='logo' src={logo} />
          </div>
          <ul className="nav-container overlay-content">
            <li className={`grid-item ${active == "home" ? "active" : ""}`}>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li className={`grid-item ${active == "about" ? "active" : ""}`}>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li className={`grid-item ${active == "team" ? "active" : ""}`}>
              <Link href="/team" className="hover:text-gray-300">
                Team
              </Link>
            </li>
            <li className={`grid-item ${active == "projects" ? "active" : ""}`}>
              <Link href="/projects" className="hover:text-gray-300">
                Projects
              </Link>
            </li>
            <li className={`grid-item ${active == "blog" ? "active" : ""}`}>
              <Link href="/blog" className="hover:text-gray-300">
                Blog
              </Link>
            </li>
            <li className={`grid-item ${active == "contact" ? "active" : ""}`}>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="md:hidden z-10">
          <button onClick={toggleMenu} className="focus:outline-none">
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
