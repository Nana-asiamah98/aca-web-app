"use client";

import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { Publications } from "@/components/publications/Publications";
import { Skills } from "@/components/skills/Skills";
import { IHero, ISkill, ISkills } from "@/utils/Interfaces";
import { useState } from "react";
import HeroJSON from "../utils/JSONS/hero.json";
import SkillJSON from "../utils/JSONS/skills.json";

export default function Home() {
  /*  useEffect(() => {
    Hero().then((response: any) => {
      if (!response.isError) {
        console.log({ response });
      }
    });
  }, []); */

  const [heroData, setHeroData] = useState<IHero>(HeroJSON);
  const [skillsData, setSkillsData] = useState<ISkills>(SkillJSON);


  return (
    <main className="flex flex-col min-h-screen ">
      {/*START - HERO */}
      <Hero
        imageURL={heroData?.imageURL}
        socials={heroData?.socials}
        userInfo={heroData?.userInfo}
        education={heroData?.education}
        interest={heroData?.interest}
      />
      {/*END - HERO */}

      {/*START - SKILLS */}
      <Skills
        brains={skillsData?.brains}
        languages={skillsData?.languages}
        programming={skillsData.programming}
      />
      {/*END - SKILLS */}

      {/*START - PROJECTS */}
      <Projects />
      {/*END - PROJECTS */}

      {/*START - PUBLICATIONS */}
      <Publications />
      {/*END - PUBLICATIONS */}
      <div></div>
    </main>
  );
}
