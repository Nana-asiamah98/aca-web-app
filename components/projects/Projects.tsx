import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectDetails } from "@/components/project-details/project-details";
import { AppConstants } from "@/utils/AppConstants";
import { IProjects } from "@/utils/Interfaces";

interface IProjectsData {
  data: IProjects[];
}

export const Projects = ({ data: projects }: IProjectsData) => {
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
                  {projects && projects.length > 0
                    ? projects?.map((project: IProjects, index: number) => (
                        <ProjectDetails
                          key={index}
                          tags={project?.tags}
                          slug={project?.slug}
                          type={AppConstants.PROJECT}
                          projectTitle={project?.title}
                          projectDescription={project?.descriptionSummary}
                          imageUrl={
                            project?.thumbnail?.fields?.file?.url
                              ? `https://${project?.thumbnail?.fields?.file?.url}`
                              : "https://unsplash.com/photos/NSFG5sJYZgQ/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTl8fHBlb3BsZSUyMGdvaW5nJTIwd29ya3xlbnwwfHx8fDE3MDk0ODM5NDh8MA&force=true&w=640"
                          }
                        />
                      ))
                    : `No Content`}
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
