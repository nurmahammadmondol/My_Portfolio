import React from 'react';
import Html from '../../../assets/logo/Html.png';
import Css from '../../../assets/logo/css3.png';
import JS from '../../../assets/logo/javascrip.webp';
import Reactlogo from '../../../assets/logo/React.webp';
import Tailwind from '../../../assets/logo/tailwindcss-.png';
import NodeJs from '../../../assets/logo/logo.png';
import ExpressJS from '../../../assets/logo/express-js.png';
import Mongodb from '../../../assets/logo/MongoDB.png';

const skills = {
  frontend: [
    { name: 'HTML', image: Html, percentage: 98 },
    { name: 'CSS', image: Css, percentage: 85 },
    {
      name: 'JavaScript',
      image: JS,
      percentage: 80,
    },
    { name: 'React', image: Reactlogo, percentage: 80 },
    { name: 'Tailwind CSS', image: Tailwind, percentage: 90 },
  ],
  backend: [
    { name: 'Node.js', image: NodeJs, percentage: 80 },
    { name: 'Express.js', image: ExpressJS, percentage: 78 },
    { name: 'MongoDB', image: Mongodb, percentage: 76 },
  ],
};

const Skills = () => {
  return (
    <div className="">
      <h2 className="text-2xl font-bold text-[#4FC5C5] border-b border-[#4FC5C5]">
        Skills
      </h2>
      <div className="mt-4">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="mt-6">
            <h3 className="text-xl font-semibold text-gray-800 capitalize text-center ">
              {category}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-4">
              {items.map(skill => (
                <div
                  key={skill.name}
                  className="flex flex-col  p-4 bg-white shadow-md rounded-lg relative overflow-hidden"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-14 h-14 bg-white rounded-full p-1 mb-3"
                    />
                    <span className="text-lg font-medium">{skill.name}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 mt-3">
                    <div
                      className="bg-[#4FC5C5] h-2.5 rounded-full"
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
