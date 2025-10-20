import React from "react";
import bookImg from "../../assets/book.svg";
import handImg from "../../assets/hand.svg";

// Feature icons
import friendshipquiz from "../../assets/friendshipquiz.svg";
import community from "../../assets/community.svg";
import challenge from "../../assets/challenge.svg";
import pols from "../../assets/pols.svg";
import teamplay from "../../assets/teamplay.svg";
import achievement from "../../assets/achievement.svg";

const SocialSection = () => {
  const features = [
    {
      image: friendshipquiz,
      title: "Friendship Quizzes",
      desc: "Who knows you best? Take this quiz and share it with your friends to find out! Tag your bestie and see if they can beat your score",
    },
    {
      image: community,
      title: "Community Discussions",
      desc: "Finished the quiz? Share your score, discuss the answers, and see what others think! Join the conversation and compare your results.",
    },
    {
      image: challenge,
      title: "Daily Challenges",
      desc: "Take today’s quiz challenge and climb the leaderboard! Can you answer 10 questions faster than anyone else?",
    },
    {
      image: pols,
      title: "Interactive Polls",
      desc: "Do you agree with your quiz result? Vote and discuss in the comments!",
    },
    {
      image: teamplay,
      title: "Team Play",
      desc: "eam up with your friends for a group quiz challenge and compete against other teams for the ultimate bragging rights!",
    },
    {
      image: achievement,
      title: "Achievement Badges",
      desc: "Earn badges like ‘Trivia Genius’ or ‘Speed Demon’ by completing challenges and showcasing your skills!",
    },
  ];

  return (
    <section className="relative w-full   text-gray-800 overflow-hidden z-10">
      {/* Floating Illustrations */}
      <img
        src={bookImg}
        alt="book"
        className="absolute top-10 left-[20%] w-20 md:w-26  "
      />
      <img
        src={handImg}
        alt="hand"
        className="absolute top-22 right-[20%] w-20 md:w-26 "
      />

      {/* Heading */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-[#25D366] mb-6 font-bold uppercase tracking-wide">
          SOCIAL CONNECTS
        </h2>
        <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          SOCIAL QUIZZES & CHALLENGES HUB
        </h3>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4 md:px-16">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-white shadow-lg rounded-xl p-6 hover:shadow-xl gap-2 "
          >
            <div className="border-[#704FE6] border-1 rounded-[16px] flex justify-center items-center h-16 w-16">
              <img
                src={item.image}
                alt={item.title}
                className=" w-10  object-contain"
              />
            </div>
            <h4 className="text-lg font-bold text-gray-800 mb-2">
              {item.title}
            </h4>
            <p className="text-gray-600 ">{item.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="mt-16 flex justify-center">
        <button className="bg-gradient-to-r from-green-500 to-purple-500 hover:opacity-90 text-white font-medium px-8 py-4 rounded-[12px] shadow-lg transition">
          START YOUR JOURNEY NOW
        </button>
      </div>
    </section>
  );
};

export default SocialSection;
