import { IoIosSearch } from "react-icons/io";
import { FaComments } from "react-icons/fa"; // Chatbot icon
import React from "react";

const HeroSection = () => {
  return (
    <div className="relative sm:w-[60vw] h-[80vh] mt-40 overflow-hidden sm:rounded-3xl mx-auto flex justify-center items-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-700 text-white">
      {/* Hero Content */}
      <div className="text-center">
        <h1 className="text-4xl sm:text-5xl  text-purple-800 font-bold mb-4">
          Mental Health Matters
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          It's okay to not be okay. We're here to help. Chat with our virtual assistant to get support.
        </p>

        {/* Search Bar */}
        <form className="relative ">
          <input
            type="search"
            name="search"
            id="search"
            className="py-4 px-6 w-[80vw] sm:w-[60vw] text-xl pr-10 pl-10 sm:text-2xl mx-auto rounded-full outline-none border-2 border-white focus:ring-2 focus:ring-white"
            placeholder="Search for mental health resources..."
          />
          <IoIosSearch className="absolute top-1/2 right-4 transform -translate-y-1/2 text-3xl sm:text-4xl text-white" />
        </form>
      </div>

      {/* Fixed Chatbot Icon */}
      <div className="fixed bottom-10 right-10 z-50 bg-purple-600 text-white p-4 rounded-full cursor-pointer shadow-lg">
        <FaComments className="text-3xl" />
      </div>
    </div>
  );
};

export default HeroSection;
