import React from 'react';

import Sitebar from '../Main/Sitebar/Sitebar';
import NavBar2 from '../Header/NavBar2';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';

const HomePage = () => {
  return (
    <div className="w-11/12 lg:w-10/12  mx-auto py-3">
      <NavBar2></NavBar2>

      <div className=" grid grid-cols-1 lg:grid-cols-3 lg:gap-14 mt-24">
        <div className="w-full">
          <Sitebar></Sitebar>
        </div>

        <div className=" col-span-2 mt-10 lg:mt-0 flex flex-col justify-between gap-10">
          <div className="flex-grow">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
