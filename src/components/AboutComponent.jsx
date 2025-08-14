import React from 'react'
import profilePhoto from '../assets/profile-photo.jpg'


const AboutComponent = () => {
  return (
      <div className='bg-purple-900 w-full min-h-screen flex flex-col lg:flex-row'>
          <div className='flex justify-center lg:justify-start lg:items-center w-full lg:w-1/2 px-4 sm:px-8 lg:px-24'> 
            <img src={profilePhoto} alt='My Profile Pic' className='w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-full mt-32 mb-8 sm:mt-36 md:mt-40 lg:mt-32 lg:ml-10'></img>
          </div>
          <div className='flex flex-col justify-start w-full lg:w-1/2 px-6 lg:px-24 lg:pt-36 gap-4'>
              <h1 className='text-3xl sm:text-4xl lg:text-5xl font-el-messiri font-bold tracking-wider text-white flex-wrap text-center lg:text-left leading-snug animate-moveDown text-shadow-sm shadow-black border-b-4 border-yellow-400 pb-1'>About Me</h1>
              <div className='text-justify text-lg animate-fadeIn text-white space-y-6 lg:space-y-8 xl:space-y-10'>
                <p>Hello there! I'm <b className='text-yellow-400'>Sakshi Rastogi</b>, a passionate frontend developer with a flair for creating seamless and engaging user interfaces. With over a year of hands-on experience, I dive deep into <b className='text-yellow-400'>HTML</b>, <b className='text-yellow-400'>CSS</b>, <b className='text-yellow-400'>JavaScript</b>, and <b className='text-yellow-400'>TypeScript</b>, and am well-versed in frameworks like <b className='text-yellow-400'>React.js</b>.</p>
                <p>I thrive in collaborative environments, partnering with designers to turn visionary ideas into interactive realities. My expertise lies in crafting visually captivating experiences that are not only beautiful but also high-performing and accessible. Always staying on the pulse of the latest frontend trends, I love experimenting with cutting-edge technologies. </p>
                <p>I’m eager to find exciting projects where I can contribute my skills and grow alongside dynamic teams. Feel free to explore my portfolio and reach out if you’re interested in collaborating!</p>
              </div>
          </div>
      </div>
  )
}

export default AboutComponent