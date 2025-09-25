import React from 'react'
import { Link } from 'react-router-dom';

const ProjectComponent = ({projectInfo}) => {
    const {id, imageURL, projectName, projectStatus, projectDescription, technologyStack, liveDemoLink, githubCodeLink} = projectInfo;
    const isCompleted = projectStatus === "Project Completed";
    const statusBg = isCompleted ? "bg-green-600" : "bg-pink-600";
    const iconClass = isCompleted ? "fa-solid fa-check mr-2 p-2 rounded-2xl bg-yellow-500" : "fa-solid fa-bars-progress mr-2 p-2 rounded-2xl bg-black";

    return(
        <div className={`${id % 2===0?'animate-fadeInLeft':'animate-fadeInRight'} w-[90%] md:w-3/4 lg:w-[90%] bg-white dark:bg-purple-500 border-2 border-purple-950 dark:border-white shadow-lg shadow-black rounded-lg flex flex-col lg:flex-row items-center lg:items-start mx-auto hover:scale-105 hover:shadow-xl transition-transform cursor-pointer`}>
          <img src={imageURL} alt={'Project'+ projectInfo.id} loading='lazy' className='w-3/4 sm:w-2/3 md:w-1/2 lg:w-[50%] object-contain mt-5 lg:mt-8 mx-auto lg:mx-5 lg:mb-5 shadow-2xl shadow-black rounded-md'/>
          <div className='flex-1 my-5 px-4 sm:px-6 md:px-8'>
              <div className='flex flex-col justify-center items-center md:justify-between md:flex-row'>
                  <p className='text-center text-base md:text-xl lg:text-2xl font-bold text-black text-shadow-2xs text-shadow-white'>{projectName}</p>
                  <span className={`flex items-center justify-center w-fit text-white mt-2 md:mt-0 px-3 py-1 rounded-full text-[10px] font-medium shadow-sm shadow-black ${statusBg}`}><i className={`${iconClass}`}></i>{projectStatus}</span>
              </div>
              {/* Category + Deployment Info */}
              <div className="flex gap-2 mt-3 justify-center md:justify-start flex-wrap">
                  <span className="px-2 py-1 text-[10px] bg-blue-600 text-white rounded-full font-medium">Web App</span>
                  <span className="px-2 py-1 text-[10px] bg-indigo-700 text-white rounded-md font-medium">Deployed on Netlify</span>
              </div>

              <p className='text-justify text-xs md:text-sm mt-4 text-purple-950 dark:text-white'>{projectDescription}</p>
              <div className='grid grid-cols-2 md:grid-cols-4 gap-2 mt-10'>
                  {technologyStack.map((technology, index) => {
                          return <button key={index} className='border-2 border-white text-black bg-yellow-400 text-[10px] sm:text-xs px-2 py-1 rounded-lg shadow-sm hover:bg-yellow-300'>{technology}</button>
                  })}
              </div>
              <div className = 'flex flex-col md:flex-row justify-center gap-3 items-center mt-10'>
                  <Link to= {liveDemoLink} target='_blank'><button title='View Live Demo of Project' className='w-32 md:w-36 bg-red-600 p-2 rounded-lg flex justify-center items-center text-xs md:text-sm cursor-pointer border-2 border-white hover:bg-red-500 transition-transform'><i className="fa-solid fa-circle-play m-1"></i> Live Demo</button></Link>
                  <Link to= {githubCodeLink} target='_blank'><button title='View Code of Project' className='w-32 md:w-36 bg-indigo-500 p-2 rounded-lg flex justify-center items-center text-xs md:text-sm cursor-pointer border-2 border-white hover:bg-indigo-400 transition-transform'><i className="fa-brands fa-github mr-1"></i> Github Code</button></Link>
              </div>
          </div>
        </div>
    )
}

export default ProjectComponent