import { useState } from "react";
import { ProjectBox, ProjectBoxProps } from "./ProjectBox";
import { ProjectModal } from "./ProjectModal";
import projectsData from "./projectsData";

export const ProjectBoxContainer = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectBoxProps | null>(null);

  const handleProjectClick = (project: ProjectBoxProps) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <ProjectBox
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            primaryTag={project.primaryTag}
            images={project.images}
            demoLink={project.demoLink}
            demoThumbnail={project.demoThumbnail}
            hostedAt={project.hostedAt}
            githubLink={project.githubLink}
            inProgress={project.inProgress}
            isLive={project.isLive}
            onClick={() => handleProjectClick(project)}
          />
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={handleCloseModal}
          title={selectedProject.title}
          description={selectedProject.description}
          tags={selectedProject.tags}
          images={selectedProject.images}
          demoLink={selectedProject.demoLink}
          demoThumbnail={selectedProject.demoThumbnail}
          hostedAt={selectedProject.hostedAt}
          githubLink={selectedProject.githubLink}
        />
      )}
    </>
  );
};
