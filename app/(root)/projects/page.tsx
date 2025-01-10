import PageLayout from "@/components/PageLayout";
import { projectData } from "@/config/constants";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

function ProjectPage() {
  const projects = projectData.projects.map((project) => {
    const projectStacks = project.stack.map((stack, index) => {
      return (
        <li key={index} className="project-info-stack">
          {stack}
        </li>
      );
    });
    return (
      <div key={project.id}>
        <Card className="bg-bodyColor border-lightSky/20">
          <CardContent className="p-6">
            <div className="project-container group">
              <div className="project-info-container">
                <div className="space-y-4 md:space-y-6 mt-4 md:mt-0">
                  <h2 className="project-info-id">{project.id}</h2>
                  <h3 className="project-info-category group-hover:text-lightSky ">
                    {project.category}
                  </h3>
                  <p className="project-info-description">
                    {project.description.en}
                  </p>
                  <ul className="project-info-stack-container">
                    {projectStacks}
                  </ul>
                  <Separator className="bg-gray-700" />
                  <div className="flex items-center space-x-4">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-lightSky/5 text-white/80 border hover:bg-lightSky/20 border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                          >
                            <Link href={project.liveUrl} target="_blank">
                              <ArrowUpRight />{" "}
                              <span className="sr-only">View Live Project</span>
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-lightSky/90 text-black font-semibold p-2 rounded-md">
                          <p>View Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="icon"
                            className="bg-lightSky/5 text-white/80 border hover:bg-lightSky/20 border-lightSky/20 hover:border-lightSky hover:text-hoverColor hoverEffect"
                          >
                            <Link href={project.githubUrl} target="_blank">
                              <Github />{" "}
                              <span className="sr-only">View Github Repo</span>
                            </Link>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent className="bg-lightSky/90 text-black font-semibold p-2 rounded-md">
                          <p>View Github Repo</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
              </div>
              <div className="project-image-container">
                <div className="project-image">
                  <Image
                    src={project.image.src}
                    alt={project.image.alt.en}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  });

  return (
    <div className="py-6 md:py-12">
      <PageLayout>
        <ul className="w-full flex flex-col justify-center items-center gap-8">
          {projects}
        </ul>
      </PageLayout>
    </div>
  );
}

export default ProjectPage;
