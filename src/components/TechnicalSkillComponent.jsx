import React from 'react'
import htmlLogo from "../assets/html-logo.png"
import cssLogo from "../assets/css-logo.png"
import tailwindcssLogo from "../assets/tailwindcss-logo.png"
import jestLogo from "../assets/jest-logo.png"
import typescriptLogo from "../assets/typescript-logo.png"
import reactLogo from "../assets/react-logo.png"
import jsLogo from "../assets/js-logo.png"
import githubLogo from "../assets/github-logo.png"
import vsCodeLogo from "../assets/vscode-logo.png"
import SkillBarComponent from './SkillBarComponent'

const TechnicalSkillComponent = () => {
  return (
    <div className="space-y-8">
        {/* Frontend + Testing + Tools Section */}
        <section>
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4 border-b-4 border-yellow-600 dark:border-yellow-400 pb-1">Frontend + Testing + Tools</h2>
            <div className="grid grid-col-1 md:grid-cols-2 gap-x-6 gap-y-5 shadow-2xl shadow-black bg-black text-white border-2 border-white p-6 rounded-2xl">
                <SkillBarComponent skill="HTML5" percentage={90} imageUrl={htmlLogo} />
                <SkillBarComponent skill="CSS3" percentage={85} imageUrl={cssLogo}/>
                <SkillBarComponent skill="JavaScript (ES6+)" percentage={80} imageUrl={jsLogo} />
                <SkillBarComponent skill="TypeScript" percentage={75} imageUrl={typescriptLogo}/>
                <SkillBarComponent skill="Tailwind CSS" percentage={90} imageUrl={tailwindcssLogo}/>
                <SkillBarComponent skill="React.js" percentage={85} imageUrl={reactLogo}/>
                <SkillBarComponent skill="Jest" percentage={70} imageUrl={jestLogo}/>
                <SkillBarComponent skill="GitHub" percentage={85} imageUrl={githubLogo}/>
                <SkillBarComponent skill="VS Code" percentage={90} imageUrl={vsCodeLogo}/>
            </div>
        </section>
    </div>
  );
};

export default TechnicalSkillComponent