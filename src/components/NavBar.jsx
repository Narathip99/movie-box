import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.png";

export const NavBar = () => {
  const [scorolling, setScorolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setScorolling(true);
      } else {
        setScorolling(false);
      }
    };
    // Add the event listener
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav  className={
      `py-4 fixed top-0 w-full z-10 transition duration-500
      ${scorolling ? "bg-black backdrop-filter backdrop-blur-lg bg-opacity-80" : "bg-transparent"}`
    }>
      <div className="container mx-auto flex items-center justify-between text-white">
        {/* left */}
        <div className="left flex items-center">
          <img src={logo} alt="logo" className="mr-6" />
          <h2 className="font-semibold">MovieBox</h2>
        </div>
        {/* center */}
        <div className="center"></div>
        {/* right */}
        <div className="right flex items-center">
          <h2 className="font-semibold">Sign In</h2>
        </div>
      </div>
    </nav>
  );
};
