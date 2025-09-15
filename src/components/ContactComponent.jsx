import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import githubLogo from '../assets/github-logo.png'
import linkedinLogo from '../assets/linkedin-logo.png'
import gmailLogo from '../assets/gmail-logo.png'
import contactUsPage from '../assets/contact-us-image.png'
import { Check, Copy } from 'lucide-react'
import { useSelector } from 'react-redux'

const ContactComponent = () => {
  const currentMode = useSelector(store => store.toggleLightDarkMode.currentMode);
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("sakshi.dev2020@gmail.com");
    setCopied(true);
    setTimeout(()=>{
      setCopied(false);
    },2000)
  }

  return(
    <div className={currentMode==="light"?"":"dark"}>
      <div className='bg-purple-200 dark:bg-purple-900 w-full min-h-screen flex flex-col-reverse lg:flex-row items-center text-purple-950 dark:text-white gap-8 xl:px-20 py-56 lg:py-0'>
        <div className='flex flex-col justify-center w-full lg:w-1/2 px-10 pt-4 sm:pt-5 md:pt-6 lg:pt-12'>
          <div className='font-bold flex-wrap text-center lg:text-left leading-snug lg:mt-20'>
            <p className='text-xl sm:text-3xl md:text-4xl lg:text-5xl animate-fadeInLeft'>Let's discuss</p>
            <p className='text-xl sm:text-3xl md:text-4xl lg:text-5xl animate-fadeInLeft'>on something<span className='text-yellow-500 dark:text-yellow-400'> cool</span> together</p>
            <p className='text-justify font-normal mt-3 sm:mt-4 md:mt-5 text-base sm:text-lg md:text-xl animate-fadeIn'>Thank you for visiting my portfolio. If you’re interested in collaborating or discussing potential opportunities, please don’t hesitate to get in touch. I look forward to connecting with you.</p>
            <div className='mt-5'>
              <p className='text-lime-600 dark:text-lime-400 text-xs sm:text-sm md:text-lg flex-wrap xs:text-center lg:text-left'><i className="fa-solid fa-location-dot mr-2"></i>Location: <span className='font-bold text-yellow-500 dark:text-yellow-400 flex-wrap text-center'>Delhi, India</span></p>
              <div className='w-full flex flex-col lg:flex-row sm:items-center lg:items-start sm:justify-center lg:justify-start'>
                <p className='text-lime-600 dark:text-lime-400 text-xs sm:text-sm md:text-lg text-center lg:text-left'><i className="fa-solid fa-envelope mr-2"></i>Email: <span className='font-bold text-yellow-500 dark:text-yellow-400 '>sakshi.dev2020@gmail.com</span></p>
                <button onClick={handleCopy} title={copied?'Email copied':'Copy Email Address'} className='cursor-pointer mt-2 lg:mt-0 lg:ml-2 flex justify-center'>{copied? <Check className='text-green-400 rounded-full ml-2' title='Email Copied'></Check> : <Copy className='ml-2 w-4 md:w-6'></Copy>}</button>
              </div>
            </div>
            <div className='flex justify-center lg:justify-start gap-4 mt-5 sm:mt-6 md:mt-7 pb-10'>
              <Link to='https://github.com/SakshiRastogi1302' target='_main'><img src={githubLogo} alt="Github Logo" title='Github Account' className='h-12 sm:h-14 rounded-full bg-white cursor-pointer hover:animate-wave'></img></Link>
              <Link to='https://www.linkedin.com/in/sakshi-rastogi-461813173/' target='_main'><img src={linkedinLogo} alt='LinkedIn Logo' title='Linkedin Account' className='h-12 sm:h-14 bg-white border-4 border-white rounded-full ml-3 cursor-pointer hover:animate-wave'></img></Link>
              <Link to='mailto:sakshi.dev2020@gmail.com' target='_main'><img src={gmailLogo} alt='Gmail Logo' title='Gmail' className='h-12 sm:h-14 bg-white border-4 border-white rounded-full ml-3 cursor-pointer hover:animate-wave'></img></Link>
            </div>
          </div>
        </div>
        <div className='flex justify-center lg:justify-end w-full lg:w-1/2 px-6 lg:px-10 lg:pt-24 py-10'>
          <img src={contactUsPage} alt='Contact Us' className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain -scale-x-100 max-h-[75vh] animate-fadeIn shadow-2xl shadow-black rounded-full border-2 border-purple-950 dark:border-white'></img>
        </div>
          </div>
    </div>
  )
}

export default ContactComponent