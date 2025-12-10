export default function AboutMe() {
  return (
    <div className="w-[95vw] h-[95vh] mx-auto my-auto bg-slate rounded-lg">
      <div className="flex h-full items-center justify-between gap-20 p-16">
        <div className="w-[40%]">
          <div className="overflow-hidden rounded-lg border border-secondary">
            <img
              src="../../public/ryan_puerto_rico.png"
              alt="Profile Picture"
              className="h-[70vh] w-full object-cover"
            />
          </div>
        </div>

        <div className="flex w-[55%] flex-col justify-center space-y-10">
          <div className="space-y-6">
            <h1 className="font-garamond text-7xl font-light leading-tight text-white">
              Who am I?
            </h1>
            <div className="h-px w-16 bg-white/20" />
          </div>

          <div className="space-y-8">
            <p className="font-garamond text-3xl font-light leading-relaxed text-white/95">
              Hi! I'm Ryan. I'm a 3rd year student at McGill University studying
              Software Engineering and AI.
            </p>
            <p className="font-lato text-xl font-light leading-relaxed text-white/70">
              I've always been passionate about building software for good: education,
              accessibility, and productivity are some of my main areas of interest.
              I love collaborating with others to bring ideas to life, and I'm always
              eager to learn new technologies and improve my skills.
            </p>
          </div>

          <div className="flex gap-4 pt-2">
            <span className="font-lato text-sm text-white/50">Software Engineering</span>
            <span className="text-white/30">•</span>
            <span className="font-lato text-sm text-white/50">AI & ML</span>
          </div>
        </div>
      </div>
    </div>
  );
}
