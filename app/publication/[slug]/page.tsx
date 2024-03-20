"use client";
import { InfoDetails } from "@/components/info-details/InfoDetails";
import { AppConstants } from "@/utils/AppConstants";
import { client } from "@/lib/contentful";

import { IHero, IPublication } from "@/utils/Interfaces";
import { useEffect, useState } from "react";

interface IPublicationsData {
  data: IPublication[];
}

const Publication = ({ params }: { params: { slug: string } }) => {
  const [publication, setPublication] = useState<IPublication>();
  const [heroData, setHeroData] = useState<IHero>();

  useEffect(() => {
    // Hero Data
    client.getEntries({ content_type: "hero" }).then((response: any) => {
      const { fields } = response?.items[0];
      const heroResponse: IHero = fields;
      setHeroData(heroResponse);
    });

    // Project
    client
      .getEntries({ content_type: "publications" })
      .then((response: any) => {
        const formulatedPublications = response?.items
          ?.map((value: any) => {
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
          })
          .filter(
            (value: IPublication, index: number) => value.slug === params.slug
          );
        setPublication(formulatedPublications[0]);
      });
  }, [params]);
  return (
    <InfoDetails
      data={publication}
      userInfo={heroData}
      type={AppConstants.PUBLICATION}
    />
  );
};

export default Publication;
