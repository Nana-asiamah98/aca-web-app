import { IHero, IProjects, IPublication } from "@/utils/Interfaces";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si";
import RichText from "../contentful/RichText";
import Head from "next/head";

interface IInfoDetails {
  data?: IProjects | IPublication;
  userInfo?: IHero;
  type: string;
}

export const InfoDetails = ({ type, data, userInfo }: IInfoDetails) => {
  console.log({ data });
  return (
    <div className="container flex flex-col my-10 space-y-10">
      <div className="flex flex-col justify-center w-full space-y-7">
        <h2 className="text-3xl text-gray-500">{data?.title}</h2>
        <h3 className="text-xl text-white">{data?.descriptionSummary}</h3>
        <div className="flex flex-row justify-start space-x-5">
          <Link href={userInfo?.linkedInUrl ?? "#0"} target={"_blank"}>
            <IoLogoLinkedin color="#4D908E" size={40} />
          </Link>
          <Link href={userInfo?.googleScholarUrl ?? "#0"} target={"_blank"}>
            <SiGooglescholar color="#4D908E" size={40} />
          </Link>
          <Link href={userInfo?.xTwitterUrl ?? "#0"} target={"_blank"}>
            <FaXTwitter color="#4D908E" size={40} />
          </Link>
        </div>
        <div className="w-full flex flex-row justify-center">
          <Image
            width={1250}
            height={250}
            alt="name"
            src={
              data?.thumbnail?.fields?.file?.url
                ? new URL(
                    `https://${data?.thumbnail?.fields?.file?.url}`
                  ).toString()
                : "https://unsplash.com/photos/s9CC2SKySJM/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA5NjI1MDM0fA&force=true&w=1920"
            }
            className="object-none w-full h-64 rounded-sm custom-position"
          />
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      <div className="flex flex-col justify-start space-y-10">
        <div className="flex flex-col space-y-5">
          <h2 className="text-4xl text-gray-500">Summary</h2>
          <h2 className="text-xl text-gray-300">
            {<RichText content={data?.description} />}
          </h2>
        </div>
        <div className="flex flex-row justify-start space-x-5">
          {data?.tags && data?.tags.length > 0 ? (
            data?.tags.map((value: string, index: number) => (
              <span key={index} className="bg-[#1F3B4D] p-2 rounded text-sm">
                {value}
              </span>
            ))
          ) : (
            <span className="bg-[#1F3B4D] p-2 rounded text-sm">No Tags</span>
          )}
        </div>
      </div>

      <div className="flex flex-row w-full">
        <div className="flex-grow border-t border-gray-600"></div>
      </div>

      <div className="flex flex-row justify-start space-x-5 w-full">
        <div className="flex flex-row w-[20%] m-auto">
          <Image
            alt="name"
            width={250}
            height={250}
            src={
              userInfo?.userAvatar?.fields?.file?.url
                ? new URL(
                    `https://${userInfo?.userAvatar?.fields?.file?.url}`
                  ).toString()
                : ""
            }
            className="object-none w-40 h-40 rounded-full custom-position"
          />
        </div>
        <div className="flex flex-col w-[80%] space-y-5 m-auto">
          <span className="text-lg text-gray-500">{`${userInfo?.lastName} ${userInfo?.firstName}`}</span>
          <span className="text-sm text-gray-500">{userInfo?.profession}</span>
          <span className="text-sm text-gray-200">{userInfo?.schools[0]}</span>
        </div>
      </div>
    </div>
  );
};
