"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import "./nav.css";
import { linksData } from "@/lib/Links";
import { usePathname } from "next/navigation";
import { Divide as Hamburger } from "hamburger-react";
import Link from "next/link";
import Drawer from "@mui/joy/Drawer";

const Navbar = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [open, setOpen] = React.useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [windowScrolled, setWindowScrolled] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isScrolledDown = currentScrollPos < prevScrollPos;
      setWindowScrolled(window.scrollY === 0);

      setVisible(isScrolledDown);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const toggleDrawer =
    (inOpen: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setOpen(inOpen);
    };

  return (
    <section className="w-full flex justify-center">
      <nav
        className={` fixed w-full py-2 z-40 left-0 ${
          windowScrolled ? "bg-transparent" : "bg-black"
        }
           ${visible ? "transleteNavUp" : "transleteNav"}`}
      >
        <div className="container flex justify-between">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/images/logo.png"
              alt="logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <p className="font-poppins text-2xl tracking-wide	 text-white">
              <span>Boost</span>
              Web
            </p>
          </Link>

          {/* Desktop Navigation */}
          <div className="lg:flex hidden">
            <div className="flex gap-3 md:gap-5">
              <ul className="flex gap-4 items-center">
                {linksData.data.map((item, index) => (
                  <li
                    key={index}
                    className={`${pathname === item.path ? "" : "hover_nav"}`}
                  >
                    <a
                      href={item.path}
                      className={`nav_list ${
                        pathname === item.path ? "active_nav" : ""
                      }`}
                    >
                      {item.titles}
                    </a>
                  </li>
                ))}
                <li>
                  <Link href="#contact" className="btn ml-4">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="lg:hidden flex relative" ref={navRef}>
            <button className=" z-50">
              <Hamburger
                toggled={open}
                toggle={setOpen}
                label="Show menu"
                size={24}
                color="#343a40"
                rounded
              />
            </button>
          </div>
        </div>
      </nav>
      <Drawer
        anchor="top"
        open={open}
        onClose={toggleDrawer(false)}
        className=" drawer_custom translate-y-[64px] !z-30"
      >
        <div className={`bg-black w-full px-3  py-3 shadow-md`}>
          <ul className="flex flex-col gap-4">
            {linksData.data.map((item, index) => (
              <li key={index} className={`flex `}>
                <a
                  href={item.path}
                  className={`nav_list ${
                    pathname === item.path ? "active_nav" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <div
                    className={` ${
                      pathname === item.path ? "active_nav" : "hover_nav"
                    }`}
                  >
                    {item.titles}
                  </div>
                </a>
              </li>
            ))}
            <li className="flex" onClick={() => setOpen(false)}>
              <Link href="#contact" className="btn pb-2">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Drawer>
    </section>
  );
};

export default Navbar;
