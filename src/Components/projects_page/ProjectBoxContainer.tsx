import { useState, useMemo } from "react";
import { ProjectBox, ProjectBoxProps } from "./ProjectBox";
import { ProjectModal } from "./ProjectModal";
import projectsData from "./projectsData";

export const ProjectBoxContainer = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectBoxProps | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const handleProjectClick = (project: ProjectBoxProps) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const availableFilters = useMemo(() => {
    const filters = new Set(projectsData.map((project) => project.primaryTag));
    return ["all", ...Array.from(filters)];
  }, []);

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesSearch = project.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesFilter =
        selectedFilter === "all" || project.primaryTag === selectedFilter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, selectedFilter]);

  return (
    <>
      <div className="space-y-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-secondary border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-accent/30 transition-colors duration-300 font-lato"
            />
            <svg
              className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <div className="flex gap-2 flex-wrap">
            {availableFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-lg font-lato text-sm transition-all duration-300 capitalize ${
                  selectedFilter === filter
                    ? "bg-accent/20 text-accent border border-accent/30"
                    : "bg-secondary text-white/60 border border-white/10 hover:border-white/20"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="font-lato text-white/40">
              No projects found matching your criteria
            </p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectBox
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            tags={project.tags}
            primaryTag={project.primaryTag}
            images={project.images}
            demoLink={project.demoLink}
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
          hostedAt={selectedProject.hostedAt}
          githubLink={selectedProject.githubLink}
        />
      )}
    </>
  );
};
