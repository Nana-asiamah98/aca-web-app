import Image from "next/image";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si";

interface IInfoDetails {
  type: string;
}

export const InfoDetails = ({ type }: IInfoDetails) => {
  return (
    <div className="container flex flex-col my-10 space-y-10">
      <div className="flex flex-col justify-center w-full space-y-7">
        <h2 className="text-3xl text-gray-500">Title</h2>
        <h3 className="text-2xl text-white">Date</h3>
        <div className="flex flex-row justify-start space-x-5">
          <Link href={`#0`}>
            <IoLogoLinkedin color="#4D908E" size={30} />
          </Link>
          <Link href={`#0`}>
            <SiGooglescholar color="#4D908E" size={30} />
          </Link>
          <Link href={`#0`}>
            <FaXTwitter color="#4D908E" size={30} />
          </Link>
        </div>
        <div className="w-full flex flex-row justify-center">
          <Image
            width={1250}
            height={250}
            alt="name"
            src="https://unsplash.com/photos/s9CC2SKySJM/download?ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzA5NjI1MDM0fA&force=true&w=1920"
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
          <h2 className="text-xl text-gray-300">Project Decription</h2>
        </div>
        <div className="flex flex-row justify-start space-x-5">
          <span className="bg-teal-600 p-2 rounded text-sm">Tag 1</span>
          <span className="bg-teal-600 p-2 rounded text-sm">Tag 1</span>
          <span className="bg-teal-600 p-2 rounded text-sm">Tag 1</span>
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
            src="https://media.licdn.com/dms/image/C5603AQF5Dn__JT0kPQ/profile-displayphoto-shrink_200_200/0/1607478268909?e=2147483647&v=beta&t=3mVfgUr8ScQfAprWnkFjCd7zBcvO55Ux8EnU5T5KXLk"
            className="object-none w-40 h-40 rounded-full custom-position"
          />
        </div>
        <div className="flex flex-col w-[80%] space-y-5 m-auto">
          <span className="text-lg text-gray-500">Fisrtname Lastname</span>
          <span className="text-sm text-gray-500">Profession</span>
          <span className="text-sm text-gray-200">School</span>
        </div>
      </div>
    </div>
  );
};
