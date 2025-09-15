import React from 'react'
import expressJSLogo from '../assets/express-js-logo.png'
import TechnicalSkillComponent from './TechnicalSkillComponent'
import { useSelector } from 'react-redux'

const SkillsComponent = () => {
  const currentMode = useSelector(store => store.toggleLightDarkMode.currentMode);
  return (
    <div className={currentMode==="light"?"":"dark"}>
        <div className="bg-purple-200 dark:bg-purple-900 w-full min-h-screen text-purple-950 dark:text-white flex flex-col items-center pt-16 p-6">
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl font-el-messiri font-bold tracking-wider animate-moveDown text-shadow-lg text-shadow-black border-b-4 border-yellow-500 dark:border-yellow-400 mt-14 mb-10">Skills</h1>
          <div className="w-full max-w-6xl flex flex-col gap-10">
            
            {/* 1. Technical Skills with Progress Bars */}
            <section>
              <TechnicalSkillComponent />
            </section>

            {/* 2. Currently Learning */}
            <section>
              <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center border-b-4 border-yellow-600 dark:border-yellow-400 pb-1">Currently Exploring</h2>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 shadow-2xl shadow-black bg-black border-2 border-white p-6 rounded-2xl">
                {/* Java */}
                <div className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-3 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <i className="fa-brands fa-java text-lg text-red-600"></i>
                  <span className="font-medium">Java</span>
                </div>

                {/* Node.js */}
                <div className="flex items-center gap-2 bg-green-700 text-black px-4 py-3 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <i className="fa-brands fa-node-js text-lg text-lime-400"></i>
                  <span className="font-medium">Node.js</span>
                </div>

                {/* ExpressJS */}
                <div className="flex items-center gap-2 bg-pink-700 text-black px-4 py-3 rounded-xl shadow-md hover:scale-105 transition-transform cursor-pointer">
                  <img src={expressJSLogo} alt="ExpressJS" className="w-5 h-5 bg-yellow-300 rounded-full p-1" />
                  <span className="font-medium">Express.js</span>
                </div>
              </div>
            </section>
          </div>
        </div>
    </div>

  )
}

export default SkillsComponent