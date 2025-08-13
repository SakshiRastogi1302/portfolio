import React from 'react'
import homePageImage from "../assets/homepage-image.png"
import Typewriter from "typewriter-effect"

const HomePageComponent = () => {
  return (
     <div className="bg-purple-900 w-full min-h-screen text-white flex flex-col-reverse lg:flex-row items-center justify-center p-4 lg:p-8 gap-8">
           {/* Text Column */}
          <div className="flex flex-col justify-center w-full lg:w-1/2 space-y-2 lg:space-y-4 lg:pt-20 xl:pt-12">
            
            {/* Greeting */}
            <div>
              <span className="font-medium tracking-wider text-xl md:text-2xl lg:text-3xl xl:text-4xl flex justify-center items-center">
                Hello <span className="animate-wave ml-1">👋</span>
              </span>
              <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-mulish mt-1 md:mt-3 flex justify-center">
                I'm <b className="text-yellow-400 ml-3">Sakshi Rastogi</b>
              </p>
            </div>
            {/* Typewriter for desktop */}
            <div className="hidden text-2xl md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold text-red-400 md:flex flex-wrap md:justify-center lg:justify-start text-center lg:text-left pl-8 lg:pl-16 xl:pl-20 2xl:pl-22 leading-snug">
              <Typewriter
                options={{
                  strings: [
                    "I am a Frontend Web Developer.",
                    "I love to build Aesthetic Websites.",
                    "I love to build Scalable Products."
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100
                }}
              />
            </div>
            
            {/* Typewriter for mobile */}
            <div className="md:hidden text-lg tracking-wider flex flex-wrap justify-center text-center text-red-400 font-bold leading-snug">
              <Typewriter
                options={{
                  strings: [
                    "I'm a Frontend Web Developer.",
                    "I build Aesthetic Websites.",
                    "I build Scalable Products."
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 100
                }}
              />
            </div>
             {/* Intro Paragraph */}
            <p className="md:w-3/4 mx-auto text-base md:text-lg text-justify animate-fadeIn mt-2">
              Welcome to my frontend development kingdom! I'm a dedicated and innovative
              frontend developer with a proclivity for constructing sleek and
              user-friendly interfaces that meet the needs of a diverse online audience.
            </p>
          </div>

          {/* Image Column */}
          <div className="flex justify-center lg:justify-end animate-fadeInRight w-full lg:w-1/2">
            <img
              src={homePageImage}
              alt="Home Page"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain -scale-x-100 mt-12 sm:mt-16 md:mt-20 lg:mt-24 xl:mt-28"
            />
          </div>
      </div>
    )
}

export default HomePageComponent