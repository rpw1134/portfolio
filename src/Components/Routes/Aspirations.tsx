import { QuoteHighlight } from "../QuoteHighlight";
import { Container } from "../splash_page_sections/Container";

export const Aspirations = () => {
  return (
    <div className="w-screen h-auto">
      <Container backgroundColor="bg-charcoal" fullHeight={false}>
        <div className="h-auto min-h-screen min-w-screen flex flex-col relative">
          <div className="h-[93vh] w-[94vw] mx-auto my-auto bg-secondary rounded-lg flex flex-col justify-center items-center">
            <QuoteHighlight
              quote="It has become appallingly obvious that our technology has exceeded our
          humanity."
              author="Albert Einstein"
              authorLink="https://en.wikipedia.org/wiki/albert_einstein"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
