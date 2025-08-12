import React,{useState} from 'react'
import portfolioNameLogo from "../assets/portfolio-name-logo.png"
import { Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { toggleMenuButton } from '../reduxStore/hideShowMenuSlice'
import { FaBars, FaTimes } from "react-icons/fa";
import { BsBrightnessHighFill } from "react-icons/bs";
import { MdOutlineDarkMode } from "react-icons/md";
import { toggleMode } from '../reduxStore/toggleLightDarkMode'


const HeaderComponent = () => {
  const dispatch = useDispatch();
  const displayMenuBar = useSelector(store => store.menuButton.isMenuOpen);
  const currentMode = useSelector(store => store.toggleLightDarkMode.currentMode);  


  const toggleMenuBar = () => {
    dispatch(toggleMenuButton());
  }

  const toggleLightDarkMode = () => {
     dispatch(toggleMode());
  }

  return (
    <div className={currentMode === "dark"?"dark":""}>
      <div className='w-full h-20 absolute flex justify-between items-center px-4 bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-white'>
        <div className='flex items-center sm:m-2'>
          <Link to='/'><img src={portfolioNameLogo} alt='Portfolio Name Logo' className='h-10 bg-gradient-to-tr from-purple-700 to-yellow-400 rounded-full hover:animate-pulse'></img></Link>
          <Link to='/'><h1 className='px-2 italic hidden lg:block font-medium'>Sakshi Rastogi</h1></Link>
        </div>

        <ul className='hidden lg:flex lg:items-center lg:text-sm animate-fadeInDown font-medium'>
              <Link to='/' className='hover:animate-pulse'><li className='pl-3 pr-6 py-2 cursor-pointer'><i className="fa-solid fa-house"></i> HOME</li></Link>
              {/* {isHomeItemClicked ? (<p className='w-[72px] h-[3px] bg-gradient-to-br from-pink-400 via-indigo-300 to-green-500 ml-6 -mt-6'></p>) : null} */}
              <Link to='/about' className='hover:animate-pulse'><li className='px-6 cursor-pointer'><i className="fa-solid fa-lightbulb"></i> ABOUT</li></Link>
              <Link to='/work' className='hover:animate-pulse'><li className='px-6 cursor-pointer'><i className="fa-solid fa-briefcase"></i> WORK EXPERIENCE</li></Link>
              <Link to='/skills' className='hover:animate-pulse'><li className='px-6 cursor-pointer'><i className="fa-solid fa-list-check"></i> SKILLS</li></Link>
              <Link to='/projects' className='hover:animate-pulse'><li className='px-6 cursor-pointer'><i className="fa-solid fa-file-powerpoint"></i> PROJECTS</li></Link>
              <Link to='/contact' className='hover:animate-pulse'><li className='px-6 cursor-pointer'><i className="fa-solid fa-envelope"></i> CONTACT ME</li></Link>
              <div className="cursor-pointer hover:animate-pulse" onClick={()=>{toggleLightDarkMode()}}>
                {currentMode === "light"? <MdOutlineDarkMode size={25} color={"purple"}></MdOutlineDarkMode> : <BsBrightnessHighFill size={25} color={currentMode === "light" ?"purple":"yellow"}></BsBrightnessHighFill>}
              </div>
        </ul>

        <div className="lg:hidden flex cursor-pointer">
          {displayMenuBar === false ? currentMode === "light"? <MdOutlineDarkMode size={25} color={"purple"} className="mr-3" onClick={()=> toggleLightDarkMode()}></MdOutlineDarkMode> : <BsBrightnessHighFill size={25} color={currentMode === "light" ?"purple":"yellow"} className="mr-3" onClick={()=> toggleLightDarkMode()}></BsBrightnessHighFill> : null}
          {displayMenuBar? <FaTimes className='z-10' size={30} onClick={()=> toggleMenuBar()}></FaTimes> : <FaBars size={25} onClick={()=> toggleMenuBar()}></FaBars>}
        </div>

        {displayMenuBar && ( 
          <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-purple-100 text-purple-900 dark:bg-purple-900 dark:text-white animate-fadeInLeft lg:hidden'>
            <Link to='/'><li className='p-6 cursor-pointer font-bold italic'><i className="fa-solid fa-house"></i> HOME</li></Link>
            <Link to='/about'><li className='p-6 cursor-pointer hover:animate-pulse'><i className="fa-solid fa-lightbulb"></i> ABOUT</li></Link>
            <Link to='/work'><li className='p-6 cursor-pointer'><i className="fa-solid fa-briefcase"></i> WORK EXPERIENCE</li></Link>
            <Link to='/skills'><li className='p-6 cursor-pointer'><i className="fa-solid fa-list-check"></i> SKILLS</li></Link>
            <Link to='/projects'><li className='p-6 cursor-pointer'><i className="fa-solid fa-file-powerpoint"></i> PROJECTS</li></Link>
            <Link to='/contact'><li className='p-6 cursor-pointer'><i className="fa-solid fa-envelope"></i> CONTACT ME</li></Link>
          </ul>)}
      </div>

    </div>
  )
}

export default HeaderComponent

