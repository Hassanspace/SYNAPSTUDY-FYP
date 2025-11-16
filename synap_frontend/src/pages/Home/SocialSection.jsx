import React from "react";
import bookImg from "../../assets/book.svg";
import handImg from "../../assets/hand.svg";

// Feature icons (replace with your own if available)
import assignmentsIcon from "../../assets/friendshipquiz.svg";
import discussionsIcon from "../../assets/community.svg";
import quizzesIcon from "../../assets/challenge.svg";
import shelvesIcon from "../../assets/pols.svg";
import chatbotIcon from "../../assets/teamplay.svg";
import safeDiscussionIcon from "../../assets/achievement.svg";

const SocialSection = () => {
  const features = [
    {
      image: assignmentsIcon,
      title: "Assignments",
      desc: "Students can view and submit assignments directly in their classrooms. Teachers can upload and track submissions.",
    },
    {
      image: discussionsIcon,
      title: "Assignment Discussions",
      desc: "Each assignment has a dedicated discussion area where students and teachers can ask questions and provide feedback safely.",
    },
    {
      image: quizzesIcon,
      title: "Quizzes",
      desc: "Interactive quizzes for each subject or classroom allow students to test their knowledge and improve continuously.",
    },
    {
      image: shelvesIcon,
      title: "Shelves",
      desc: "Organize study materials, notes, and resources in personal or shared shelves for easy access and management.",
    },
    {
      image: chatbotIcon,
      title: "AI Chatbot",
      desc: "Get instant help and guidance from the AI-powered study assistant for any subject or topic.",
    },
    {
      image: safeDiscussionIcon,
      title: "Safe Discussion",
      desc: "Engage in moderated and secure discussions within your classroom to maintain a positive learning environment.",
    },
  ];

  return (
    <section className="relative w-full text-gray-800 overflow-hidden z-10 bg-white">
      {/* Floating Illustrations */}
      <img
        src={bookImg}
        alt="book"
        className="absolute top-10 left-[20%] w-20 md:w-26"
      />
      <img
        src={handImg}
        alt="hand"
        className="absolute top-22 right-[20%] w-20 md:w-26"
      />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-[#25D366] mb-6 font-bold uppercase tracking-wide">
          FEATURES
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          LEARNING HUB FEATURES
        </h3>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-16">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white shadow-lg rounded-xl p-6 hover:shadow-xl gap-2"
          >
            <div className="border-[#704FE6] border-1 rounded-[16px] flex justify-center items-center h-16 w-16">
              <img src={item.image} alt={item.title} className="w-10 object-contain" />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h4>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
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

export default SocialSection;
