import React from "react";
import { ProjectDetails } from "@/components/project-details/project-details";
import { AppConstants } from "@/utils/AppConstants";

export const Publications = () => {
  return (
    <div
      id="publications"
      className="flex flex-row justify-start px-52 bg-[#021116] text-white my-auto w-full py-4 h-auto"
    >
      <div className="flex flex-col justify-between mt-10 w-[20%]">
        <span className="text-3xl text-gray-500">Publications</span>
      </div>

      <div className="flex flex-col my-5 space-y-20 w-[80%]">
        <ProjectDetails
          slug="test-1"
          projectTitle="Sample Publication 1"
          projectDescription="Sample Publication Description"
          type={AppConstants.PUBLICATION}
        />
        <ProjectDetails
          slug="test-2"
          projectTitle="Sample Publication 1"
          projectDescription="Sample Publication Description"
          type={AppConstants.PUBLICATION}
        />
        <ProjectDetails
          slug="test-3"
          projectTitle="Sample Publication 1"
          projectDescription="Sample Publication Description"
          type={AppConstants.PUBLICATION}
        />
      </div>
    </div>
  );
};
