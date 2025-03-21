"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigations = [
  { title: "Home", href: "/Home" },
  { title: "Services", href: "/services" },
  { title: "Allied Services", href: "/allied-services" },
  { title: "Our Blog", href: "/blog" },
  { title: "About Us", href: "/about" },
  { title: "Our Partners", href: "/partners" },
  { title: "Contact Us", href: "/contact" },
];
export default function Navbar() {
  const pathname = usePathname();
  const [isMobile, setIsMobile] = useState(false);
  return (
    <header
      className={`bg-red-200 sm:bg-white ${
        isMobile ? " rounded-br-[20rem]" : "bg-white"
      }`}
    >
      <nav className="flex items-center justify-between px-8">
        <Link href="/Home">
          <div className="h-[15vh] w-[15vw] relative">
            <Image
              src="/logo.png"
              alt="Dzynfox"
              fill
              className="object-contain"
            />
          </div>
        </Link>
        <div className="">
          <button
            onClick={() => setIsMobile((prev) => !prev)}
            className={`text-black px-6 py-1 border-1 rounded-xs border-black sm:hidden `}
          >
            {isMobile ? "X" : <kbd>&#9776;</kbd>}
          </button>
          <ul className="hidden sm:flex">
            {navigations.map((nav) => {
              return (
                <li
                  className={`mr-[max(10px,2vw)] text-[max(10px,1.3vw)] ${
                    pathname == nav.href ? "text-red-500" : "text-black"
                  }`}
                  key={nav.title}
                >
                  <Link href={nav.href}>{nav.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {isMobile ? (
        <div className="">
          <ul className="flex-col sm:hidden p-4 ml-6">
            {navigations.map((nav) => {
              return (
                <li
                  className={`mt-[max(5px,1vw)] text-[max(10px,1.3vw)] ${
                    pathname == nav.href ? "text-blue-500" : "text-black"
                  }`}
                  key={nav.title}
                >
                  <Link href={nav.href}>{nav.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}
