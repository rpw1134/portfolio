import { ProjectBox } from "./ProjectBox";
import projectsData from "./projectsData";

export const ProjectBoxContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projectsData.map((project) => (
        <ProjectBox
          key={project.id}
          id={project.id}
          title={project.title}
          description={project.description}
          tags={project.tags}
          primaryTag={project.primaryTag}
        />
      ))}
    </div>
  );
};
