import React from 'react';
import projectOne from '../../..//assets/Photo/Project-one/project-one-1.png';
import projectTwo from '../../..//assets/Photo/Project-two/project-two-2.png';
import projectThree from '../../..//assets/Photo/Project-three/project-three-1.png';

const Projects = () => {
  const Technologies = [
    'React js',
    'Javascript',
    'Tailwind',
    'Node.js',
    'Express js',
    'MongoDB',
    'Firebase',
    'Axois',
    'JWT',
  ];

  return (
    <div>
      <h5 className="text-2xl font-semibold text-[#4FC5C5] border-b-2 border-black p-1 mb-7 lg:mb-10">
        Projects
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
        {/* Project - 1 */}
        <div className="h-full bg-white  rounded-lg p-5 ">
          {/* Image Box  */}
          <div className="shadow-xl  rounded-md bg-white p-5">
            <img
              className="rounded-md  h-full w-full md:h-[200px] border"
              src={projectOne}
              alt=""
            />
          </div>

          {/* Details Box */}
          <div className="mt-6 md:mt-7">
            <h4 className="text-[#4FC5C5] text-lg  font-bold">
              Employee Management System
            </h4>
            <p className="text-sm text-gray-400 my-2">
              A web application for managing employees, including adding,
              updating, and removing employees, tracking work progress, and
              handling payroll efficiently
            </p>

            <p className="mb-2">Technologies:</p>
            <div className="flex gap-2 flex-wrap">
              {Technologies.map(tack => (
                <small
                  className="bg-[#425c64] font-bold text-white text-xs px-4 py-1 rounded-full"
                  key={tack}
                >
                  {tack}
                </small>
              ))}
            </div>

            <div className="mt-5 flex justify-center items-center gap-6">
              <a
                href="https://snazzy-daffodil-c813e6.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-sm btn-accent text-white ">
                  Live veiw
                </button>
              </a>

              <button className="btn btn-sm btn-accent text-white ">
                Details
              </button>
            </div>
          </div>
        </div>

        {/* Project - 2 */}
        <div className="h-full bg-white  rounded-lg p-5 ">
          {/* Image Box  */}
          <div className="shadow-xl rounded-md bg-white p-5">
            <img
              className="rounded-md  h-full w-full md:h-[200px] border"
              src={projectTwo}
              alt=""
            />
          </div>

          {/* Details Box */}
          <div className="mt-6 md:mt-7">
            <h4 className="text-[#4FC5C5] text-lg font-bold">
              Restaurant_Management
            </h4>
            <p className="text-sm text-gray-400 my-2">
              A restaurant management system that helps manage orders, menus,
              reservations, and customer interactions, ensuring smooth
              operations.
            </p>

            <p className="mb-2">Technologies:</p>
            <div className="flex gap-2 flex-wrap">
              {Technologies.map(tack => (
                <small
                  className="bg-[#425c64] font-bold text-white text-xs px-4 py-1 rounded-full"
                  key={tack}
                >
                  {tack}
                </small>
              ))}
            </div>

            <div className="mt-5 flex justify-center items-center gap-6">
              <a
                href="https://stellular-frangipane-a504ed.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-sm btn-accent text-white ">
                  Live veiw
                </button>
              </a>

              <button className="btn btn-sm btn-accent text-white ">
                Details
              </button>
            </div>
          </div>
        </div>

        {/* Project - 3 */}
        <div className="h-full bg-white  rounded-lg p-5 ">
          {/* Image Box  */}
          <div className="shadow-xl  rounded-md bg-white p-5">
            <img
              className="rounded-md  h-full w-full md:h-[200px] border"
              src={projectThree}
              alt=""
            />
          </div>

          {/* Details Box */}
          <div className="mt-6 md:mt-7">
            <h4 className="text-[#4FC5C5] text-lg font-bold">
              Online sports equipment store
            </h4>
            <p className="text-sm text-gray-400 my-2">
              An online sports shop platform that allows users to browse,
              search, and purchase sports equipment and accessories with an
              easy-to-use interface.
            </p>

            <p className="mb-2">Technologies:</p>
            <div className="flex gap-2 flex-wrap">
              {Technologies.map(tack => (
                <small
                  className="bg-[#425c64] font-bold text-white text-xs px-4 py-1 rounded-full"
                  key={tack}
                >
                  {tack}
                </small>
              ))}
            </div>

            <div className="mt-5 flex justify-center items-center gap-6">
              <a
                href="https://dainty-belekoy-1b713a.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-sm btn-accent text-white ">
                  Live veiw
                </button>
              </a>

              <button className="btn btn-sm btn-accent text-white ">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
