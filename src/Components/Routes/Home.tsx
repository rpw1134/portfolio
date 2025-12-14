import AboutMe from "../splash_page_sections/AboutMe";
import { QuoteHighlight } from "../QuoteHighlight";
import { SnapSection } from "../splash_page_sections/SnapSection";
import WhatImWorkingOn from "../splash_page_sections/WhatImWorkingOn";
import ScrollIndicator from "../splash_page_sections/ScrollIndicator";
import Contact from "../splash_page_sections/Contact";
import InfrastructureDevOpsScroller from "../splash_page_scrollers/InfrastructureDevOpsScroller";
import MyGoals from "../splash_page_sections/MyGoals";
import LibFrameworkScroller from "../splash_page_scrollers/LibFrameworkScroller";
import LanguagesScroller from "../splash_page_scrollers/LanguagesScroller";

export const Home = () => {
  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById("about-me-section");
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-screen h-auto">
      <SnapSection backgroundColor="bg-charcoal">
        <div className="h-auto min-h-screen min-w-screen flex flex-col relative">
          <div className="h-[93vh] w-[94vw] mx-auto my-auto bg-secondary rounded-lg flex flex-col justify-center items-center">
            <QuoteHighlight
              quote="The best way to predict the future is to invent it."
              author="Alan Kay"
              authorLink="https://en.wikipedia.org/wiki/Alan_Kay"
            />
          </div>
          <ScrollIndicator onClick={scrollToAboutMe} />
        </div>
      </SnapSection>
      <LanguagesScroller />
      <SnapSection backgroundColor="bg-tertiary">
        <div id="about-me-section" className="flex flex-col gap-12">
          <AboutMe />
        </div>
      </SnapSection>
      <InfrastructureDevOpsScroller />
      <SnapSection backgroundColor="bg-tertiary">
        <WhatImWorkingOn />
      </SnapSection>
      <LibFrameworkScroller />
      <SnapSection backgroundColor="bg-tertiary">
        <MyGoals />
      </SnapSection>
      <Contact />
    </div>
  );
};
