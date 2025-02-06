import React from 'react';
import Navbar from '../Header/Navbar';
import MyInfo from '../Header/MyInfo';

const HomePage = () => {
  return (
    <div className="md:flex justify-between gap-10 w-11/12  mx-auto py-10">
      <div className="w-full md:w-2/6 border h-[500px] md:h-[700px] bg-white rounded-md p-5">
        <MyInfo></MyInfo>
      </div>
      <div className="w-full md:w-5/6 border my-10 md:my-0">
        <div className="fixed top-10 right-20">
          <Navbar></Navbar>
        </div>

        <div className="mt-32 w-full">
          <div className="h-full  md:h-[1200px] w-full bg-white p-5">
            <p>nurrr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
