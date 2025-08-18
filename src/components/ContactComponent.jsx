import React from 'react'
import { Link } from 'react-router-dom'
import githubLogo from '../assets/github-logo.png'
import linkedinLogo from '../assets/linkedin-logo.png'
import gmailLogo from '../assets/gmail-logo.png'
import contactUsPage from '../assets/contact-us-image.png'

const ContactComponent = () => {
  return(
    <div className='bg-purple-900 w-full min-h-screen flex flex-col-reverse lg:flex-row items-center text-white gap-8 xl:px-20 py-56 lg:py-0'>
      <div className='flex flex-col justify-center w-full lg:w-1/2 px-10 pt-4 sm:pt-5 md:pt-6 lg:pt-12'>
        <div className='font-bold flex-wrap text-center lg:text-left leading-snug lg:mt-20'>
          <p className='text-xl sm:text-3xl md:text-4xl lg:text-5xl'>Let's discuss</p>
          <p className='text-xl sm:text-3xl md:text-4xl lg:text-5xl'>on something<span className='text-yellow-400'> cool</span> together</p>
          <p className='text-justify font-light mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl'>As an experienced frontend developer, I'm ready to contribute to turning your vision into reality. Contact me for more information on how I can help you achieve your desired success in a reliable and efficient manner.</p>
          <div className='flex justify-center lg:justify-start gap-4 mt-5 sm:mt-6 md:mt-7 pb-10'>
            <Link to='https://github.com/SakshiRastogi1302' target='_main'><img src={githubLogo} alt="Github Logo" className='h-12 sm:h-14 rounded-full bg-white cursor-pointer hover:animate-wave'></img></Link>
            <Link to='https://www.linkedin.com/in/sakshi-rastogi-461813173/' target='_main'><img src={linkedinLogo} alt='LinkedIn Logo' className='h-12 sm:h-14 bg-white border-4 border-white rounded-full ml-3 cursor-pointer hover:animate-wave'></img></Link>
            <Link to='https://mail.google.com/mail/u/1/#inbox?compose=CllgCKCHVSKrHTvrQSqvtPNKbhfjZdqVxMWqsphZzVFdJLRkVkXQjzSTmhbgPLPxZKTvxmgCVtL' target='_main'><img src={gmailLogo} alt='Gmail Logo' className='h-12 sm:h-14 bg-white border-4 border-white rounded-full ml-3 cursor-pointer hover:animate-wave'></img></Link>
          </div>
        </div>
      </div>
        <div className='flex justify-center lg:justify-end w-full lg:w-1/2 px-6 lg:px-10 lg:pt-10'>
          <img src={contactUsPage} alt='Contact Us' className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain -scale-x-100 max-h-[75vh]'></img>
        </div>
    </div>
  )
}

export default ContactComponent