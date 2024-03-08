import { Footer } from "@/components/footer/Footer";
import { InfoDetails } from "@/components/info-details/InfoDetails";
import { AppConstants } from "@/utils/AppConstants";
import React from "react";

const Publication = () => {
  return <InfoDetails type={AppConstants.PUBLICATION} />;
};

export default Publication;
