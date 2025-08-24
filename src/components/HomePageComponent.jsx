import React from "react";
import homePageImage from "../assets/homepage-image.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

const HomePageComponent = () => {
  return (
    <div className="bg-purple-900 w-full min-h-screen text-white flex flex-col-reverse lg:flex-row items-center justify-center p-4 lg:p-8 gap-8">
      {/* Text Column */}
      <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-2 lg:space-y-4 lg:pt-20 xl:pt-16">
        {/* Greeting */}
        <div>
          <span className="font-medium tracking-wider text-xl md:text-2xl lg:text-3xl xl:text-4xl flex justify-center items-center">
            Hello <span className="animate-wave ml-1">👋</span>
          </span>
          <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mulish mt-1 md:mt-3 flex justify-center">
            I'm <b className="text-yellow-400 ml-3">Sakshi Rastogi</b>
          </p>
        </div>

        {/* Typewriter */}
        <div
          className="flex flex-wrap justify-center lg:justify-start text-center
             font-bold text-lime-400 leading-snug 
             text-[clamp(1.2rem,2.5vw,2.3rem)] 
             tracking-wide px-4 lg:px-20 xl:px-28 2xl:px-[110px]"
        >
          <Typewriter
            options={{
              strings: [
                "I’m a Frontend Developer.",
                "I build Aesthetic Websites.",
                "I build Scalable Products.",
              ],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </div>

        {/* Intro Paragraph */}
        <p className="md:w-3/4 mx-auto text-base md:text-lg text-justify animate-fadeIn mt-2">
         I’m a dedicated and innovative frontend developer passionate about crafting sleek, responsive, and user-friendly web interfaces that deliver seamless digital experiences.
        </p>

        {/* Buttons - Explore my work, Let's connect */}
        <div className = 'flex flex-col md:flex-row justify-center gap-5 items-center'>
          <Link to= "/projects"><button title="Explore My Projects" className='w-40 md:w-44 bg-yellow-600 font-medium p-2 rounded-lg flex justify-center items-center text-sm md:text-base cursor-pointer mt-5 border-2 border-white hover:bg-yellow-500 transition-transform'><i className="fa-solid fa-folder-open mr-2"></i>Explore My Work</button></Link>
          <Link to= "/contact"><button title="Contact Me" className='w-40 md:w-44 bg-lime-600 p-2 font-medium rounded-lg flex justify-center items-center text-sm md:text-base cursor-pointer md:mt-5 border-2 border-white hover:bg-lime-500 transition-transform"'><i className="fa-solid fa-phone mr-2"></i> Let's Connect</button></Link>
        </div>
      </div>

      {/* Image Column */}
      <div className="flex justify-center lg:justify-end animate-fadeInRight w-full lg:w-1/2">
        <img
          src={homePageImage}
          alt="Home Page"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain -scale-x-100 mt-16 sm:mt-20 md:mt-24 lg:mt-28 xl:mt-24"
        />
      </div>

    </div>
  );
};

export default HomePageComponent;
