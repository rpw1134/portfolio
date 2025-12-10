import AboutMe from "../AboutMe";
import { QuoteHighlight } from "../QuoteHighlight";
import { SnapSection } from "../SnapSection";
import TechStackScroller from "../TechStackScroller";
import WhatImWorkingOn from "../WhatImWorkingOn";

export const Home = () => {
  return (
    <div className="w-screen h-auto">
      <SnapSection backgroundColor="bg-charcoal">
        <div className="h-auto min-h-screen min-w-screen flex flex-col">
          <div className="h-[93vh] w-[94vw] mx-auto my-auto bg-secondary rounded-lg flex flex-col justify-center items-center">
            <QuoteHighlight
              quote="The best way to predict the future is to invent it."
              author="Alan Kay"
              authorLink="https://en.wikipedia.org/wiki/Alan_Kay"
            />
          </div>
        </div>
      </SnapSection>
      <SnapSection backgroundColor="bg-tertiary">
        <div className="flex flex-col gap-12">
          <AboutMe />
        </div>
      </SnapSection>
      <TechStackScroller />
      <SnapSection backgroundColor="bg-charcoal">
        <WhatImWorkingOn />
      </SnapSection>
    </div>
  );
};
