import React from 'react'
import expressJSLogo from '../assets/express-js-logo.png'
import TechnicalSkillComponent from './TechnicalSkillComponent'

const SkillsComponent = () => {
  return (
    <div className="bg-purple-900 w-full min-h-screen text-white flex flex-col items-center py-16 px-6">
        {/* Heading */}
        <h1 className="text-2xl sm:text-4xl font-el-messiri font-bold tracking-wider animate-moveDown text-shadow-lg text-shadow-black border-b-4 border-yellow-400 pb-1 my-12">Skills</h1>
        <div className="w-full max-w-6xl flex flex-col gap-10">
          
          {/* 1. Technical Skills with Progress Bars */}
          <section>
            <TechnicalSkillComponent />
          </section>

          {/* 2. Currently Learning */}
          <section>
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-center border-b-2 border-yellow-400 pb-1">Currently Exploring</h2>
            <div className="flex justify-center md:justify-start gap-6 shadow-2xl shadow-black bg-black border-2 border-white p-4 rounded-2xl">
              <span className="bg-yellow-500 text-black px-4 py-2 rounded-lg shadow-md"><i className="fa-brands fa-java text-2xl mr-2 text-red-600"></i>Java</span>
              <span className="bg-green-700 text-black px-4 py-2 rounded-lg shadow-md"><i className="fa-brands fa-node-js text-2xl mr-2 text-lime-400"></i>Node.js</span>
              <span className="bg-pink-700 text-black px-4 py-2 rounded-lg shadow-md flex"><img src={expressJSLogo} className="w-7 text-2xl mr-2 text-black bg-yellow-300 rounded-full p-2"/>ExpressJS</span>
            </div>
          </section>
        </div>
    </div>

  )
}

export default SkillsComponent