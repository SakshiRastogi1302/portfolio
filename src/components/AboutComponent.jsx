import React from 'react'
import profilePhoto from '../assets/profile-photo.jpg'
import { Link } from 'react-router-dom'


const AboutComponent = () => {
  return (
    <div className='bg-purple-900 w-full min-h-screen flex flex-col justify-center'>
      <div className='flex flex-col xl:flex-row lg:px-10'>
          <div className='flex justify-center xl:justify-start xl:items-center w-full xl:w-1/2 px-4 sm:px-8 lg:px-10'> 
            <img src={profilePhoto} alt='My Profile Pic' title='Sakshi Rastogi' className='w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-96 xl:h-96 rounded-full mt-32 mb-8 sm:mt-36 md:mt-40 lg:mt-28 lg:ml-10 border-16 border-double border-yellow-400 pb-1'></img>
          </div>
          <div className='flex flex-col justify-center w-full xl:w-3/4 px-6 lg:px-24 xl:pt-24 gap-4'>
              <h1 className='text-3xl sm:text-4xl font-el-messiri font-bold tracking-wider text-white flex-wrap text-center leading-snug animate-moveDown text-shadow-lg text-shadow-black border-b-4 border-yellow-400 pb-1'>About Me</h1>
              <div className='text-justify text-lg md:text-xl animate-fadeIn text-white space-y-6 lg:space-y-8 xl:space-y-10'>
                <p>Hello! I'm <b className='text-yellow-400'>Sakshi Rastogi</b>, a frontend developer passionate about crafting sleek, responsive, and user-friendly web interfaces. With over a year of experience in <b className='text-lime-400'>HTML</b>, <b className='text-lime-400'>CSS</b>, <b className='text-lime-400'>JavaScript</b>, <b className='text-lime-400'>TypeScript</b> and <b className='text-lime-400'>React.js</b>, I specialize in transforming ideas into seamless digital experiences.</p>
                <p>I thrive in collaborative environments, working closely with designers and teams to build applications that are not only visually engaging but also high-performing and accessible. Driven by curiosity and growth, I continuously explore modern frontend practices and technologies to deliver innovative and impactful solutions.</p>
              </div>
              <div className='flex justify-center my-6'>
                <Link to= "https://drive.google.com/uc?export=download&id=1jxCl9jcXlZqBK2hOFD8IJAjOr6-MHMzF" target='_blank' rel='noopener noreferrer'><button title='Download Resume' className='w-48 md:w-56 bg-yellow-600 p-2 font-medium rounded-lg flex justify-center items-center text-sm md:text-base cursor-pointer border-2 border-white hover:bg-yellow-500 transition-transform'><i className="fa-solid fa-download mr-2"></i>Download My Resume</button></Link>
              </div>
          </div>
      </div>
    </div>
  )
}

export default AboutComponent