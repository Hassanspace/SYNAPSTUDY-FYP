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
            SynapStudy
          </span>

          {/* Main Heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-white">
            SynapStudy: Your AI-Powered Academic Hub
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-lg text-white">
            Organize classes, manage assignments, join smart learning, and get
            AI study assistance—all in one place.
          </p>
        </div>

        {/* Buttons row */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between w-full gap-4">
          {/* Left button group */}
          <div>
            <button className="bg-[#25D366] hover:bg-[#10c050] text-white font-medium px-6 py-3 rounded-[12px] shadow-md transition w-full md:w-auto">
              GET STARTED NOW
            </button>
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default Header;
