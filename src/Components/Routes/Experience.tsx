import { QuoteHighlight } from "../QuoteHighlight";
import { SnapSection } from "../splash_page_sections/SnapSection";
import { ExperienceContainer } from "../experience_page/ExperienceContainer";

export const Experience = () => {
  return (
    <div className="w-screen h-auto">
      <SnapSection backgroundColor="bg-charcoal">
        <div className="h-auto min-h-screen min-w-screen flex flex-col relative">
          <div className="h-[93vh] w-[94vw] mx-auto my-auto bg-secondary rounded-lg flex flex-col justify-center items-center">
            <QuoteHighlight
              quote="The only way to do great work is to love what you do."
              author="Steve Jobs"
              authorLink="https://en.wikipedia.org/wiki/Steve_Jobs"
            />
          </div>
        </div>
      </SnapSection>

      <SnapSection backgroundColor="bg-tertiary" fullHeight={false}>
        <div className="w-[95vw] mx-auto bg-slate rounded-lg p-12">
          <div className="space-y-8 mb-8">
            <h1 className="font-garamond text-7xl font-light text-white">
              Experience
            </h1>
            <div className="h-px w-16 bg-white/20" />
          </div>

          <ExperienceContainer />
        </div>
      </SnapSection>
    </div>
  );
};
