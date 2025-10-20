import React from "react";
import Navbar from "./Navbar";
import headerImg from "../../assets/header.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Header = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat h-screen w-full  "
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <Navbar />

      {/* Overlay (optional, for darker effect on image) */}
      {/* <div className="absolute inset-0 bg-black/40"></div> */}

      {/* Page content */}
      <section className="absolute bottom-16 z-10 w-full px-8">
        <div className="max-w-3xl text-left">
          {/* Small Badge */}
          <span className="inline-block bg-[#80808034] backdrop-blur-[32px] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">
            BRAINY
          </span>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            Prepare Smarter, Not Harder!
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg text-white">
            Gamify your preparation for{" "}
            <span className="font-semibold">CSS, PMS, PPSC, FPSC</span>, and
            more.
          </p>
        </div>

        {/* Buttons row */}
       <div className="mt-6 flex flex-col md:flex-row items-center justify-between w-full gap-4">
  {/* Left button group */}
  <div>
    <button className="bg-[#25D366] hover:bg-[#10c050] text-white font-medium px-6 py-3 rounded-[12px] shadow-md transition w-full md:w-auto">
      START YOUR JOURNEY NOW
    </button>
  </div>

  {/* Right button group */}
  <div className="flex justify-center md:justify-end items-center space-x-3">
    <button className="flex justify-center items-center bg-[#8080809c] backdrop-blur-[32px] text-white text-sm font-semibold rounded-full h-16 w-16">
      <ChevronLeft />
    </button>
    <button className="flex justify-center items-center bg-[#80808098] backdrop-blur-[32px] text-white text-sm font-semibold rounded-full h-16 w-16">
      <ChevronRight />
    </button>
  </div>
</div>

      </section>
    </div>
  );
};

export default Header;
