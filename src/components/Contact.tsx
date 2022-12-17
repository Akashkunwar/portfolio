import React from "react";
import Header from "./Header";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoMail, IoMailOutline } from "react-icons/io5";
import { TbBrandTelegram } from "react-icons/tb";
import FadeIn from "react-fade-in/lib/FadeIn";
import Footer from "./Footer";
import { AiFillGithub } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { TiSocialFacebookCircular } from "react-icons/ti";
import { RiFacebookLine, RiLinkedinLine } from "react-icons/ri";

function Contact() {
  return (
    <div className="w-screen flex flex-col items-center">
      <Header />
      <div className="">
        <FadeIn
          className="contacts-container flex flex-col gap-10 mt-16 w-[85vw] font-extralight text-lg md:text-xl min-h-[65vh]"
          delay={400}
        >
            <a href="mailto:gnspda@gmail.com">
          <div className="email flex flex-row items-center gap-2 flex-wrap group">
            Love emails? drop me a mail{" "}
              <IoMailOutline className="text-black dark:text-white group-hover:text-[#773344] dark:group-hover:text-[#e15679] transition-all" />
          </div>
            </a>
            <a href="https://www.t.me/akashkunwar" target="_blank">
          <div className="telegram flex flex-row items-center gap-2 flex-wrap group">
            Privacy freak? drop me a message{" "}
              <TbBrandTelegram className="text-black dark:text-white group-hover:text-[#773344] dark:group-hover:text-[#e15679] transition-all" />
          </div>
            </a>
            <a href="https://www.linkedin.com/in/aakashkunwar/" target="_blank">
          <div className="instagram flex flex-row items-center gap-2 flex-wrap group">
            Let's connect on linkedin{" "}
              <RiLinkedinLine className="text-black dark:text-white group-hover:text-[#773344] dark:group-hover:text-[#e15679]  transition-all" />
          </div>
            </a>
            <a href="https://github.com/akashkunwar" target="_blank">
          <div className="github flex flex-row items-center gap-2 flex-wrap group">
            Have a thing for open source? pull my{" "}
              <FiGithub className="text-black dark:text-white group-hover:text-[#773344] dark:group-hover:text-[#e15679]  transition-all" />
          </div>
            </a>
            <a href="https://www.instagram.com/akash_kunwar_" target="_blank">
          <div className="instagram flex flex-row items-center gap-2 flex-wrap group">
            Love being social? find me on{" "}
              <FaInstagram className="text-black dark:text-white group-hover:text-[#773344] dark:group-hover:text-[#e15679]  transition-all" />
          </div>
            </a>
        </FadeIn>
      </div>
    </div>
  );
}

export default Contact;
