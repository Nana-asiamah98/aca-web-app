"use client";

import { Hero } from "@/components/hero/Hero";
import { Projects } from "@/components/projects/Projects";
import { Publications } from "@/components/publications/Publications";
import { BsCaretUp } from "react-icons/bs";
import { Skills } from "@/components/skills/Skills";
import { client } from "@/lib/contentful";
import { IHero, IProjects, IPublication, ISkill } from "@/utils/Interfaces";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [heroData, setHeroData] = useState<IHero>();
  const [skillsData, setSkillsData] = useState<ISkill[]>();
  const [projectsData, setProjectsData] = useState<IProjects[]>();
  const [publicationData, setPublicationData] = useState<IPublication[]>();

  useEffect(() => {
    //Hero
    client.getEntries({ content_type: "hero" }).then((response: any) => {
      const { fields } = response?.items[0];
      const heroResponse: IHero = fields;
      setHeroData(heroResponse);
    });
    // Skills
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

    // Projects
    client.getEntries({ content_type: "projects" }).then((response: any) => {
      const formulatedProjects: IProjects[] = response?.items?.map(
        (value: any) => {
          const {
            description,
            tags,
            thumbnail,
            title,
            slug,
            category,
            descriptionSummary,
          } = value?.fields;
          const actualProject: IProjects = {
            description,
            tags: tags,
            thumbnail,
            slug,
            category,
            title,
            descriptionSummary,
          };
          return actualProject;
        }
      );

      setProjectsData(formulatedProjects);
    });

    // Publications
    client
      .getEntries({ content_type: "publications" })
      .then((response: any) => {
        const formulatedPublications = response?.items?.map((value: any) => {
          const {
            slug,
            title,
            descriptionSummary,
            description,
            tags,
            pdf,
          }: IPublication = value?.fields;
          const actualPublication: IPublication = {
            slug,
            title,
            descriptionSummary,
            description,
            tags,
            pdf,
          };
          return actualPublication;
        });

        setPublicationData(formulatedPublications);
      });
  }, []);

  return (
    <main className="flex flex-col min-h-screen w-full">
      {/*START - HERO */}
      <Hero mainData={heroData as any} />
      {/*END - HERO */}

      {/*START - SKILLS */}
      <Skills mainData={skillsData as any} />
      {/*END - SKILLS */}

      {/*START - PROJECTS */}
      <Projects data={projectsData as any} />
      {/*END - PROJECTS */}

      {/*START - PUBLICATIONS */}
      <Publications data={publicationData as any} />
      {/*END - PUBLICATIONS */}

      <div className="fixed bottom-3 right-4 ">
        <Link
          href={`/#`}
          className="bg-[#1F3B4D] hover:bg-[#2a5068] text-white font-bold py-1 px-2  lg:py-2 lg:px-4 rounded-full shadow-lg"
        >
          Scroll Up
        </Link>
      </div>
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
