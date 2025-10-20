import React from "react";
import wifiImg from "../../assets/wifi.svg";
import ballImg from "../../assets/ball.svg";
import spiralImg from "../../assets/circle.svg"; 
import sbcmp from "../../assets/sbcmp.svg";

const SubscriptionSection = () => {
  return (
    <section className="relative w-full py-20 text-gray-800 overflow-hidden z-10">
      {/* Floating Illustrations */}
      <img
        src={wifiImg}
        alt="book"
        className="absolute top-30 left-[2%] w-14 md:w-20 lg:w-28 xl:w-36"
      />
      <img
        src={ballImg}
        alt="hand"
        className="absolute top-[0%] right-[0%] w-14 md:w-20 lg:w-28 xl:w-40"
      />
      <img
        src={spiralImg}
        alt="spiral"
        className="absolute top-28 left-[62%] w-12 md:w-20 lg:w-38"
      />

      {/* Heading */}
      <div className="text-center mb-12 relative z-10 px-4">
        <h2 className="text-[#25D366] mb-3 font-bold uppercase tracking-wide text-sm md:text-base">
          PRICING PLANS
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug">
          FLEXIBLE PLANS FOR EVERY <br /> LEARNER
        </h3>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-center px-4 md:px-10 lg:px-16">
        {/* Basic Plan */}
        <div className="w-full max-w-sm mx-auto h-auto flex flex-col justify-between bg-white rounded-2xl shadow-lg p-6">
          <div>
            <h4 className="text-gray-600 font-bold uppercase text-sm md:text-base">
              Basic Plan
            </h4>
            <h3 className="text-4xl md:text-5xl font-extrabold text-[#704FE6] mt-2">
              FREE
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700 font-bold text-sm md:text-base">
              <li>• Free quizzes and basic performance reports</li>
              <li>• Limited access to content</li>
            </ul>
          </div>
          <button className="w-full mt-6 py-3 bg-[#704FE6] hover:bg-purple-700 text-white font-semibold rounded-lg text-sm md:text-base">
            SIGN UP NOW
          </button>
        </div>

        {/* Single User */}
        <div className="w-full max-w-sm mx-auto h-auto flex flex-col justify-between bg-[#25D366] rounded-2xl shadow-lg p-6">
          <div>
            <h4 className="text-white font-bold uppercase text-sm md:text-base">
              Single User
            </h4>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white mt-2 flex items-start">
              <span className="text-xs md:text-sm font-medium translate-y-2.5 mr-1">
                PKR
              </span>
              1500
              <span className="text-xs md:text-sm font-normal self-end ml-1">
                /MONTHLY
              </span>
            </h3>

            <ul className="mt-4 space-y-2 text-white font-bold text-sm md:text-base">
              <li>• Access to structured course, AI-powered features, quizzes</li>
              <li>• Enhanced analytics and recommendations</li>
            </ul>
          </div>
          <button className="w-full mt-6 py-3 bg-white text-[#25D366] font-semibold rounded-lg text-sm md:text-base">
            SIGN UP NOW
          </button>
        </div>

        {/* Institutions */}
        <div className="w-full max-w-sm mx-auto h-auto flex flex-col justify-between bg-white rounded-2xl shadow-lg p-6">
          <div>
            <h4 className="text-gray-600 font-bold uppercase text-sm md:text-base">
              INSTITUTIONS
            </h4>
            <h3 className="text-2xl md:text-3xl font-extrabold text-[#34B7F1] mt-2">
              CUSTOME
            </h3>
            <ul className="mt-4 space-y-2 text-gray-700 font-bold text-sm md:text-base">
              <li>• All premium features + personalized coaching & tools</li>
            </ul>
          </div>
          <button className="w-full mt-6 py-3 bg-[#34B7F1] hover:bg-blue-700 text-white font-semibold rounded-lg text-sm md:text-base">
            CONTACT US
          </button>
        </div>
      </div>

      {/* Comparison Section */}
      <h1 className="text-center text-xl md:text-2xl font-bold mt-10">
        FULL COMPARISON
      </h1>
      <div className="w-full flex justify-center items-center mt-5 px-4">
        <img
          src={sbcmp}
          alt="comparison table"
          className="w-full max-w-7xl h-auto"
        />
      </div>
    </section>
  );
};

export default SubscriptionSection;
