import React from 'react';
import Navbar from '../Header/Navbar';
import Sitebar from '../Main/Sitebar/Sitebar';

const HomePage = () => {
  return (
    <div className="w-11/12 lg:w-10/12  mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 lg:gap-14">
      <div className="">
        <Sitebar></Sitebar>
      </div>

      <div className=" col-span-2 mt-10 lg:mt-0">
        <div className=" flex flex-col gap-10">
          <div className="">
            <Navbar></Navbar>
          </div>

          <div className="h-full  md:h-[1200px] w-full bg-white p-5">
            <p>nurrr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
