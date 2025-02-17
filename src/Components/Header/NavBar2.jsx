import React from 'react';

import {
  BookOpenText,
  ContactRound,
  Download,
  FolderKanban,
  MonitorCog,
  User,
} from 'lucide-react';

import { NavLink } from 'react-router-dom';

const NavBar2 = () => {
  const links = (
    <nav className="md:flex items-center gap-5 lg:gap-10 text-sm">
      <NavLink to="/">
        <div className="flex  flex-col items-center gap-1 hover:text-green-500 mt-3 md:mt-0">
          <User />
          <button className="hidden md:flex">ABOUT</button>
        </div>
      </NavLink>

      <NavLink to="/skills">
        <div className="flex  flex-col items-center gap-1 hover:text-green-500 mt-3 md:mt-0">
          <MonitorCog />
          <button className="hidden md:flex">SKILLS</button>
        </div>
      </NavLink>

      <NavLink to="/projects">
        <div className="flex flex-col items-center gap-1 hover:text-green-500 mt-3 md:mt-0">
          <FolderKanban />
          <button className="hidden md:flex">PROJECTS</button>
        </div>
      </NavLink>

      <NavLink to="/education">
        <div className="flex flex-col items-center gap-1 hover:text-green-500 mt-3 md:mt-0">
          <BookOpenText />
          <button className="hidden md:flex">EDUCATION</button>
        </div>
      </NavLink>

      <NavLink to="/contact">
        <div className="flex flex-col items-center gap-1 hover:text-green-500 mt-3 md:mt-0">
          <ContactRound />
          <button className="hidden md:flex">CONTACT</button>
        </div>
      </NavLink>
    </nav>
  );

  return (
    <div className="fixed w-11/12 lg:w-10/12 mx-auto navbar  bg-base-100 border z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-2  py-2 px-4 shadow"
          >
            {links}
          </ul>
        </div>
        <a href="/" className="btn btn-ghost text-xs md:text-xl">
          <span className="text-[#4FC5C5]">NM</span> ROBI
        </a>
      </div>

      <div className="navbar-end lg:flex items-center lg:gap-10">
        <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <button className="flex items-center gap-2  btn btn-sm md:btn-md rounded-none btn-accent text-white text-xs ">
          <Download size={14} /> Download CV
        </button>
      </div>
    </div>
  );
};

export default NavBar2;
