import { ISkills } from "@/utils/Interfaces";
import { Brain, Code2, Languages } from "lucide-react";
import { Skill } from "./Skill";

export const Skills = ({ brains, languages, programming }: ISkills) => {
  return (
    <div
      id="skills"
      className="flex flex-col justify-start px-52 bg-[#021116] text-white my-20 mx-auto w-full h-auto space-y-20 py-20"
    >
      <div className="flex flex-row justify-center">
        <span className="text-teal-600 text-3xl">Skills</span>
      </div>
      <div className="flex flex-row justify-between">
        <Skill
          skillIcon={<Code2 size={60} color="#4D908E" />}
          skillTitle={programming?.skillName}
          skills={programming?.skillValues?.join(",")}
        />
        <Skill
          skillIcon={<Brain size={60} color="#02141B" fill="#4D908E" />}
          skillTitle={brains?.skillName}
          skills={brains?.skillValues?.join(",")}
        />
        <Skill
          skillIcon={<Languages size={60} color="#4D908E" />}
          skillTitle={languages?.skillName}
          skills={languages?.skillValues?.join(", ")}
        />
      </div>
    </div>
  );
};
