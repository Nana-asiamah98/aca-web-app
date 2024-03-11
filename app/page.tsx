"use client";

import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { Publications } from "@/components/publications/Publications";
import { Skills } from "@/components/skills/Skills";
import { client } from "@/lib/contentful";
import { IHero, ISkill } from "@/utils/Interfaces";
import { useEffect, useState } from "react";

export default function Home() {
  const [heroData, setHeroData] = useState<IHero>();
  const [skillsData, setSkillsData] = useState<ISkill[]>();

  useEffect(() => {
    client.getEntries({ content_type: "hero" }).then((response: any) => {
      const { fields } = response?.items[0];
      const heroResponse: IHero = fields;
      setHeroData(heroResponse);
    });
    client.getEntries({ content_type: "skills" }).then((response: any) => {
      const formulatedSkillsData: ISkill[] = response?.items?.map(
        (value: any, index: number) => {
          const { slug, skillName, skillValues } = value?.fields;
          const actualSkill: ISkill = {
            skillName: skillName,
            skillValues: skillValues,
            slug: slug,
          };
          return actualSkill;
        }
      );
      setSkillsData(formulatedSkillsData);
    });
  }, []);

  return (
    <main className="flex flex-col min-h-screen ">
      {/*START - HERO */}
      <Hero mainData={heroData as any} />
      {/*END - HERO */}

      {/*START - SKILLS */}
      <Skills mainData={skillsData as any} />
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
/* 
export const getStaticProps = async () => {
  const response = await client.getEntries({ content_type: "hero" });

  return {
    props: {
      hero: response.items,
      revalidate: 70,
    },
  };
};
 */
