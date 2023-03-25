import React from 'react';
import skills from '../data/skills';

const SkillBar = ({ skillName, proficiency, color, ImageUrl }) => {
    const barStyles = `h-2 rounded-full overflow-hidden`;
    const filledStyles = `h-full rounded-full`;
    const emptyStyles = `h-full rounded-full`;
  
    return (
    <div className="flex items-center mb-4">
      <img src={ImageUrl} alt={skillName} className="mr-4 w-8 h-8" />
      <div className="mb-4">
        <h3 className="text-gray-700 dark:text-white font-big mb-2">{skillName}</h3>
        <div className={barStyles} style={{ backgroundColor: '#F1F1F1',width: '500px'}}>
          <div className={filledStyles} style={{ width: `${proficiency}%`, backgroundColor: color }} />
          <div className={emptyStyles} style={{ width: `${100 - proficiency}%`, backgroundColor: '#D1D1D1' }} />
        </div>
      </div>
    </div>
    );
  };



const Skills = () => {
  

  return (
    <div className="min-h-screen flex items-center justify-content">
      <div className="max-w-md mx-auto px-4">
        <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Skills</h1>
        {skills.map((skills) => (
          <SkillBar key={skills.name} skillName={skills.name} proficiency={skills.profficiency} color={skills.color} ImageUrl={skills.ImageUrl}/>
        ))}
      </div>
    </div>
  );
};

export default Skills;