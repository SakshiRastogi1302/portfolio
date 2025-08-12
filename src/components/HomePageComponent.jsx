import React from 'react'
import homePageImage from "../assets/homepage-image.png"
import Typewriter from "typewriter-effect"

const HomePageComponent = () => {
  return (
    //   <div className='bg-purple-900 w-full min-h-screen text-white flex justify-center lg:justify-end items-center p-4'>
    //       <div className='animate-fadeInRight'>
    //           <img src={homePageImage} alt='Home Page' className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain -scale-x-100'></img>
    //       </div>
    //   </div>
      /*{<div className='absolute'>
              <div className='md:mt-[600px] lg:mt-60 mt-[85%]'>
                  <span className='font-medium tracking-wider text-xl ml-[40%] md:text-4xl md:ml-80 flex'>Hello<span className='animate-wave'>👋</span>
                  </span> 
                  <p className='text-xl md:text-5xl font-mulish ml-[20%] md:ml-40 mt-1 md:mt-3'>I'm <b className='text-yellow-400'>Sakshi Rastogi</b></p>
                  <div className='md:ml-10 hidden md:block text-5xl my-3'>
                      <Typewriter options={{strings:["I am a Frontend Web Developer.", "I love to build Aesthetic Websites.", "I love to build Scalable Products."], autoStart:true, loop:true, delay:100}}></Typewriter>
                  </div>
                  <div className='absolute ml-[10%] mt-[2%] tracking-wider visible md:hidden'>
                      <Typewriter options={{strings:["I'm a Frontend Developer.", "I build Aesthetic Websites.", "I build Scalable Products."], autoStart:true, loop:true, delay:100}}></Typewriter>
                  </div>
              </div>
              <div className='mt-[15%] ml-[8%] w-[80%] md:mt-5 md:ml-14 md:w-[650px] md:text-xl text-justify animate-fadeIn'>
                  <p>Welcome to my frontend development kingdom! I'm a dedicated and innovative frontend developer with a proclivity for constructing sleek and user-friendly interfaces that meet the needs of a diverse online audience.</p>
              </div>
          </div>}*/

          <div className="bg-purple-900 w-full min-h-screen text-white flex flex-col-reverse lg:flex-row items-center justify-center p-6 lg:p-16">
  
  {/* Left Content */}
  <div className="flex-1 flex flex-col justify-center">
    <span className="font-medium tracking-wider text-xl md:text-4xl flex items-center gap-2">
      Hello <span className="animate-wave">👋</span>
    </span>

    <p className="text-xl md:text-5xl font-mulish mt-2">
      I'm <b className="text-yellow-400">Sakshi Rastogi</b>
    </p>

    {/* Typewriter for large screens */}
    <div className="hidden md:block text-2xl lg:text-4xl my-4">
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

    {/* Typewriter for small screens */}
    <div className="md:hidden text-lg mt-2">
      <Typewriter
        options={{
          strings: [
            "I'm a Frontend Developer.",
            "I build Aesthetic Websites.",
            "I build Scalable Products."
          ],
          autoStart: true,
          loop: true,
          delay: 100
        }}
      />
    </div>

    {/* Intro paragraph */}
    <p className="mt-6 md:mt-8 max-w-xl text-base md:text-lg text-justify animate-fadeIn">
      Welcome to my frontend development kingdom! I'm a dedicated and innovative frontend developer with a proclivity for constructing sleek and user-friendly interfaces that meet the needs of a diverse online audience.
    </p>
  </div>

  {/* Right Image (Top on mobile) */}
  <div className="flex-1 flex justify-center mb-8 lg:mb-0">
    <img
      src={homePageImage}
      alt="Home Page"
      className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain -scale-x-100"
    />
  </div>

</div>

    )
}

export default HomePageComponent