import { AppConstants } from "@/utils/AppConstants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IProjectDetails {
  projectTitle?: string;
  projectDescription?: string;
  tags?: string[];
  imageUrl?: string;
  type?: string;
  slug: string;
}
export const ProjectDetails = ({
  projectTitle,
  projectDescription,
  tags,
  imageUrl,
  slug,
  type,
}: IProjectDetails) => {
  return (
    <div
      className={`flex flex-row space-y-10 justify-between ${
        type === AppConstants.PUBLICATION ? "px-5" : ""
      }`}
    >
      <div className="flex flex-col space-y-20 py-5">
        <Link
          href={`/${slug}/${type?.toLocaleLowerCase()}`}
          className="flex flex-col justify-center my-auto"
        >
          <h1 className="text-xl"> {projectTitle ?? `Project Title`}</h1>
          <p> {projectDescription ?? `Project Description `}</p>
        </Link>
        <div className="flex flex-row space-x-3">
          <span className="bg-[#1F3B4D] text-sm p-2 rounded">Tag 1</span>
          <span className="bg-[#1F3B4D] text-sm p-2 rounded">Tag 2</span>
          <span className="bg-[#1F3B4D] text-sm p-2 rounded">Tag 3</span>
        </div>
      </div>
      <div className="flex flex-col justify-center my-auto">
        {imageUrl ? (
          <Image
            alt="name"
            width={300}
            height={300}
            src={imageUrl}
            className="object-none w-44 h-44 rounded custom-position"
          />
        ) : (
          ``
        )}
      </div>
    </div>
  );
};