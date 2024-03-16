import { InfoDetails } from "@/components/info-details/InfoDetails";
import { AppConstants } from "@/utils/AppConstants";
import React from "react";

const Project = ({ params }: { params: { slug: string } }) => {
  return <InfoDetails type={AppConstants.PROJECT} />;
};

export default Project;
