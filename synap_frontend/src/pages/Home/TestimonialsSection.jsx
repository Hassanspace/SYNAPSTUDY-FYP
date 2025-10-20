import React from "react";
import fishImg from "../../assets/fish.svg";
import spiralImg from "../../assets/circle.svg";
import userImg from "../../assets/user.svg"; // testimonial avatar

// A lot of testimonials to make 3 full rows
const testimonials = [
  {
    name: "Alison Jordon",
    text: "This platform made my CSS preparation enjoyable and effective",
    rating: 5,
  },
  {
    name: "Alison Jordon",
    text: "This platform made my CSS preparation enjoyable and effective",
    rating: 5,
  },
  {
    name: "Alison Jordon",
    text: "This platform made my CSS preparation enjoyable and effective",
    rating: 5,
  },
  {
    name: "Alison Jordon",
    text: "This platform made my CSS preparation enjoyable and effective",
    rating: 5,
  },
  {
    name: "Alison Jordon",
    text: "This platform made my CSS preparation enjoyable and effective",
    rating: 5,
  },
  {
    name: "Alison Jordon",
    text: "This platform made my CSS preparation enjoyable and effective",
    rating: 5,
  },
  {
    name: "Alison Jordon",
    text: "This platform made my CSS preparation enjoyable and effective",
    rating: 5,
  },
  {
    name: "Alison Jordon",
    text: "This platform made my CSS preparation enjoyable and effective",
    rating: 5,
  },
  {
    name: "Alison Jordon",
    text: "This platform made my CSS preparation enjoyable and effective",
    rating: 5,
  },
  {
    name: "Alison Jordon",
    text: "This platform made my CSS preparation enjoyable and effective",
    rating: 5,
  },
];

const Card = ({ data }) => (
  <div className="bg-white shadow-lg rounded-2xl p-4 w-64 flex-shrink-0">
    <div className="flex items-center mb-2">
      <img
        src={userImg}
        alt={data.name}
        className="w-10 h-10 rounded-full mr-3"
      />
      <div>
        <h4 className="font-bold">{data.name}</h4>
      </div>
    </div>
    <p className="text-gray-700 text-sm mb-2">{data.text}</p>
    <div className="text-yellow-500">{"★".repeat(data.rating)}</div>
  </div>
);

const TestimonialsSection = () => {
  return (
    <section className="relative w-full py-20 text-gray-800 overflow-hidden z-10 bg-white">
      {/* Floating Illustrations */}
      <img
        src={fishImg}
        alt="wifi"
        className="absolute top-10 left-[17%] w-14 md:w-20 lg:w-28 xl:w-30"
      />
      <img
        src={spiralImg}
        alt="spiral"
        className="absolute top-28 right-[28%] w-12 md:w-20 lg:w-42 "
      />

      {/* Heading */}
      <div className="text-center mb-12 relative z-10 px-4">
        <h2 className="text-[#25D366] mb-3 font-bold uppercase tracking-wide text-sm md:text-base">
          TESTIMONIALS
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-snug">
          WHAT OUR STUDENTS SAY
        </h3>
      </div>

      {/* Testimonials Rows */}
      <div className="relative overflow-hidden space-y-8">
        {/* First Row */}
        <div className="flex space-x-6 animate-marquee">
          {testimonials.concat(testimonials).map((t, i) => (
            <Card key={`row1-${i}`} data={t} />
          ))}
        </div>

        {/* Second Row (reverse) */}
        <div className="flex space-x-6 animate-marquee-reverse">
          {testimonials.concat(testimonials).map((t, i) => (
            <Card key={`row2-${i}`} data={t} />
          ))}
        </div>

        {/* Third Row */}
        <div className="flex space-x-6 animate-marquee">
          {testimonials.concat(testimonials).map((t, i) => (
            <Card key={`row3-${i}`} data={t} />
          ))}
        </div>
      </div>

      {/* Tailwind Custom Animations */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-100%); }
          }
          @keyframes marquee-reverse {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
          }
          .animate-marquee {
            display: flex;
            animation: marquee 10s linear forwards;
            animation-iteration-count: 1; /* run once then stop */
          }
          .animate-marquee-reverse {
            display: flex;
            animation: marquee-reverse 10s linear forwards;
            animation-iteration-count: 1; /* run once then stop */
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialsSection;
