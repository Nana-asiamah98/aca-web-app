import axios, { AxiosError } from "axios";

import { buildClient } from "@datocms/cma-client-node";

export interface ICustomRESTResponse {
  status?: number;
  timestamp?: Date;
  isError?: boolean;
  data: any;
}

export interface IResponseDTO {
  timestamp: string;
  status: number;
  message: string;
  requestId: string;
  data: any;
}

export const Hero = async () => {
  const results = await fetch("https://site-api.datocms.com/items?type=userinfo", {

    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`,
      Accept: "application/json",
      "X-Api-Version": "3",
    },
  });
  if (results.ok) {
    console.log(results.json);
  }
  /* try {
    const results = await axios.get(
      `${process.env.NEXT_PUBLIC_CMS_API_URL}/items`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CMS_API_TOKEN}`,
          "Content-Type": "application/json",
          "X-Api-Version": 3,
        },
      }
    );

    const response: ICustomRESTResponse = {
      data: results.data?.data,
      status: results.status,
      timestamp: new Date(),
    };
  } catch (error) {
    const err = error as AxiosError;
    const errorResponse: IResponseDTO = err?.response?.data as IResponseDTO;
    const response: ICustomRESTResponse = {
      data: errorResponse?.data,
      status: errorResponse?.status,
      isError: true,
      timestamp: new Date(),
    };
    return response;
  } */
};
