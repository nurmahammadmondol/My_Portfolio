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
    <div className="p-5 w-full bg-base-100 shadow-xl flex  justify-center gap-10 ">
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
