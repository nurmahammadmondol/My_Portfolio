import {
  BookOpenText,
  ContactRound,
  FolderKanban,
  MonitorCog,
  User,
} from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" bg-white shadow-lg z-50   md:flex justify-center items-center gap-10 lg:gap-12 py-5 ">
      <NavLink>
        <div className="flex flex-col items-center gap-1 hover:text-green-500">
          <User />
          <button>ABOUT</button>
        </div>
      </NavLink>

      <NavLink>
        <div className="flex flex-col items-center gap-1 hover:text-green-500">
          <MonitorCog />
          <button>SKILLS</button>
        </div>
      </NavLink>

      <NavLink>
        <div className="flex flex-col items-center gap-1 hover:text-green-500">
          <FolderKanban />
          <button>PROJECTS</button>
        </div>
      </NavLink>

      <NavLink>
        <div className="flex flex-col items-center gap-1 hover:text-green-500">
          <BookOpenText />
          <button>EDUCATION</button>
        </div>
      </NavLink>

      <NavLink>
        <div className="flex flex-col items-center gap-1 hover:text-green-500">
          <ContactRound />
          <button>CONTACT</button>
        </div>
      </NavLink>
    </div>
  );
};

export default Navbar;
