import { IHero } from "@/utils/Interfaces";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si";
import RichText from "../contentful/RichText";

interface IMainHero {
  mainData: IHero;
}
export const Hero = ({ mainData }: IMainHero) => {
  const formulatedURL = (_imgURL: string) => {
    const newURL: string = `https:\\${_imgURL}`;
    return newURL;
  };
  return (
    <div className="flex flex-col mb:flex-row lg:flex-row justify-start  md:px-52 text-white my-10 mx-auto w-full mb:w-full lg:w-full h-auto md:my-20 space-y-10">
      <div className="flex flex-col  w-full mb:w-[20%] lg:w-[20%] items-center text-center justify-between gap-4">
        <div>
          <Image
            alt="name"
            width={250}
            height={250}
            src={
              mainData?.userAvatar?.fields?.file?.url
                ? new URL(
                    `https://${mainData?.userAvatar?.fields?.file?.url}`
                  ).toString()
                : "https://media.licdn.com/dms/image/C5603AQF5Dn__JT0kPQ/profile-displayphoto-shrink_200_200/0/1607478268909?e=2147483647&v=beta&t=3mVfgUr8ScQfAprWnkFjCd7zBcvO55Ux8EnU5T5KXLk"
            }
            className="object-none w-44 h-44 rounded-full custom-position"
          />
        </div>
        <div className="flex flex-col mb:flex-col lg:flex-col items-center text-center gap-5">
          <span className="font-bold text-lg">
            {`${mainData?.firstName}  ${mainData?.lastName}` ??
              `Lastname Firstname`}
          </span>
          <span className="text-gray-500">
            {mainData?.profession ?? `Profession`}
          </span>
          <div className="flex flex-col mb:flex-col lg:flex-col items-center gap-3 mt-5">
            {mainData?.schools &&
              mainData?.schools.map((school: string, index: number) => (
                <span key={index} className="text-[#4D908E] text-md">
                  {school ?? `School `}
                </span>
              ))}
            <div className="flex flex-row md:flex-row lg:flex-row justify-between space-x-4">
              <Link href={mainData?.linkedInUrl ?? "#0"} target={"_blank"}>
                <IoLogoLinkedin color="#4D908E" size={40} />
              </Link>
              <Link href={mainData?.googleScholarUrl ?? "#0"} target={"_blank"}>
                <SiGooglescholar color="#4D908E" size={40} />
              </Link>
              <Link href={mainData?.xTwitterUrl ?? "#0"} target={"_blank"}>
                <FaXTwitter color="#4D908E" size={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row lg:flex-col mb:items-center w-full p-8 space-y-5  mb:w-[80%]">
        <h2 className="text-2xl font-bold text-gray-500">About Me</h2>
        {mainData?.aboutMe ? (
          <RichText content={mainData?.aboutMe} />
        ) : (
          <p className="text-lg font-light mt-5">{`No Content Available`}</p>
        )}
      </div>
    </div>
  );
};
