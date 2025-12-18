import { QuoteHighlight } from "../QuoteHighlight";
import { Container } from "../splash_page_sections/Container";
import { SnapSection } from "../splash_page_sections/SnapSection";
import { ProjectBoxContainer } from "../projects_page/ProjectBoxContainer";

export const Projects = () => {
  return (
    <div className="w-screen h-auto">
      <Container backgroundColor="bg-charcoal">
        <div className="h-auto min-h-screen min-w-screen flex flex-col relative">
          <div className="h-[93vh] w-[94vw] mx-auto my-auto bg-secondary rounded-lg flex flex-col justify-center items-center">
            <QuoteHighlight
              quote="Don't undertake a project unless it is manifestly important and nearly impossible."
              author="Edwin Land"
              authorLink="https://en.wikipedia.org/wiki/Edwin_H._Land"
            />
          </div>
        </div>
      </Container>

      <SnapSection backgroundColor="bg-tertiary" extend={true}>
        <div className="w-[95vw] min-h-screen max-h-auto mx-auto my-auto bg-slate rounded-lg p-12 overflow-y-auto">
          <div className="space-y-8 mb-8">
            <h1 className="font-garamond text-7xl font-light text-white">
              Projects
            </h1>
            <div className="h-px w-16 bg-white/20" />
          </div>

          <ProjectBoxContainer />
        </div>
      </SnapSection>
    </div>
  );
};
