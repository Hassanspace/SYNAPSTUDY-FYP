import React from "react";
import fishImg from "../../assets/fish.svg";
import spiralImg from "../../assets/circle.svg";
import userImg from "../../assets/user.svg"; // testimonial avatar

const testimonials = [
  {
    name: "Ali Khan",
    text: "SynapStudy's AI assistant helped me solve difficult questions quickly!",
    rating: 5,
  },
  {
    name: "Sara Ahmed",
    text: "Safe discussion boards let me collaborate without worrying about privacy.",
    rating: 5,
  },
  {
    name: "Hassan Raza",
    text: "Quizzes and assignments tailored to my learning pace made studying fun.",
    rating: 5,
  },
  {
    name: "Fatima Noor",
    text: "The platform keeps me motivated with progress tracking and AI recommendations.",
    rating: 5,
  },
  {
    name: "Zain Malik",
    text: "I love the shelves feature! Everything organized and easy to access.",
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
    <section className="relative w-full py-20 text-gray-800 overflow-hidden bg-white z-10">
      {/* Floating Illustrations */}
      <img
        src={fishImg}
        alt="decorative fish"
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
            animation: marquee 12s linear infinite;
          }
          .animate-marquee-reverse {
            display: flex;
            animation: marquee-reverse 12s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default TestimonialsSection;
