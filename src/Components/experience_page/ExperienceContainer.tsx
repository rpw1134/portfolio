import { Timeline } from "./Timeline";
import { experienceData } from "./experienceData";
export const ExperienceContainer = () => {
  return (
    <div className="w-full">
      <Timeline experiences={experienceData} />
    </div>
  );
};
