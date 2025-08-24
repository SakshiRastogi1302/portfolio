import React from 'react'
import projectData from '../utils/projectData'
import ProjectComponent from './ProjectComponent'

const ProjectListComponent = () => {
  return (
    <div className='bg-purple-900 text-white w-full min-h-screen flex flex-col items-center px-4 sm:px-6 lg:px-12'>
        <div className='mt-16 sm:mt-20 md:mt-24 lg:mt-24'>
            <h1 className='text-3xl sm:text-4xl font-el-messiri font-bold tracking-wider text-white animate-moveDown text-shadow-lg text-shadow-black border-b-4 border-yellow-400 mt-5'>Projects</h1>
        </div>
        <div className="my-10 flex flex-wrap justify-center gap-6 w-full max-w-7xl">
            {projectData.map((project) => {
                    return <ProjectComponent key={project.id} projectInfo = {project}/>
            })}
        </div>
        {/* <button className='bg-gradient-to-tr from-purple-900 to-pink-800 p-2 mt-10 absolute right-10'>View More <i className="fa-solid fa-arrow-right"></i></button> */}
    </div>
  )
}

export default ProjectListComponent