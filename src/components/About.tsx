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
        <div className="interest text-lg">a data science enthusiast</div>
        <div className="education text-lg">
          currently a fresher at Indian Institute of Technology, Madras
        </div>
        <div className="location text-lg">
          i am from Patna, capital of Bihar, state in India
        </div>
        <div className="interests text-lg">
          my interest lies in machine learning and artificial intelligence
        </div>
      </FadeIn>
    </div>
  );
}

export default About;
