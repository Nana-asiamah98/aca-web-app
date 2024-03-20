"use client";
import { InfoDetails } from "@/components/info-details/InfoDetails";
import { client } from "@/lib/contentful";
import { AppConstants } from "@/utils/AppConstants";
import { IHero, IProjects } from "@/utils/Interfaces";
import { useEffect, useState } from "react";

const Project = ({ params }: { params: { slug: string } }) => {
  const [project, setProject] = useState<IProjects>();
  const [heroData, setHeroData] = useState<IHero>();

  useEffect(() => {
    // Hero Data
    client.getEntries({ content_type: "hero" }).then((response: any) => {
      const { fields } = response?.items[0];
      const heroResponse: IHero = fields;
      setHeroData(heroResponse);
    });

    // Project
    client.getEntries({ content_type: "projects" }).then((response: any) => {
      const formulatedProjects: IProjects[] = response?.items
        ?.map((value: any) => {
          console.log(value?.fields);
          const {
            description,
            tags,
            thumbnail,
            title,
            category,
            slug,
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
        })
        .filter(
          (value: IProjects, index: number) => value.slug === params.slug
        );

      setProject(formulatedProjects[0]);
    });
  }, [params]);

  return (
    <InfoDetails
      userInfo={heroData as any}
      data={project as any}
      type={AppConstants.PROJECT}
    />
  );
};

export default Project;
