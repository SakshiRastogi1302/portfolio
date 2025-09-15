import React, { useEffect, useState } from 'react'

const SkillBarComponent = ({ skill, percentage, imageUrl }) => {
  const [progress, setProgress] = useState(0);

  useEffect(()=>{
    const timer = setTimeout(()=>{
       setProgress(percentage);
    },200);

    return() => clearTimeout(timer);
  },[percentage])
  return (
     <div>
      <div className="flex justify-between mb-1">
        <span><img src={imageUrl} className='w-5 hover:scale-150 transition-transform'></img></span>
        <span>{skill}</span>
        <span>{progress}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full">
         <div className="h-2 rounded-full bg-purple-500 transition-all duration-1000 ease-out" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  )
}

export default SkillBarComponent