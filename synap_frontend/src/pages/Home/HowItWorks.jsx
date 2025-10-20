import React from "react";
import scholarImg from "../../assets/scholar.svg";
import trophyImg from "../../assets/trophy.svg";
import processImg from "../../assets/process.png"; // center illustration
import lineImg from "../../assets/line.svg"; // vertical line
import hiwbg from "../../assets/hiwbg.svg";
import spiralImg from "../../assets/spiral.svg";

// Step icons
import signup from "../../assets/signup.svg";
import selectsubject from "../../assets/selectsubject.svg";
import startlearn from "../../assets/startlearn.svg";
import trackprogress from "../../assets/trackprogress.svg";

const stepsLeft = [
  {
    image: signup,
    title: "Sign Up",
    desc: "Easy registration process.",
  },
  {
    image: selectsubject,
    title: "Select Your Exam/Subject ",
    desc: "Tailor your journey to your specific goals.",
  },
];

const stepsRight = [
  {
    image: startlearn,
    title: " Start Learning and Competing",
    desc: " Start Learning and Competing",
  },
  {
    image: trackprogress,
    title: "Track Your Progress",
    desc: "Use detailed performance reports to improve continuously.",
  },
];

const HowItWorks = () => {
  return (
    <section className="relative w-full px-6 py-20 bg-white text-gray-800 overflow-hidden z-50  ">
      {/* Background Illustration */}
      <img
        src={hiwbg}
        alt="background pattern"
        className="absolute md:block hidden top-44 left-1/2 transform -translate-x-1/2   w-full pointer-events-none 
        "
      />

    {/* Floating Illustrations */}
<img
  src={scholarImg}
  alt="book"
  className="absolute top-10 left-[8%] sm:left-[12%] md:left-[20%] w-14 sm:w-18 md:w-26"
/>

<img
  src={trophyImg}
  alt="trophy"
  className="absolute top-2 right-[2%] sm:top-4 sm:right-[3%] md:top-0 md:right-[4%] w-14 sm:w-20 md:w-36"
/>

<img
  src={spiralImg}
  alt="spiral"
  className="absolute top-16 left-[35%] sm:top-20 sm:left-[45%] md:top-28 md:left-[57.5%] w-12 sm:w-14 md:w-16 opacity-80"
/>


      {/* Heading */}
      <div className="text-center mb-36 relative z-10">
        <h2 className="text-[#25D366] mb-6 font-bold uppercase tracking-wide">
          PROCESS
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          HOW IT WORKS
        </h3>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-12 px-6 md:px-16 relative z-10">
        
        {/* Left Column */}
        <div className="flex flex-col justify-between items-start h-full gap-24 mt-[-150px]">
          {stepsLeft.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-start text-left"
            >
              <div className="flex justify-center items-center h-14 w-14 bg-[#f2f6f7] rounded-xl shadow-md">
                <img src={step.image} alt={step.title} className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-semibold text-black md:text-white">
                {step.title}
              </h4>
              <p className="text-black md:text-white">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* Middle Column */}
        <div className="relative flex justify-center items-center">
          {/* Vertical line left */}
          <img
            src={lineImg}
            alt="line"
            className="absolute left-0 top-0 bottom-0 h-full w-5 object-contain"
          />
          {/* Center Illustration */}
          <img
            src={processImg}
            alt="Process"
            className="relative max-h-[250px] object-contain z-10"
          />
          {/* Vertical line right */}
          <img
            src={lineImg}
            alt="line"
            className="absolute right-0 top-0 bottom-0 h-full w-5 object-contain"
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col justify-between items-end h-full gap-24 mt-[-150px]">
          {stepsRight.map((step, index) => (
            <div
              key={index}
              className="flex flex-col gap-3 items-end text-right"
            >
              <div className="flex justify-center items-center h-14 w-14 bg-[#f2f6f7] rounded-xl shadow-md">
                <img src={step.image} alt={step.title} className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-semibold text-black md:text-white">
                {step.title}
              </h4>
              <p className="text-black md:text-white">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-30 flex justify-center relative z-10">
        <button className="bg-gradient-to-r from-green-500 to-purple-500 hover:opacity-90 text-white font-medium px-8 py-4 rounded-[12px] shadow-lg transition">
          START YOUR JOURNEY NOW
        </button>
      </div>
    </section>
  );
};

export default HowItWorks;
