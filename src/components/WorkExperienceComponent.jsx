import React from "react";
import workExperienceData from "../utils/workExperienceData";
import workExperienceLogo from "../assets/work-experience-logo.png"
import { Briefcase, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const WorkExperienceComponent = () => {
  const currentMode = useSelector(store => store.toggleLightDarkMode.currentMode);
  return (
    <div className={currentMode==="light"?"":"dark"}>
      <div className="bg-purple-200 dark:bg-purple-900 w-full min-h-screen flex flex-col items-center py-16 px-6">
        <h2 className="text-3xl sm:text-4xl font-el-messiri font-bold text-purple-950 dark:text-white tracking-wider flex-wrap text-center leading-snug animate-moveDown text-shadow-lg text-shadow-black mt-14 mb-6 border-b-4 border-yellow-500 dark:border-yellow-400">Work Experience</h2>
        <div className="w-full max-w-5xl flex flex-col gap-8 animate-fadeInLeft">
          {workExperienceData.map((exp, index) => (
            <div
              key={index}
              className="border-2 border-purple-950 dark:border-white rounded-2xl shadow-lg shadow-black p-6 flex flex-col md:flex-row gap-4 transition-transform hover:scale-[1.02]">
              {/* Left side - Logo, Role & Company */}
              <div className="flex-1">
                <h3 className="text-2xl font-semibold flex items-center gap-2 text-purple-950 dark:text-purple-300 text-shadow-lg text-shadow-black">
                  <Briefcase size={28} /> {exp.role}
                </h3>
                <Link to="https://salescode.ai/" target="_blank" rel="noopener noreferrer"><p className="text-lg text-yellow-500 dark:text-yellow-400 font-medium" title="Open Salecode.ai official website">{exp.company}</p></Link>
                <p className="text-sm text-purple-950 dark:text-white flex items-center gap-2 mt-1">
                  <Calendar size={20}/> {exp.duration}
                </p>
                <img src={workExperienceLogo} className="w-80 md:w-72 mx-auto md:-ml-6"></img>
              </div>

              {/* Right side - Description */}
              <div className="flex-[2] mt-2">
                <ul className="list-disc list-inside space-y-2 text-purple-950 dark:text-white">
                  {exp.description.map((point, i) => (
                    <li
                      key={i}
                      dangerouslySetInnerHTML={{
                        __html: point.replace(
                          /\b(\d+(\+|%)?|improvement|improved|speed|performance|optimized|overhead|faster|readability|maintainability)\b/gi,
                          (match) =>
                            `<span class="text-yellow-500 dark:text-yellow-400 font-bold">${match}</span>`
                        ),
                      }}
                    />
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkExperienceComponent;
