import React from 'react';
import MyPicture from '../../../assets/Photo/MePic.jpg';
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

const Sitebar = () => {
  return (
    <div className="lg:fixed   bg-white rounded-md p-5 md:p-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 md:gap-8 lg:gap-0">
      <div className="w-10/12 mx-auto bg-white shadow-lg rounded-md p-5 ">
        <img
          className="w-full h-full lg:h-[200px] rounded-md"
          src={MyPicture}
          alt=""
        />
      </div>

      <div className="flex flex-col  md:col-span-2 mt-5 md:mt-0 lg:mt-5">
        <h4 className="text-xl text-center font-bold">
          Nur Mahammad Mondol Robiul
        </h4>

        <div className="flex justify-center items-center gap-7  my-5">
          <span className="text-blue-400 ">
            <Facebook />
          </span>

          <span className="text-pink-500 ">
            <Linkedin />
          </span>

          <span className="text-orange-500 ">
            <Twitter />
          </span>

          <span className="text-green-400 ">
            <Github />
          </span>
        </div>

        <div className="space-y-3">
          <p className="flex items-center gap-1">
            <Phone />
            +08801707826864
          </p>
          <p className="flex items-center gap-1">
            <Mail />
            nurmahammadmondolrobiul@gmail.com
          </p>
          <p className="flex items-center gap-1">
            <MapPin />
            Rangpur, Bangladesh
          </p>
          <p className="flex items-center gap-1">
            <CalendarRange />
            October 13, 2003
          </p>
        </div>

        <div className="mt-5">
          <button className="flex items-center gap-3 w-full btn btn-accent text-white font-bold">
            <Download /> Download CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sitebar;
