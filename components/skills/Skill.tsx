import React from "react";

interface ISkill {
  skillIcon: any;
  skillTitle: string;
  skills: string;
}

export const Skill = ({ skillIcon, skillTitle, skills }: ISkill) => {
  return (
    <div className="flex flex-col space-y-5 items-center">
      {skillIcon}
      <span>{skillTitle}</span>
      <div className="flex flex-row justify-center">
        <span>{skills}</span>
      </div>
    </div>
  );
};
