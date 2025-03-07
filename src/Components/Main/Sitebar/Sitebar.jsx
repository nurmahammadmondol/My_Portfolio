import React from 'react';
import MyPicture from '../../../assets/Photo/robi.jpg';
import {
  CalendarRange,
  Download,
  Facebook,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const Sitebar = () => {
  return (
    <div className="lg:fixed  bg-white rounded-md p-4 md:p-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 md:gap-5 lg:gap-0">
      <div className="w-9/12 mx-auto bg-white shadow-lg rounded-md p-4 ">
        <img
          className="w-full h-full lg:h-[180px] rounded-md"
          src={MyPicture}
          alt=""
        />
      </div>

      <div className="flex flex-col  md:col-span-2 mt-5 md:mt-0 lg:mt-4">
        <h4 className="text-xl text-center font-bold">
          Nur Mahammad Mondol Robiul
        </h4>

        <div className="bg-gray-100 w-full rounded-full p-2 my-1 text-center">
          <span className="text-[#4FC5C5] font-bold">
            <Typewriter
              words={[
                'Software Develope',
                'MERN Stack Developer',
                'Entrepreneur',
                'Full Stack Developer',
              ]}
              loop={0} // 0 মানে ইনফিনিট লুপ
              cursor
              // cursorStyle=" "
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </div>

        <div className="flex justify-center items-center gap-7  my-3">
          <a href="https://www.facebook.com/nm.robi.3" target="_blank">
            <span className="text-blue-400 ">
              <Facebook />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/in/nur-mohammad-mondol-robiul-8672b4334/"
            target="_blank"
          >
            <span className="text-pink-500 ">
              <Linkedin />
            </span>
          </a>

          <span className="text-orange-500 ">
            <Twitter />
          </span>

          <a href="https://github.com/nurmahammadmondol" target="_blank">
            <span className="text-green-400 ">
              <Github />
            </span>
          </a>
        </div>

        <div className="space-y-3">
          <p className="flex items-center gap-1 text-sm">
            <Phone />
            +08801707826864
          </p>
          <p className="flex items-center gap-1 text-sm">
            <Mail />
            nurmahammadmondolrobiul@gmail.com
          </p>
          <p className="flex items-center gap-1 text-sm">
            <MapPin />
            Rangpur, Bangladesh
          </p>
          <p className="flex items-center gap-1 text-sm">
            <CalendarRange />
            October 13, 2003
          </p>
        </div>

        <div className="mt-3">
          <a
            href="../../../../public/NurMahammadMondolResume.pdf"
            download="NurMahammadMondolResume"
          >
            <button className="flex items-center gap-3 w-full btn btn-accent text-white font-bold">
              <Download /> Download CV
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sitebar;
