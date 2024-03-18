import React from "react";
import { ProjectDetails } from "@/components/project-details/project-details";
import { AppConstants } from "@/utils/AppConstants";
import { IPublication } from "@/utils/Interfaces";

interface IPublicationsData {
  data: IPublication[];
}

export const Publications = ({ data: publications }: IPublicationsData) => {
  return (
    <div
      id="publications"
      className="flex flex-row justify-start px-52 bg-[#021116] text-white my-auto w-full py-4 h-auto"
    >
      <div className="flex flex-col justify-between mt-10 w-[20%]">
        <span className="text-3xl text-gray-500">Publications</span>
      </div>

      <div className="flex flex-col my-2 space-y-5 w-[80%]">
        {publications && publications.length > 0
          ? publications?.map((publications: IPublication, index: number) => (
              <ProjectDetails
                key={index}
                tags={publications.tags}
                slug={publications?.slug}
                type={AppConstants.PUBLICATION}
                projectTitle={publications?.title}
                projectDescription={publications?.descriptionSummary}
              />
            ))
          : `No Content`}
      </div>
    </div>
  );
};
