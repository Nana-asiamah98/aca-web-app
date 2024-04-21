import { ISkill } from "@/utils/Interfaces";
import { Brain, Code2, Languages } from "lucide-react";
import { Skill } from "./Skill";

interface IMainSkill {
  mainData: ISkill[];
}
export const Skills = ({ mainData }: IMainSkill) => {
  return (
    <div
      id="skills"
      className="flex flex-col mb:flex-row lg:flex-col justify-start md:px-52 bg-[#021116] text-white my-20 mx-auto w-full h-auto space-y-20 py-20"
    >
      <div className="flex flex-row justify-center">
        <span className="text-teal-600 text-3xl">Skills</span>
      </div>
      <div className="flex flex-col  lg:flex-row justify-between space-y-10 lg:space-y-5">
        {mainData &&
          mainData?.map((skill: ISkill, index: number) => {
            if (skill?.slug === "programming") {
              return (
                <Skill
                  key={index}
                  skillIcon={<Code2 size={60} color="#4D908E" />}
                  skillTitle={skill?.skillName ?? ""}
                  skills={skill?.skillValues.join(",")}
                />
              );
            } else if (skill?.slug === "languages") {
              return (
                <Skill
                  key={index}
                  skillIcon={<Languages size={60} color="#4D908E" />}
                  skillTitle={skill?.skillName ?? ""}
                  skills={skill?.skillValues.join(",")}
                />
              );
            } else {
              return (
                <Skill
                  key={index}
                  skillIcon={<Brain size={60} color="#02141B" fill="#4D908E" />}
                  skillTitle={skill?.skillName ?? ""}
                  skills={skill?.skillValues.join(",")}
                />
              );
            }
          })}
      </div>
    </div>
  );
};
