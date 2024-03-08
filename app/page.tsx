import { Skill } from "@/components/skills/Skill";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Code2, Languages } from "lucide-react";

import { ProjectDetails } from "@/components/project-details/project-details";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { SiGooglescholar } from "react-icons/si";
import Image from "next/image";
import Link from "next/link";
import { AppConstants } from "@/utils/AppConstants";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen ">
      {/*START - HERO */}
      <div className="flex flex-row justify-start px-52 text-white my-10 mx-auto w-full h-auto">
        <div className="flex flex-col w-[20%] items-center justify-between gap-4">
          <div>
            <Image
              alt="name"
              width={250}
              height={250}
              src="https://media.licdn.com/dms/image/C5603AQF5Dn__JT0kPQ/profile-displayphoto-shrink_200_200/0/1607478268909?e=2147483647&v=beta&t=3mVfgUr8ScQfAprWnkFjCd7zBcvO55Ux8EnU5T5KXLk"
              className="object-none w-44 h-44 rounded-full custom-position"
            />
          </div>
          <div className="flex flex-col items-center gap-5">
            <span className="font-bold text-xl">Lastname Firstname</span>
            <span className="text-gray-500">Profession</span>
            <div className="flex flex-col items-center gap-3 mt-5">
              <span className="text-slate-500 text-lg">School 1</span>
              <span className="text-slate-500 text-lg">School 2</span>
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
            {`There are many variations of passages of Lorem Ipsum available, but
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
      {/*END - HERO */}

      {/*START - SKILLS */}
      <div
        id="skills"
        className="flex flex-col justify-start px-52 bg-[#021116] text-white my-20 mx-auto w-full h-auto space-y-20 py-20"
      >
        <div className="flex flex-row justify-center">
          <span className="text-teal-600 text-3xl">Skills</span>
        </div>
        <div className="flex flex-row justify-between">
          <Skill
            skillIcon={<Code2 size={60} color="#4D908E" />}
            skillTitle="Skill 1"
            skills="Text 1, Text 2, Text 3"
          />
          <Skill
            skillIcon={<Brain size={60} color="#02141B" fill="#4D908E" />}
            skillTitle="Skill 2"
            skills="Text 1, Text 2, Text 3"
          />
          <Skill
            skillIcon={<Languages size={60} color="#4D908E" />}
            skillTitle="Skill 3"
            skills="Text 1, Text 2, Text 3"
          />
        </div>
      </div>
      {/*END - SKILLS */}

      {/*START - PROJECTS */}
      <div
        id="projects"
        className="flex flex-row justify-start px-52 text-white  mx-auto w-full h-auto"
      >
        <div className="flex flex-col justify-between my-5 w-[20%]">
          <span className="text-3xl text-gray-500">Projects</span>
        </div>

        <div className="flex flex-col my-5 space-y-10 w-[80%]">
          <div>
            <Tabs defaultValue="all" className="w-auto">
              <TabsList className="grid bg-[#1F3B4D] text-white pr-6 grid-cols-3 w-[400px]">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="my_research">My Research</TabsTrigger>
                <TabsTrigger value="collaborative">Collaborative</TabsTrigger>
              </TabsList>

              <TabsContent value="all">
                <Card className="mt-26 bg-transparent border-transparent">
                  <CardContent className="space-y-2 text-white">
                    <ProjectDetails
                      slug="test-1"
                      type={AppConstants.PROJECT}
                      projectTitle="Sample Project 1"
                      projectDescription="Sample Project Description"
                      imageUrl="https://unsplash.com/photos/NSFG5sJYZgQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHBlb3BsZSUyMGdvaW5nJTIwd29ya3xlbnwwfHx8fDE3MDk0ODM5NDh8MA&force=true&w=640"
                    />
                    <ProjectDetails
                      slug="test-2"
                      type={AppConstants.PROJECT}
                      projectDescription="Sample Project Description 2"
                      projectTitle="Sample Project 1"
                      imageUrl="https://unsplash.com/photos/HAAsKeZbHAc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8cGVvcGxlJTIwc2luZ2luZ3xlbnwwfHx8fDE3MDk0MTYxOTB8MA&force=true&w=640"
                    />
                    <ProjectDetails
                      slug="test-3"
                      type={AppConstants.PROJECT}
                      projectDescription="Sample Project Description 2"
                      projectTitle="Sample Project 1"
                      imageUrl="https://unsplash.com/photos/HAAsKeZbHAc/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8N3x8cGVvcGxlJTIwc2luZ2luZ3xlbnwwfHx8fDE3MDk0MTYxOTB8MA&force=true&w=640"
                    />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="my_research">
                <Card className="mt-26 bg-transparent border-transparent">
                  <CardContent className="space-y-2 text-white">
                    <ProjectDetails slug="test-3" type={AppConstants.PROJECT} />
                    <ProjectDetails slug="test-3" type={AppConstants.PROJECT} />
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="collaborative">
                <Card className="mt-26 bg-transparent border-transparent">
                  <CardContent className="space-y-2 text-white">
                    <span>No Content</span>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
      {/*END - PROJECTS */}

      {/*START - PUBLICATIONS */}
      <div
        id="publications"
        className="flex flex-row justify-start px-52 bg-[#021116] text-white my-auto w-full py-4 h-auto"
      >
        <div className="flex flex-col justify-between mt-10 w-[20%]">
          <span className="text-3xl text-gray-500">Publications</span>
        </div>

        <div className="flex flex-col my-5 space-y-20 w-[80%]">
          <ProjectDetails
            slug="test-1"
            projectTitle="Sample Publication 1"
            projectDescription="Sample Publication Description"
            type={AppConstants.PUBLICATION}
          />
          <ProjectDetails
            slug="test-2"
            projectTitle="Sample Publication 1"
            projectDescription="Sample Publication Description"
            type={AppConstants.PUBLICATION}
          />
          <ProjectDetails
            slug="test-3"
            projectTitle="Sample Publication 1"
            projectDescription="Sample Publication Description"
            type={AppConstants.PUBLICATION}
          />
        </div>
      </div>
      {/*END - PUBLICATIONS */}
      <div></div>
    </main>
  );
}
