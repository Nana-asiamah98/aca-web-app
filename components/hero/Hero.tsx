import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si";
import { IHero } from "@/utils/Interfaces";

export const Hero = ({
  imageURL,
  userInfo,
  socials,
  interest,
  education,
}: IHero) => {
  return (
    <div className="flex flex-row justify-start px-52 text-white my-10 mx-auto w-full h-auto">
      <div className="flex flex-col w-[20%] items-center justify-between gap-4">
        <div>
          <Image
            alt="name"
            width={250}
            height={250}
            src={
              imageURL ??
              `https://media.licdn.com/dms/image/C5603AQF5Dn__JT0kPQ/profile-displayphoto-shrink_200_200/0/1607478268909?e=2147483647&v=beta&t=3mVfgUr8ScQfAprWnkFjCd7zBcvO55Ux8EnU5T5KXLk`
            }
            className="object-none w-44 h-44 rounded-full custom-position"
          />
        </div>
        <div className="flex flex-col items-center gap-5">
          <span className="font-bold text-lg">
            {userInfo?.firstName
              ? `${userInfo?.firstName}  ${userInfo.lastName}`
              : `Lastname Firstname`}
          </span>
          <span className="text-gray-500">
            {userInfo?.profession ?? `Profession`}
          </span>
          <div className="flex flex-col items-center gap-3 mt-5">
            <span className="text-slate-500 text-lg">
              {userInfo?.school1 ?? `School 1`}
            </span>
            <span className="text-slate-500 text-lg">
              {userInfo?.school2 ?? `School 2`}
            </span>
            <div className="flex flex-row justify-between space-x-4">
              <Link href={`#0`}>
                <IoLogoLinkedin color="#4D908E" size={40} />
              </Link>
              <Link href={`#0`}>
                <SiGooglescholar color="#4D908E" size={40} />
              </Link>
              <Link href={`#0`}>
                <FaXTwitter color="#4D908E" size={40} />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[80%] mx-40">
        <h2 className="text-3xl font-bold text-gray-500">About Me</h2>
        <p className="text-lg font-light mt-5">
          {userInfo?.aboutMe ??
            `There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary, making this the first true
            generator on the Internet. It uses a dictionary of over 200 Latin
            words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem
            Ipsum is therefore always free from repetition, injected humour, or
            non-characteristic words etc.`}
        </p>
      </div>
    </div>
  );
};
