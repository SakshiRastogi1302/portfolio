import React,{useState} from 'react'
import portfolioNameLogo from "../assets/portfolio-name-logo.png"
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { toggleMenuButton } from '../redux_store/hideShowMenuSlice'
import { FaBars, FaTimes } from "react-icons/fa";
import { BsBrightnessHighFill } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { toggleMode } from '../redux_store/toggleLightDarkModeSlice'


const HeaderComponent = () => {
  const dispatch = useDispatch();  const displayMenuBar = useSelector(store => store.menuButton.isMenuOpen);
  const currentMode = useSelector(store => store.toggleLightDarkMode.currentMode);  


  const toggleMenuBar = () => {
    dispatch(toggleMenuButton());
  }

  const toggleLightDarkMode = () => {
     dispatch(toggleMode());
  }

  return (
    <div className={currentMode === "dark"?"dark":""}>
      <div className='w-full h-20 fixed top-0 left-0 flex justify-between items-center px-4 bg-purple-900 dark:bg-purple-200 text-white dark:text-purple-900 z-50'>
        <div className='flex items-center sm:m-2'>
          <Link to='/'><img src={portfolioNameLogo} alt='Portfolio Name Logo' className='h-10 bg-gradient-to-tr from-purple-700 to-yellow-400 rounded-full hover:animate-pulse'></img></Link>
          <Link to='/'><h1 className='px-2 italic hidden lg:block font-medium'>Sakshi Rastogi</h1></Link>
        </div>

        <ul className='hidden lg:flex lg:items-center text-xs animate-fadeInDown font-medium'>
              <NavLink to='/' className={({isActive})=>`rounded-md p-2 hover:animate-pulse ${isActive ?'bg-yellow-500 dark:bg-yellow-400' : ''}`}><li className='px-4 cursor-pointer'><i className="fa-solid fa-house"></i> HOME</li></NavLink>
              <NavLink to='/about' className={({isActive})=>`rounded-md p-2 hover:animate-pulse ${isActive ? 'bg-yellow-500 dark:bg-yellow-400' : ''}`}><li className='px-4 cursor-pointer'><i className="fa-solid fa-lightbulb"></i> ABOUT</li></NavLink>
              <NavLink to='/work' className={({isActive})=>`rounded-md p-2 hover:animate-pulse ${isActive ? 'bg-yellow-500 dark:bg-yellow-400' : ''}`}><li className='px-4 cursor-pointer'><i className="fa-solid fa-briefcase"></i> WORK EXPERIENCE</li></NavLink>
              <NavLink to='/skills' className={({isActive})=>`rounded-md p-2 hover:animate-pulse ${isActive ? 'bg-yellow-500 dark:bg-yellow-400' : ''}`}><li className='px-4 cursor-pointer'><i className="fa-solid fa-list-check"></i> SKILLS</li></NavLink>
              <NavLink to='/projects' className={({isActive})=>`rounded-md p-2 hover:animate-pulse ${isActive ? 'bg-yellow-500 dark:bg-yellow-400' : ''}`}><li className='px-4 cursor-pointer'><i className="fa-solid fa-file-powerpoint"></i> PROJECTS</li></NavLink>
              <NavLink to='/contact' className={({isActive}) =>`rounded-md p-2 hover:animate-pulse ${isActive ? 'bg-yellow-500 dark:bg-yellow-400' : ''}`}><li className='px-4 cursor-pointer'><i className="fa-solid fa-envelope"></i> CONTACT ME</li></NavLink>
              <div className="cursor-pointer hover:animate-pulse bg-black rounded-full p-2 m-2" onClick={()=>{toggleLightDarkMode()}}>
                {currentMode === "light"? <MdOutlineDarkMode size={20} color={"white"}></MdOutlineDarkMode> : <BsBrightnessHighFill size={20} color={"yellow"}></BsBrightnessHighFill>}
              </div>
        </ul>

        <div className="lg:hidden flex cursor-pointer">
          {displayMenuBar === false ? currentMode === "light"? <MdOutlineDarkMode size={45} color={"white"} className="mr-3 bg-black rounded-full p-2" onClick={()=> toggleLightDarkMode()}></MdOutlineDarkMode> : <BsBrightnessHighFill size={45} color={"yellow"} className="mr-3 bg-black rounded-full p-2" onClick={()=> toggleLightDarkMode()}></BsBrightnessHighFill> : null}
          {displayMenuBar? <FaTimes className='z-50' size={30} onClick={()=> toggleMenuBar()}></FaTimes> : <FaBars size={35} onClick={()=> toggleMenuBar()} className='mt-1'></FaBars>}
        </div>
      </div>

        {displayMenuBar && ( 
          <ul className='flex flex-col justify-center items-center fixed top-0 left-0 w-full h-screen text-xl bg-purple-200 dark:bg-purple-900 text-purple-900 dark:text-white animate-fadeInLeft lg:hidden z-40'>
            <NavLink to='/' onClick={()=>toggleMenuBar()} className={({isActive})=>`${isActive ? 'rounded-md p-2 bg-yellow-500 dark:bg-yellow-400' : ''}`}><li className='p-6 cursor-pointer font-bold italic'><i className="fa-solid fa-house"></i> HOME</li></NavLink>
            <NavLink to='/about' onClick={()=>toggleMenuBar()} className={({isActive}) => `${isActive ? 'rounded-md p-2 bg-yellow-500 dark:bg-yellow-400' : ''}`}><li className='p-6 cursor-pointer hover:animate-pulse'><i className="fa-solid fa-lightbulb"></i> ABOUT</li></NavLink>
            <NavLink to='/work' onClick={()=>toggleMenuBar()} className={({isActive}) => `${isActive ? 'rounded-md p-2 bg-yellow-500 dark:bg-yellow-400' : ''}`}><li className='p-6 cursor-pointer'><i className="fa-solid fa-briefcase"></i> WORK EXPERIENCE</li></NavLink>
            <NavLink to='/skills' onClick={()=>toggleMenuBar()} className={({isActive}) => `${isActive ? 'rounded-md p-2 bg-yellow-500 dark:bg-yellow-400' : ''}`}><li className='p-6 cursor-pointer'><i className="fa-solid fa-list-check"></i> SKILLS</li></NavLink>
            <NavLink to='/projects' onClick={()=>toggleMenuBar()} className={({isActive}) => `${isActive ? 'rounded-md p-2 bg-yellow-500 dark:bg-yellow-400' : ''}`}><li className='p-6 cursor-pointer'><i className="fa-solid fa-file-powerpoint"></i> PROJECTS</li></NavLink>
            <NavLink to='/contact' onClick={()=>toggleMenuBar()} className={({isActive}) => `${isActive ? 'rounded-md p-2 bg-yellow-500 dark:bg-yellow-400' : ''}`}><li className='p-6 cursor-pointer'><i className="fa-solid fa-envelope"></i> CONTACT ME</li></NavLink>
          </ul>)}
    </div>
  )
}

export default HeaderComponent

