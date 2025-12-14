export default function AboutMe() {
  return (
    <div className="w-[95vw] h-[95vh] mx-auto my-auto bg-slate rounded-lg">
      <div className="flex h-full items-center justify-between gap-20 p-16">
        <div className="w-[40%]">
          <div className="overflow-hidden rounded-lg">
            <img
              src="../../public/ryan_puerto_rico.png"
              alt="Profile Picture"
              className="h-[70vh] w-full object-cover shadow-2xl"
              style={{
                filter: "contrast(1.05) brightness(1.02)",
              }}
            />
          </div>
        </div>

        <div className="flex w-[55%] flex-col justify-center space-y-10">
          <div className="space-y-6">
            <h1 className="font-garamond text-7xl font-light leading-tight text-white">
              About Me
            </h1>
            <div className="h-px w-16 bg-white/20" />
          </div>

          <div className="space-y-8">
            <p className="font-garamond text-3xl font-light leading-relaxed text-white/95">
              Hi! I'm Ryan. I'm a 3rd year student at McGill University studying
              Software Engineering and AI.
            </p>
            <p className="font-lato text-xl font-light leading-relaxed text-white/70">
              I've always been passionate about building software for good:
              education, accessibility, and productivity are some of my main
              areas of interest. I love collaborating with others to bring ideas
              to life, and I'm always eager to learn new technologies and
              improve my skills.
            </p>
          </div>

          <div className="flex justify-between items-center pt-2">
            <div className="flex gap-4">
              <span className="font-lato text-sm text-white/50">
                Software Engineering
              </span>
              <span className="text-white/30">•</span>
              <span className="font-lato text-sm text-white/50">AI & ML</span>
            </div>
            <button
              onClick={() => (window.location.href = "/experience")}
              className="font-lato text-sm font-light text-white border border-white/50 px-6 py-2.5 rounded-md hover:text-white hover:border-accent/50 hover:shadow-[0_0_15px_rgba(58,186,122,0.3)] focus:outline-none focus-visible:outline-none focus:border-accent/50 focus:shadow-[0_0_15px_rgba(58,186,122,0.3)] transition-all duration-300 cursor-pointer"
            >
              View Experience Timeline →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
