import React from "react";
import learningImg from "../../assets/learning.svg";
import quizImg from "../../assets/quizes.svg";
import aiImg from "../../assets/Ai.svg";
import leaderboardImg from "../../assets/leaderboard.svg";
import courseImg from "../../assets/course.svg";
import subscriptionImg from "../../assets/subscription.svg";
import whyImg from "../../assets/whychooseus.svg";
import spiralImg from "../../assets/spiral.svg";
import dottedImg from "../../assets/dots.svg";
import cornerShape from "../../assets/corner.svg"; // top left abstract
import behindwhy from "../../assets/behindwhychoose.svg";

const Whychooseus = () => {
  const points = [
    { image: learningImg, text: "Structured Learning Hub with Classes & Subjects" },
    { image: quizImg, text: "Interactive Quizzes Preparation" },
    { image: aiImg, text: "AI Chatbot & Smart Assistance for Personalized Guidance" },
    { image: courseImg, text: "Assignments, Quizzes, and Shelves to Organize Learning" },
    { image: subscriptionImg, text: "Flexible Access with Freemium & Premium Features" },
  ];

  return (
    <section className="relative w-full px-6 py-20 text-gray-800 overflow-hidden bg-white">
      {/* Decorative images */}
      <img
        src={cornerShape}
        alt="corner"
        className="absolute top-0 left-0 w-32 opacity-90"
      />
      <img
        src={spiralImg}
        alt="spiral"
        className="absolute top-24 left-[39.5%] w-16 opacity-80"
      />
      <img
        src={dottedImg}
        alt="dots"
        className="absolute top-12 right-[41%] w-12 h-12"
      />

      {/* Heading */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-[#25D366] font-semibold uppercase tracking-wide">
          SynapStudy
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          WHY CHOOSE US?
        </h3>
      </div>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch relative z-10 px-7">
        {/* Left Section */}
        <div className="flex flex-col gap-y-6 h-full">
          {points.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <div className="flex justify-center items-center h-20 w-20 bg-[#fafafa] rounded-[26px] shadow-md">
                <img
                  src={item.image}
                  alt={item.text}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <p className="text-xl font-semibold text-gray-800">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Section (Image with abstract behind) */}
        <div className="flex justify-center items-center relative">
          <img
            src={behindwhy}
            alt="abstract background"
            className="absolute -top-106 -right-105 inset-0 m-auto h-[150px] w-[150px] opacity-70 -z-10"
          />
          <img
            src={whyImg}
            alt="Why Choose Us"
            className="relative max-h-[480px] w-auto object-contain z-10"
          />
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-16 flex justify-center">
        <button className="bg-gradient-to-r from-[#25D366] via-[#3AC2FF] to-[#6A4CFF] hover:opacity-90 text-white font-medium px-8 py-4 rounded-[12px] shadow-lg transition">
          START LEARNING NOW
        </button>
      </div>
    </section>
  );
};

export default Whychooseus;
