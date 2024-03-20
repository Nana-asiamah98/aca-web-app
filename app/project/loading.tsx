import React from "react";

const loading = () => {
  return (
    <div className="container flex flex-col my-10 space-y-10 animate-pulse">
      <div className="flex flex-col justify-center w-full space-y-7">
        <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="flex flex-row justify-start space-x-5">
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
          <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
        </div>
        <div className="w-full flex flex-row justify-center h-64 bg-gray-200 rounded-sm"></div>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      <div className="flex flex-col justify-start space-y-10">
        <div className="flex flex-col space-y-5">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
        <div className="flex flex-row justify-start space-x-5">
          <span className="h-4 bg-gray-200 rounded w-20"></span>
          <span className="h-4 bg-gray-200 rounded w-20"></span>
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      <div className="flex flex-row justify-start space-x-5 w-full">
        <div className="flex flex-row w-[20%] m-auto h-40 bg-gray-200 rounded-full"></div>
        <div className="flex flex-col w-[80%] space-y-5 m-auto">
          <div className="h-6 bg-gray-200 rounded w-1/4"></div>
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default loading;
