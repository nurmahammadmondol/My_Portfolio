import React, { useEffect, useState } from 'react';

import axios from 'axios';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get('https://my-portfolio-seven-gamma-85.vercel.app/projects')
      .then(res => {
        // console.log(res.data);
        setProjects(res.data);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h5 className="text-2xl font-semibold text-[#4FC5C5] border-b-2 border-black p-1 mb-7 lg:mb-10">
        Projects
      </h5>

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
          {/* Json files  */}

          {projects?.map(project => (
            <div className="h-full bg-white  rounded-lg p-5 ">
              {/* Image Box  */}
              <div className="shadow-xl  rounded-md bg-white p-5">
                <img
                  className="rounded-md  h-full w-full md:h-[200px] border"
                  src={project?.coverImage}
                  alt="project cover Image"
                />
              </div>

              {/* Details Box */}
              <div className="mt-6 md:mt-7">
                <h4 className="text-[#4FC5C5] text-lg font-bold">
                  {project?.title}
                </h4>
                <p className="text-sm text-gray-400 my-2">
                  {project?.shortDescription}
                </p>

                <p className="mb-2">Technologies:</p>
                <div className="flex gap-2 flex-wrap">
                  {project?.Technologies.map(tack => (
                    <small
                      className="bg-[#425c64] font-bold text-white text-xs px-4 py-1 rounded-full"
                      key={tack}
                    >
                      {tack}
                    </small>
                  ))}
                </div>

                <div className="mt-5 flex justify-center items-center gap-5">
                  <a
                    href={project?.LiveView}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="btn btn-sm btn-accent text-white ">
                      Live veiw
                    </button>
                  </a>

                  <Link to={`/details/${project._id}`}>
                    <button className="btn btn-sm btn-accent text-white ">
                      Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center ">
          <div className="flex flex-col items-center">
            <small className="text-center mb-1">Loading....</small>
            <progress className="progress progress-accent w-56"></progress>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
