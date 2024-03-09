import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectDetails } from "@/components/project-details/project-details";
import { AppConstants } from "@/utils/AppConstants";

export const Projects = () => {
  return (
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
  );
};
