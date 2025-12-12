import AboutMe from "../AboutMe";
import { QuoteHighlight } from "../QuoteHighlight";
import { SnapSection } from "../SnapSection";
import TechStackScroller from "../TechStackScroller";
import WhatImWorkingOn from "../WhatImWorkingOn";
import ScrollIndicator from "../ScrollIndicator";
import Contact from "../Contact";

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
      <SnapSection backgroundColor="bg-tertiary">
        <div id="about-me-section" className="flex flex-col gap-12">
          <AboutMe />
        </div>
      </SnapSection>
      <TechStackScroller />
      <SnapSection backgroundColor="bg-charcoal">
        <WhatImWorkingOn />
      </SnapSection>
      <Contact />
    </div>
  );
};
