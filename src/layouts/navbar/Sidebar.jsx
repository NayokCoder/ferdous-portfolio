"use client";

import Image from "next/image";
import { FaDribbble, FaInstagram, FaFacebook } from "react-icons/fa";
import { BsGlobe2 } from "react-icons/bs";
import { ArrowUpRight } from "lucide-react";
import { GiStripedSun } from "react-icons/gi";
import { ThemeToggle } from "@/components/ThemeToggle";

const Sidebar = ({ className }) => {
  return (
    <div className={` h-screen flex items-center  ${className || ""}`}>
      <div className="flex flex-col items-center gap-6 w-xl sidebar-card p-6 rounded-3xl shadow-xl relative">
        {/* Profile Image */}
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/asset/unnamed.jpg" // put your image in public/ folder
            alt="Profile"
            width={400}
            height={200}
            className="rounded-2xl object-cover"
          />
        </div>

        {/* Name */}
        <h2 className="profile-name">Md. Ferdous Alam</h2>

        {/* Email & Location */}
        <div className="text-center space-y-1">
          <p className="profile-email">ferdous.alam@gmail.com</p>
          <p className="profile-location">Based in Dhaka, Bangladesh</p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-2xl">
          <a href="#" className="social-icon">
            <BsGlobe2 />
          </a>
          <a href="#" className="social-icon">
            <FaDribbble />
          </a>
          <a href="#" className="social-icon">
            <FaInstagram />
          </a>
          <a href="#" className="social-icon">
            <FaFacebook />
          </a>
        </div>

        {/* Button */}
        <button className="w-3xs mx-auto bg-muted hover:bg-neutral-700 transition flex items-center justify-between px-4 py-3 rounded-2xl font-medium">
          Get Started
          <ArrowUpRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
