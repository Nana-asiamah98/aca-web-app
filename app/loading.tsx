import React from "react";

const loading = () => {
  return (
    <div className="flex flex-col min-h-screen ">
     
      <div className="flex flex-row justify-start px-52 text-white my-10 mx-auto w-full h-auto animate-pulse">
        <div className="flex flex-col w-[20%] items-center justify-between gap-4">
          <div>
            <div className="object-none w-44 h-44 rounded-full"></div>
          </div>
          <div className="flex flex-col items-center gap-5">
            <span className="h-4 bg-gray-200 rounded w-3/4"></span>
            <span className="h-4 bg-gray-200 rounded w-1/2"></span>
            <div className="flex flex-col items-center gap-3 mt-5">
              <span className="h-4 bg-gray-200 rounded w-1/2"></span>
              <div className="flex flex-row justify-between space-x-4">
                <div className="h-10 bg-gray-200 w-10 rounded-full"></div>
                <div className="h-10 bg-gray-200 w-10 rounded-full"></div>
                <div className="h-10 bg-gray-200 w-10 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-[80%] mx-40">
          <h2 className="h-4 bg-gray-200 rounded w-1/4"></h2>
          <p className="h-4 bg-gray-200 rounded w-full mt-5"></p>
        </div>
      </div>
      <div
        id="skills"
        className="flex flex-col justify-start px-52 bg-gray-900 text-white my-20 mx-auto w-full h-auto space-y-20 py-20 animate-pulse"
      >
        <div className="flex flex-row justify-center">
          <div className="h-10 bg-gray-100 rounded"></div>
        </div>
        <div className="flex flex-row justify-between">
          <div className="h-16 w-16 bg-gray-100 rounded-lg mr-2"></div>
          <div className="h-16 w-16 bg-gray-100 rounded-lg mr-2"></div>
          <div className="h-16 w-16 bg-gray-100 rounded-lg"></div>
        </div>
      </div>
      <div
        id="projects"
        className="flex flex-row justify-start px-52 text-white  mx-auto w-full h-auto animate-pulse"
      >
        <div className="flex flex-col justify-between my-5 w-[20%]">
          <div className="h-8 bg-gray-300 rounded w-full"></div>
        </div>

        <div className="flex flex-col my-5 space-y-10 w-[80%]">
          <div>
            <div className="w-auto flex flex-col">
              <div className="grid bg-[#1F3B4D] text-white pr-6 grid-cols-3 w-[400px] space-y-2">
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
                <div className="h-4 bg-gray-300 rounded w-full"></div>
              </div>

              <div className="h-16 mt-26 bg-transparent border-transparent">
                <div className="space-y-2 text-white">
                  <div className="h-5 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
              <div className="h-16 mt-26 bg-transparent border-transparent">
                <div className="space-y-2 text-white">
                  <div className="h-5 bg-gray-300 rounded w-full"></div>
                  <div className="h-5 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
              <div className="h-16 mt-26 bg-transparent border-transparent">
                <div className="space-y-2 text-white">
                  <div className="h-5 bg-gray-300 rounded w-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        id="publications"
        className="flex flex-row justify-start px-52 bg-gray-200 text-white my-auto w-full py-4 h-auto animate-pulse"
      >
        <div className="flex flex-col justify-between mt-10 w-1/5">
          <div className="h-10 bg-gray-400 w-full"></div>
        </div>

        <div className="flex flex-col my-5 space-y-20 w-4/5">
          <div className="h-20 bg-gray-400 w-full"></div>
          <div className="h-20 bg-gray-400 w-full"></div>
          <div className="h-20 bg-gray-400 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
