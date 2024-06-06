import React from "react";
import logo from "../assets/kevinRushLogo.png";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitterSquare } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="mb-20 flex items-center sm:flex-row flex-col gap-5 sm:gap-0 justify-between py-6 m-8">
      <div className="flex items-center">
        <img src={logo} alt="" className="w-10"/>
      </div>
      <div className="flex items-center justify-center gap-4 text-2xl">
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
            <FaTwitterSquare/> 
      </div>
    </nav>
  );
}
