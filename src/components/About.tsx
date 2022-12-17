import React from "react";
import Header from "./Header";
import FadeIn from "react-fade-in/lib/FadeIn";
import Footer from "./Footer";

function About() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Header />
      <FadeIn className="about-container w-[85vw] mt-16 flex flex-col gap-5 font-extralight min-h-[65vh]" delay={400}>
        <div className="name text-3xl">I am Akash Kumar</div>
        <div className="interest text-lg">A data science enthusiast</div>
        <div className="education text-lg">
          currently a fresher at Indian Institute of Technology, Madras
        </div>
        <div className="location text-lg">
          Data is fun to work with, spend time with it and it will start telling stories.
        </div>
        <div className="interests text-lg">
          My interest lies in Machine learning and Artificial intelligence
        </div>
      </FadeIn>
    </div>
  );
}

export default About;
