import React from 'react'

const SkillBarComponent = ({ skill, percentage, color, imageUrl }) => {
  return (
     <div>
      <div className="flex justify-between mb-1">
        <span><img src={imageUrl} className='w-10 hover:scale-110 transition-transform'></img></span>
        <span>{skill}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full h-2 bg-gray-700 rounded-full">
         <div className={`h-2 rounded-full bg-purple-500`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  )
}

export default SkillBarComponent