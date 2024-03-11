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

const query = `query {
  # add
  heroCollection{
    items{
      firstName,
      lastName,
      profession,
      schools,
      linkedInUrl,
      aboutMe{
        json
      }
    }
  }
}`;

export const HeroService = async () => {
  /* const results = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query }),
    }
  );
  if (results.ok) {
    console.log(results.json);
  } */
  try {
    const results = await axios.post(
      `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}/`,
      JSON.stringify({ query }),
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    const response: ICustomRESTResponse = {
      data: results.data?.data,
      status: results.status,
      timestamp: new Date(),
    };
    return response;
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
  }
};
