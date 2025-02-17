import { FileCode2 } from 'lucide-react';
import React from 'react';
import { useLoaderData } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const DetailsPage = () => {
  const LoadData = useLoaderData();

  return (
    <div className="bg-base-100 rounded-md p-5 md:p-10">
      <h5 className="text-2xl font-semibold text-[#4FC5C5] border-b-2 border-black p-1 mb-2 ">
        Details
      </h5>

      <div>
        <div className=" shadow-md p-7">
          <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {LoadData.projectImageLinks.map(projectImage => (
              <div className=" w-full">
                <SwiperSlide>
                  <img
                    className="h-full w-full border"
                    src={projectImage}
                    alt="Project Image"
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>

        <div className="mt-5">
          <h6 className="text-[#4FC5C5] text-lg font-bold">
            {LoadData?.title}
          </h6>

          <p className="mt-2 text-gray-500">{LoadData?.description}</p>

          <div className="mt-5">
            <p className="font-bold mb-1">Specification</p>
            <ul className="list-disc ml-5 text-gray-500">
              {LoadData?.Specification.map((specific, index) => (
                <li key={index}>{specific}</li>
              ))}
            </ul>
          </div>

          <div className="mt-7 flex items-center gap-3 md:gap-7">
            <a
              href={LoadData?.clientRepoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-1 btn btn-sm btn-accent text-white rounded-none md:px-3">
                <FileCode2 size={18} />
                Client Repo
              </button>
            </a>

            <a
              href={LoadData?.serverRepoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-1 btn btn-sm btn-accent text-white rounded-none md:px-3">
                <FileCode2 size={18} />
                Server Repo
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
